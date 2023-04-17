// pages/bbs/mybbs.js
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
    var n=this
    var uid=getApp().globalData.uid
    wx.request({
      url: getApp().globalData.src + 'Bbsconcent/getmybbsList?uid='+uid,
      success: function (e) {
        n.setData({
            ree: e.data,
            re: e.data.data
          }),

          console.log(e.data);
      }
    })

  },
  ViewImage: function(t) {
    wx.previewImage({
        current: getApp().globalData.imgsrc+t.target.dataset.current,
        urls: [getApp().globalData.imgsrc+t.target.dataset.current,]
    });
  },
  ViewPage:function(event){
    var c=getApp().globalData.c
    var cid=event.currentTarget.dataset.cid;
    var display=event.currentTarget.dataset.display;
 
    if(display=='success'){
      wx.navigateTo({
        url: '/pages/bbs/bbsdetail?cid='+cid,
      })
    } else{
      wx.showModal({
        title: "审核未完成",
        content: "审核未完成无法查看",
        showCancel: !1
    })
    }
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

  
})