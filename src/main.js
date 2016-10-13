import '../css/Custom.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import HeaderApp from './component/header';



$(document).ready(function () {
	//console.log(a);
	//最終會是index執行，所以預設目錄會是跟目錄，要注意
	$("#header-jq").load("layout/header.html");
})
Vue.config.degub = false;
window.onload = function () {
	Vue.use(VueResource);
	var myViewModel = new Vue({
		el: '#container',
		data: { a: "456" },
		components:{ HeaderApp },
		methods: {
			test: function () {
				this.$http.post("app.55104.com.tw:8080/library/android_connect_db.php",{
					table:"getNews4Cell"
				}).then(
					data=>{
						console.log(data);
					},error=>{
						console.log(error);
				});
				//this.a = a;
				// console.log(this.a);
				// console.log(a);
				// console.log(window.a)
			}
		}
	});
}