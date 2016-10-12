# [Give Me A Hand](http://10.16.133.102:53515/StaticPage/Mission/index2.html) 

How to start project?

step1:
npm install 

step2
npm i webpack -g

step3:
npm start

step4: open your.html and include
<script src="src/vendor.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd8CIfC7a5QepYroYyRMwYxPSRx1sd9yA"></script>
<script src="src/ThisPageJS.min.js"></script>

step5: open browser
http://127.0.0.1:3000


如果有下npm start指令，在src資料夾中編輯*.js會自動產生*.min.js並且會把所有import自動塞進去，只需要引入這個檔案即可，就是step4的TThisPageJS.min.js


在工作區域不顯示不需要編輯的檔案
在 VS Code 按 ctrl + shift + p 打開指令視窗
輸入 Workspace Settings 編輯工作區組態設定，輸入
	"files.exclude": {
		"**/.git": true,
		"**/.svn": true,
		"**/.DS_Store": true,
		"**/*.ttf":true,
		"**/*.eot":true,
		"**/*.woff":true,
		"**/*.woff2":true,
		"**/*.svg":true,
		"**/*.min.js":true
	}
你頓時感覺清爽許多~~