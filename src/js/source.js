var vm = new Vue({
  el: '#source',
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
