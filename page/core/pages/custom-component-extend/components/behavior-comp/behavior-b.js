module.exports = Behavior({
  behaviors: [],
  properties: {
    propA: {
      type: String,
      value: 'behavior-b propA'
    },
    propB: {
      type: String,
      value: 'behavior-b propB'
    }
  },
  data: {
    name: 'behavior-b',
    age: 23
  },
  methods: {
    changeName() {
      this.setData({
        name: 'changed-behavior-b'
      });
    },
    changeAge() {
      this.setData({
        age: 24
      })
    }
  },
  created() {
    console.log('created in behavior-b')
  },
  attached() {
    console.log('attached in behavior-b')
  },
  ready() {
    console.log('ready in behavior-b')
  },
  detached() {
    console.log('detached in behavior-b')
  }
})
