const md5 = require('../../../../util/md5')
const parseUrl = require('../../../../util/util')

const getSign = params => {
  let signStr = '';
  const signKey = '20131030114035565895';
  const keys = Object.keys(params).sort();

  keys.forEach(function (k) {
    signStr += k + '=' + params[k] + '&';
  });

  signStr += md5(signKey);
  return md5(signStr);
}

const leftpad = function(num) {
  return ("00" + num).substr(("" + num).length);
}

const currentTime = function() {
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

const getOrderNo = function(len) {
  var no = "";
  for (var i = 0; i < len; i++) {
    no += Math.floor(Math.random() * 10);
  }
  return no;
}
Page({
  data: {
    payType: ""
  },
  getSign : function(params) {
		let signStr = '';
		const signKey = 'aUOf5W9EDcApXJseqFGBc2gMD1IPUhmM';
		const keys = Object.keys(params).sort();

		keys.forEach(function (k) {
			signStr += k + '=' + params[k] + '&';
		});

		signStr += md5(signKey);
		return md5(signStr);
  },
  getPayType: function () {
    this.setData({
      payType: qa.getWxPaymentType()
    })
  },
  wxpayWithRefer: function () {
    var payType = qa.getWxPaymentType();
    if (payType == 'APP') {
      qa.showToast({
        title: '只有MWEB方式支持直接设置refer'
      })
    }else if (payType == 'MWEB') {
      qa.showToast({
        title: '当前可用微信支付方式：网页支付(不使用中间页)'
      })

      let params = {
        version: '1.0.0',  // 版本号
        signMethod: 'MD5',  // 签名方式,暂时支持MD5
        packageName: 'com.example.paydemo',    // 包名
        cpOrderNumber: getOrderNo(15), // CP订单号
        notifyUrl: 'https://test1.com.cn',   // 通知CP回调地址
        orderTime: currentTime(),      // 订单时间
        orderAmount: '0.01',   // 订单金额
        orderTitle: '快应用微信支付测试',      // 订单标题
        orderDesc: '快应用微信支付测试描述',      // 订单描述
        payChannel: '7',
        imei: '0000000000',
        model: 'X20',
        orderFrom: '9'
      }

      params.signature = getSign(params); // 签名串


      qa.request({
        // 开发者需根据业务修改请求地址
        url: "https://qapp-chimera.vivo.com.cn/",
        dataType: "text",
        data: params,
        success: function (ret) {
          console.log("requestTest interface result=", JSON.stringify(ret));

          let data
          try {
            data = JSON.parse(ret.data || '{}')
          } catch (err) {
            qa.showToast({
              icon: 'none',
              title: 'json parse error'
            })
            return
          }

          if (ret.statusCode !== 200) {
            qa.showToast({
              icon: 'none',
              title: data.respMsg
            })
          } else {
            const mweb_url = data.initParams
            const {query} = parseUrl(mweb_url) || {}

            qa.requestWxPayment({
              prepayid: query.prepay_id,
              mweb_url: mweb_url,
              // 开发者需根据业务修改 referer
              referer: 'https://qapp-chimera.vivo.com.cn/',
              extra: {
                mweb_url: mweb_url,
                customeKey1: 'customeValue1',
                customeKey2: 'customeValue2'
              },
              fail: function (data, code) {
                console.log("H5 WXPAY handling fail, code=" + code + " data:" + JSON.stringify(data));
                if (code == "1000") {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：未安装微信'
                  })
                } else if (code == "1001") {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：url not found'
                  })
                } else {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：' + code
                  })
                }
              },
              cancel: function (data) {
                console.log("H5 WXPAY handling cancel" + " data:" + JSON.stringify(data));
              },
              success: function (data) {
                console.log("H5 WXPAY handling success" + " data:" + JSON.stringify(data))
                qa.showToast({
                  title: '支付提交微信成功'
                })
              }
            })
          }
        },
        fail: function (data, code) {
          qa.showToast({
            icon: 'none',
            title: "handling fail, code=" + code
          })
        }
      })
    } else {
      qa.showToast({
        icon: 'none',
        title: '当前无可用微信支付方式'
      })
    }
  },
  wxpay: function () {
    var payType = qa.getWxPaymentType();

    if (payType == 'APP') {
      qa.showToast({
        title: '当前可用微信支付方式：原生支付'
      })
      qa.request({
        // 开发者需根据业务修改请求地址
        url: 'https://qapp-chimera.vivo.com.cn/',
        dataType: "text",
        success: function (ret) {
          var initParamsStr
          var order
          try {
            initParamsStr = JSON.parse(ret.data).initParams
            order = JSON.parse(initParamsStr);
          } catch (err) {
            qa.showToast({
              icon: 'none',
              title: 'json parse error'
            })
            return
          }
          console.log('WXPAY:prepayid:' + order.prepayid);
          console.log('WXPAY:timestamp:' + order.timestamp);
          console.log('WXPAY:noncestr:' + order.noncestr);
          console.log('WXPAY:appid:' + order.appid);
          qa.showToast({
            title: 'fetch order success  ' + ret.data
          })

          qa.requestWxPayment({
            prepayid: order.prepayid,
            //微信原生支付的prepayId
            extra: {
              app_id: order.appid,
              partner_id: order.partnerid,
              package_value: order.package,
              nonce_str: order.noncestr,
              time_stamp: order.timestamp,
              order_sign: order.sign
            },

            fail: function (data, code) {
              console.log("WXPAY handling fail, code=" + code + " data:" + JSON.stringify(data));
              const failReasons = {
                900: '支付失败：签名错误',
                901: '支付失败：包名错误',
                1000: '支付失败：未安装微信',
                2001: '支付失败：微信app返回订单错误',
              }
              const content = failReasons[code] || `支付失败：${code}`
              qa.showModal({
                title: '提示',
                content: content
              })
            },
            cancel: function (data) {
              qa.showToast({
                icon: 'none',
                title: '支付取消'
              })
              console.log("WXPAY handling cancel" + " data:" + JSON.stringify(data));
            },
            success: function (data) {
              console.log("WXPAY handling success" + " data:" + JSON.stringify(data));
              qa.showToast({
                title: '支付提交微信成功'
              })
            }
          })
        }
      })
    } else if (payType == 'MWEB') {
      qa.showToast({
        title: '当前可用微信支付方式：网页支付'
      })

      let params = {
        version: '1.0.0',  // 版本号
        signMethod: 'MD5',  // 签名方式,暂时支持MD5
        packageName: 'com.example.paydemo',    // 包名
        cpOrderNumber: getOrderNo(15), // CP订单号
        notifyUrl: 'https://test1.com.cn',   // 通知CP回调地址
        orderTime: currentTime(),      // 订单时间
        orderAmount: '0.01',   // 订单金额
        orderTitle: '快应用微信支付测试',      // 订单标题
        orderDesc: '快应用微信支付测试描述',      // 订单描述
        payChannel: '7',
        imei: '0000000000',
        model: 'X20',
        orderFrom: '9'
      }

      params.signature = getSign(params); // 签名串

      qa.request({
        // 开发者需根据业务修改请求地址
        url: 'https://qapp-chimera.vivo.com.cn/',
        data: params,
        dataType: "text",
        success: function (ret) {
          console.log("requestTest interface result=", JSON.stringify(ret));

          let data
          try {
            data = JSON.parse(ret.data || '{}')
          } catch (err) {
            qa.showToast({
              icon: 'none',
              title: 'json parse error'
            })
            return
          }

          if (ret.statusCode !== 200) {
            qa.showToast({
              icon: 'none',
              title: data.respMsg
            })
          } else {
            const mweb_url = data.initParams
            const {query} = parseUrl(mweb_url) || {}

            qa.requestWxPayment({
              prepayid: query.prepay_id,
              extra: {
                mweb_url: mweb_url,
                customeKey1: 'customeValue1',
                customeKey2: 'customeValue2'
              },
              fail: function (data, code) {
                console.log("H5 WXPAY handling fail, code=" + code + " data:" + JSON.stringify(data));
                if (code == "1000") {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：未安装微信'
                  })
                } else if (code == "1001") {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：url not found'
                  })
                } else {
                  qa.showToast({
                    icon: 'none',
                    title: '支付失败：' + code
                  })
                }
              },
              cancel: function (data) {
                console.log("H5 WXPAY handling cancel" + " data:" + JSON.stringify(data));
              },
              success: function (data) {
                console.log("H5 WXPAY handling success" + " data:" + JSON.stringify(data));
                qa.showToast({
                  title: '支付提交微信成功'
                })
              }
            })
          }
        },
        fail: function (data, code) {
          qa.showToast({
            icon: 'none',
            title: "handling fail, code=" + code
          })
        }
      })
    } else {
      qa.showToast({
        icon: 'none',
        title: '当前无可用微信支付方式'
      })
    }
  }
})
