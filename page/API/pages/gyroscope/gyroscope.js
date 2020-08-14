Page({
  data: {
    gX: 0,
    gY: 0,
    gZ: 0,
    isListen: false
  },
  onReady() {
    this.startGyroscope()
    this.listenGyroscopeChange()
  },
  onUnload: function() {
    this.stopGyroscope()
  },
  toggle() {
    this.data.isListen ? this.stopGyroscope() : this.startGyroscope()
  },
  startGyroscope() {
    this.setData({
      isListen: true
    })
    qa.startGyroscope({
      interval: 'ui',
      success: function(res) {
        console.log('startGyroscope success')
      },
      fail: function(res) {
        console.log('startGyroscope fail')
      }
    })
  },
  stopGyroscope() {
    this.setData({
      isListen: false
    })
    qa.stopGyroscope({
      success: function(res) {
        console.log('stopGyroscope success')
      },
      fail: function(res) {
        console.log('stopGyroscope fail')
      }
    })
  },
  listenGyroscopeChange() {
    qa.onGyroscopeChange((res) => {
      this.setData({
        callCount: this.data.callCount + 1
      })
      this.setData({
        gX: res.x.toFixed(2),
        gY: res.y.toFixed(2),
        gZ: res.z.toFixed(2)
      })
    })
  }
})
