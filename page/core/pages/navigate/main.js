Page({
  data: {
    list: [
      {
        method: 'navigateTo',
      },
      {
        method: 'reLaunch',
      },
      {
        method: 'redirectTo',
      },
      {
        method: 'switchTab',
        url: '/page/component/index'
      },
    ]
  },
  navigateBack() {
    qa.navigateBack()
  },
  navigateTo() {
    qa.navigateTo({
      url: '/page/core/pages/qjs/main'
    })
  },
  navigateToWithParams() {
    qa.navigateTo({
      url: '/page/core/pages/qjs/main?a=1&b=2'
    })
  },
  redirectTo() {
    qa.redirectTo({
      url: '/page/core/pages/qjs/main?a=1&b=2'
    })
  },
  reLaunch() {
    qa.reLaunch({
      url: '/page/component/index'
    })
  },
  onUnload() {
    
  }
})
