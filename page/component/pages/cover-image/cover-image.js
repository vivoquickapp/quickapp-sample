Page({
  data: {},
  onLaunch: function() {},
  onBindLoad(e) {
    qa.showToast({
      title: '图片加载成功',
      icon: 'success',
      duration: 2000
    })
  },
  onBindError(e) {
    qa.showToast({
      title: '图片加载失败',
      icon: 'none',
      duration: 2000
    })
  },
  onCoverImageTap() {
    qa.showToast({
      title: 'cover-image Tap 事件被触发',
      icon: 'none',
      duration: 2000
    })
  }
})
