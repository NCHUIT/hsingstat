var vm = new Vue({
  el: '#infographics',
  data() {
    return {
      infographics: []
    }
  },
  mounted() {
    $.getJSON('/data/infographics.json').success((data) => {
      this.infographics = data
    })
  },
})
