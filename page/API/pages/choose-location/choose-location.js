const util = require('../../../../util/util.js')

const formatLocation = util.formatLocation

Page({
  data: {
    hasLocation: false,
    info: {},
    locationAddress: '',
    locationName: ''
  },
  chooseLocation() {
    qa.chooseLocation({
      success: (res) =>{
        this.setData({
          hasLocation: true,
          info: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address,
          locationName: res.name
        })
      }
    })
  },
  clear() {
    this.setData({
      hasLocation: false,
      info: {}
    })
  }
})
