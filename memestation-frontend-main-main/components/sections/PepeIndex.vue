<template>
  <div style="background-color: #111111">
    <div class="py-24 border-b border-mineshaft-80">
      <div class="text-white container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="text-4xl text-white font-bold">
              Pepe Index
            </div>
            <div class="mb-8 md:mb-0">
              <a href="#" class="wallet">Analysis Mode</a>
            </div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="box">
              <div>Average Meme Price</div>
              <span>
                ${{ averagePrice }}
              </span>
            </div>
            <div class="box">
              <div>Market Cap</div>
              <span>
                {{ marketCap }}
              </span>
            </div>
          </div>
        </div>
        <LineChart class="pt-12" :width="600" :height="250" :data="graphData" />
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
      <StockStatus :profitable="false" />
      <StockStatus />
      <StockStatus :profitable="false" />
      <StockStatus />
      <StockStatus :profitable="false" />
      <StockStatus />
      <StockStatus :profitable="false" />
      <StockStatus />
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart'
import StockStatus from '~/components/StockStatus'

export default {
  name: 'PepeIndex',
  components: {
    LineChart,
    StockStatus
  },
  data () {
    return {
      averagePrice: 5320,
      marketCap: 1278323,
      graphData: {
        labels: [],
        datasets: [
          {
            label: 'Index Value',
            data: [],
            backgroundColor: ['#3B5F5C'],
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
.box {
  @apply flex flex-col p-4;
  background-color: #222222;
  width: 200px;
}
.box span {
  @apply font-bold text-white text-2xl;
}
.box div {
  color: rgba(255,255,255,0.6);
  @apply pb-2;
}
.wallet {
  @apply mx-2 py-3 px-5 text-white bg-elm-100 border border-solid border-elm-100 block;
  box-shadow: 5px 5px #7AB8B2;
}
</style>
