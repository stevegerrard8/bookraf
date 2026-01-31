document.addEventListener("DOMContentLoaded", async () => {
  // Örnek seçim sonuçları - İl plaka kodları ile
  const results = [
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.0, ballots: 50000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.0, ballots: 70000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.0, ballots: 20000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 30.0, ballots: 40000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.0, ballots: 60000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.0, ballots: 45000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 32.0, ballots: 55000, province: "İzmir", provinceId: 35 },
    { year: 2018, party: "Cumhuriyet Halk Partisi", votes: 22.0, ballots: 48000, province: "İstanbul", provinceId: 34 },
    { year: 2018, party: "Adalet ve Kalkınma Partisi", votes: 38.0, ballots: 72000, province: "İstanbul", provinceId: 34 },
    { year: 2015, party: "Cumhuriyet Halk Partisi", votes: 20.0, ballots: 45000, province: "İstanbul", provinceId: 34 },
    { year: 2015, party: "Adalet ve Kalkınma Partisi", votes: 42.0, ballots: 75000, province: "İstanbul", provinceId: 34 },
  ];

  const tbody = document.querySelector("#results tbody");
  const yearFilter = document.getElementById("yearFilter");
  const resetBtn = document.getElementById("reset");
  
  let turkeyGeoJSON = null;
  
  // GeoJSON'u yükle
  try {
    const response = await fetch('il.json');
    turkeyGeoJSON = await response.json();
    console.log('GeoJSON başarıyla yüklendi:', turkeyGeoJSON);
  } catch (error) {
    console.error('GeoJSON yüklenirken hata:', error);
    document.getElementById('map').innerHTML = `
      <div class="error">
        <strong>⚠️ Harita verisi yüklenemedi!</strong><br>
        il.json dosyasının doğru konumda olduğundan emin olun.
      </div>
    `;
  }

  function render(list) {
    tbody.innerHTML = "";
    
    if (list.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#999; padding:30px;">Sonuç bulunamadı</td></tr>';
      return;
    }
    
    list.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${r.party}</strong></td>
        <td>${r.votes.toFixed(1)}%</td>
        <td>${r.ballots.toLocaleString('tr-TR')}</td>
        <td>${r.province}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // İlk yükleme
  render(results);

  // Filtreleme
  yearFilter.addEventListener("change", () => {
    const year = parseInt(yearFilter.value);
    const filtered = results.filter(r => r.year === year);
    render(filtered);
    renderMap(filtered);
  });

  resetBtn.addEventListener("click", () => {
    yearFilter.value = "2023";
    render(results);
    renderMap(results);
  });

  // Türkiye haritası için Plotly ile çizim
  function renderMap(list) {
    if (!turkeyGeoJSON) {
      console.error('GeoJSON yüklenmedi, harita çizilemiyor');
      return;
    }

    // Her il için toplam oy oranını hesapla
    const provinceData = {};
    
    list.forEach(r => {
      if (!provinceData[r.provinceId]) {
        provinceData[r.provinceId] = {
          name: r.province,
          totalVotes: 0,
          count: 0
        };
      }
      provinceData[r.provinceId].totalVotes += r.votes;
      provinceData[r.provinceId].count += 1;
    });

    // Harita için veri hazırla
    const locations = [];
    const z = [];
    const hovertext = [];

    Object.keys(provinceData).forEach(id => {
      const data = provinceData[id];
      const avgVote = data.totalVotes / data.count;
      
      locations.push(parseInt(id));
      z.push(avgVote);
      hovertext.push(`${data.name}<br>Ort. Oy: ${avgVote.toFixed(1)}%`);
    });

    // Plotly harita konfigürasyonu
    const mapData = [{
      type: 'choropleth',
      geojson: turkeyGeoJSON,
      locations: locations,
      z: z,
      text: hovertext,
      hoverinfo: 'text',
      colorscale: [
        [0, '#FEF3C7'],
        [0.2, '#FDE68A'],
        [0.4, '#FCD34D'],
        [0.6, '#FBBF24'],
        [0.8, '#F59E0B'],
        [1, '#D97706']
      ],
      featureidkey: 'id',
      colorbar: {
        title: {
          text: 'Oy Oranı (%)',
          side: 'right'
        },
        thickness: 20,
        len: 0.7,
        x: 1.02
      },
      marker: {
        line: {
          color: '#fff',
          width: 1.5
        }
      }
    }];

    const layout = {
      title: {
        text: `<b>${yearFilter.value} Seçim Sonuçları - İl Bazlı Dağılım</b>`,
        font: {
          size: 20,
          family: 'Arial, sans-serif'
        }
      },
      geo: {
        fitbounds: 'geojson',
        visible: false,
        projection: {
          type: 'mercator'
        },
        center: {
          lat: 39.0,
          lon: 35.0
        }
      },
      margin: { t: 60, b: 20, l: 20, r: 120 },
      paper_bgcolor: '#ffffff',
      plot_bgcolor: '#ffffff',
      height: 700
    };

    const config = {
      responsive: true,
      displayModeBar: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['lasso2d', 'select2d']
    };

    Plotly.newPlot('map', mapData, layout, config);
  }

  // İlk haritayı çiz
  if (turkeyGeoJSON) {
    renderMap(results);
  }
});
