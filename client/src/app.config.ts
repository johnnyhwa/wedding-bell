export default {
  pages: [
    'pages/index/index',
    'pages/map/index',
    'pages/message/index',
  ],
  tabBar: {
    selectedColor: '#4e72b8',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '关于',
        iconPath: './img/tree.png',
        selectedIconPath: './img/tree.png'
      },
      {
        pagePath: 'pages/map/index',
        text: '导航',
        iconPath: './img/map.png',
        selectedIconPath: './img/map.png'
      },
      {
        pagePath: 'pages/message/index',
        text: '留言',
        iconPath: './img/bird.png',
        selectedIconPath: './img/bird.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
