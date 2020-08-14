Page({
  data: {
    addressInfo: null
  },
  chooseAddress() {
    qa.chooseAddress({
      success: res => {
        this.setData({
          addressInfo: res
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})
