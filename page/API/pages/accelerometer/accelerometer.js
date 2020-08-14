Page({
  data: {
    gAx: 0,
    gAy: 0,
    gAz: 0,
    isListen: false
  },
  onReady() {
    this.startAccelerometer()
    this.listenAccelerometerChange()  
  },
  onUnload() {
    this.stopAccelerometer()
  },
  toggle() {
    this.data.isListen ? this.stopAccelerometer() : this.startAccelerometer()
  },
  startAccelerometer() {
    this.setData({
      isListen: true
    })
    qa.startAccelerometer({
      interval: 'game',
      success(res) {
        console.log('startAccelerometer success')
      },
      fail(res) {
        console.log('startAccelerometer fail')
      }
    })
  },
  stopAccelerometer() {
    this.setData({
      isListen: false
    })
    qa.stopAccelerometer({
      success(res) {
        console.log('stopAccelerometer success')
      },
      fail(res) {
        console.log('stopAccelerometer fail')
      }
    })
  },
  listenAccelerometerChange() {
    qa.onAccelerometerChange((res) => {
      this.setData({
        gAx: res.x.toFixed(2),
        gAy: res.y.toFixed(2),
        gAz: res.z.toFixed(2)
      })
    })
  }
})
