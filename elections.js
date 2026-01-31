document.addEventListener("DOMContentLoaded", () => {

  // Örnek seçim sonuçları
  const results = [
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.0, ballots: 50000, province: "34" },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.0, ballots: 70000, province: "34" },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.0, ballots: 20000, province: "34" },
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 30.0, ballots: 40000, province: "06" },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.0, ballots: 60000, province: "06" },
  ];

  const tbody = document.querySelector("#results tbody");
  const yearFilter = document.getElementById("yearFilter");
  const resetBtn = document.getElementById("reset");

  function render(list) {
    tbody.innerHTML = "";
    list.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.party}</td>
        <td>${r.votes}</td>
        <td>${r.ballots}</td>
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
    render(results);
    renderMap(results);
  });

  // Türkiye haritası için Plotly
  function renderMap(list) {
    const provinces = [...new Set(list.map(r => r.province))];
    const votes = provinces.map(p => {
      return list.filter(r => r.province === p)
                 .reduce((sum, r) => sum + r.votes, 0);
    });

    const data = [{
      type: 'choropleth',
      locationmode: 'geojson-id',
      locations: provinces,
      z: votes,
      colorscale: 'Blues',
      text: provinces,
      geojson: "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/turkey-provinces.geojson"
    }];

    const layout = {
      geo: { scope: 'europe', projection: { type: 'mercator' } },
      margin: { t:0, b:0 }
    };

    Plotly.newPlot('map', data, layout);
  }

  renderMap(results);

});
