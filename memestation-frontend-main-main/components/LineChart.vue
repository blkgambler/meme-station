<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: () => {
        return { labels: [], datasets: [] }
      }
    },
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      graph: {
        labels: this.$props.data.labels,
        datasets: this.$props.data.datasets
      },
      options: {}
    }
  },
  mounted () {
    window.addEventListener('resize', this.renderGraph)

    // Graph options
    if (this.whiteTheme) {
      this.options = {
        legend: {
          display: false
        }
      }

      // Gradient config
      const gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 1000, 1000)
      gradient.addColorStop(0, '#21897E')
      gradient.addColorStop(0.5, '#FFFFFF')
      this.graph.datasets[0].backgroundColor = gradient
    } else {
      // Graph options
      this.options = {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            // ticks: {
            // beginAtZero: true
            // },
            gridLines: {
              color: '#333333'
            }
          }]
        }
      }
      // Gradient config
      const gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 1000, 1000)
      gradient.addColorStop(0, '#3B5F5C')
      gradient.addColorStop(1, '#162525')
      this.graph.datasets[0].backgroundColor = gradient
    }
    this.renderGraph(this.graph)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.renderGraph)
  },
  methods: {
    renderGraph () {
      this.renderChart({
        labels: this.graph.labels,
        datasets: this.graph.datasets
      }, this.options)
    }
  }
}
</script>
