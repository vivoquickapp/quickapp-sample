var initData = '\n  this      is first line\nnext line     is <>\n &lt; &gt;'
var extraLine = []
Page({
  data: {
    scrollTop: 0,
    text: initData,
    canAdd: true,
    canRemove: false,
    innertText: false,
    attrs: {
      selectable: Boolean,
      space: ['', 'ensp', 'emsp', 'nbsp'],
      decode: Boolean
    },
    attrsVal: {
      selectable: true,
      space: '',
      decode: true
    },
    obj:null,
    obj2: {},
    toggleVal1: null,
    toggleVal2: null
  },

  add: function(e) {
    extraLine.push('other &amp; line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n'),
      canRemove: true
    })
  },
  remove: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    } else {
      this.setData({
        canRemove: false
      })
    }
  },
  radioChange(e) {
    this.setData({
      'attrsVal.space': e.detail.value
    })
  },
  checkboxCheckedChange(e) {
    const id = e.currentTarget.id
    const name = `attrsVal.${id}`
    const value = e.detail.value.length === 0 ? false : true
    if (id) {
      this.setData({
        [name]: value
      })
    }
    console.log(this.data.attrsVal, value, name)
  },
  toggleInnerText() {
    this.setData({innertText: !this.data.innertText})
  },
  addValue() {
    if(!this.data.obj) {
      this.data.obj = {}
      this.setData({obj:{a: 'first text'}})
    }else {
      const b = {b: 'second text'}
      const obj = this.data.obj
      this.setData({obj: Object.assign({}, obj,b)})
    }
  },
  removeValue() {
    this.setData({obj: null})
  },
  addValue2() {
    if(!this.data.obj2.a) {
      this.setData({obj2:{a: 'first      text     '}})
    }else {
      const b = {b: 'second     \ntext   '}
      const obj = this.data.obj2
      this.setData({obj2: Object.assign({}, obj,b)})
    }
  },
  removeValue2() {
    this.setData({obj2: {}})
  },
  toggle1() {
    this.setData({toggleVal1: 'space  test;\n'})
  },
  toggle2() {
    this.setData({toggleVal2: '&amp; test ;\n'})
  }
})
