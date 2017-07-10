var vm = new Vue({
  el: '#app',
  data() {
    return {
      budget: [],
      active: 0,
      table_all: [],
      table_dept: [],
      table_subject: [],
      budgetData: []
    }
  },
  computed: {
    titles: function () {
      let title = [['款', '科', '目', '金額', '前一年差距'], ['款別', '金額', '前一年差距'], ['款', '科', '金額', '前一年差距']]
      return title[this.active]
    }
  },
  mounted() {
    $.getJSON('/data/infographics/sgbudget2016_1.json').success((data) => {
      this.budget = data

      // 將budget data做巢狀結構
      _.each(data, (val) => {
        let dept = val['款']
        let money = parseInt(val['金額'])
        let lastMoney = parseInt(val['前年度預算'])
        let detail = val['備註']

        // console.log(val)
        let deptIndex = _.findIndex(this.budgetData, {'label': dept})

        if (deptIndex == -1) {
          this.budgetData.push({'dept': dept, 'label': dept, 'amount': 0, 'last_amount': 0, 'children': [], 'detail': detail})
          deptIndex = _.findIndex(this.budgetData, {'label': dept})
        }
        this.budgetData[deptIndex]['amount'] += money
        this.budgetData[deptIndex]['last_amount'] += lastMoney
        this.budgetData[deptIndex]['children'].push(val)
      })
      $.each(this.budgetData, (ik, iv) => {
        let subjectData = []
        $.each(iv['children'], (jk, jv) => {
          let dept = jv['款']
          let subject = jv['科']
          let item = jv['目']
          let money = parseInt(jv['金額'])
          let lastMoney = parseInt(jv['前年度預算'])
          let detail = jv['備註']

          var subjectIndex = _.findIndex(subjectData, {'dept': dept, 'label': subject})

          if (subjectIndex == -1) {
            subjectData.push({'dept': dept, 'label': subject, 'amount': 0, 'last_amount': 0, 'children': [], 'detail': detail})
            subjectIndex = _.findIndex(subjectData, {'label': subject})
          }
          subjectData[subjectIndex]['amount'] += money
          subjectData[subjectIndex]['last_amount'] += lastMoney

          var itemData = {
            'dept': dept,
            'subject': subject,
            'label': item,
            'amount': money,
            'last_amount': lastMoney,
            'detail': detail
          }
          subjectData[subjectIndex]['children'].push(itemData)
        })
        this.budgetData[ik]['children'] = subjectData
      })
    }).then((data) => {
      _.each(data, (val) => {
        let dept = val['款']
        let subject = val['科']
        let item = val['目']
        let amount = _.parseInt(val['金額'])
        let lastMoney = _.parseInt(val['前年度預算'])

        let diffPrice = amount - lastMoney
        let diffPriceColor = this.diffPriceColor(diffPrice)
        let diffPercent = this.diffPercent(diffPrice, amount)

        this.table_all.push({
          dept: dept,
          subject: subject,
          item: item,
          amount: amount.toLocaleString('en-US'),
          diffPrice: diffPrice.toLocaleString('en-US'),
          diffPriceColor: diffPriceColor,
          diffPercent: diffPercent
        })
      })
      _.each(this.budgetData, (val) => {
        let dept = val.dept
        let amount = val.amount
        let lastMoney = val.last_amount

        let diffPrice = amount - lastMoney
        let diffPriceColor = this.diffPriceColor(diffPrice)
        let diffPercent = this.diffPercent(diffPrice, amount)

        this.table_dept.push({
          dept: dept,
          amount: amount.toLocaleString('en-US'),
          diffPrice: diffPrice.toLocaleString('en-US'),
          diffPriceColor: diffPriceColor,
          diffPercent: diffPercent
        })
      })

      _.each(this.budgetData, (iv, ik) => {
        _.each(iv['children'], (jv, jk) => {
          let dept = jv.dept
          let subject = jv.label
          let amount = jv.amount
          let lastMoney = jv.last_amount

          let diffPrice = amount - lastMoney
          let diffPriceColor = this.diffPriceColor(diffPrice)
          let diffPercent = this.diffPercent(diffPrice, amount)

          this.table_subject.push({
            dept: dept,
            subject: subject,
            amount: amount.toLocaleString('en-US'),
            diffPrice: diffPrice.toLocaleString('en-US'),
            diffPriceColor: diffPriceColor,
            diffPercent: diffPercent
          })
        })
      })
    })
  },
  methods: {
    diffPriceColor(diffPrice) {
      if (diffPrice > 0) {
        return 'upper'
      }
      else if (diffPrice < 0) {
        return 'lower'
      }else {
        return ''
      }
    },
    diffPercent(diffPrice, amount) {
      let prefix = ''
      if (amount === 0) {
        return ''
      }
      if (diffPrice < 0) {
        amount = amount * -1
        prefix = '-'
      }
      else if (diffPrice > 0) {
        prefix = '+'
      }

      let diffPercent = prefix + (diffPrice / amount * 100).toFixed(2) + '%'

      return diffPercent
    }
  }
})
