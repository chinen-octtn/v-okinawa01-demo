var app = new Vue({
  el: '#app',

  data: {
    message: 0,
    // listData: ['リスト1', 'リスト2', 'リスト3', 'リスト4']
  },

  methods: {
    countUp: function() {
      this.message++;
    }
  }
});