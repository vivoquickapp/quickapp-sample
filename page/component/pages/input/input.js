Page({
  data: {
    inputValue: '我是内容',
    eventType: 'null',
    clickCount: 0,
    controlVal: {
      type: 'text',
      password: false,
      placeholder: '输入为空时占位符',
      placeholderStyle: 'font-size: 14px',
      placeholderClass: 'p-class',
      disabled: false,
      maxlength: '10',
      cursorSpacing: '20',
      margin: qa.getStorageSync('inputMargin'),
      padding: qa.getStorageSync('inputPadding'),
      border:  qa.getStorageSync('inputBorder'),
      focus: qa.getStorageSync('inputFocus'),
      confirmType: 'send',
      confirmHold: false,
      cursor: '1',
      selectionStart: '-1',
      selectionEnd: '-1',
      adjustPosition: true,
    },
    confirmTypeArr: ['send', 'search', 'next', 'go', 'done'],
    index: 0,

    styleValue1: `input 样式测试1: padding: 10px;width: 200px;height: 20px;left: 50px;top: 50px;border: 1px solid #ccc;`,
    styleValue2: `input 样式测试2: padding-left: 10px;padding-top: 20px;padding-right: 30px;padding-bottom: 40px;width: 200px;height: 20px;left: 50px;top: 50px;border: 1px solid #ccc;`
  },

  onLoad() {
    const isFocus = qa.getStorageSync('inputFocus')
    const value = isFocus === '' || isFocus
    this.setData({
      'controlVal.focus': qa.getStorageSync('inputFocus') === '' || qa.getStorageSync('inputFocus'),
      'controlVal.margin': qa.getStorageSync('inputMargin') === '' || qa.getStorageSync('inputMargin'),
      'controlVal.padding': qa.getStorageSync('inputPadding') === '' || qa.getStorageSync('inputPadding'),
      'controlVal.border': qa.getStorageSync('inputBorder') === '' || qa.getStorageSync('inputBorder')
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
      eventType: 'input'
    })
  },
  bindFocus(e) {
    this.setData({ eventType: 'focus' })
    console.log(e)
  },
  bindBlur(e) {
    this.setData({ eventType: 'blur' })
    console.log(e)
  },
  bindConfirm(e) {
    this.setData({ eventType: 'confirm' })
    console.log(e)
  },
  bindClick(e) {
    console.log(this.data.clickCount ++)
    this.setData({ 
      eventType: 'click',
      clickCount: this.data.clickCount++
    })
  },
  clearInput() {
    this.setData({ 
      inputValue: ''
    })
  },
  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    let left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },

  bindPickerChange(e) {
    const { value } = e.detail
    this.setData({
      index: value
    })
  },
  controlInput(e) {
    console.log('controlInput', e)
    const name = e.currentTarget.dataset.name
    const controlName = `controlVal.${name}`
    let result = e.detail.value
    this.setData({
      [controlName]: result
    })
  },
  typeChange(e) {
    let result = e.detail.value
    this.setData({
      ['controlVal.type']: result
    })
  },
  passwordChange(e) {
    this.setData({
      ['controlVal.password']: e.detail.value === 'true'
    })
  },
  placeholderClassChange(e) {
    this.setData({
      ['controlVal.placeholderClass']: e.detail.value
    })
  },
  disabledChange(e) {
    this.setData({
      ['controlVal.disabled']: e.detail.value === 'true'
    })
  },
  focusChange(e) {
    const ret = e.detail.value === 'true'
    qa.setStorageSync('inputFocus', ret);
    this.setData({
      ['controlVal.focus']: ret
    })
  },
  marginChange(e) {
    const ret = e.detail.value === 'true'
    qa.setStorageSync('inputMargin', ret);
    this.setData({
      ['controlVal.margin']: ret
    })
  },
  paddingChange(e) {
    const ret = e.detail.value === 'true'
    qa.setStorageSync('inputPadding', ret);
    this.setData({
      ['controlVal.padding']: ret
    })
  },
  borderChange(e) {
    const ret = e.detail.value === 'true'
    qa.setStorageSync('inputBorder', ret);
    this.setData({
      ['controlVal.border']: ret
    })
  },
  confirmTypeChange(e) {
    this.setData({
      ['controlVal.confirmType']: e.detail.value
    })
  },
  confirmHoldChange(e) {
    this.setData({
      ['controlVal.confirmHold']: e.detail.value === 'true'
    })
  },
  adjustPositionChange(e) {
    this.setData({
      ['controlVal.adjustPosition']: e.detail.value === 'true'
    })
  }
})
