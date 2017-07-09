var vm = new Vue({
  el: '#attendence_2',
  data() {
    return {
      datasource: [],
      info: [{'title': '臨會01','date': '105.06.28'}, {'title': '臨會02','date': '105.08.24'}, {'title': '常會1-1','date': '105.09.19'}, {'title': '常會1-2','date': '105.10.11'}, {'title': '常會1-3','date': '105.10.25'}, {'title': '常會2-1','date': '105.11.29'}, {'title': '常會2-2','date': '105.12.19'}, {'title': '常會2-2補','date': '105.12.27'}, {'title': '常會3-1','date': '106.03.02'}, {'title': '常會3-2','date': '106.04.08'}, {'title': '常會4-1','date': '106.05.04'}, {'title': '常會4-2','date': '106.05.18'}, {'title': '常會4-3','date': '106.06.05'}, {'title': '臨會03','date': '106.06.26'}]
    }
  },
  mounted() {
    $.getJSON('/data/infographics/attendence_2.json').success((data) => {
      this.datasource = data
    })
  }
})
