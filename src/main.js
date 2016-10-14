import '../css/Custom.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import HeaderApp from './component/header';
import FooterApp from './component/footer';

import VueRouter from 'vue-router';

import Bus from './bus';



$(document).ready(function () {
	//console.log(a);
	//最終會是index執行，所以預設目錄會是跟目錄，要注意
	//$("#header-jq").load("layout/header.html");
})

const Foo = { template: '<transition name="slide-fade"><div>foo</div></transition>' }
const Bar = { template: '<div>bar</div>' }
const User = {
	template: `
    <div class="user">
    	<router-link to="/user/bar/profile">Go to profile</router-link>
    	<router-link to="/user/bar/posts">Go to posts</router-link>
      	<h2>User {{ $route.params.id }}</h2>
      	<router-view></router-view>
    </div>
  `
}

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
	{
		path: '/user/:id', 
		//component:User,
		components: {
			default:User,
			a: { template: '<div>a??</div>' }
		},
		children: [
			{
				// 当 /user/:id/profile 匹配成功，
				// UserProfile 会被渲染在 User 的 <router-view> 中
				path: 'profile',
				component: { template: '<div>profile</div>' }
			},
			{
				// 当 /user/:id/posts 匹配成功
				// UserPosts 会被渲染在 User 的 <router-view> 中
				path: 'posts',
				component: { template: '<div>posts</div>' }
			}
		]
    }
]

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

Vue.config.degub = false;
window.onload = function () {
	Vue.use(VueRouter);

	const app = new Vue({
		el: '#container',
		data: { a: "456",go:0 },
		components: {
			HeaderApp, FooterApp
		},
		router,
		methods:{
			routerTo:function(target){
				router.push(target);
			},
			routerGo:function(target){
				router.go(target);
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