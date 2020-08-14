const app = getApp()

Page({
  onLoad() {},

  requestPayment() {
    const self = this

    self.setData({
      loading: true
    })

    app.getUserOpenId(function(err, openid) {
      if (!err) {
        qa.request({
          // 开发者需自行配置请求地址
          url: 'https://qapp-chimera.vivo.com.cn/',
          data: {
            openid
          },
          method: 'POST',
          success(res) {
            console.log('unified order success, response is:', res)
            const payargs = res.data.payargs
            qa.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            })

            self.setData({
              loading: false
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })
  }
})
