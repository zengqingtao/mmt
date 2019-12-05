<template>
	<view class="uni-container">
		<view class="coupon-box">
			<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
				<!-- 左边金额 -->
				<view class="coupon-price">
					<text class="coupon-price-company">¥</text>
					<text class="coupon-price-value">{{item.value}}</text>
				</view>
				<!-- 中间标题 -->
				<view class="title-box">
					<view class="title">{{item.use_type}}</view>
					<view class="attr">{{item.description}}</view>
					<view class="date">{{item.use_end_date}}</view>
				</view>
				<!-- "领取的按钮" -->
				<view class="receive-btn">领取</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				couponList:[],//保存优惠券数据
			}
		},
		onLoad() {
			this.getCouponList();
		},
		methods:{
			// 获取优惠券数据
			getCouponList(){
				uni.request({
					url: this.$globalVariable.hostUrl + '/coupon/getallcouponlist',
					method: 'post',
					data: {
						
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.couponList = res.data.result.lists;
						console.log(this.couponList);
					},
					fail: (err) => {
						alert(err);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.uni-container{
		width:100%;
		height:2000upx;
		background-color:#f2f2f2 !important;
	}
	.coupon-box{
		padding: 32upx 24upx;
	}
	.coupon-item{
		background-image:url(https://img.shop.haoyousheng.com.cn/wechat_icons/coupon_orange01.png);
		width:100%;
		height:182upx;
		position: relative;
		margin-top:20upx;
		background-size:100% 100%;
		background-repeat: no-repeat;
		box-sizing: border-box;
	}
	.coupon-price{
		width:170upx;
		height:182upx;
		font-weight: 500;
		line-height:182upx;
		text-align: center;
		color:#eb3c39;
		.coupon-price-company{
			font-size:32upx;
		}
		.coupon-price-value{
			font-size:96upx;
		}
	}
	.title-box{
		color:#303030;
		position:absolute;
		top:40upx;
		left:200upx;
		.title{
			width:300upx;
			font-size:28upx;
			line-height::28upx;
			font-weight:bold;
			padding-bottom:18upx;
			white-space: nowrap;
		}
		.attr{
			width:300upx;
			height:26upx;
			line-height:26upx;
			font-size:24upx;
			white-space: nowrap;
		}
		.date{
			font-size:20upx;
			line-height:24upx;
			margin-top:4upx;
		}
	}
	// 领取按钮
	.receive-btn{
		position:absolute;
		right:24upx;
		top:60upx;
		width:144upx;
		height:64upx;
		line-height: 64rpx;
		color: #555;
		font-weight: 600;
		background-color: #ffe150;
		padding: 0;
		border-radius: 32rpx;
		font-size: 28rpx;
		text-align: center;
	}
</style>
