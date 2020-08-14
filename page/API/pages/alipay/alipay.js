const md5 = require('../../../../util/md5')

function getSign(params) {
  let signStr = '';
  // 开发者需根据业务修改 signKey
  const signKey = '20991030114035666666';
  const keys = Object.keys(params).sort();

  keys.forEach(function (k) {
    signStr += k + '=' + params[k] + '&';
  });

  signStr += md5(signKey);
  return md5(signStr);
}

function leftpad(num) {
  return ("00" + num).substr(("" + num).length);
}

function currentTime() {
  var now = new Date();
  return (
    now.getFullYear() +
    leftpad(now.getMonth() + 1) +
    leftpad(now.getDate()) +
    leftpad(now.getHours()) +
    leftpad(now.getMinutes()) +
    leftpad(now.getSeconds())
  );
}

function getOrderNo(len) {
  var no = "";
  for (var i = 0; i < len; i++) {
    no += Math.floor(Math.random() * 10);
  }
  return no;
}

function makeDebugOrderId() {
  let params = {
    // 开发者需根据业务修改请求地址
    url: 'https://qapp-chimera.vivo.com.cn/',
    orderAmount: '0.01',
    orderDesc: 'test',
    orderTitle: 'test',
    orderTime: currentTime(),
    // 开发者需根据业务修改 storeId
    storeId: '2013103011403666666',
    appId: '1007',
    storeOrder: getOrderNo(16),
    version: '1.0'
  }

  params.signature = getSign(params);
  params.signMethod = 'MD5';
  return new Promise((resolve, reject) => {
    return qa.request({
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      // 开发者需根据业务修改请求地址
      url: 'https://qapp-chimera.vivo.com.cn/',
      data: params,
      dataType: "text",
      success: (res) => {
        console.log("alipay : " + JSON.stringify(res))
        qa.showToast({
          title: "支付信息：" + JSON.stringify(res.data)
        })
        return resolve(res);
      },
      fail: (res) => {
        qa.showToast({
          icon: 'none',
          title: "支付信息fail"
        })
        return reject(res);
      }
    })
  })
}

Page({
  data: {},
  useAlipay() {
    makeDebugOrderId().then((res) => {
      const data = res && res.data;
      let orderInfo
      try {
        orderInfo = JSON.parse(data || '{}');
      } catch (err) {
        qa.showToast({
          icon: 'none',
          title: 'json parse error'
        })
        return
      }

      console.log("getVivoOrderNum interface result = ", JSON.stringify(res));

      const params = {
        version: '1.0',
        signMethod: 'MD5',
        packageName: 'com.example.paydemo',
        imei: '0000000000',
        model: 'X20',
        sdkver: 'apk_3.0',
        origin: '0',
        payTypeFront: '1',
        orderFrom: '1',
        signature: orderInfo.vivoSignature,
        vivoOrder: orderInfo.vivoOrder,
        orderAmount: '0.01'
      }

      qa.request({
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        // 开发者需根据业务修改请求地址
        url: 'https://qapp-chimera.vivo.com.cn/',
        data: params,
        dataType: "text",
        success: function (res) {
          let order
          try {
            order = JSON.parse(res.data || '{}').needInfo;
          } catch (err) {
            qa.showToast({
              icon: 'none',
              title: 'json parse error'
            })
            return
          }

          console.log("submitOrder interface result = ", JSON.stringify(res));
          console.log('alipay_order = ' + JSON.stringify(order));

          qa.showToast({
            title: 'fetch order success  ' + order
          })

          qa.requestAliPayment({
            orderInfo: order,
            callback: function (ret) {
              if (ret.resultStatus == "9000") {
                qa.showToast({
                  title: "支付成功：" + JSON.stringify(ret)
                })
              } else if (ret.resultStatus == "6001") {
                qa.showToast({
                  icon: 'none',
                  title: "取消支付"
                })
              } else {
                qa.showToast({
                  icon: 'none',
                  title: "支付失败：" + ret.resultStatus
                })
              }
            }
          })
        },
        fail: function () {
          qa.showToast({
            icon: 'none',
            title: "订单请求失败"
          })
        }
      })
    })
  }
})
