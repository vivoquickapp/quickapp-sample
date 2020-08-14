Page({
  data: {
    env: '-'
  },
  onLoad() {
    this.setData({
      env: JSON.stringify(qa.env)
    })
  }
})
