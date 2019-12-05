<template>
	<view class="tabs">
		<!-- 顶部导航条 -->
		<view class="uni-tab-box">
			<view v-for="(tab,index) in tabBars" :key="index" class="uni-tab-item" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''"
			 :data-current="index" @click="ontabtap">
				{{tab.name}}
			</view>
		</view>
		<view class="product-box">
			<!-- 正在拼团 -->
			<navigator v-if="tabIndex==0&&teamList.length>0" url="../../productDetails/detail">
				<view class="" v-for="(item,index) in teamList" :key="index">
					<!-- 布局1和布局2只能显示一个 -->
					<!-- 样式布局1 -->
					<view class="style1-item" v-if="item.style==2">
						<!-- 图片与定时器 -->
						<view class="img-interval-box">
							<image class="img-interval-box-bigImg" :src="item.original_img"></image>
							<view></view>
						</view>
						<!-- 标题与价格.. -->
						<view class="title-price-box">
							<view class="title-price-box-goodsName">{{item.goods_name}}</view>
							<view class="title-price-box-goodsRemark">{{item.goods_remark}}</view>
							<view></view>
							<view class="style1-price-box">
								<view class="style1-priceTitle">拼团价</view>
								<view class="style1-shop-price">
									<text class="style1-shop-price-compnay">¥</text>
									{{Number(item.shop_price)}}
								</view>
								<view class="style1-market-price">¥{{Number(item.market_price)}}</view>
							</view>
							<view class="now-buy style1-now-buy">立即购买</view>
						</view>
					</view>
					<!-- 样式布局2 -->
					<view class="style2-item" v-if="item.style==1">
						<image class="style2-item-img" :src="`${item.original_img}`"></image>
						<view class="style2-item-right-box">
							<view class="style2-item-goodsName">{{item.goods_name}}</view>
							<view class="font-price">
								<view class="bargain-font">拼团价</view>
								<view class="price-box">
									<view class="shop_price">
										<text class="shop_price_company">¥</text>
										{{Number(item.shop_price)}}
									</view>
									<view class="market_price">¥{{Number(item.market_price)}}</view>
								</view>
							</view>
							<view class="now-buy">立即购买</view>
						</view>
					</view>
				</view>
			</navigator>


			<!-- 正在砍价 -->
			<view class="" v-if="tabIndex==1">
				<view class="" v-for="(item,index) in bargainList" :key="index">
					<!-- 布局1和布局2只能显示一个 -->
					<!-- 样式布局1 -->
					<view class="style1-item" v-if="item.style==2">
						<!-- 图片与定时器 -->
						<view class="img-interval-box">
							<image class="img-interval-box-bigImg" :src="item.original_img"></image>
							<view></view>
						</view>
						<!-- 标题与价格.. -->
						<view class="title-price-box">
							<view class="title-price-box-goodsName">{{item.goods_name}}</view>
							<view class="title-price-box-goodsRemark">{{item.goods_remark}}</view>
							<view></view>
							<view class="style1-price-box">
								<view class="style1-priceTitle">最低价</view>
								<view class="style1-shop-price">
									<text class="style1-shop-price-compnay">¥</text>
									{{Number(item.shop_price)}}
								</view>
								<view class="style1-market-price">¥{{Number(item.market_price)}}</view>
							</view>
							<view class="now-buy style1-now-buy">立即购买</view>
						</view>
					</view>
					<!-- 样式布局2 -->
					<view class="style2-item" v-if="item.style==1">
						<image class="style2-item-img" :src="`${item.original_img}`"></image>
						<view class="style2-item-right-box">
							<view class="style2-item-goodsName">{{item.goods_name}}</view>
							<view class="style2-item-goodsRemark">{{item.goods_remark}}</view>
							<view class="style2-team-ticket-box">
								<view class="style2-team-ticket">拼团卷</view>
							</view>
							<view class="font-price">
								<view class="bargain-font">最低价</view>
								<view class="price-box">
									<view class="shop_price">
										<text class="shop_price_company">¥</text>
										{{Number(item.shop_price)}}
									</view>
									<view class="market_price">¥{{Number(item.market_price)}}</view>
								</view>
							</view>
							<view class="now-buy">马上抢</view>
						</view>
					</view>
				</view>
			</view>



			<!-- 即将开团 -->
			<view class="" v-if="tabIndex==2">
				<view class="" v-for="(item,index) in openList" :key="index">
					<!-- 布局1和布局2只能显示一个 -->
					<!-- 样式布局1 -->
					<view class="style1-item" v-if="item.style==2">
						<!-- 图片与定时器 -->
						<view class="img-interval-box">
							<image class="img-interval-box-bigImg" :src="item.original_img"></image>
							<view></view>
						</view>
						<!-- 标题与价格.. -->
						<view class="title-price-box">
							<view class="title-price-box-goodsName">{{item.goods_name}}</view>
							<view class="title-price-box-goodsRemark">{{item.goods_remark}}</view>
							<view></view>
							<view class="style1-price-box">
								<view class="style1-priceTitle">拼团价</view>
								<view class="style1-shop-price">
									<text class="style1-shop-price-compnay">¥</text>
									{{Number(item.shop_price)}}
								</view>
								<view class="style1-market-price">¥{{Number(item.market_price)}}</view>
							</view>
							<view class="now-buy remind style1-now-buy">提醒我</view>
						</view>
					</view>
					<!-- 样式布局2 -->
					<view class="style2-item" v-if="item.style==1">
						<image class="style2-item-img" :src="`${item.original_img}`"></image>
						<view class="style2-item-right-box">
							<view class="style2-item-goodsName">{{item.goods_name}}</view>
							<view class="font-price">
								<view class="bargain-font">拼团价</view>
								<view class="price-box">
									<view class="shop_price">
										<text class="shop_price_company">¥</text>
										{{Number(item.shop_price)}}
									</view>
									<view class="market_price">¥{{Number(item.market_price)}}</view>
								</view>
							</view>
							<view class="now-buy remind">提醒我</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 没有货显示 -->
		<!-- 被点击到的对应的商品数组长度为0是显示，否则隐藏 -->
		<view class="goodListIsNull" v-if="(teamList.length==0 && tabIndex==0) ||(bargainList.length==0 && tabIndex==1) ||(openList.length ==0 && tabIndex==2)">
			<image class="goodListIsNull-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/buhuoindex.png"></image>
			<view class="goodListIsNull-title">小提正在努力补货中，敬请期待~</view>
		</view>
		<!-- 底部logo -->
		<view class="bottom-logo" v-if="(teamList.length>0 && tabIndex==0) ||(bargainList.length>0 && tabIndex==1) ||(openList.length>0 && tabIndex==2)">
			<image class="bottom-logo-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/pageBottom-logo.png"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				teamList: [],//保存正在拼团的商品
				bargainList:[],//保存正在砍价的商品
				openList:[],//保存马上开团的商品
				tabBars: [{
					name: '正在拼团'
				}, {
					name: '正在砍价'
				}, {
					name: '即将开团'
				}],

			}
		},
		created() {
			this.getTeamList();//正在拼团
		},
		onPageScroll(e) { //nvue暂不支持滚动监听，可用bindingx代替
			console.log(e);
			console.log("滚动距离为：" + e.scrollTop);
		},
		methods: {
			// 顶部导航
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				if(this.tabIndex == index){
					return
				}else if(index == 0){
					this.getTeamList();//正在拼团
				}else if(index == 1){
					this.getBargainList();//正在砍价
				}else{
					this.getOpenList();//即将开团
				}
				this.tabIndex = index;
			},
			// 正在拼团
			getTeamList() {
				uni.request({
					url: this.$globalVariable.hostUrl + '/TeamActivity/index',
					method: 'POST',
					data: {
						page: 1,
						page_size: 20,
						type: 1
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.teamList = res.data.result.data;
					},
					fail: (err) => {
						
					},
				});
			},
			// 正在砍价
			getBargainList(){
				uni.request({
					url: this.$globalVariable.hostUrl + '/ActivityBargain/index',
					method: 'POST',
					data: {
						page: 1,
						page_size: 20
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.bargainList = res.data.result.data;
					},
					fail: (err) => {
						
					},
				});
			},
			// 马上开团
			getOpenList(){
				uni.request({
					url: this.$globalVariable.hostUrl + '/TeamActivity/index',
					method: 'POST',
					data: {
						page: 1,
						page_size: 20,
						type: 2
					},
					header: this.$globalVariable.requestHeader,
					success: res => {
						this.openList = res.data.result.data;
					},
					fail: (err) => {
						
					},
				});
			}
		}
	}
