Page({
  data: {
    source:{author:'河南开封科技传媒学院招生就业处'},
  },
  onLoad: function(t) {
      getApp().SetColor(this);
      var a = wx.getStorageSync("CETScore");
      "" != a && this.setData({
          scores: a
      });
  },
  GetCETScore: function(t) {
      var a = t.detail.value, e = this;
      "" == a.sid || "" == a.sname || "" == a.idno? wx.showModal({
          title: "信息不全",
          content: "请填写完整信息",
          showCancel: !1
      }) : (e.setData({
          showLoading: !0
      }), 
      wx.request({
          url: getApp().globalData.src + "/admission/getResult",
          data: a,
          success: function(t) {
              console.log(t.data), 
              e.setData({
                  // rr:t.data,
                  re: t.data,
                  showLoading: !1
              }),
              
              wx.setStorageSync("CETScore", t.data.data);
          }
          
      
         

      }));

  },
  onShareAppMessage: function (e) {
    return {
        title: "『 在科传 』 录取查询",
        path: "/pages/tool/recruitenroll/luqu",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
        title: "『 在科传 』 录取查询",
        path: "/pages/tool/recruitenroll/luqu",
      success: function (e) {},
      fail: function (e) {}
    }
},
});