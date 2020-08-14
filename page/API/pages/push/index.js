Page({
  data: {

  },

  pushGetProvider:() => {
    var provider = qa.getPushProvider()
    qa.showToast({
      title:"提供商：" + provider,
      icon: 'none',
      duration: 3000,
    })
  },

  pushSubscribe:() => {
    qa.subscribePush({
      success: function(ret) {
        console.log('push.subscribe succeeded, result=' + JSON.stringify(ret))
        qa.showToast({
          title: "订阅成功"
        })
      },
      fail: function(erromsg, errocode) {
        console.log('push.subscribe failed, errocode=' + errocode + ', erromsg=' + JSON.stringify(erromsg))
        qa.showToast({
          icon: 'none',
          title: "订阅失败"
        })
      }
    })
  },

  pushUnSubscribe:() => {
    qa.unsubscribePush({
      success: function(ret) {
        console.log('push.unsubscribe succeeded, result=' + JSON.stringify(ret))
        qa.showToast({
          title: "取消订阅成功"
        })
      },
      fail: function(erromsg, errocode) {
        console.log('push.unsubscribe failed, errocode=' + errocode + ', erromsg=' + JSON.stringify(erromsg))
        qa.showToast({
          icon: 'none',
          title: "取消订阅失败"
        })
      }
    })
  }
})