Page({
  data: {
    info: {
      longitude: 114.06697,
      latitude: 22.573375,
      name: '步步高大楼',
      address: '广东省深圳市福田区梅林街道安得街89号'
    }
  },
  openLocat() {
    qa.openLocation(this.data.info)
  }
})
