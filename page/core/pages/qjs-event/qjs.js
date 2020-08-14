Page({
  data: {
    actionArr: [
      {
        name: 'selectComponent'
      },
      {
        name: 'selectAllComponents'
      },
      {
        name: 'setStyle'
      },
      {
        name: 'addClass'
      },
      {
        name: 'removeClass'
      },
      {
        name: 'getDataset'
      },
      {
        name: 'callMethod'
      },
      {
        name: 'requestAnimationFrame'
      },
      {
        name: 'getState'
      }
    ]
  },

  testCallMethod(e) {
    console.log('[test-qjs]:callMethod:' + JSON.stringify(e))
  },

  handleCustomEvent(e) {
    console.log('[test-qjs]:triggerEvent:' + JSON.stringify(e))
  }
})
