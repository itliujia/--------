getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },
  onLoad(e) {
    console.log(e.title)
    this.setData({
     msgList: [
      { url: "url", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱" },
      { url: "url", title: "公告：你想和一群有志青年一起过生日嘛？" }]
    });
   },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var n = this;
    getApp().SetColor(this);
    this.getTabBar().setData({
      selected: 5,
      StyleColor: this.data.StyleColor
  })

    //获取幻灯片
    wx.request({
      url: getApp().globalData.src+"/banner/getbannerList?type=首页",
      success: function (e) {
          n.setData({
              bannerList: e.data.data
          }), 
          console.log(e.data);
      }
  });

    //获取图片新闻
    wx.request({
      url: getApp().globalData.src+'/getnews/getNList?type=图片新闻',
      success: function (e) {
          n.setData({
              re: e.data.data
          }), console.log(e.data);
      }
  });
  },
  goTool: function () {
    wx.switchTab({
        url: '/pages/tool/tool'
    })
},
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
        url: "/pages/tool/news/detail?url=" + postId
    })
},

  switchTab: function (e) {
    var t = this.data.list[e.currentTarget.dataset.index].pagePath;
    wx.switchTab({
        url: t
    });
},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    return {
        title: "上万科传人都在用的校园小程序，就差你了！",
        path: "/pages/home/home",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
      title: "上万科传人都在用的校园小程序，就差你了！",
      path: "/pages/home/home",
      success: function (e) {},
      fail: function (e) {}
    }
},


})