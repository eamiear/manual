# 微信分享

::: tip 描述
微信分享示例
:::

```js
import wx from 'weixin-js-sdk'
import { getWechatConfigFromServer } from 'serverApi'

// 初始化
const WechatInit = async () => {
  const config = await getWechatConfigFromServer()
  return new Promise((resolve, reject) => {
    wx.config({
      debug: false,
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: config.timestamp, // 必填，生成签名的时间戳
      nonceStr: config.nonceStr, // 必填，生成签名的随机串
      signature: config.signature, // 必填，签名，见附录1
      jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
        'onMenuShareTimeline', // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        'onMenuShareQQ'
      ]
    })
    wx.ready(res => resolve(res))
    wx.error(res => reject(res))
  })
}

// 微信分享到朋友圈
const ShareTimeLine = (option) => {
  return new Promise((resolve, reject) => {
    wx.onMeuShareTimeline({
      title: opstion.title, // 分享标题
      link: opstion.link, // 分享链接
      imgUrl: opstion.imgUrl, // 分享图标
      success: resolve,
      cancel: reject
    })
  })
}

// 微信分享到朋友
const ShareAppMessage = (option) => {
  return new Promise((resolve, reject) => {
    wx.onMenuShareAppMessage({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: option.imgUrl, // 分享图标
      type: option.type, // 分享类型,music、video或link，不填默认为link
      dataUrl: option.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
      success: resolve,
      cancel: reject
    })
  })
}

// 微信分享到朋友
const ShareQQMessage = (option) => {
  return new Promise((resolve, reject) => {
    wx.onMenuShareQQ({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: option.imgUrl, // 分享图标
      success: resolve,
      cancel: reject
    })
  })
}
```

## 示例使用

```js
const shareConfig = {
  link: 'https://gz.on-bright.com/wx/share/fashionWeek?isApp=0',
  title: 'FASHION PARTY2018•LIBER时尚趴SEE NOW BUY NOW即秀即买',
  desc: 'LIBER时尚周开启即秀即买模式，并结合最新科技展示，同时通过线上直播及各地LIBER时尚周分会场， 同步将当季时尚发布全球...',
  imgUrl: 'https://public.on-bright.com/share_logo_link.png',
}

WechatInit().then(() => {
  ShareAppMessage({
    title: shareConfig.title,
    desc: shareConfig.desc,
    link: shareConfig.link,
    imgUrl: shareConfig.imgUrl,
    type: 'link',
    dataUrl: ''
  })
  ShareTimeLine({
    title: shareConfig.title,
    link: shareConfig.link,
    imgUrl: shareConfig.imgUrl
  })
  ShareQQMessage({
    title: shareConfig.title,
    link: shareConfig.link,
    imgUrl: shareConfig.imgUrl
  })
})
```