</script>

<style scoped>
	.uni-tab-box {
		/* #ifndef APP-PLUS-NVUE */
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		top: var(--window-top);
		z-index: 1;
		width: 100%;
		height: 96upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 54upx;
		font-size: 28upx;
		font-weight: 500;
		box-sizing: border-box;
		color: #aaa;
	}

	.uni-tab-item {
		width: 33%;
		text-align: center;
	}

	/* 选中后的字体样式 */
	.uni-tab-item-title-active {
		font-size: 34rpx;
		color: #333;
		line-height: 24rpx;
		margin-bottom: -16rpx;
	}

	/* 选中后显示的黄色横条 */
	.uni-tab-item-title-active:after {
		content: "";
		width: 108rpx;
		height: 16rpx;
		background-color: #ffe150;
		display: block;
		margin: 0 auto;
	}

	/* 选项卡下面的商品大盒子 */
	.product-box {
		width: 100%;
		box-sizing: border-box;
		padding: 0 24rpx;
	}

	/* 样式布局1 */
	.style1-item {
		width: 100%;
		background-color: #fff;
		margin-bottom: 10upx;
		border-bottom: 1upx solid #f0f0f0;
	}

	/* 图片与定时器的盒子 */
	.img-interval-box {
		width: 100%;
		height: 356upx;
		position: relative;
		overflow: hidden;
		border-radius: 4upx;
	}

	/* 大图片 */
	.img-interval-box-bigImg {
		width: 100%;
		height: 100%;
	}

	/* 图片下面的文字大盒子 */
	.title-price-box {
		width: 100%;
		padding: 12upx 12upx 12upx 0;
		position: relative;
		box-sizing: border-box;
		margin-bottom: 10upx;
	}

	.title-price-box-goodsName {
		font-size: 32upx;
		color: #303030;
		overflow: hidden;
	}

	.title-price-box-goodsRemark {
		font-size: 24upx;
		color: #aaa;
		min-height: 24upx;
	}

	/* 价格盒子 */
	.style1-price-box {
		height: 44upx;
		line-height: 44upx;
		margin-top: 5upx;
		font-weight: 500;
		display: flex;
		align-items: flex-end;
	}

	/* “拼团价” */
	.style1-priceTitle {
		width: 66upx;
		height: 22upx;
		line-height: 22upx;
		font-size: 18upx;
		text-align: center;
		margin-top: 3upx;
		padding: 0 4upx;
		color: #eb3c39;
		background-color: #ffd9d9;
		display: inline-block;
	}

	/* 店价格 */
	.style1-shop-price {
		font-size: 32upx;
		color: #dc0805;
		margin-left: 6upx;
		line-height: 22upx;
	}

	/* 店价格单位 */
	.style1-shop-price-compnay {
		font-size: 24upx;
		margin-right: 2upx;
	}

	/* 市场价格 */
	.style1-market-price {
		line-height: 22upx;
		font-size: 22upx;
		font-weight: 500;
		text-decoration: line-through;
		color: #aaa;
		margin-left: 12upx;
	}

	/* 样式布局2 */
	.style2-item {
		width: 100%;
		padding: 20upx 0;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1upx solid #f0f0f0;
	}

	/* 图片 */
	.style2-item-img {
		width: 220upx;
		height: 220upx;
	}

	/* 右边的盒子 */
	.style2-item-right-box {
		position: relative;
		padding: 0 0 0 24upx;
		flex: 1;
	}

	/* 商品名称 */
	.style2-item-goodsName {
		line-height: 36upx;
		font-size: 32upx;
		color: #303030;
	}
	/* 商品评论 */
	.style2-item-goodsRemark{
		font-size:24upx;
		color:#aaa;
		margin-top:2upx;
		overflow: hidden;
	}
	
	/* 拼团券 */
	.style2-team-ticket-box{
		display: flex;
		align-items:center;
		padding-top:6upx;
		box-sizing: border-box;
	}
	.style2-team-ticket{
		font-size:18upx;
		color:#d8b300;
		border: 2upx solid #d8b300;
		border-radius: 16upx;
		padding: 0 12upx;
	}
	/* 拼团价和价格大盒子 */
	.font-price {
		position: absolute;
		bottom: 0;
		left: 24upx;
	}

	/* 拼团价 */
	.bargain-font {
		width: 62upx;
		height: 22upx;
		line-height: 28upx;
		background-color: #ffd9d9;
		font-size: 18upx;
		text-align: center;
		color: #eb3c39;
		padding: 0 4upx;
		margin-bottom: 5upx;
	}

	/* 价格盒子 */
	.price-box {
		display: flex;
		/* align-items: flex-end; */
	}

	.shop_price {
		color: #eb3c39;
		font-size: 32upx;
		line-height: 22upx;
		font-weight: 500;
	}

	.shop_price_company {
		font-size: 24upx;
	}

	.market_price {
		height: 22upx;
		font-size: 22upx;
		color: #aaa;
		font-weight: 500;
		margin-left: 12upx;
		text-decoration: line-through;
	}

	/* 立即购买 */
	.now-buy {
		width: 144upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #eb3c39;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		border-radius: 32upx;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.style1-now-buy{
		bottom: 22upx !important;
	}
	/* 提醒我 */
	.remind{
		background-color:#ff6100;
	}

	/* 底部logo */
	.bottom-logo {
		width: 750upx;
		padding: 48upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 100upx;
	}

	.bottom-logo-img {
		width: 750upx;
		height: 28upx;
	}

	/* 商品为空时显示的内容样式 */
	.goodListIsNull {
		width: 100%;
		padding: 90upx 24upx;
		text-align: center;
		box-sizing: border-box;
	}

	.goodListIsNull-img {
		width: 318upx;
		height: 188upx;
	}

	.goodListIsNull-title {
		width: 100%;
		color: #aaa;
		font-size: 32upx;
		font-weight: 600;
		text-align: center;
		margin-top: 44upx;
	}
</style>
