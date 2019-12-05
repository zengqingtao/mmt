<template>
	<view class="uni-container">
		<view class="fixedBox">
			<view class="tips">特别提醒：请正确选择您工作或生活所在工厂，以免发生无法进入而不能提货的情况。 </view>
			<!-- 选择城市和工厂 -->
			<view class="select-city-factory">
				<!-- 城市 -->
				<navigator class="cityName" url="selectCity" id="cn">{{cityName}}</navigator>
				<view class="iconfont icon-btn_sanjiaoxiaojiantoux"></view>
				<!-- 工厂 -->
				<text class="sg">|</text>
				<view class="iconfont icon-img_sousuox"></view>
				<input placeholder="请输入工厂名称" class="factoryName">
			</view>
			<!-- 黄色提示 -->
			<view class="yellow-tips">
				<image class="bg-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/img_pick_select_bg01.png"></image>
				<text class="tips-text">选择自己所在的工厂</text>
				<image class="fork-img" src="https://img.shop.haoyousheng.com.cn/wechat_icons/btn_pick_select-closs.png"></image>
			</view>
			<view class="allFactory_position">
				<view class="allFactory">全部工厂</view>
				<view class="position">定位</view>
			</view>
		</view>
		<view class="factory_list">
			<view v-for="(item,index) in pList" :key="index">
				<view class="factory-letter">{{item.letter}}</view>
				<view class="factory-data-box">
					<view class="fName" v-for="(item,index) in item.data" :key="index">{{item}}</view>
				</view>
			</view>
		</view>
		<!-- 右边的字母 -->
		<view class="letter">
			<view class="letter-item" v-for="(item,index) in wordArr" :key="index">{{item}}</view>
		</view>
		<!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cityName: '莆田市',
				list: [], //保存未排版好的工厂数据
				pList: [], //保存排版后的工厂数据
				wordArr: [], //保存字母数组
			}
		},
		onLoad(options) {
			this.cityName = options.cityName || '莆田市';
			this.getFactorys();
		},
		created() {

		},
		methods: {
			// 请求工厂
			getFactorys() {
				uni.request({
					url: 'https://wx.shop.haoyousheng.com.cn/v1/pickup/pickuplistr',
					method: 'post',
					data: {
						warehouse_id: 3
					},
					success: res => {
						var data = res.data.result.cities;
						for (var i = 0; i < data.length; i++) {
							var py = data[i].py.charAt(0).toUpperCase(); //保存首字母
							var cName = data[i].cityName; //保存城市名称
							var Obj = {
								"letter": '',
								"data": []
							}; // 保存字母和城市的子对象
							Obj.letter = py;
							Obj.data.push(cName);
							if (this.list.length == 0 || this.wordArr.indexOf(py) == -1) {
								this.list.push(Obj);
								this.wordArr.push(py); //当list的长度为0时和当前py不在字母数组时，把字母加入到数组
							} else {
								for (var j = 0; j < this.list.length; j++) {
									if (this.list[j].letter == py) {
										this.list[j].data.push(cName);
									}
								}
							}
						}
						//对字母数组排序
						this.wordArr.sort();
						// 对数据进行按字母顺序排版
						for (var i = 0; i < this.wordArr.length; i++) {
							var w = this.wordArr[i]
							for (var j = 0; j < this.list.length; j++) {
								if (w == this.list[j].letter) {
									this.pList.push(this.list[j]);
								}
							}
						}
					},
					fail: (err) => {

					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.fixedBox {
		position: fixed;
		background-color: #fff;
		z-index: 50;
	}

	.fixedBox:after {
		content: "";
		display: block;
		clear: both;
	}

	/* 温馨提示*/
	.fixedBox>.tips {
		height: 100rpx;
		color: #FFB400;
		font-size: 28rpx;
		font-weight: 500;
		padding: 12rpx 24rpx;
		background-color: #FFFBE6;
		box-sizing: border-box;
	}

	/* 选择工厂和名称 */
	.select-city-factory {
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		margin: 15rpx 50rpx;
		background-color: #F3F3F3;
	}

	.cityName {
		font-size: 26rpx;
		color: #333;
		margin-left: 26rpx;
	}

	.icon-btn_sanjiaoxiaojiantoux {
		font-size: 20rpx;
		padding-left: 8rpx;
	}

	.icon-img_sousuox {
		color: #555;
		margin-left: 10rpx;
	}

	.factoryName {
		margin-left: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
	}

	/* 竖杆 */
	.select-city-factory .sg {
		margin-left: 10upx;
		font-size: 28upx;
		color: #E0E0E0;
	}

	.allFactory_position {
		display: flex;
		margin-top:36upx;
		padding: 0 32upx;
		justify-content: space-between;
		align-items: flex-end;
	}

	.allFactory_position>.allFactory {
		color: #746B64;
		font-size: 28upx;
	}

	.allFactory_position>.position {
		color: #908E9A;
		font-size: 24upx;
	}

	/* 黄色提示 */
	.yellow-tips {
		position: absolute;
		top: 160rpx;
		left: 20rpx;
		z-index: 99;

		.bg-img {
			width: 296upx;
			height: 54upx;
		}

		.tips-text {
			position: absolute;
			top: 8upx;
			left: 20upx;
			font-size: 24upx;
			color: #555;
		}

		.fork-img {
			width: 24upx;
			height: 24upx;
			position: absolute;
			top: 15upx;
			right: 20upx;
		}
	}

	/* 工厂列表*/
	.factory_list {
		padding: 254upx 32upx 0 32upx;
	}

	.factory-letter {
		background-color: #F3F7F8;
		font-size: 32upx;
		color: #46595F;
		font-weight: bold;
		height: 60upx;
		line-height: 60upx;
		padding: 0 32upx;
	}

	.fName {
		height: 88upx;
		line-height: 88upx;
		color: #46595F;
		font-size: 32upx;
		border-bottom: 1upx solid #DEE4E4;
	}
	.fName:last-child{
		border-bottom:none !important;
	}
	/* 字母 */
	.letter {
		position: fixed;
		right: 44upx;
		top: 334upx;
	}

	.letter-item {
		font-size: 24upx;
		line-height: 34upx;
		color: #888;
		padding: 2upx;
		text-align: center;
	}
</style>
