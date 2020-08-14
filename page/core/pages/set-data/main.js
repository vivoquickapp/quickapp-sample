Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    },
    obj: {}
  },

  changeText() {
    // this.data.text = 'changed data' // 不要直接修改 this.data
    // 应该使用 setData
    this.setData({
      text: 'changed data'
    })
  },

  changeNum() {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },

  addNewKey() {
    this.setData({
      newKey: 'new~'
    })
  },

  changeItemInArray() {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      'array[0].text': 'changed data'
    })
  },

  changeItemInObject() {
    this.setData({
      'object.text': 'changed data'
    })
  },

  addNewField() {
    this.setData({
      'obj.text': 'new data'
    })
  }
})
