Component({
  data: {
    name: 'comp1',
    is: '-',
    id: '-',
    dataset: '-',
    dataFlag: '-',
    hasBehavior: '-'
  },
  options: {
    multipleSlots: true
  },
  properties: {
    propA: {
      type: String,
      optionalTypes: [Number],
      value: '-'
    },
    propB: String
  },
  lifetimes: {
    created() {},
    attached() {
      const hasBehavior = this.hasBehavior()
      this.setData({
        is: this.is,
        id: this.id,
        dataset: JSON.stringify(this.dataset),
        dataFlag: this.data === this.properties,
        hasBehavior
      })
    }
  },
  behaviors: [require('./behavior.js')],
  observers: {},
  methods: {
    testTriggerEvent() {
      this.setData(
        {
          name: 'comp1-changed'
        },
        res => {
          console.log('comp1-changed:', res)
        }
      )
      this.triggerEvent('customevent', { a: 1 })
    },
    testSelectQuery() {
      const query = this.createSelectorQuery()
      query.select('.h1').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function(res) {
        console.log('createSelectorQuery', res)
        qa.showToast({
          title: `success:${res.length}`
        })
      })
    },
    testSelectComponent() {
      const all = this.selectAllComponents('.lifeComp1')
      const res = this.selectComponent('.lifeComp1')
      console.log('selectComponent', all, res)
    },
    testGroupSetData() {
      this.groupSetData(function() {
        this.setData({
          name: this.data.name + '~~'
        })
      })
    }
  }
})
