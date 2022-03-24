// pages/tool/library/index.js
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
  },
  GetLib: function(a) {
    this.Search(a.detail.value.kw);
},
Search: function(a) {
  var t = this;
  a ? (t.setData({
      showLoading: !0,
      page: 1
  }), 
  wx.request({
      url: getApp().globalData.src + "Library/getBookList",
      data: {
          kw: a,
          page: 1
      },
      success: function(o) {
          console.log(o.data), 
          t.setData({
              re: o.data,
              // sum:o.data.data[0].all,
              // now:o.data.data[0].now,
              // page:o.data.data[0].page,
              showLoading: !1,
              kw: a
          });
      }
  })) : wx.showToast({
      title: "请输入图书信息",
      icon: "none"
  });
},
lastPage:function(event){
var now=event.currentTarget.dataset.now
var kw=event.currentTarget.dataset.kw
var page=event.currentTarget.dataset.page
  if(now==1){
    wx.showToast({
      title: "当前为第1页",
      icon: "none"
  })
  }else{
    var page=now-1;
    var t = this;
    
    wx.request({
      url: getApp().globalData.src + "Library/getBookList",
      data: {
          kw,
          page
      },
      success: function(o) {
          console.log(o.data), t.setData({
              re: o.data,
              showLoading: !1,
              kw
          });
      }
  })
  }


},
nextPage:function(event){
  var now=event.currentTarget.dataset.now
var kw=event.currentTarget.dataset.kw
var page=event.currentTarget.dataset.page
  if(now==page){
    wx.showToast({
      title: "当前为最后页",
      icon: "none"
  })
  }else{
    var page=now+1;
    var t = this;
    
    wx.request({
      url: getApp().globalData.src + "Library/getBookList",
      data: {
          kw,
          page
      },
      success: function(o) {
          console.log(o.data), t.setData({
              re: o.data,
              showLoading: !1,
              kw
          });
      }
  })
  }
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  checkItem:function(event){
    var id=event.currentTarget.dataset.id
    var author=event.currentTarget.dataset.author
    wx.navigateTo({
      url: 'item?id='+id+'&author='+author,
    })
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