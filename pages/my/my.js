Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [ "#47a86c", "#769FCD", "#6BC5D2", "#F9B8BE" ],
    openid:'',
    uid:'',
    phone:'',
    name:'',
    xueyuan:'',
    nianji:'',
    zhuanye:'',
    type:'',
    avatarUrl:''
  },
mybbs:function(){
var c=getApp().globalData.c
if(c==1){
  wx.showModal({
    title: "身份未认证",
    content: "请完成身份认证",
    showCancel: !1,
    success (res) {
      if (res.confirm) {
        wx.navigateTo({
          url: '/pages/my/login',
        })
        
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
})
}else{
wx.navigateTo({
  url: '/pages/bbs/mybbs',
})
}
},
mycomment:function(){
  var c=getApp().globalData.c
  if(c==1){
    wx.showModal({
      title: "身份未认证",
      content: "请完成身份认证",
      showCancel: !1,
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/my/login',
          })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
  })
  }else{
  wx.navigateTo({
    url: '/pages/bbs/mycomment',
  })
  }
},
mybaoxiu:function(){
  var c=getApp().globalData.c
  if(c==1){
    wx.showModal({
      title: "身份未认证",
      content: "请完成身份认证",
      showCancel: !1,
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/my/login',
          })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
  })
  }else{
  wx.navigateTo({
    url: '/pages/tool/service/baoxiu',
  })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  log: function (options) {
wx.navigateTo({
  url: '/pages/my/log',
})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShow: function () {
    var n = this
    getApp().SetColor(this)
    this.getTabBar().setData({
      selected: 3,
      StyleColor: this.data.StyleColor,
  })
    n.setData({
      c:getApp().globalData.c,
      t:getApp().globalData.t,
      openid:getApp().globalData.openid,
    })

    var openid=getApp().globalData.openid
    var c=getApp().globalData.c
    var _this=this
    // if(c==1){
    //   wx.showModal({
    //     title: "身份未认证",
    //     content: "请完成身份认证",
    //     showCancel: !1,
    //     success (res) {
    //       if (res.confirm) {
    //         wx.navigateTo({
    //           url: '/pages/my/login',
    //         })
            
    //       } else if (res.cancel) {
    //         console.log('用户点击取消')
    //       }
    //     }
    // })
    //   // setTimeout(() => {
    //   //   wx.showToast({
    //   //     title: "请身份认证",
    //   //     icon: "error",
    //   //   });
    //   //   wx.showModal({
    //   //     title: "身份未认证",
    //   //     content: "请身份认证",
    //   //     showCancel: !1
    //   // })

    //   //   setTimeout(() => {
    //   //     wx.hideToast();
    //   //   }, 5000)
    //   // }, 0);
    // }
    if(c==2){
      wx.request({
        url: getApp().globalData.src + "base/getUserInfo?openid="+openid,
        success: function(arr){
          //判断后台请求成功后
          console.log(arr.data.data);
          console.log(arr); 
          _this.setData({
          re:arr.data.data,
          openid :arr.data.data.openid,
          uid : arr.data.data.uid,
           name : arr.data.data.name,
          phone : arr.data.data.phone,
          nianji : arr.data.data.nianji,
          xueyuan : arr.data.data.xueyuan,
          zhuanye : arr.data.data.zhuanye,
          avatarUrl:arr.data.data.avatarUrl,
          type : arr.data.data.type
          })
       
       
      }})
    
    }
    


  },

  upUserInfo:function(event){
    var openid=getApp().globalData.openid
    var c=event.currentTarget.dataset.c
    var _this=this
    if(c==1){
      // setTimeout(() => {
      //   wx.showToast({
      //     title: "请身份认证",
      //     icon: "error",
      //   });
      //   setTimeout(() => {
      //     wx.hideToast();
      //   }, 5000)
      // }, 0);
      wx.showModal({
        title: "身份未认证",
        content: "请完成身份认证",
        showCancel: !1,
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/my/login',
            })
            
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
    })
    }
    if(c==2){
      getApp().onLaunch()
      setTimeout(() => {
        wx.showToast({
          title: "更新成功",
          icon: "success",
        });
        setTimeout(() => {
          wx.hideToast();
        }, 5000)
      }, 0);
    
    }

  },
  addUserInfo:function(event){
    var c=event.currentTarget.dataset.c
    var openid=event.currentTarget.dataset.openid
    if(c==1){
     wx.navigateTo({
       url: '/pages/my/login?openid='+openid,
     })
    }
    if(c==2){

      // setTimeout(() => {
      //   wx.showToast({
      //     title: "您已经完成身份认证",
      //     icon: "error",
      //   });
      //   setTimeout(() => {
      //     wx.hideToast();
      //   }, 5000)
      // }, 0);

      wx.showModal({
        title: "身份已认证",
        content: "您已经完成身份认证",
        showCancel: !1
    })
    
    }
  },
  checkUserInfo:function(event){
    var c=event.currentTarget.dataset.c
    var openid=event.currentTarget.dataset.openid
    if(c==1){
      // setTimeout(() => {
      //   wx.showToast({
      //     title: "请身份认证",
      //     icon: "error",
      //   });
      //   setTimeout(() => {
      //     wx.hideToast();
      //   }, 5000)
      // }, 0);
      wx.showModal({
        title: "身份未认证",
        content: "请完成身份认证",
        showCancel: !1,
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/my/login',
            })
            
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
    })
    }
    if(c==2){
      wx.navigateTo({
        url: '/pages/my/userinfo',
      })
    }
  },
  editUserInfo:function(event){

    var c=event.currentTarget.dataset.c
    var x=getApp().globalData.x
    var openid=event.currentTarget.dataset.openid
    if(c==1){
      // setTimeout(() => {
      //   wx.showToast({
      //     title: "请身份认证",
      //     icon: "error",
      //   });
      //   setTimeout(() => {
      //     wx.hideToast();
      //   }, 5000)
      // }, 0);
      wx.showModal({
        title: "身份未认证",
        content: "请完成身份认证",
        showCancel: !1,
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/my/login',
            })
            
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
    })
    }
    if(c==2){
      if(x<2){

        wx.showModal({
          title: "修改提示",
          content: "每人仅有2次认证修改次数，当前你修改了"+x+"次。是否继续修改？",
          showCancel:1,
          success (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/my/edituserinfo',
              })
              
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
      })
       

      }
      else{
        wx.showModal({
          title: "修改次数上限",
          content: "每人仅有2次认证修改次数，当前你修改了"+x+"次。无法自行修改，请联系客服。",
          showCancel:!1,
      })

      }
     
    }
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

  ChangeStyle: function() {
    var t = this;
    this.setData({
        ChangeStyle: !0
    }), wx.getClipboardData({
        success: function(e) {
            var o = e.data.match("#[0-9a-fA-F]{6}");
            o ? (console.log(o[0]), wx.showModal({
                content: "检测到【在武大换色口令】，是否要更换在武大配色？",
                confirmText: "确定",
                confirmColor: o[0],
                success: function(e) {
                    e.confirm && (wx.setStorageSync("StyleColor", o[0]), t.onShow());
                }
            })) : console.log("没有匹配到颜色");
        }
    }), setTimeout(function() {
        t.setData({
            ChangeStyle: !1
        });
    }, 4e3);
},
SaveColor: function(t) {
    var e = t.currentTarget.dataset.color;
    this.setData({
        ChangeStyle: !1,
        NowColor: e
    }), wx.setStorageSync("StyleColor", e), this.onShow();
},
MoreColor: function() {
    wx.navigateTo({
        url: "color"
    });
},
xy: function() {
  wx.navigateTo({
      url: "rulexy"
  });
},
ys: function() {
  wx.navigateTo({
      url: "ruleys"
  });
},

})