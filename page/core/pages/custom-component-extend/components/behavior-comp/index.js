Component({
  data: {
    name: 'index',
    description: 'index',
    information: { id: 1 }
  },
  behaviors: [
    'qa://form-field',
    'qa://component-export',
    require('./behavior-b.js'),
    require('./behavior-a.js'),
    require('./behavior-a.js'),
    require('./behavior-c.js')
  ],
  export() {
    return { myField: 'myValue' }
  },
  properties: {
    value: {
      type: String
    },
    propA: {
      type: String,
      value: 'index propA'
    }
  },
  methods: {
    changeName() {
      this.setData({
        name: 'changed-index'
      })
    }
  }
});
