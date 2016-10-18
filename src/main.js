import '../css/Custom.css';
import "bootstrap/dist/css/bootstrap.css";//最後會一起產出bundle.css

import Vue from 'vue';
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import router from './router';

import Vuex from 'vuex';
import store from './store';

//mapActions 功能類似mapState

import Bus from './bus';

import HeaderApp from './component/header';
import FooterApp from './component/footer';

// $(document).ready(function () {
// 	//console.log(a);
// 	//最終會是index執行，所以預設目錄會是跟目錄，要注意
// 	//$("#header-jq").load("layout/header.html");
// })

Vue.config.debug = false;

window.onload = function () {

	const app = new Vue({
		el: '#container',
		data: { a: "456", go: 0 },
		components: {
			HeaderApp, FooterApp
		},
		router,
		store,
		methods: {
			routerTo: function (target) {
				router.push(target);
			},
			routerGo: function (target) {
				router.go(target);
			},
			add: function () {
				//store.commit('increment');
				store.dispatch({
					type: 'incrementAsync',
					amount: 10
				});
			}
		},
		computed: {
			count() {
				return store.state.a.count
			}
		}
	});//.$mount('#container')
	
	// Vue.use(VueResource);
	// var vm = new Vue({
	// 	el: '#container',
	// 	data: { a: "456" },
	// 	components:{ 
	// 		HeaderApp
	// 	},
	// 	router,
	// 	methods: {
	// 		test: function () {
	// 			this.a = "898";
	// 			this.$http.post("app.55104.com.tw:8080/library/android_connect_db.php",{
	// 				table:"getNews4Cell"
	// 			}).then(
	// 				data=>{
	// 					console.log(data);
	// 				},error=>{
	// 					console.log(error);
	// 			});
	// 		}
	// 	},
	// 	created: function () {
	// 		Bus.$on('chg', function (child) {
	// 			vm.a = "888";
	// 			console.log(child)
	// 		})
	// 	}
	// });
}