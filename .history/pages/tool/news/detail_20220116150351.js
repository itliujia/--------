Page({
  data: {
    postId:'',
    title:"",
    source:{author:'河南开封科技传媒学院新闻网'},
  },
  onLoad: function(options) {
    var n=this;
    getApp().SetColor(this);
    console.log(options)
    var postId = options.url;
    console.log(postId)
      wx.request({
        url: 'https://kcapi.itliujia.cn/api/getnews/getConcent?url='+postId,
        success: function(e) {
          n.setData({
              re: e.data.data,
              postId:postId,
              title:e.data.data[0].title
          }), 
          console.log(e.data);
      }
      })
  },
  onShareAppMessage:function(options){
    console.log(this.data)

    return {
      title: this.data.title,
      path:"/pages/tool/news/detail?url=" + this.data.postId
    }

  },
  onShareTimeline: function() {
    return {
      title: this.data.title,
      path:"/pages/tool/news/detail?url=" + this.data.postId,
      success: function (e) {},
      fail: function (e) {}
    }
},

  
});