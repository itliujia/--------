// pages/tool/service/baoxiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    type: ['水类','电类','门窗','家具','空调','其他'],
    f:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  typeChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
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
      uid:getApp().globalData.uid,
      name:getApp().globalData.name,
      phone:getApp().globalData.phone,
    })
    wx.request({
      url: getApp().globalData.src + "/repair/selectx?uid="+getApp().globalData.uid,
      success: function(t) {
        console.log(t.data), 
        n.setData({
          code:t.data.code,
            ree: t.data.data,
        })


    }

    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  baoxiu: function () {
var a=this
a.setData({
  f:2
})
  },

addx: function(t) {
    var a = t.detail.value
    var e = this
    var uid=getApp().globalData.uid
    var name=getApp().globalData.name
    var phone=getApp().globalData.phone
    var timestamp = Date.parse(new Date());

    timestamp = timestamp / 1000; 

   "" == a.content || "" == a.address || "" == a.type ||a.type==null||a.content==null||a.address==null ? wx.showModal({
        title: "信息不全",
        content: "请填写完整信息",
        showCancel: !1
    }) : (e.setData({
        showLoading: !0,
    }), 
   
    console.log(a), 
    wx.request({
        url: getApp().globalData.src + "/repair/addx",
        data: {
          uid:uid,
          name:name,
          time:timestamp,
          phone:phone,
          type:a.type,
          content:a.content,
          address:a.address

       }, 
       
        success: function(t) {
            console.log(t.data), 
            e.setData({
                re: t.data,
                code:t.data.code,
                showLoading: !1,
            })
            if(e.data.code==200){
              setTimeout(() => {
                wx.showToast({
                  title: "申报成功",
                  icon: "success",
                });
                setTimeout(() => {
                  wx.hideToast();
                }, 2000)
              }, 0);
              e.setData({
                f:0
              })
              wx.request({
                url: getApp().globalData.src + "/repair/selectx?uid="+getApp().globalData.uid,
                success: function(t) {
                  console.log(t.data), 
                  e.setData({
                    code:t.data.code,
                      ree: t.data.data,
                  })
          
          
              }
          
              })


            }
           
        },
       
        
    
       

    }));

},
quxiao:function(event){
  var e=this
  var id = event.currentTarget.dataset.id;
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  wx.request({
    url: getApp().globalData.src + "/repair/celx",
    data: {
      time:timestamp,
      id:id

   }, 
   
    success: function(t) {
        console.log(t.data), 
        e.setData({
            re: t.data,
            code:t.data.code,
            showLoading: !1,
        })
        if(e.data.code==200){
          setTimeout(() => {
            wx.showToast({
              title: "取消成功",
              icon: "success",
            });
            setTimeout(() => {
              wx.hideToast();
            }, 2000)
          }, 0);
          wx.request({
            url: getApp().globalData.src + "/repair/selectx?uid="+getApp().globalData.uid,
            success: function(t) {
              console.log(t.data), 
              e.setData({
                code:t.data.code,
                  ree: t.data.data,
              })
      
      
          }
      
          })


        }
       
    },
})
},
xiugai:function(event){
  var e=this
  var id = event.currentTarget.dataset.id;
  var type = event.currentTarget.dataset.type;
  var address = event.currentTarget.dataset.address;
  var content = event.currentTarget.dataset.content;
  var statue = event.currentTarget.dataset.statue;
  if(statue=='用户申报'){
  e.setData({
    f:1,
    id:id,
    typee:type,
    address:address,
    content:content,
  })
  }
  else{
    setTimeout(() => {
      wx.showToast({
        title: "当前无法修改",
        icon: "error",
      });
      setTimeout(() => {
        wx.hideToast();
      }, 2000)
    }, 0);
  }





},
xiugaix: function(t) {
  var a = t.detail.value
  var e = this
  var uid=getApp().globalData.uid
  var name=getApp().globalData.name
  var phone=getApp().globalData.phone
  var timestamp = Date.parse(new Date());

  timestamp = timestamp / 1000; 

 "" == a.content || "" == a.address || "" == a.type ||a.type==null||a.content==null||a.address==null ? wx.showModal({
      title: "信息不全",
      content: "请填写完整信息",
      showCancel: !1
  }) : (e.setData({
      showLoading: !0,
  }), 
  console.log(a), 
  wx.request({
      url: getApp().globalData.src + "/repair/xiugaix",
      data: {
        id:e.data.id,
        time:timestamp,
        phone:phone,
        type:a.type,
        content:a.content,
        address:a.address
     }, 
     
      success: function(t) {
          console.log(t.data), 
          e.setData({
              re: t.data,
              code:t.data.code,
              showLoading: !1,
          })
          if(e.data.code==200){
            setTimeout(() => {
              wx.showToast({
                title: "修改成功",
                icon: "success",
              });
              setTimeout(() => {
                wx.hideToast();
              }, 2000)
            }, 0);
            e.setData({
              f:0
            })
            wx.request({
              url: getApp().globalData.src + "/repair/selectx?uid="+getApp().globalData.uid,
              success: function(t) {
                console.log(t.data), 
                e.setData({
                  code:t.data.code,
                    ree: t.data.data,
                })
        
        
            }
        
            })
          }
         
      },
     
      
  
     

  }));

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