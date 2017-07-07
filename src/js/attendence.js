Highcharts.chart('attendence', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '2016 中興大學 學生代表大會出席率',
    style: {
      fontSize: '2em'
    }
  },
  xAxis: {
    categories: ['中文三 張喬筑', '歷史三 張維倫', '農藝二 林佩融', '農藝三 林哲詳', '資管三 羅少甫', '植病三 王思翀', '植病三 王俊翔', '園藝三 周　平', '園藝三 蘇　晏', '化學二 歐奕昇', '土環三 張　綸', '生科三 林育鋒', '生科三 劉德枏', '生科三 劉峻辰', '生技三 陳威羽', '生技四 李耕佑', '動科四 陳欣妤', '材料三 劉晏文', '景觀三 林冠全', '景觀三 李愉庭', '會計二 邱品儒', '會計二 蘇虹綺', '資工二 彭顯詠', '資工二 莊士賢', '應經三 林易緯', '應經三 王怡靜', '獸醫三 王守心', '獸醫三 楊傑宇', '機械三 劉昱祥', '機械三 蔡天文', '機械三 李育德', '應數三 粘明揚', '應數三 簡雅慧', '應數三 張家綸'],
    labels: {
      style: {
        fontSize: '1.4em'
      }
    }
  },
  yAxis: {
    min: 0,
    max: 14,
    title: {
      text: '總出席次數'
    },
    labels: {
      style: {
        fontSize: '1.4em'
      }
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      name: '未公開',
      color: '#EEEEEE',
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5]
    },
    {
      name: '解職',
      color: '#3E467F',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 0, 9, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: '缺席',
      color: '#395EA6',
      data: [7, 2, 7, 7, 6, 4, 5, 5, 7, 8, 1, 4, 5, 9, 9, 0, 7, 0, 9, 10, 0, 5, 0, 1, 7, 9, 4, 6, 7, 8, 7, 8, 4, 5]
    },
    {
      name: '請假',
      color: '#2EA1D9',
      data: [5, 0, 0, 0, 4, 1, 2, 6, 2, 0, 1, 1, 2, 2, 2, 0, 0, 2, 0, 2, 2, 7, 2, 1, 1, 1, 6, 2, 1, 1, 3, 3, 3, 4]
    },
    {
      name: '出席',
      color: '#95EFCE',
      data: [0, 10, 5, 5, 2, 7, 5, 1, 3, 4, 0, 7, 5, 1, 1, 12, 5, 0, 3, 0, 0, 0, 0, 0, 4, 1, 2, 4, 4, 3, 2, 1, 5, 0]
    }
  ]
})