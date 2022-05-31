<template>
  <LineChart
    :white-theme="true"
    class="p-4 pl-2 pr-0"
    :height="200"
    :data="graphData"
  />
</template>

<script>
import LineChart from '~/components/LineChart'

export default {
  name: 'FileInfo',
  components: {
    LineChart
  },
  data () {
    return {
      graphData: {
        labels: [],
        datasets: [
          {
            label: 'Index Value',
            data: [],
            backgroundColor: ['transparent'],
            borderColor: ['#21897E'],
            pointBackgroundColor: '#21897E',
            tension: 0.1
          }
        ]
      }
    }
  },
  created () {
    // Mock stock data
    const data = [
      {
        price: 6242.29,
        volume_24h: 4681670000,
        market_cap: 106800038746.48,
        timestamp: '2018-06-22T19:29:37.000Z'
      },
      {
        price: 6242.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:34:33.000Z'
      },
      {
        price: 6252.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:39:33.000Z'
      },
      {
        price: 6288.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:44:33.000Z'
      },
      {
        price: 6402.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:49:33.000Z'
      },
      {
        price: 6294.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:54:33.000Z'
      },
      {
        price: 6319.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T19:59:33.000Z'
      },
      {
        price: 6380.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T20:04:33.000Z'
      },
      {
        price: 6424.82,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2018-06-22T20:09:33.000Z'
      }
    ]
    // Create graph points and add labels when the day changes, probably needs date parsing like moments.js
    data.map((item) => {
      const date = item.timestamp.split('T')[0]
      if (!this.graphData.labels.includes(date)) {
        this.graphData.labels.push(date)
      } else {
        this.graphData.labels.push('')
      }
      this.graphData.datasets[0].data.push(item.price)
    })
  }
}
</script>

<style scoped>

</style>
