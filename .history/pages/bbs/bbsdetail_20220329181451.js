// pages/bbs/bbsdetail.js
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
    getApp().SetColor(this)
    console.log(options)
    var n=this
    var cid = options.cid;


    console.log(cid)
    wx.request({
      url: getApp().globalData.src + 'Bbscomment/bbsDetail?cid='+cid,
      success: function (e) {
        n.setData({
            ree: e.data,
            re: e.data.data[0],
            c: getApp().globalData.c
          }),
          console.log(e.data);
      }
    })
    wx.request({
      url: getApp().globalData.src + 'Bbscomment/commentDetail?cid='+cid,
      success: function (e) {
        n.setData({
          CommentList: e.data.data,
          cid
          })
      }
    })
  },

uploadimg:function(){
    var that = this;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        that.setData({
                source:res.tempFiles[0].tempFilePath,
              });

              const tempFilePaths = res.tempFiles[0].tempFilePath
              wx.uploadFile({
                url: 'https://kcapi.itliujia.cn/up.php', //仅为示例，非真实的接口地址
                filePath: tempFilePaths,
                name: 'file1',
                formData: {
                  'user': 'test'
                },
                success (res){
                  const data = res.data
                  console.log(data)
                  that.setData({
                    data
                  });
                  //do something

                }
              })


  
      }
    })




},

ViewImage: function(t) {
  wx.previewImage({
      current: getApp().globalData.imgsrc+t.target.dataset.current,
      urls: [getApp().globalData.imgsrc+t.target.dataset.current,]
  });
},

UserComment: function(a) {
  var e = a.detail.value, 
  o = new Date().valueOf();
  var n = this;
  console.log(e)
  var name=getApp().globalData.name
  var uid=getApp().globalData.uid
  var avatarUrl=getApp().globalData.avatarUrl
  console.log(this.data)
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000; 
  var ctype=getApp().globalData.type

 "" == e.comment  ? 
 wx.showModal({
      title: "信息不全",
      content: "请填写评论内容",
      showCancel: !1
  }) : (
    wx.request({
      url: getApp().globalData.src + 'Bbscomment/addcomment?img='+this.data.data+'&name='+name+'&time='+timestamp+'&avatarUrl='+avatarUrl+'&cid='+this.data.cid+'&ctype='+ctype+'&uid='+uid,
      data:e,
      success: function(t) {
        wx.hideLoading()
        wx.showModal({
          title: "评论成功",
          content: "评论正在审核中",
          showCancel: !1,
          success (res) {
            if (res.confirm) {
              n.onLoad({cid:n.data.cid})
              n.setData({
                InputText:'',
                source:false

              })
              
              
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
          
      })
      
      console.log(t)

    }
  }));

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
  onShareAppMessage: function (e) {
    return {
      title: "科传新鲜事，快来逛一逛！",
      path:"/pages/bbs/bbsdetail?cid=" + this.data.cid,
  
        success: function (e) {},
        fail: function (e) {}
    };
},
  onShareTimeline: function() {
    return {
      title: "科传新鲜事，快来逛一逛！",
      path:"/pages/bbs/bbsdetail?cid=" + this.data.cid,
      success: function (e) {},
      fail: function (e) {}
    }
},
 
})