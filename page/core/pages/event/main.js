Page({
  data: {
    log: '-'
  },
  handleEvent(e) {
    this.setData({
      log: JSON.stringify(e)
    })
  }
})
