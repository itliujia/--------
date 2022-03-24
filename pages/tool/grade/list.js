// pages/tool/phone/index.js
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
    getApp().SetColor(this),
    console.log(this.data.StyleColor)
    this.setData({
      ['nav1.Color']:this.data.StyleColor,
      ['nav2.Color']:this.data.StyleColor,
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
  onShareAppMessage: function (e) {
    return {
        title: "『 在科传 』 校历作息",
        path: "/pages/tool/time/index",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
        title: "『 在科传 』 校历作息",
        path: "/pages/tool/time/index",
      success: function (e) {},
      fail: function (e) {}
    }
},


})