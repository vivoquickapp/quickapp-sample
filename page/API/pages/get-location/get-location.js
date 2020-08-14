const util = require('../../../../util/util.js')
const formatLocation = util.formatLocation

Page({
  data: {
    hasLocation: false,
    location: {}
  },

  getLocation() {
    qa.getLocation({
      success: (res) => {
        console.log(`res:`, res),
        this.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude, res.speed, res.accuracy, res.altitude, res.horizontalAccuracy)
        })
      }
    })
  },

  clear() {
    this.setData({
      hasLocation: false,
      location: {}
    })
  }
})
