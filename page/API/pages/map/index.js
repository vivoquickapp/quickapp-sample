Page({
  data: {
    latitude: 22.547009,
    longitude: 114.050035,
    scale: 12,
    controls: [
      {
        id: 1,
        iconPath: require('./image/location.png'),
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }
    ],
    includePoints: [
      {
        latitude: 22.547009,
        longitude: 114.050035
      },
      {
        latitude: 22.547009,
        longitude: 114.050035
      },
      {
        latitude: 22.540667,
        longitude: 114.050035
      },
      {
        latitude: 22.547009,
        longitude: 114.078861
      }
    ],
    circles: [
      {
        latitude: 22.547009,
        longitude: 114.050035,
        color: '#FF0000',
        fillColor: '#FF0000',
        radius: 500,
        strokeWidth: 10
      }
    ],
    markers: [
      {
        title: 'title',
        id: 3,
        latitude: 22.547009,
        width: 12,
        height: 12,
        longitude: 114.050035,
        rotate: 0,
        alpha: 0.5,
        iconPath: require('./image/location.png'),
        label: {
          content: 'I am label',
          color: 'blue',
          fontSize: '12'
        },
        callout: {
          content: 'Jon Snow'
        }
      },
      {
        id: 1,
        latitude: 22.540667,
        longitude: 114.050035,
        iconPath:
          'http://shopstatic.vivo.com.cn/vivoshop/commodity/57/4657_1514129543530hd_250x250.png',
        callout: {
          content: 'Jon Snow',
          color: '#363a42',
          fontSize: 30,
          borderRadius: 5,
          borderWidth: 5,
          borderColor: '#363a42',
          bgColor: '#4286f4',
          display: 'ALWAYS'
        }
      },
      {
        id: 2,
        latitude: 22.547009,
        longitude: 114.078861,
        iconPath: require('./image/location.png'),
        label: {
          content: 'I am label',
          color: 'blue',
          fontSize: '12'
        }
      }
    ],
    polyline: [
      {
        points: [
          { latitude: 22.547009, longitude: 114.050035 },
          { latitude: 22.547009, longitude: 114.078861 }
        ],
        color: '#FF0000',
        width: 2,
        dottedLine: true
      }
    ],
    polygons: [
      {
        points: [
          {
            latitude: 22.540667,
            longitude: 114.050035,
            name: 'T.I.T 创意园'
          },
          {
            latitude: 22.547009,
            longitude: 114.078861,
            name: 'T.I.T 创意园'
          },
          {
            latitude: 22.542009,
            longitude: 114.088861
          }
        ],
        strokeColor: '#bcf442',
        strokeWidth: 2,
        fillColor: '#bcf442'
      }
    ],
    enableZoom: false,
    enableScroll: false
  },
  // TODO: in the future, createContext should be done in the onReady
  // onReady: function(e) {
  //   this.mapCtx = qa.createMapContext('myMap')
  // },
  getCenterLocation: function() {
    this.mapCtx = qa.createMapContext('myMap')

    console.log('getCenterLocation事件')
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx = qa.createMapContext('myMap')

    console.log('moveToLocation事件')

    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx = qa.createMapContext('myMap')

    console.log('translateMarker事件')

    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  getScale: function() {
    this.mapCtx = qa.createMapContext('myMap')
    console.log('getScale事件')
    this.mapCtx.getScale({
      success: function(scale) {
        console.log(scale)
      }
    })
  },
  getRegion: function() {
    this.mapCtx = qa.createMapContext('myMap')
    console.log('getRegion事件')
    this.mapCtx.getRegion({
      success: function(region) {
        console.log('getRegion事件' + region.southwest)
        console.log('getRegion事件' + region.northeast)
      }
    })
  },
  includePoints: function() {
    this.mapCtx = qa.createMapContext('myMap')
    console.log('includePoints事件')
    this.mapCtx.includePoints({
      padding: [10],
      points: [
        {
          latitude: 22.547009,
          longitude: 114.078861
        },
        {
          latitude: 22.542009,
          longitude: 114.088861
        }
      ]
    })
  },
  addMarkers() {
    this.markers = []
  },
  bindTap(e) {
    console.log('bindTap事件')
    console.log(e)
  },
  bindMarkertap(e) {
    console.log('bindMarkertap事件')

    console.log(e)
  },
  bindUpdated(e) {
    console.log('bindUpdated事件')

    console.log(e)
  },
  bindregionchange(e) {
    console.log('bindregionchange事件')

    console.log(e)
  },
  bindcallouttap(e) {
    console.log('bindcallouttap')

    console.log(e)
  },
  bindcontroltap(e) {
    console.log(e)
    console.log('bindcontroltap事件')
  },
  bindpoitap(e) {
    console.log(e)
    console.log('bindpoitap事件')
  }
})
