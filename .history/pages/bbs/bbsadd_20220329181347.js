const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0' 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TextBoxHeight: 400,
    array: ['寻物', '闲置', '杂谈', '其他'],
    avatarUrl: defaultAvatarUrl,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

addbbsInfo: function(a) {
  var e = a.detail.value, 
  o = new Date().valueOf();
  var n = this;
  console.log(e)
  var name=getApp().globalData.name
  var uid=getApp().globalData.uid
  var avatarUrl=getApp().globalData.avatarUrl
  var ctype=getApp().globalData.type
  console.log(this.data)
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000; 

 "" == e.name || "" == e.phone ||e.type==null ? 
 wx.showModal({
      title: "信息不全",
      content: "请填写完整信息",
      showCancel: !1
  }) : (
    wx.request({
      url: getApp().globalData.src + 'Bbsconcent/addbbsinfo?img='+this.data.data+'&name='+name+'&time='+timestamp+'&avatarUrl='+avatarUrl+'&ctype='+ctype+'&uid='+uid,
      data:e,
      success: function(t) {
        wx.hideLoading()
        wx.showModal({
          title: "发布成功",
          content: "动态正在审核中",
          showCancel: !1,
          success (res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/bbs/bbs',
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
    var n=this
    n.setData({
      avatarUrl:getApp().globalData.avatarUrl,
      uid:getApp().globalData.uid,
      name:getApp().globalData.name,

    })
    
  },

  bindinput: function(t) {
    this.setData({
        content: t.detail.value
    });
},
navigateBack:function(){

},
bindlinechange: function(t) {
    console.log(t.detail.lineCount), this.setData({
        TextBoxHeight: t.detail.lineCount < 8 ? 360 : 40 * (t.detail.lineCount + 1)
    });
},

  // 上传图片
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