Page({
  data: {
    hasNetworkType: false,
    networkType: ''
  },
  getNetworkType() {
    const self = this
    qa.getNetworkType({
      success(res) {
        console.log(res)
        self.setData({
          hasNetworkType: true,
          networkType: res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})
