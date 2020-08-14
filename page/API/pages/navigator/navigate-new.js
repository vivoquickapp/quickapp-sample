Page({
  data: {
    title: '',
    openTime: '',
    currentTime: ''
  },

  onLoad(query) {
    console.log(`navigate new page query: `, query)
    this.setData({
      title: query.title,
      openTime: query.currentTime,
      currentTime: Date.now()
    })
  }
})