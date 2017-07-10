var vm = new Vue({
  el: '#app',
  data() {
    return {
      datasource: []
    }
  },
  mounted() {
    $.getJSON('/data/datasource/sg2016_1.json').success((data) => {
      this.datasource = data
    })
  }
})
