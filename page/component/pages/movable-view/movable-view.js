Page({
  data: {
    x: 0,
    y: 0,
    inputx: 0,
    inputy:0,
    scale: 2,
    inputscale:2
  },

  tap() {
    this.setData({
      x: this.data.inputx,
      y: this.data.inputy
    })
  },

  tap2() {
    this.setData({
      scale: this.data.inputscale
    })
  },
  bindinput(e) {
    const name = e.target.dataset.name
    this.setData({
      [name]: e.detail.value
    })
  },
  bindchange(e) {
    this.setData({
      inputscale: e.detail.value
    })
  },

  onChange(e) {
    console.log(e.detail)
  },

  onScale(e) {
    console.log('scalecalback',e.detail)
  },
  onhtouchmove(e) {
    console.log('htouch', e.detail)
  },
  onvtouchmove(e) {
    console.log('vtouch', e.detail)
  }

})
