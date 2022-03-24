// pages/tool/media/media.js
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
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var n=this
    const store = requirePlugin('player')
    getApp().SetColor(this)
    wx.request({
      url: getApp().globalData.src+'/media/getMList',
      success: function(e) {
        n.setData({
            re: e.data.data,
            vid: e.data.data[0].media_vid,
            name:e.data.data[0].media_name,
            status:e.data.data[0].media_status,
            notice:e.data.data[0].media_notice,

        }), 
        console.log(e.data);
        
    }
    })
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
  onPostTap: function (event) {
    var vid = event.currentTarget.dataset.vid;
    var name = event.currentTarget.dataset.name;
    var status = event.currentTarget.dataset.status;
    var notice = event.currentTarget.dataset.notice;
    // console.log("on post id is" + postId);
    this.setData({
      vid: vid,
      name:name,
      status:status,
      notice:notice

  })
    
    },
    onShareAppMessage: function (e) {
      return {
          title: "『 在科传 』 影约科传",
          path: "/pages/tool/media/media",
          success: function (e) {},
          fail: function (e) {}
      };
  },
  onShareTimeline: function() {
      return {
          title: "『 在科传 』 影约科传",
          path: "/pages/tool/media/media",
        success: function (e) {},
        fail: function (e) {}
      }
  },
})