// pages/tool/library/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    source:{author:'河南开封科技传媒学院图书馆'},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().SetColor(this);
    var id = options.id
    var author=options.author

    var t=this
    t.setData({
      author
    })
    wx.request({
      url: getApp().globalData.src + "Library/getBookItem?id="+id,
      
    success: function(o) {
      console.log(o.data), 
      t.setData({
          re: o.data
      });
  }


    })
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
  onShareAppMessage: function () {

  }
})