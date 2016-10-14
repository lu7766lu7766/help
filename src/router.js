
import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapState } from 'vuex';


const Foo = { template: '<transition name="slide-fade"><div>foo</div></transition>' }
const Bar = {
	template: '<div>bar{{count}}</div>',
	computed: mapState({
		// 下列狀況結果是一樣的
		// count () {
		// 	return this.$store.state.count
		// }
		//count: state => state.count,
		count: 'count'
		//{}拿掉，改['count']
	})
	// 有多個計算屬性時這樣實現
	// computed: {
	// 	localComputed () { /* ... */ },
	// 	// 使用对象扩展运算符，将 mapState 返回的对象和外层其他计算属性混合起来
	// 	...mapState({
	// 		// ...
	// 	})
	// }
}
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
			default: User,
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

Vue.use(VueRouter);

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

export default router;
