Page({
  data: {
    message: 'Hello~',
    id: 0,
    condition: true,
    flag: true,
    array: [
      {
        message: 'foo'
      },
      {
        message: 'bar'
      }
    ],
    view: 'WEBVIEW',
    a: 1,
    b: 2,
    c: 3,
    length: 6,
    name: 'Chimera',
    object: {
      key: 'Hello '
    },
    zero: 0,
    obj2: {
      c: 3,
      d: 4
    }
  },

  toggleCondition() {
    this.setData({
      condition: !this.data.condition
    })
  },

  toggleFlag() {
    this.setData({
      flag: !this.data.flag
    })
  }
})
