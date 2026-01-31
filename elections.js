document.addEventListener("DOMContentLoaded", async () => {
  // GENİŞLETİLMİŞ seçim sonuçları - Daha fazla il ile
  const results = [
    // 2023 Seçimleri
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 37.5, ballots: 85000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.2, ballots: 78000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.3, ballots: 27000, province: "İstanbul", provinceId: 34 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.1, ballots: 52000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.5, ballots: 47000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 12000, province: "Ankara", provinceId: 6 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 55.8, ballots: 68000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 25.3, ballots: 30000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.5, ballots: 10000, province: "İzmir", provinceId: 35 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.4, ballots: 35000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.2, ballots: 56000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.1, ballots: 18000, province: "Adana", provinceId: 1 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.7, ballots: 42000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.5, ballots: 53000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.2, ballots: 17000, province: "Antalya", provinceId: 7 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 48.3, ballots: 38000, province: "Muğla", provinceId: 48 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 32.1, ballots: 25000, province: "Muğla", provinceId: 48 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 39.2, ballots: 45000, province: "Bursa", provinceId: 16 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.7, ballots: 44000, province: "Bursa", provinceId: 16 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.5, ballots: 28000, province: "Konya", provinceId: 42 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.3, ballots: 60000, province: "Konya", provinceId: 42 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.8, ballots: 32000, province: "Kocaeli", provinceId: 41 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.2, ballots: 35000, province: "Kocaeli", provinceId: 41 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 52.1, ballots: 28000, province: "Eskişehir", provinceId: 26 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 28.4, ballots: 15000, province: "Eskişehir", provinceId: 26 },
    
    // 2018 Seçimleri
    { year: 2018, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 75000, province: "İstanbul", provinceId: 34 },
    { year: 2018, party: "Adalet ve Kalkınma Partisi", votes: 42.8, ballots: 103000, province: "İstanbul", provinceId: 34 },
    { year: 2018, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 35000, province: "İstanbul", provinceId: 34 },
    
    { year: 2018, party: "Cumhuriyet Halk Partisi", votes: 36.5, ballots: 48000, province: "Ankara", provinceId: 6 },
    { year: 2018, party: "Adalet ve Kalkınma Partisi", votes: 44.2, ballots: 58000, province: "Ankara", provinceId: 6 },
    
    { year: 2018, party: "Cumhuriyet Halk Partisi", votes: 49.8, ballots: 62000, province: "İzmir", provinceId: 35 },
    { year: 2018, party: "Adalet ve Kalkınma Partisi", votes: 31.5, ballots: 39000, province: "İzmir", provinceId: 35 },
    
    // 2015 Seçimleri
    { year: 2015, party: "Cumhuriyet Halk Partisi", votes: 28.5, ballots: 70000, province: "İstanbul", provinceId: 34 },
    { year: 2015, party: "Adalet ve Kalkınma Partisi", votes: 46.2, ballots: 113000, province: "İstanbul", provinceId: 34 },
    { year: 2015, party: "Milliyetçi Hareket Partisi", votes: 13.8, ballots: 34000, province: "İstanbul", provinceId: 34 },
    
    { year: 2015, party: "Cumhuriyet Halk Partisi", votes: 33.2, ballots: 45000, province: "Ankara", provinceId: 6 },
    { year: 2015, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 66000, province: "Ankara", provinceId: 6 },
    
    { year: 2015, party: "Cumhuriyet Halk Partisi", votes: 46.5, ballots: 58000, province: "İzmir", provinceId: 35 },
    { year: 2015, party: "Adalet ve Kalkınma Partisi", votes: 35.2, ballots: 44000, province: "İzmir", provinceId: 35 },
  ];

  const tbody = document.querySelector("#results tbody");
  const yearFilter = document.getElementById("yearFilter");
  const resetBtn = document.getElementById("reset");
  
  let turkeyGeoJSON = null;
  
  // GeoJSON'u yükle
  try {
    const response = await fetch('il.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    turkeyGeoJSON = await response.json();
    console.log('✅ GeoJSON başarıyla yüklendi:', turkeyGeoJSON.features.length, 'il');
  } catch (error) {
    console.error('❌ GeoJSON yüklenirken hata:', error);
    document.getElementById('map').innerHTML = `
      <div class="error">
        <strong>⚠️ Harita verisi yüklenemedi!</strong><br>
        il.json dosyasının doğru konumda olduğundan emin olun.<br>
        <small>Hata: ${error.message}</small>
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
        <td><strong style="color: #667eea;">${r.votes.toFixed(1)}%</strong></td>
        <td>${r.ballots.toLocaleString('tr-TR')}</td>
        <td>${r.province}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // İlk yükleme
  render(results.filter(r => r.year === 2023));

  // Filtreleme
  yearFilter.addEventListener("change", () => {
    const year = parseInt(yearFilter.value);
    const filtered = results.filter(r => r.year === year);
    render(filtered);
    renderMap(filtered);
  });

  resetBtn.addEventListener("click", () => {
    yearFilter.value = "2023";
    const filtered = results.filter(r => r.year === 2023);
    render(filtered);
    renderMap(filtered);
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
          count: 0,
          parties: []
        };
      }
      provinceData[r.provinceId].totalVotes += r.votes;
      provinceData[r.provinceId].count += 1;
      provinceData[r.provinceId].parties.push({
        name: r.party,
        votes: r.votes
      });
    });

    // Harita için veri hazırla
    const locations = [];
    const z = [];
    const hovertext = [];

    Object.keys(provinceData).forEach(id => {
      const data = provinceData[id];
      const avgVote = data.totalVotes / data.count;
      
      // En yüksek oyu alan partiyi bul
      const topParty = data.parties.sort((a, b) => b.votes - a.votes)[0];
      
      locations.push(parseInt(id));
      z.push(avgVote);
      
      const partyList = data.parties
        .map(p => `${p.name}: ${p.votes.toFixed(1)}%`)
        .join('<br>');
      
      hovertext.push(
        `<b>${data.name}</b><br>` +
        `Ort. Oy: ${avgVote.toFixed(1)}%<br>` +
        `En Yüksek: ${topParty.name}<br>` +
        `─────────────<br>` +
        partyList
      );
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
    renderMap(results.filter(r => r.year === 2023));
  }
});
