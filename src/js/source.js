var vm = new Vue({
  el: '#app',
  data() {
    return {
      datasource: []
    }
  },
  mounted() {
    $.getJSON('/data/datasource.json').success((data) => {
      this.datasource = data
    })
  }
})
