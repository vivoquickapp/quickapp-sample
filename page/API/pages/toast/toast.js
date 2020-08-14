Page({
  toastDefault() {
    qa.showToast({
      title: '默认'
    })
  },

  toastDuration() {
    qa.showToast({
      title: 'duration 2000',
      duration: 2000
    })
  },

  toastLoading() {
    for (let key in console) {
      console.log(key)
    }
    qa.showToast({
      title: 'loading test',
      icon: 'loading',
      duration: 5000
    })
  },

  tapToastWithSpecialChar() {
    qa.showToast({
      title: '~^{-*@#$%==&"“{}%.+^\/fas?.*******~!@#$%^&*()-+',
      icon: 'none',
      duration: 3000
    })
  },

  hideToast() {
    qa.hideToast()
  }
})
