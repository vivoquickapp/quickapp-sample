const md5 = require('../../../../util/md5')

Page({
  data: {
    vendor: "",
    signature: "",
    status: "",
    testStatus: "",
    testPackage: "com.hybrid.demo.sample"
  },
  getProvider() {
    var provider = qa.getVendorPaymentProvider()
    this.setData({
      vendor: provider
    })
  },
  getSign: function(params) {
    var signStr = '';
    // 开发者需修改 signKey
    var signKey = '6666bc43e7e6cd77666f55d657666666';
    var keys = Object.keys(params).sort();
    keys.forEach(function (k) {
        signStr += k + '=' + params[k] + '&';
    });

    signStr += md5(signKey).toLowerCase();
    return md5(signStr).toLowerCase();
  },
  async getOrderInfo() {
    function leftpad(num) {
      return ("00" + num).substr(("" + num).length);
    }

    function currentTime() {
      var now = new Date();
      return now.getFullYear() + leftpad(now.getMonth() + 1) + leftpad(now.getDate()) + leftpad(now.getHours()) + leftpad(now.getMinutes()) + leftpad(now.getSeconds())
    }

    function getOrderNo(len) {
        var no = '';
        for(var i = 0; i < len; i++) {
            no += Math.floor(Math.random() * 10);
        }
        return no;
    }

    var params = {
      packageName: 'com.example.sample',
      cpOrderNumber: getOrderNo(16),
      // 需根据业务修改 notifyUrl
      notifyUrl: 'https://qapp-chimera.vivo.com.cn/',
      orderTime: currentTime(),
      orderAmount: '0.01',
      orderDesc: 'test',
      orderTitle: 'test',
      version: '1.0.0'
    }
    params.signature = this.getSign(params);
    params.signMethod = 'MD5';

    this.setData({
      signature : JSON.stringify(params)
    })
    return new Promise((resolve, reject) => {
      return qa.request({
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        url: 'https://pay.vivo.com.cn/vivopay/order/request',
        data: params,
        dataType: "text",
        success: (res) => {
          console.log("vendorpay : " + JSON.stringify(res))
          qa.showToast({
            title: "支付信息：" + JSON.stringify(res.data)
          })
          return resolve(res);
        },
        fail: (res) => {
          qa.showToast({
            title: "支付信息fail"
          })
          return reject(res);
        }
      })
    })
  },
  async vendorPay() {
    var provider = qa.getVendorPaymentProvider();
    const self = this
    if (provider === 'vivo') {
      var res = await this.getOrderInfo();
      console.log("ordeInfo : " + JSON.stringify(res))

      qa.showToast({
        title: "orderInfo： " + res.data
      })

      qa.requestVendorPayment({
        orderInfo: res.data,
        success: function(ret) {
          self.setData({
            status : "支付成功：" + JSON.stringify(ret)
          })
          qa.showToast({
            title: "支付成功：" + JSON.stringify(ret)
          })
        },
        fail: function (res) {
          self.setData({
            status : "支付失败：" + res.status + ': ' + res.errMsg
          })
          qa.showToast({
            title: "支付失败：" + res.status + ': ' + res.errMsg
          })
        },
        cancel: function(){
          self.setData({
            status : "用户取消"
          })
          qa.showToast({
            title: "用户取消"
          })
        }
      })  
    } else {
      self.setData({
        status: "当前获取的提供商：" + provider + " 请选择正确的vivo服务提供商"
      })
      qa.showToast({
        title: "当前获取的提供商：" + provider + " 请选择正确的vivo服务提供商"
      })
    }
  }
})
