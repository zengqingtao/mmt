<template>
	<view class="uni-container">
		<!-- 轮播图 -->
		<swiper class="swiper-box" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval">
			<swiper-item class="swiper-item" v-for="(item,i) in goodList.gallery" :key="i">
				<image class="swiper-item-img" :src="`${item.src}`"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图和商品详情的中间部分style1 -->
		<view v-if="false">
			<view class="goodName-market-box">
				<view class="goodName">{{goodList.goods_name}}</view>
				<view class="goodRemark">{{goodList.goods_remark}}</view>
			</view>
			<view class="price-box">
				<view>
					<text>￥</text>
					{{Number(goodList.shop_price)}}
				</view>
				<view>￥{{Number(goodList.market_price)}}</view>
			</view>
		</view>
		<!-- 轮播图和商品详情的中间部分style2 -->
		<view>
			<view class="style2-team-bar">
				<view class="style2-two-team">2人团</view>
				<view class="style2-price-box">
					<view class="style2-shop-price"><text class="style2-shopPrice-company">￥</text>{{Number(goodList.shop_price)}}</view>
					<view class="stytle2-market-price">￥{{Number(goodList.market_price)}}</view>
				</view>
				<view class="style2-countDown">
					<view class="style2-countDown-title">距活动结束</view>
					<view></view>
				</view>
			</view>
			<view class="style2-goodName-remark">
				<view class="style2-goodsName">
					<text>{{goodList.goods_name}}</text>
				</view>
				<view class="style2-remark">{{goodList.goods_remark}}</view>
			</view>
			<!-- 灰色横条 -->
			<view class="gray-hr"></view>
			<!-- 优惠券 -->
			<view class="style2-coupon-box">
				<view class="style2-coupon">优惠券</view>
				<view class="style2-to-coupon-box">
					<view class="style2-to-coupon-title">去领券中心</view>
					<view class="iconfont icon-btn_xiangyoudajiantoux"></view>
				</view>
			</view>
			<!-- 选择 -->
			<view class="style2-coupon-box selectedBorder">
				<view class="style2-coupon">选择</view>
				<view class="style2-to-coupon-box">
					<view class="style2-to-coupon-title fontColor ">已选：</view>
					<view class="iconfont icon-btn_xiangyoudajiantoux "></view>
				</view>
			</view>
			<!-- 配送时间 -->
			<view class="style2-coupon-box">
				<view class="style2-coupon">配送时间</view>
				<view class="style2-to-coupon-box">
					<view class="style2-to-coupon-title fontColor fontRight">拼团成功，次日送达</view>
				</view>
			</view>
		</view>
		<!-- 商品详情图片 -->
		<view class="productDetail-box">
			<view class="productDetail-title">商品详情</view>
			<view v-for="(item,index) in goodList.goods_content" :key="index">
				<image class="productDetail-img" mode="widthFix" :src="`${item.width_img}`"></image>
			</view>
		</view>
		<!-- 底部tabBar -->
		<view class="footFixed-box">
			<!-- 客服/首页 -->
			<view class="footFixed-left">
				<view class="footFixed-left-index">
					<image class="footFixed-left-indexImg" src="https://img.shop.haoyousheng.com.cn/wechat_icons/sxsy.svg"></image>
					<view class="footFixed-left-title">首页</view>
				</view>
				<view class="footFixed-left-service">
					<image class="footFixed-left-serviceImg" src="https://img.shop.haoyousheng.com.cn/wechat_icons/product_contact_v2.svg"></image>
					<view class="footFixed-left-title">客服</view>
				</view>
			</view>
			<!-- 购物车 -->
			<view class="footFixed-right">
				<view class="footFixed-right-buy">
					<view class="footFixed-right-price"><text class="footFixed-right-compnay">￥</text>{{Number(goodList.market_price)}}</view>
					<view class="buy-team-title">单独购买</view>
				</view>
				<view class="footFixed-right-team">
					<view class="footFixed-right-price"><text class="footFixed-right-compnay">￥</text>{{Number(goodList.shop_price)}}</view>
					<view class="buy-team-title">一键开团</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true, //播放指示器
				autoplay: true, //自动播放
				interval: 3000, //播放定时
				goodList: [], //保存请求过来的商品信息
			}
		},
		onLoad() {
			this.getGoodList();
		},
		methods: {
			// 获取商品信息
			getGoodList() {
				uni.request({
					url: this.$globalVariable.hostUrl + "/goods/goodsInfo",
					method: "POST",
					data: {
						goods_id: 2915
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.goodList = res.data.result;
						console.log("123res:", this.goodList);
					},
					fail: err => {

					}
				})
			}
		}
	}
