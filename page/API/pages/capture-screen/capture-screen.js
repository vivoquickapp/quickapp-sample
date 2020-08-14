Page({
  data: {
    captured: false,
    systemInfo: {}
  },
  onLoad() {
    qa.onUserCaptureScreen(() => {
      this.setData({
        captured: true
      })
    })
    this.setData({
      systemInfo: qa.getSystemInfoSync()
    })
  }
})
