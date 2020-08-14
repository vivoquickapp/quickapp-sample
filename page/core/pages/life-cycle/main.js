Page({
  data: {
    loadTime: '-',
    showTime: '-',
    readyTime: '-',
    options: '-'
  },

  onLoad(options) {
    this.setData({
      loadTime: Date.now(),
      options: JSON.stringify(options)
    })
  },

  onShow() {
    this.setData({
      showTime: Date.now()
    })
  },

  onReady() {
    this.setData({
      readyTime: Date.now()
    })
  }
})
