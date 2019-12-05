// packageA/logistics/history-arrival.js
const app = getApp();
const common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities_list:[],
    pickerIndex:0,
    pickup_id:'',
    orderInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.pickup_id=common.getStorageSync('getExpressPickupId');
    this.getUserPickUpApi()
  },
  getUserPickUpApi(){
    var that = this;
    var uri = app.getPath.userPickUpList;
    common.ApiLogistics(uri, {}, true, function (res) {
      if (res.success == 1) {
        var cities_list = res.result.cities;
        if(that.data.pickup_id==0){
          that.data.pickup_id=cities_list[0].pickup_id
          that.setData({
            pickerIndex:0
          })
        }else{
          cities_list.forEach((val,key)=>{
            if(val.pickup_id==that.data.pickup_id){
              that.setData({
                pickerIndex:key
              })
            }
          })
        }
        that.setData({
          cities_list: cities_list
        })
        that.getOrderList()
      }
    })
  },
  getOrderList(){
    let that=this;
    let url=app.getPath.getToDayArriveGoodsCount
    let data={
      pickup_id:that.data.pickup_id
    }
    common.ApiLogistics(url,data,true,function (res) {
      if(res.success==1){
        that.setData({
          orderInfo:res.result
        })
      }
    })
  },
  bindPickerChange(e) {
    this.setData({
      pickerIndex: e.detail.value
    })
    this.data.orderInfo={}
    this.data.pickup_id=this.data.cities_list[e.detail.value].pickup_id
    this.getOrderList()
  },
})
