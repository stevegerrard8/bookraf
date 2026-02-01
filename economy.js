document.addEventListener("DOMContentLoaded", () => {
  
  // EKONOMİK VERİLER (2021-2024)
  const economicData = [
    // 2021
    { date: "2021-01", inflation: 14.97, interest: 17.00, producer: 25.15 },
    { date: "2021-02", inflation: 15.61, interest: 17.00, producer: 28.59 },
    { date: "2021-03", inflation: 16.19, interest: 19.00, producer: 31.20 },
    { date: "2021-04", inflation: 17.14, interest: 19.00, producer: 35.17 },
    { date: "2021-05", inflation: 16.59, interest: 19.00, producer: 38.33 },
    { date: "2021-06", inflation: 17.53, interest: 19.00, producer: 42.25 },
    { date: "2021-07", inflation: 18.95, interest: 19.00, producer: 43.99 },
    { date: "2021-08", inflation: 19.25, interest: 19.00, producer: 45.52 },
    { date: "2021-09", inflation: 19.58, interest: 18.00, producer: 46.31 },
    { date: "2021-10", inflation: 19.89, interest: 16.00, producer: 46.90 },
    { date: "2021-11", inflation: 21.31, interest: 15.00, producer: 54.62 },
    { date: "2021-12", inflation: 36.08, interest: 14.00, producer: 79.89 },
    
    // 2022
    { date: "2022-01", inflation: 48.69, interest: 14.00, producer: 93.53 },
    { date: "2022-02", inflation: 54.44, interest: 14.00, producer: 105.01 },
    { date: "2022-03", inflation: 61.14, interest: 14.00, producer: 115.07 },
    { date: "2022-04", inflation: 69.97, interest: 14.00, producer: 121.82 },
    { date: "2022-05", inflation: 73.50, interest: 14.00, producer: 132.16 },
    { date: "2022-06", inflation: 78.62, interest: 14.00, producer: 138.27 },
    { date: "2022-07", inflation: 79.60, interest: 14.00, producer: 143.93 },
    { date: "2022-08", inflation: 80.21, interest: 13.00, producer: 145.01 },
    { date: "2022-09", inflation: 83.45, interest: 12.00, producer: 158.53 },
    { date: "2022-10", inflation: 85.51, interest: 10.50, producer: 158.35 },
    { date: "2022-11", inflation: 84.39, interest: 9.00, producer: 157.68 },
    { date: "2022-12", inflation: 64.27, interest: 9.00, producer: 97.71 },
    
    // 2023
    { date: "2023-01", inflation: 57.68, interest: 9.00, producer: 87.52 },
    { date: "2023-02", inflation: 55.18, interest: 8.50, producer: 77.31 },
    { date: "2023-03", inflation: 50.51, interest: 8.50, producer: 62.79 },
    { date: "2023-04", inflation: 43.68, interest: 8.50, producer: 50.98 },
    { date: "2023-05", inflation: 39.59, interest: 8.50, producer: 41.71 },
    { date: "2023-06", inflation: 38.21, interest: 15.00, producer: 38.45 },
    { date: "2023-07", inflation: 38.00, interest: 17.50, producer: 37.68 },
    { date: "2023-08", inflation: 58.94, interest: 25.00, producer: 42.53 },
    { date: "2023-09", inflation: 61.53, interest: 30.00, producer: 43.89 },
    { date: "2023-10", inflation: 61.36, interest: 35.00, producer: 42.49 },
    { date: "2023-11", inflation: 61.98, interest: 40.00, producer: 41.03 },
    { date: "2023-12", inflation: 64.77, interest: 42.50, producer: 36.08 },
    
    // 2024
    { date: "2024-01", inflation: 64.86, interest: 45.00, producer: 35.83 },
    { date: "2024-02", inflation: 67.07, interest: 45.00, producer: 38.02 },
    { date: "2024-03", inflation: 68.50, interest: 50.00, producer: 42.55 },
    { date: "2024-04", inflation: 69.80, interest: 50.00, producer: 46.38 },
    { date: "2024-05", inflation: 75.45, interest: 50.00, producer: 52.77 },
    { date: "2024-06", inflation: 71.60, interest: 50.00, producer: 54.23 },
    { date: "2024-07", inflation: 61.78, interest: 50.00, producer: 51.05 },
    { date: "2024-08", inflation: 51.97, interest: 50.00, producer: 47.92 },
    { date: "2024-09", inflation: 49.38, interest: 50.00, producer: 46.15 },
    { date: "2024-10", inflation: 48.58, interest: 50.00, producer: 45.23 },
    { date: "2024-11", inflation: 47.09, interest: 50.00, producer: 44.62 },
    { date: "2024-12", inflation: 44.38, interest: 47.50, producer: 43.18 },
  ];

  const periodFilter = document.getElementById("periodFilter");
  const inflationCheck = document.getElementById("inflationCheck");
  const interestCheck = document.getElementById("interestCheck");
  const producerCheck = document.getElementById("producerCheck");
  const resetBtn = document.getElementById("resetBtn");
  
  let chart = null;
  
  // Filtreleri uygula ve veriyi hazırla
  function getFilteredData() {
    const period = periodFilter.value;
    let filteredData = [...economicData];
    
    if (period !== "all") {
      const months = parseInt(period);
      filteredData = filteredData.slice(-months);
    }
    
    return filteredData;
  }
  
  // İstatistikleri hesapla ve göster
  function updateStats(data) {
    if (data.length === 0) return;
    
    const lastData = data[data.length - 1];
    const prevData = data.length > 1 ? data[data.length - 2] : lastData;
    
    // Son değerler
    document.getElementById("lastInflation").textContent = lastData.inflation.toFixed(2) + "%";
    document.getElementById("lastInterest").textContent = lastData.interest.toFixed(2) + "%";
    
    // Değişimler
    const inflationChange = lastData.inflation - prevData.inflation;
    const interestChange = lastData.interest - prevData.interest;
    
    const inflationChangeEl = document.getElementById("inflationChange");
    inflationChangeEl.textContent = (inflationChange >= 0 ? "+" : "") + inflationChange.toFixed(2) + "%";
    inflationChangeEl.className = "stat-change " + (inflationChange >= 0 ? "positive" : "negative");
    
    const interestChangeEl = document.getElementById("interestChange");
    interestChangeEl.textContent = (interestChange >= 0 ? "+" : "") + interestChange.toFixed(2) + "%";
    interestChangeEl.className = "stat-change " + (interestChange >= 0 ? "positive" : "negative");
    
    // Ortalamalar
    const avgInflation = data.reduce((sum, d) => sum + d.inflation, 0) / data.length;
    const avgInterest = data.reduce((sum, d) => sum + d.interest, 0) / data.length;
    
    document.getElementById("avgInflation").textContent = avgInflation.toFixed(2) + "%";
    document.getElementById("avgInterest").textContent = avgInterest.toFixed(2) + "%";
  }
  
  // Grafik çiz
  function renderChart() {
    const data = getFilteredData();
    
    // İstatistikleri güncelle
    updateStats(data);
    
    const labels = data.map(d => {
      const [year, month] = d.date.split("-");
      const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    });
    
    const datasets = [];
    
    // TÜFE dataseti
    if (inflationCheck.checked) {
      datasets.push({
        label: 'Enflasyon (TÜFE)',
        data: data.map(d => d.inflation),
        borderColor: '#E53E3E',
        backgroundColor: 'rgba(229, 62, 62, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#E53E3E',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      });
    }
    
    // Faiz dataseti
    if (interestCheck.checked) {
      datasets.push({
        label: 'Politika Faizi',
        data: data.map(d => d.interest),
        borderColor: '#4299E1',
        backgroundColor: 'rgba(66, 153, 225, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#4299E1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      });
    }
    
    // ÜFE dataseti
    if (producerCheck.checked) {
      datasets.push({
        label: 'Üretici Fiyat Endeksi (ÜFE)',
        data: data.map(d => d.producer),
        borderColor: '#F6AD55',
        backgroundColor: 'rgba(246, 173, 85, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#F6AD55',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      });
    }
    
    // Grafik yoksa oluştur, varsa güncelle
    const ctx = document.getElementById('economyChart').getContext('2d');
    
    if (chart) {
      chart.destroy();
    }
    
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 13,
                weight: '600'
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 12,
            cornerRadius: 8,
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%';
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.05)'
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              },
              font: {
                size: 12
              }
            },
            title: {
              display: true,
              text: 'Oran (%)',
              font: {
                size: 13,
                weight: 'bold'
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  }
  
  // Event listeners
  periodFilter.addEventListener("change", renderChart);
  inflationCheck.addEventListener("change", renderChart);
  interestCheck.addEventListener("change", renderChart);
  producerCheck.addEventListener("change", renderChart);
  
  resetBtn.addEventListener("click", () => {
    periodFilter.value = "36";
    inflationCheck.checked = true;
    interestCheck.checked = true;
    producerCheck.checked = false;
    renderChart();
  });
  
  // İlk yükleme
  renderChart();
});
