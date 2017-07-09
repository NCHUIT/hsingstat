var vm = new Vue({
  el: '#app',
  data() {
    return {
      infographics: []
    }
  },
  mounted() {
    $.getJSON('/data/infographics.json').success((data) => {
      this.infographics = data
    })
  }
})
