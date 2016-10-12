import '../css/Custom.css';
import Vue from 'vue';

console.log("a");
var a =
	`<h6>
	ddddffdd
</h6>
`


$(document).ready(function () {
	console.log(a);
	//$("body").html(a);
})
window.onload = function () {
	var myViewModel = new Vue({
		el: '#my_view',
		data: { a: "456" },
		methods: {
			test: function () {
				this.a = a;
				// console.log(this.a);
				// console.log(a);
				// console.log(window.a)
			}
		}
	});
}