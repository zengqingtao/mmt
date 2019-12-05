<template>
	<view class="uni-container">
		<view class="promise-item">
			<view class="iconfont icon-yuanzhuangzhengpin"></view>
			<view class="promise-text">原装正品</view>
		</view>
		<view class="promise-item">
			<view class="iconfont icon-img_jisutihuox"></view>
			<view class="promise-text">次日送达</view>
		</view>
		<view class="promise-item">
			<view class="iconfont icon-bianjietihuo"></view>
			<view class="promise-text">便捷提货</view>
		</view>
		<view class="promise-item">
			<view class="iconfont icon-fangxingoumai"></view>
			<view class="promise-text">放心购买</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.uni-container{
		height:80upx;
		display: flex;
		align-items: center;
		justify-content:space-between;
		padding: 0 48upx;
		box-sizing: border-box;
		color:#303030;
	}
	.promise-item{
		display: flex;
		align-items: center;
	}
	/* 所有icon图标的样式 */
	.icon-yuanzhuangzhengpin,.icon-img_jisutihuox,.icon-bianjietihuo,.icon-fangxingoumai{
		font-size: 22upx;
		line-height: 24upx;
		margin-right:8upx;
	}
	/* 字体的样式 */
	.promise-text{
		font-size:22upx;
		line-height: 26upx;
	}
</style>
