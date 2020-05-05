import {request} from "../../request/request.js"
import regeneratorRuntime from '../../lib/runtime/runtime'

import {login,showToast} from "../../utils/asyncWx.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
  
    },

    //获取用户信息
   async bindGetUserUnfo(e) {
        // console.log(e)
        // 获取用户信息
        let {encryptedData,rawData,iv,signature} = e.detail;
        //获取小程序登录成功之后的 code
        const {code} = await login();
        console.log(code)
        let loginParams = {encryptedData,rawData,iv,signature,code}
        // console.log(loginParams);
        // 发送请求 获取用户 token
        // let token = await request({url:'/users/wxlogin',data:loginParams,method:'POST'});
        // console.log(token)
       // wx.setStorageSync("token",token) 
        // 弹框提示
        showToast({title:'获取 token 失败，无法实现支付功能'});
        // 返回到上一级页面
        setTimeout(() => {
            wx.navigateBack({
                delta: 1
              })
        }, 1500);
        //创建订单
          //请求头参数
             //const header={"Auth":token}
          //请求体参数

          //发起请求，获取订单编号
          //发起预支付
          //发起微信支付
    },
})