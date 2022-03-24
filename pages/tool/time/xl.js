// pages/tool/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    source:{author:'河南开封科技传媒学院党政办公室'},
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
    var a=this
    getApp().SetColor(this)
    wx.request({
      url: getApp().globalData.src + "semester/getSList",
      success: function(t) {
          console.log(t.data), 
          a.setData({
            semester: t.data.data
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    return {
        title: "『 在科传 』 科传校历",
        path: "/pages/tool/time/calendar",
        success: function (e) {},
        fail: function (e) {}
    };
},
onShareTimeline: function() {
    return {
        title: "『 在科传 』 科传校历",
        path: "/pages/tool/time/calendar",
      success: function (e) {},
      fail: function (e) {}
    }
},


  powerDrawer: function (e) {
    var a=this
    var currentStatu = e.currentTarget.dataset.statu;
    var semester = e.currentTarget.dataset.semester;
    var title = e.currentTarget.dataset.title;
    console.log(semester)
    wx.request({
      url: getApp().globalData.src + "/calendar/getCList?semester="+semester,
      success: function(t) {
          console.log(t.data), 
          a.setData({
            re: t.data.data,
            title:title
    })
  }
  })
    this.util(currentStatu)
},
util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
        duration: 1,  //动画时长
        timingFunction: "linear", //线性
        delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
        animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
        // 执行第二组动画：Y轴不偏移，停
        animation.translateY(0).step()
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
        this.setData({
            animationData: animation
        })

        //关闭抽屉
        if (currentStatu == "close") {
            this.setData(
                {
                    showModalStatus: false
                }
            );
        }
    }.bind(this), 1)

    // 显示抽屉
    if (currentStatu == "open") {
        this.setData(
            {
                showModalStatus: true
            }
        );
    }
}



})