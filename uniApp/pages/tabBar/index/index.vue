<template>
	<view class="uni-container">
		<view class="navbar"></view>
		<!-- 顶部图片 -->
		<image class="top-image" src="https://img.shop.haoyousheng.com.cn/wechat_icons/index-swiper-bg.png"></image>
		<navigator class="position" url="../../index/address/selectAddress">
			<!-- 顶部地址选择 -->
			<view class="iconfont icon-btn_shouyedingweix"></view>
			<text class="pickup_address">{{pickup_address}}</text>
			<view class="iconfont icon-btn_gengduo_xiangyoujiantoux right-arrow"></view>
		</navigator>
		<view class="contentBox">
			<!-- 轮播广告 -->
			<view class="swiper-container">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval">
					<swiper-item v-for="(item,i) in swiperList" :key="i">
						<navigator class="swiper-item" :url="'../../index/swiper/productList?ad_link='+ item.ad_link">
							<image class="swiper-img" :src="`${item.ad_code}`"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<!-- 承诺-组件 -->
			<promise></promise>
			<!-- 水果专区与领券专区 -->
			<view class="fruit-coupon-box" >
				<navigator v-for="(item,index) in fruitCoupon" :key="index" :url="item.ad_link==''?('../../index/swiper/coupon'):('../../index/swiper/productList?ad_link='+item.ad_link)" >
					<image class="fruit-area" :src="`${item.ad_code}`"></image>
				</navigator>
			</view>
			<!--商品选项-组件 -->
			<product-options></product-options>
		</view>
	</view>
</template>

<script>
	import promise from "../../index/promise/promise.vue"
	import productOptions from "../../index/productOptions/productOptions.vue"
	export default {
		data() {
			return {
				pickup_address: "测试自提",
				indicatorDots: false, //播放指示器
				autoplay: true, //自动播放
				interval: 3000, //播放定时
				swiperList: [], //保存轮播广告信息
				fruitCoupon:[],//保存水果专区和优惠券专区的数据
			}
		},
		// 注册组件
		components: {
			promise,
			productOptions
		},
		onLoad(options) {
			// 修改工厂名称
			uni.$on('factoryName', (data) => {
				this.pickup_address = data.msg
				console.log("this.pickup_address:", this.pickup_address);
			});
			this.getSwiperInfo();
			this.getfruitCoupon();
		},
		methods: {
			//请求轮播广告信息
			getSwiperInfo() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/ad/adlist',
					method: 'post',
					data: {
						pid: 6
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.swiperList = res.data.result;
						// 判断轮播数组长度，大于1,就显示播放指示,否则隐藏
						if (this.swiperList.length > 1) {
							this.indicatorDots = true;
						} else {
							this.indicatorDots = false;
						}
					},
					fail: (err) => {
						alert(err);
					}
				});
			},
			// 请求水果专区和优惠券专区的信息
			getfruitCoupon(){
				uni.request({
					url: this.$globalVariable.hostUrl + '/ad/adlist',
					method: 'post',
					data: {
						pid: 9
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						console.log("res:====",res);
						this.fruitCoupon = res.data.result;
					},
					fail: (err) => {
						alert(err);
					}
				});
			}
		}
	}
</script>

<style>
	.navbar {
		width: 100%;
		height: 122upx;
		background-color: #FFE150;
		position: fixed;
		top: 0;
		z-index: 20;
	}

	/* 顶部的 */
	.top-image {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 375upx;
	}

	/* 地址 */
	.position {
		min-width: 240rpx;
		max-width: 360rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 32rpx;
		color: #333;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 50rpx;
		padding: 0 12rpx;
		position: fixed;
		top: 38rpx;
		left: 26rpx;
		z-index: 50;
		display: flex;
		justify-content: space-around;
	}

	/* 字体长度超出容器宽度显省略号 */
	.pickup_address {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.position .right-arrow {
		font-size: 20rpx;
	}

	/* 轮播图及以下内容盒子 */
	.contentBox {
		position: relative;
		top: 122upx;
		height: 1600upx;
	}

	/* 轮播广告 */
	.swiper-container {
		margin: 0 24upx;
	}

	.swiper-item,
	.swiper-img {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	/* 水果专区和领券专区盒子 */
	.fruit-coupon-box {
		padding: 0 24upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.fruit-area,.coupon-area{
		width: 344upx;
		height: 180upx;
		border-radius: 4upx;
		position: relative;
	}
</style>
