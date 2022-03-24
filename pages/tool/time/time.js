// pages/tool/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "time": "上午", "text": "第1节", "xia": "08:00 — 08:45"},
      { "time": "上午", "text": "第2节", "xia": "08:55 — 09:40"},
      { "time": "上午", "text": "第3节", "xia": "10:00 — 10:45"},
      { "time": "上午", "text": "第4节", "xia": "10:55 — 11:40"},
      { "time": "上午", "text": "第5节", "xia": "11:45 — 12:30"},

      { "time": "中午", "text": "社团活动", "xia": "12:30 — 14:00"},

      { "time": "下午", "text": "第6节", "xia": "14:05 — 14:50"},
      { "time": "下午", "text": "第7节", "xia": "15:00 — 15:45"},
      { "time": "下午", "text": "第8节", "xia": "15:55 — 16:40"},
      { "time": "下午", "text": "第9节", "xia": "17:00 — 17:45"},
      { "time": "下午", "text": "第10节", "xia": "17:55 — 18:40"},
      { "time": "晚上", "text": "第11节", "xia": "19:10 — 19:55"},
      { "time": "晚上", "text": "第12节", "xia": "20:05 — 20:50"},
      { "time": "晚上", "text": "第13节", "xia": "20:55 — 21:40"}
    ],
    source:{author:'河南开封科技传媒学院'},
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
    getApp().SetColor(this)
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
        title: "『 在科传 』 科传作息",
        path: "/pages/tool/time/time",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
        title: "『 在科传 』 科传作息",
        path: "/pages/tool/time/time",
      success: function (e) {},
      fail: function (e) {}
    }
},
})