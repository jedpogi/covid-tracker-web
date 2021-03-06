import { Line, Chart } from "react-chartjs-2";

Chart.plugins.register({
	afterDraw: function(chart) {
  	if (chart.data.datasets.length === 0) {
    	// No data is present
      var ctx = chart.chart.ctx;
      var width = chart.chart.width;
      var height = chart.chart.height
      chart.clear();
      
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = "20px normal 'Helvetica Nueue'";
      ctx.fillText('No data to display', width / 2, height / 2);
      ctx.restore();
    }
  }
});


function LineChart({ data }) {
  return (
    <>
      <Line data={data} />
    </>
  );
}

export default LineChart;
