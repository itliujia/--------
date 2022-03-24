Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    source:{author:'河南开封科技传媒学院'},
    type:'学校要闻',
    navbarTitle: [
      "学校要闻",
      "科传快讯",
      "通知公告",
      "多彩校园",
      "原创作品"
     
    ]
  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    var n=this
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
    var type = event.currentTarget.dataset.type;

    wx.request({
      url: getApp().globalData.src+'/getnews/getNList?type='+type,
      success: function(e) {
        n.setData({
            re: e.data.data,
            type:type
        }), 
        console.log(e.data);
    }
    })

  },
  onShow: function () {
    var n=this
    getApp().SetColor(this)
    wx.request({
      url: getApp().globalData.src+'/getnews/getNList?type='+this.data.type,
      success: function(e) {
        n.setData({
            re: e.data.data
        }), 
        console.log(e.data);
    }
    })
    
  },


  onShareAppMessage: function (e) {
    return {
        title: "『 在科传 』 科传资讯",
        path: "/pages/tool/news/index",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
      title: "『 在科传 』 科传资讯",
      path: "/pages/tool/news/index",
      success: function (e) {},
      fail: function (e) {}
    }
},
onPostTap: function (event) {
  var postId = event.currentTarget.dataset.postid;
  // console.log("on post id is" + postId);
  wx.navigateTo({
   url: "detail?url=" + postId
  })
  },

})