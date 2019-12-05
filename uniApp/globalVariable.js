const requestHeader = {
	"x-application": "goodBuy",
	// "X-Authorization": ,
	// x-ca-key: 24814519
	// x-ca-nonce: F7B061A5-FB28-475C-9A2B-DDEFAECB903B
	// x-ca-signature: tZeWC6vTnc0HEPQkdOw1eo0BnCNibSP9HUIVRrssz6k=
	// x-ca-signature-headers: x-ca-key,x-ca-nonce,x-ca-stage,x-ca-timestamp
	// x-ca-stage: RELEASE
	// x-ca-systemInfo: {"model":"iPhone 5","pixelRatio":2,"windowWidth":320,"windowHeight":520,"system":"iOS 10.0.1","language":"zh","version":"7.0.4","screenWidth":320,"screenHeight":568,"SDKVersion":"2.8.0","brand":"devtools","fontSizeSetting":16,"batteryLevel":100,"statusBarHeight":20,"safeArea":{"right":320,"bottom":568,"left":0,"top":20,"width":320,"height":548},"platform":"devtools"}
	"x-ca-timestamp": 1567663277,
	"X-PickUp": 35,//如果使用测试的url这里是35,正式服是24
	"x-platform": "wx",
	"x-useragent": "host",
	"x-ver": "v1.3.8",
	"X-WAREHOUSE": 7,
	"Content-Type":"application/x-www-form-urlencoded"
}
// 测试服务器地址
const hostUrl = "https://api-t.st-llshop.surex.cc/v1"
// 正式服务器地址
// const hostUrl = "https://wx.shop.haoyousheng.com.cn/v1"
// 图片地址
const imgUrl = "https://img.shop.haoyousheng.com.cn"
export default {
	requestHeader,
	hostUrl,
	imgUrl
}