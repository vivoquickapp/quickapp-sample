Page({
  data: {
    number: 0
  },
  changeNumber() {
    this.setData({ number: 1 })
    qa.nextTick(() => {
      this.setData({ number: 3 }) 
    })
    this.setData({ number: 2 })
  }
})