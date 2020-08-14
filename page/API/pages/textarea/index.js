Page({
  data: {
    focus: false,
    bindblur: 0,
    bindlinechange: 0,
    bindfocus: 0,
    bindinput: 0,
    bindconfirm: 0
  },

  bindTextAreaBlur(e) {
    console.log(`@@@bindTextAreaBlur`)
    this.setData({ bindblur: this.data.bindblur + 1 })
  },
  bindlinechange(e) {
    console.log(`@@@bindlinechange`)
    this.setData({ bindlinechange: this.data.bindlinechange + 1 })
  },
  bindFocus(e) {
    console.log(`@@@bindFocus`)
    this.setData({ bindfocus: this.data.bindfocus + 1 })
  },
  bindInput(e) {
    console.log(`@@@bindInput`)
    this.setData({ bindinput: this.data.bindinput + 1 })
  },
  bindComfirm(e) {
    console.log(`@@@bindComfirm`)
    this.setData({ bindconfirm: this.data.bindconfirm + 1 })
  }
})
