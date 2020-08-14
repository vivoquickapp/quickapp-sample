Page({
  navigateToNew() {
    const currentTime = Date.now()
    qa.navigateTo({
      url: `./navigate-new?currentTime=${currentTime}`
    })
  },

  navigateBack() {
    qa.navigateBack()
  },

  redirectToSelf() {
    qa.redirectTo({
      url: './navigator'
    })
  },

  switchTab() {
    qa.switchTab({
      url: '/page/component/index'
    })
  },

  reLaunch() {
    qa.reLaunch({
      url: '/page/component/index'
    })
  },

  navigateToQuickapp() {
    qa.navigateToQuickapp({
      packageName: 'com.example.demo',
      path: 'page/API/pages/navigator/navigator?jump=1&id=123',
      extraData: {
        foo: 'bar'
      },
      fail(res) {
        qa.showModal({
          title: '跳转失败',
          content: res
        })
      }
    })
  },

  navigateBackQuickapp() {
    qa.navigateBackQuickapp({
      extraData: {
        foo: 'bar'
      },
      success(res) {
        // 返回成功
      }
    })
  }
})