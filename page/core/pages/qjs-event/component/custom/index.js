Component({
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
      },
      {
        name: 'triggerEvent'
      }
    ]
  },

  methods: {
    testCallMethod(e) {
      console.log('[test-qjs]:callMethod:' + JSON.stringify(e))
    }
  }
})
