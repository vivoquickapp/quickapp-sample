Page({
  data: {
  },
  setNavigationBarColor() {
    qa.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  setNavigationBarColorBlack() {
    qa.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  getMenuButtonBoundingClientRect() {
    const resultJson = qa.getMenuButtonBoundingClientRect()
    qa.showModal({
      title: '结果展示',
      content: JSON.stringify(resultJson, null, 2)
    })
  }
})
