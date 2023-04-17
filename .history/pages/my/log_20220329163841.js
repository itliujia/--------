Page({
    data: {
        
    },
    onLoad: function(t) {
      var a=this
      getApp().SetColor(this)
      wx.request({
        url: getApp().globalData.src + "/vlog/getvList",
        success: function(t) {
            console.log(t.data), 
            a.setData({
              re: t.data.data,
      })
    }
    })
    },
    copywxid: function(t) {
        wx.setClipboardData({
            data: getApp().globalData.logindata.openid,
            success: function(t) {
                wx.showToast({
                    title: "WXID复制成功",
                    icon: "none"
                });
            }
        });
    },
    enter_rule_1: function() {
        wx.navigateTo({
            url: "../WebView/index?url=https://mp.weixin.qq.com/s/epwMGboi3w0_SQ_G2fBqZg"
        });
    },
    enter_rule_2: function() {
        wx.navigateTo({
            url: "../WebView/index?url=https://mp.weixin.qq.com/s/zhAnnfSKNvBa1UoBNoCZ_A"
        });
    }
});