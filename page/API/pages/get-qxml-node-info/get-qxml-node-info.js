Page({
  data: {
    list: []
  },

  onReady() {
    this.getNodeInfo()
  },

  getNodeInfo() {
    const $ = qa.createSelectorQuery()
    const target = $.select('.target')
    target.boundingClientRect()

    $.exec(res => {
      const rect = res[0]
      if (rect) {
        const list = []
        for (const key in rect) {
          if (key !== 'id' && key !== 'dataset') {
            const val = rect[key]
            list.push({ key, val })
          }
        }

        this.setData({ list })
      }
    })
  }
})
