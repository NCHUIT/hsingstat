var vm = new Vue({
  el: '#scSrc2016',
  data() {
    return {
      datasource: []
    }
  },
  mounted() {
    $.getJSON('/data/datasource/sc2016.json').success((data) => {
      this.datasource = data
    })
  }
})
