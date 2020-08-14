Page({
  data: {
    percent: 10
  },
  percentChange(e) {
    this.setData({
      percent: e.detail.value
    })
  }
})
