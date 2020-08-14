Page({
  data: {
    value: 'page value',
    formData: '-',
    exportData: '-'
  },
  formSubmit: function(e) {
    console.info('表单提交携带数据', e.detail.value)
    this.setData({
      formData: JSON.stringify(e.detail.value)
    })
    const comp = this.selectComponent('.behavior-comp')
    this.setData({
      exportData: JSON.stringify(comp)
    });
    const comp2 = this.selectComponent('#behaviorComp')
    console.log('comp', comp, comp2)
  },
  onLoad() {
  }
})
