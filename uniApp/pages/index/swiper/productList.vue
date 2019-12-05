<template>
	<view class="uni-container">
		<image class="top-image" :src="`${topImage.prom_img}`"></image>
		<view class="goodList">
			<view class="goods-item" v-for="(item,i) in goodList" :key="i">
				<!-- 打折 -->
				
				<!-- 商品图片 -->
				<view class="goods-item-bgBox">
					<view class="goods-item-discount">{{item.img_content}}</view>
					<image class="goods-item-bg" :src="`${item.list_img}`"></image>
				</view>
				<!-- 是否已抢光的图片 -->
				<view class="is-enough" v-if="`${item.is_enough}`==0?true:false">
					<image class="is-enough-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/inequacy02.png"></image>
				</view>
				<view>
					<view class="goods-item-title">{{item.goods_name}}</view>
					<view class="priceBox">
						<text class="goods-item-market-price">¥{{Number(item.shop_price)}}</text>
						<text class="goods-item-shop-price" v-if="`${item.shop_price}`==`${item.market_price}`?false:true">¥{{Number(item.market_price)}}</text>
					</view>
				</view>
			</view>
			<!-- 底部logo -->
			<view class="bottom-logo">
				<image class="bottom-logo-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/pageBottom-logo.png"></image>
			</view>
			<!-- 分享 -->
			<view class="share-btn">
				<image class="share-btn-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/button-icon-share01.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topImage:[],//
				goodList:[],//保存商品列表的数据
				subject_id:'',
			}
		},
		onLoad(options) {
			this.subject_id = options.ad_link;
			this.getTopImage();
			this.getGoodList();
		},
		methods:{
			// 请求头部图片
			getTopImage(){
				uni.request({
					url:this.$globalVariable.hostUrl+'/subject/subjectInfo',
					method: 'POST',
					data: {
						subject_id: this.subject_id
					},
					header:this.$globalVariable.requestHeader,
					success: res => {
						this.topImage = res.data.result;
					},
					fail: (err) => {
						alert(err);
					},
				});
			},
			// 请求商品列表
			getGoodList(){
				uni.request({
					url:this.$globalVariable.hostUrl+'/subject/subjectgoods',
					method: 'POST',
					data: {
						subject_id: this.subject_id,
						page: 1,
						page_size:10
					},
					header:this.$globalVariable.requestHeader,
					success: res => {
						console.log(res);
						this.goodList = res.data.result.lists;
					},
					fail: (err) => {
						alert(err);
					},
				});
			}
		}
	}
</script>

<style lang="scss">
	.top-image {
		width: 100%;
		height: 360upx;
	}
	/* 商品列表 */
	.goodList{
		padding:25upx;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
	}
	.goods-item{
		width:344upx;
		position:relative;
		background-color:#fff;
		flex: 0 0 344rpx;
		margin-bottom: 16rpx;
		border-radius: 8rpx;
		overflow: hidden;
	}
	.goods-item-bgBox{
		position: relative;
		.goods-item-discount{
			position: absolute;
			top:0upx;
			color:#fff;
			font-size:24upx;
			z-index:50;
			line-height: 34upx;
			margin:5upx 0 0 5upx;
			padding: 0 5upx;
		}
	}
	.goods-item-bg{
		width:344upx;
		height:344upx;
		margin-bottom: 12upx;
	}
	/* 是否已抢光 */
	.is-enough{
		width:344upx;
		height:344upx;
		background-color:rgba(0,0,0,0.36);
		position:absolute;
		top:0;
		border-radius:8upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.is-enough-img{
		width:176upx;
		height:72upx;
	}
	/* 商品标题 */
	.goods-item-title{
		width:100%;
		height:80upx;
		line-height:1.5;
		font-size:28upx;
		font-weight:500;
		color:#555;
		padding:0 10upx;
	}
	.priceBox{
		font-size:32upx;
		font-weight:500;
		padding:0 10upx;
		display: flex;
		align-items:center;
	}
	.goods-item-market-price{
		color:#DC0805;
	}
	.goods-item-shop-price{
		font-size:24upx;
		color: #aaa;
		margin-left:8upx;
		text-decoration: line-through;
	}
	/* 底部logo */
	.bottom-logo{
		width: 750upx;
		padding:48upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bottom-logo-img{
		width:750upx;
		height:28upx;
	}
	/* 分享按钮 */
	.share-btn{
		width:88upx;
		height:88upx;
		position: fixed;
		bottom: 40upx;
		right:20upx;
		background-color:transparent;
	}
	.share-btn-img{
		width:100%;
		height:100%;
		
	}
</style>
