Page({
  data: {
    direction: 0,
    accuracy: '',
    isListen: false
  },
  onReady() {
    this.startCompass()
    this.onCompassChange()
  },
  onUnload: function() {
    this.stopCompass()
  },
  toggle() {
    this.data.isListen ? this.stopCompass() : this.startCompass()
  },
  startCompass() {
    this.setData({
      isListen: true,
    })
    qa.startCompass({
      success: function(res) {
        console.log('startCompass success')
      },
      fail: function(res) {
        console.log('startCompass fail')
      }
    })
  },
  stopCompass() {
    this.setData({
      isListen: false,
    })
    qa.stopCompass({
      success: function(res) {
        console.log('stopCompass success')
      },
      fail: function(res) {
        console.log('stopCompass fail')
      }
    })
  },
  onCompassChange() {
    qa.onCompassChange((res)=> {
      this.setData({
        direction: res.direction,
        accuracy: res.accuracy,
      })
    })
  }
})
