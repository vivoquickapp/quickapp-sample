const example = require('./example.js')

Page({
  data: {
    methods: [],
    toTempFilePathUrl: ''
  },

  onLoad() {
    this.context = qa.createCanvasContext('canvas')

    const methods = Object.keys(example)
    console.log('methods', methods, example)
    this.setData({
      methods
    })

    const self = this
    methods.forEach(function(method) {
      self[method] = function() {
        example[method](self.context)
        self.context.draw()
      }
    })
  },

  toTempFilePath() {
    let self = this
    qa.canvasToTempFilePath({
      canvasId: 'canvas',
      success(res) {
        self.setData({
          toTempFilePathUrl: res.tempFilePath
        })
        console.log('result is success' + JSON.stringify(res))
      },

      fail(res) {
        console.log('result is fail' + JSON.stringify(res))
      }
    })
  }
})
