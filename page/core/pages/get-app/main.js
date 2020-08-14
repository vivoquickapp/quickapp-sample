Page({
  data: {
    log: '-'
  },

  getAppData() {
    var appInstance = getApp()
    this.setData({
      log: JSON.stringify(appInstance.globalData)
    })
  }
})
