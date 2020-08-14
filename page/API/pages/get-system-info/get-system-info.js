Page({
  data: {
    systemInfo: {}
  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: qa.getSystemInfoSync()
    })
  },
  getSystemInfo() {
    const self = this
    qa.getSystemInfo({
      success(res) {
        self.setData({
          systemInfo: res
        })
      }
    })
  },
  clearInfo() {
    this.setData({
      systemInfo: {}
    })
  }
})
