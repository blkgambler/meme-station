<template>
  <div class="row">
    <div class="border-mineshaft-100 bg-white border-b border-solid p-5 font-bold">
      Price History
    </div>
    <div class="flex flex-col flex-wrap bg-strange-blue-30">
      <LineChart
        :white-theme="true"
        class="py-4"
        :height="200"
        :data="graphData"
      />
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart'

export default {
  name: 'FileInfo',
  components: {
    LineChart
  },
  props: {
    price: {
      type: Number,
      default: 1500
    }
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
        price: this.price,
        volume_24h: 4681670000,
        market_cap: 106800038746.48,
        timestamp: '2021-06-01T19:29:37.000Z'
      },
      {
        price: this.price,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2021-06-01T19:34:33.000Z'
      },
      {
        price: this.price,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2021-06-01T19:39:33.000Z'
      },
      {
        price: this.price,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2021-06-01T19:44:33.000Z'
      },
      {
        price: this.price,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2021-06-01T19:49:33.000Z'
      },
      {
        price: this.price,
        volume_24h: 4682330000,
        market_cap: 106809106575.84,
        timestamp: '2021-06-01T19:54:33.000Z'
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
.row {
  @apply border border-solid border-mineshaft-100;
  box-shadow: 11px 11px #333333;
}
</style>
