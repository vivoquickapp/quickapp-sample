Page({
  data: {
    value: `sed全名叫stream editor，流编辑器，用程序的方式来编辑文本，相当的hacker啊。sed基本上就是玩正则模式匹配，所以，玩sed的人，正则表达式一般都比较强。

    同样，本篇文章不会说sed的全部东西，你可以参看sed的手册，我这里主要还是想和大家竞争一下那些从手机指缝间或马桶里流走的时间，用这些时间来学习一些东西。当然，接下来的还是要靠大家自己双手。`,
    controlVal: {
      placeholder: '输入为空时占位符',
      placeholderStyle: 'font-size: 14px',
      placeholderClass: 'p-class',
      disabled: false,
      maxlength: '140',
      cursorSpacing: '20',
      focus: true,
      autoHeight: false,
      showConfirmBar: true,
      cursor: '-1',
      selectionStart: '-1',
      selectionEnd: '-1',
      adjustPosition: true,
      lineHeight: 1.8
    },
    bindblur: 0,
    bindlinechange: 0,
    bindfocus: 0,
    bindinput: 0,
    bindconfirm: 0,
    inputValue: '',
    animationData: '',
    animationObj: 'height: 30px;',
    animationHeight: 30,
    animationObjFast: 'height: 30px;',
    animationHeightFast: 30,

    styleValue1: `textarea 样式测试1: padding: 10px;width: 200px;height: 20px;left: 50px;top: 50px;border: 1px solid #ccc;`,
    styleValue2: `textarea 样式测试2: padding-left: 10px;padding-top: 20px;padding-right: 30px;padding-bottom: 40px;width: 200px;height: 100px;left: 50px;top: 50px;border: 1px solid #ccc;`
  },
  onLoad() {
    const isFocus = qa.getStorageSync('textareaFocus')
    const value = isFocus === '' || isFocus
    this.setData({
      ['controlVal.focus']: value
    })
  },
  clearTextArea() {
    this.setData({
      value: ''
    })
  },
  lineChange(e) {
    console.log(e.detail)
  },
  bindTextAreaBlur(e) {
    this.setData({ bindblur: this.data.bindblur + 1 })
  },
  bindlinechange(e) {
    this.setData({ bindlinechange: this.data.bindlinechange + 1 })
  },
  bindFocus(e) {
    this.setData({ bindfocus: this.data.bindfocus + 1 })
  },
  bindInput(e) {
    this.setData({
       bindinput: this.data.bindinput + 1,
       value: e.detail.value
      })
  },
  bindComfirm(e) {
    this.setData({ bindconfirm: this.data.bindconfirm + 1 })
  },
  controlInput(e) {
    const name = e.currentTarget.dataset.name
    const controlName = `controlVal.${name}`
    const booleanAttrs = [
      'autoHeight',
      'disabled',
      'focus',
      'showConfirmBar',
      'adjustPosition',
    ]

    let result = e.detail.value
    if (booleanAttrs.indexOf(controlName) >= 0) {
      result = result === 'true'
    }

    this.setData({
      [controlName]: result
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
    qa.setStorageSync('textareaFocus', ret);
    this.setData({
      ['controlVal.focus']: ret
    })
  },
  autoHeightChange(e) {
    this.setData({
      ['controlVal.autoHeight']: e.detail.value === 'true'
    })
  },
  showConfirmBarChange(e) {
    this.setData({
      ['controlVal.showConfirmBar']: e.detail.value === 'true'
    })
  },
  adjustPositionChange(e) {
    this.setData({
      ['controlVal.adjustPosition']: e.detail.value === 'true'
    })
  }
})
