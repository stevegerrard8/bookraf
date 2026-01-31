document.addEventListener("DOMContentLoaded", () => {

  const parties = [
    {
      name: "Cumhuriyet Halk Partisi",
      founded: 1923,
      ideologies: ["Sosyal demokrasi", "Kemalizm"],
      status: "Aktif"
    },
    {
      name: "Adalet ve Kalkınma Partisi",
      founded: 2001,
      ideology: "Muhafazakâr demokrasi",
      status: "Aktif"
    },
    {
      name: "Milliyetçi Hareket Partisi",
      founded: 1969,
      ideology: "Türk milliyetçiliği",
      status: "Aktif"
    },
    {
      name: "Demokrat Parti",
      founded: 1983,
      ideology: "Liberal muhafazakârlık",
      status: "Aktif"
    },
    {
      name: "Millet Partisi",
      founded: 1984,
      ideology: "Milliyetçilik",
      status: "Aktif"
    }
  ];

  const container = document.getElementById("parties");

  function renderParties(list) {
    container.innerHTML = "";

    list.forEach(party => {
      const div = document.createElement("div");
      div.className = "party";

      const ideologyHTML = party.ideologies
        ? party.ideologies
            .map(i => `<a href="#" class="ideology" data-ideology="${i}">${i}</a>`)
            .join(", ")
        : party.ideology;

      div.innerHTML = `
        <strong>${party.name}</strong><br>
        <small>Kuruluş: ${party.founded}</small><br>
        <small>İdeoloji: ${ideologyHTML}</small><br>
        <small>Durum: ${party.status}</small>
      `;

      container.appendChild(div);
    });
  }

  // İLK YÜKLEME
  renderParties(parties);

  // IDEOLOJİ TIKLAMA
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("ideology")) {
      e.preventDefault();

      const selectedIdeology = e.target.dataset.ideology;

      const filtered = parties.filter(p =>
        p.ideologies && p.ideologies.includes(selectedIdeology)
      );

      renderParties(filtered);
    }
  });

});
