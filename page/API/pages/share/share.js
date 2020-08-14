Page({
  data: {
  },
  onShareText(){
    qa.share({
      type: 'text/html',
      data: '<b>bold</b>',
      success() {
        qa.showToast({
          title:'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail() {
        qa.showToast({
          title:'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title:'cancel',
          icon: 'none',
          duration: 2000
        })
      },
      complete(){
        qa.showToast({
          title:'complete',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onShareFile(){
    qa.share({
      type: 'image/png',
      data: '/image/logo.png',
      success() {
        qa.showToast({
          title:'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail() {
        qa.showToast({
          title:'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title:'cancel',
          icon: 'none',
          duration: 2000
        })
      },
      complete(){
        qa.showToast({
          title:'complete',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