</script>
<style lang="scss">
	/* 轮播图 */
	.swiper-box {
		width: 100%;
		height: 750upx;
	}
	/* 轮播图片 */
	.swiper-item-img {
		width: 100%;
		height: 100%;
	}

	/* 商品名称和评论的大盒子 */
	.goodName-market-box,
	/* 价格盒子 */
	.price-box {
		width: 100%;
		box-sizing: border-box;
		padding: 24upx;
	}
	/* 商品名称 */
	.goodName {
		font-size: 32upx;
		font-weight: 500;
		line-height: 40upx;
		color: #000;
	}
	/* 商品评论 */
	.goodRemark {
		font-size: 24upx;
		color: #aaa;
		overflow: hidden;
	}
	/* 中间部分样式布局2 */
	.style2-team-bar{
		width:750upx;
		height:120upx;
		padding: 10upx 24upx;
		box-sizing: border-box;
		background:-webkit-linear-gradient(left, #FFEA86 , #FFE150);
		position: relative;
	}
	/* ”两人团“ */
	.style2-two-team{
		width:80upx;
		color:#303030;
		font-size: 24upx;
		border:1upx solid #303030;
		border-radius: 8upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 价格的盒子 */
	.style2-price-box{
		width: 100%;
		display: flex;
		align-items: flex-end;
	}
	/* 店价格单位 */
	.style2-shopPrice-company{
		font-size: 24upx;
		font-weight: 500;
		color: #303030;
		line-height: 56upx;
	}
	/* 店价格 */
	.style2-shop-price{
		font-size:56upx;
		color:#303030;
		font-weight: 700;
	}
	/* 市场价格 */
	.stytle2-market-price{
		font-size: 24upx;
		color: #303030;
		line-height: 56upx;
		margin-left:14upx;
		text-decoration: line-through;
	}
	/* 倒计时 */
	.style2-countDown{
		position:absolute;
		right:24upx;
		top:50%;
		transform: translateY(-50%);
		text-align: center;
	}
	.style2-countDown-title{
		font-size: 24upx;
		font-weight: 500;
		color: #303030;
	}
	.style2-goodName-remark{
		width:100%;
		padding:24upx;
		box-sizing: border-box;
	}
	.style2-goodsName{
		width: 100%;
		font-size: 32upx;
		color: #000;
		line-height: 40upx;
		font-weight: 500;
	}
	.style2-remark{
		font-size: 24upx;
		color:#aaa;
	}
	/* 灰色横条 */
	.gray-hr{
		width:100%;
		height:16upx;
		background-color:#f2f2f2;
	}
	/* 优惠券和去领券中心盒子 */
	.style2-coupon-box{
		display: flex;
		padding:0 24upx;
		height:84upx;
		line-height:84upx;
		background-color:#fff;
		border-bottom: 16rpx solid #f2f2f2;
	}
	.selectedBorder{
		border-bottom: 1px solid #f0f0f0 !important; 
	}
	// “优惠券”
	.style2-coupon{
		color:#aaa;
		font-size:24upx;
		width: 15%;
		line-height: 84upx;
	}
	// "去领券中心盒子"
	.style2-to-coupon-box{
		position: relative;
		flex:1;
		.style2-to-coupon-title{
			position: absolute;
			right:25upx;
			top:50%;
			transform: translateY(-50%);
			font-size:24upx;
			font-weight:500;
			color:#EB3C39;
			text-align: right;
			line-height:1.1;
		} 
		.fontColor{
			color:#333 !important;
		}
		.fontRight{
			right:0 !important;
		}
		.icon-btn_xiangyoudajiantoux{
			position: absolute;
			top: 50%;
			right: 0upx;
			transform: translateY(-50%);
			color: #333;
			font-weight: 500;
			font-size: 24upx;
			line-height: 1.3;
		}
	}
	/*  */
	/* "商品详情" */
	.productDetail-title {
		font-size: 28upx;
		font-weight: 600;
		color: #555;
		margin-top:40upx;
		padding:24upx 24upx 0 24upx;
		background-color: #fff;
		transform: translateY(-50%);

	}
	/* 商品详情图片 */
	.productDetail-img {
		width: 100%;
	}
	/* 底部固定按钮 */
	.footFixed-box {
		width: 100%;
		height: 96upx;
		display: flex;
		position: fixed;
		bottom: 0;
		background-color: #fff;
	}

	/* 左边的首页和客服 */
	.footFixed-left {
		width: 28%;
		display: flex;
		padding: 0 19upx;
		box-sizing: border-box;
	}

	/* 首页按钮 */
	.footFixed-left-index,
	.footFixed-left-service {
		width: 92upx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.footFixed-left-indexImg,
	.footFixed-left-serviceImg {
		width: 54upx;
		height: 54upx;
	}

	/* 客服 */
	.footFixed-left-service {}

	.footFixed-left-title {
		font-size: 20upx;
		color: #000;
	}

	/* 右边的立即购买和一键开团 */
	.footFixed-right {
		width: 72%;
		display: flex;
		box-sizing: border-box;
	}

	/* 单独购买 */
	.footFixed-right-buy,
	.footFixed-right-team {
		height: 96upx;
		line-height: 1.5;
		color: #fff;
		font-size: 32upx;
		padding: 0 10upx;
		text-align: center;
	}
	/* 右边的“一键购买” */
	.footFixed-right-buy {
		width: 220upx;
		background-color: #303030;
	}

	/* 一键开团 */
	.footFixed-right-team {
		width: 368upx;
		color: #303030;
		background-color: #FFE150;
	}
	/* 右边的价格单位 */
	.footFixed-right-compnay {
		font-size: 24upx;
		margin-right: 5upx;
	}
	/* 右边的价格 */
	.footFixed-right-price {
		font-size: 36upx;
		font-weight: 500;
	}
	/* "单独购买与一键开团" */
	.buy-team-title {
		font-size: 24upx;
	}
</style>
