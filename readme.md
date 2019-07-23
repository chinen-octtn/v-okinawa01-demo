# v-okinawa Vue.js/Nuxt.js meetup #1 初心者歓迎

イベントURL

https://v-okinawa.connpass.com/event/137113/

## Vue.js初級編

資料URL

https://speakerdeck.com/chinen/v-okinawa-meetup-number-1

### HTMLにVue.jsを読み込む

Vue.js公式のガイドを参照
https://jp.vuejs.org/v2/guide/

CDNで、

`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`

もしくはローカルにダウンロードして、

`<script src="js/vue.js"></script>`


### Vueインスタンス

> Vue.jsのコアとなる機能は、データを DOM に描画することを可能にするシステムです。（# v-okinawa Vue.js/Nuxt.js meetup #1 初心者歓迎

1. new Vue()でVue.jsの設定をしていく
2. Vueを適用するエリア（DOM）とデータ（data）の情報を記述する
3. Vue.jsのディレクティブで、if文やfor文も使える（v-if, v-for）
