module.exports = Behavior({
  // behaviors: [require('./behavior-b')],
  properties: {
    propA: {
      type: String,
      value: 'behavior-a propA'
    },
    propB: {
      type: String,
      value: 'behavior-a propB'
    }
  },
  data: {
    name: 'behavior-a',
    age: 21,
    information: { time: '2019-12-12' }
  },
  methods: {
    changeName() {
      this.setData({
        name: 'changed-behavior-a'
      })
    },
    changeAge() {
      this.setData({
        age: 22
      })
    }
  },
  created() {
    console.log('created in behavior-a')
  },
  attached() {
    console.log('attached in behavior-a')
  },
  ready() {
    console.log('ready in behavior-a')
  },
  detached() {
    console.log('detached in behavior-a')
  }
})
