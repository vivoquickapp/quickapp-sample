Page({
  data: {
    flag1: true,
    flag2: true,
    loadCounter: 0,
    showCounter: 0,
    pageHideCounter: 0,
    ifFlag: true,
    dataFieldA: 'a',
    dataFieldB: 'b'
  },

  toggle() {
    this.setData({
      ifFlag: !this.data.ifFlag
    })
  },

  toggle1() {
    this.setData({
      flag1: !this.data.flag1
    })
  },

  toggle2() {
    this.setData({
      flag2: !this.data.flag2
    })
  },

  handleCustomEvent(e) {
    console.log('handleCustomEvent', e)
    qa.showToast({
      title: 'custom event'
    })
  }
})
