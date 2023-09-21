var ctx = document.getElementById("mycanvas").getContext("2d");

var mychart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["python", "js", "java", "php", "c++", "c#"],
    datasets: [
      {
        label: "Number of Developers",
        data: [13, 15, 5, 9, 10, 8],
        backgroundColor: ["red", "blue", "green", "yellow", "orange", "purple"], // Define colors for bars
      },

      {
        data: [10, 5, 15, 5, 4, 7],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
