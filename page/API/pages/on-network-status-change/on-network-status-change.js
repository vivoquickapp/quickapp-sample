Page({
  data: {
    isConnected: false,
    networkType: ''
  },
  onLoad() {
    const self = this
    qa.onNetworkStatusChange(function(res) {
      self.setData({
        isConnected: res.isConnected,
        networkType: res.networkType
      })
    })
  },
  onShow() {
    const self = this
    qa.getNetworkType({
      success(res) {
        self.setData({
          isConnected: res.networkType !== 'none',
          networkType: res.networkType
        })
      }
    })
  }
})
