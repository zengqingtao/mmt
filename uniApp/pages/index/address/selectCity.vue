<template>
	<view class="uni-container">
		<!-- 定位 -->
		<view class="position">
			<view>定位</view>
			<view class="city iconfont icon-btn_shouyedingweix">
				<text class="cityName">{{cityName}}</text>
			</view>
		</view>
		<view class="">
			<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
		</view>
	</view>
</template>

<script>
	import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
	export default {
		data() {
			return {
				cityName:"莆田市",
				list: [{
					"letter": "p",
					"data": [
						"莆田市"
					]
				}, {
					"letter": "g",
					"data": [
						"广州市"
					]
				}]
			}
		},
		components: {
			uniIndexedList,
		},
		methods: {
			// 选择城市，跳转并传参
			bindClick(e){
				this.cityName = e.item.name;
				uni.navigateTo({
				    url: `selectAddress?cityName=${this.cityName}`
				});
			}
		}
	}
</script>

<style>
/*  */
.icon-btn_shouyedingweix{
	color:#FFB400;
}
.position{
	margin-left:24upx;
}
.city{
	width:250upx;
	height:60upx;
	border:2upx solid #999999;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-wrap:nowrap;
}
.cityName{
	color: #333;
	margin-left:10upx;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>
