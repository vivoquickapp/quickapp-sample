function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' }
    ],
    itemValue: '',
    isChecked: false,
    isSelected: '',
    radioColor: '#f00'
  },
  changeColor() {
    const radioColor = getRandomColor()
    this.setData({ radioColor })
  },
  radioChange(e) {
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items,
      itemValue: e.detail.value
    })
  },
  changeChecked() {
    const newval = !this.data.isChecked
    this.setData({ isChecked: newval })
  },
  radioCheckedChange(e) {
    const newval = !this.data.isChecked
    this.setData({ isChecked: newval })
  }
})
