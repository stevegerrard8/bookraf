document.addEventListener("DOMContentLoaded", () => {

  const parties = [
    {
      name: "Cumhuriyet Halk Partisi",
      founded: 1923,
      ideologies: ["Sosyal Demokrasi", "Kemalizm"],
      status: "Aktif"
    },
    {
      name: "Adalet ve Kalkınma Partisi",
      founded: 2001,
      ideologies: ["Muhafazakarlık"],
      status: "Aktif"
    },
    {
      name: "Milliyetçi Hareket Partisi",
      founded: 1969,
      ideologies: ["Türk milliyetçiliği", "Milliyetçilik"],
      status: "Aktif"
    },
    {
      name: "Demokrat Parti",
      founded: 1983,
      ideologies: ["Liberal muhafazakârlık"],
      status: "Aktif"
    },
    {
      name: "Vatan Partisi",
      founded: 1992,
      ideologies: ["Ulusalcılık"],
      status: "Aktif"
    },
     {
      name: "Genç Parti",
      founded: 1992,
      ideologies: ["Liberalizm"],
      status: "Aktif"
    },
     {
      name: "Türkiye Sosyalist İşçi Partisi",
      founded: 1993,
      ideologies: ["Sol", "Komünizm", "Sosyalizm"],
      status: "Aktif"
    },
     {
      name: "Büyük Birlik Partisi",
      founded: 1993,
      ideologies: ["Milliyetçilik", "Muhafazakarlık"],
      status: "Aktif"
    },
     {
      name: "Türkiye Komünist Partisi",
      founded: 1993,
      ideologies: ["Sol", "Komünizm"],
      status: "Aktif"
    },
     {
      name: "Sol Parti",
      founded: 1994,
      ideologies: ["Sol", "Sosyal Demokrasi"],
      status: "Aktif"
    },
     {
      name: "Liberal Demokrat Parti",
      founded: 1994,
      ideologies: ["Liberalizm"],
      status: "Aktif"
    },
     {
      name: "Emek Partisi",
      founded: 1996,
      ideologies: ["Sol"],
      status: "Aktif"
    },
     {
      name: "Devrimci Sosyalist İşçi Partisi",
      founded: 1997,
      ideologies: ["Sol", "Sosyalizm", "Komünizm"],
      status: "Aktif"
    },
     {
      name: "Saadet Partisi",
      founded: 2001,
      ideologies: ["Muhafazakarlık", "İslamcılık"],
      status: "Aktif"
    },
     {
      name: "Bağımsız Türkiye Partisi",
      founded: 2001,
      ideologies: ["Muhafazakarlık"],
      status: "Aktif"
    },
     {
      name: "Demokratik Sol Parti",
      founded: 1985,
      ideologies: ["Sol", "Sosyal Demokrasi"],
      status: "Aktif"
    },
    {
      name: "İyi Parti",
      founded: 2017,
      ideologies: ["Türk Milliyetçiliği"],
      status: "Aktif"
    },
      {
      name: "Hür Dava Partisi",
      founded: 2012,
      ideologies: ["İslamcılık"],
      status: "Aktif"
    },
      {
      name: "Yeniden Refah Partisi",
      founded: 2012,
      ideologies: ["İslamcılık"],
      status: "Aktif"
    },
      {
      name: "Türkiye İşçi Partisi",
      founded: 2012,
      ideologies: ["Sosyalizm"],
      status: "Aktif"
    },
    {
      name: "Millet Partisi",
      founded: 1984,
      ideologies: ["Milliyetçilik"],
      status: "Aktif"
    }
  ];

  const container = document.getElementById("parties");
  const resetBtn = document.getElementById("reset");

  function render(list) {
    container.innerHTML = "";

    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "party";

      div.innerHTML = `
        <strong>${p.name}</strong><br>
        <small>Kuruluş: ${p.founded}</small><br>
        <small>
          İdeoloji:
          ${p.ideologies.map(i =>
            `<a href="#" class="ideology" data-ideology="${i}">${i}</a>`
          ).join(", ")}
        </small><br>
        <small>Durum: ${p.status}</small>
      `;

      container.appendChild(div);
    });
  }

  // İlk yükleme
  render(parties);

  // İdeolojiye tıklayınca filtrele
  container.addEventListener("click", e => {
    if (e.target.classList.contains("ideology")) {
      e.preventDefault();

      const ideology = e.target.dataset.ideology;
      const filtered = parties.filter(p =>
        p.ideologies.includes(ideology)
      );

      render(filtered);
    }
  });

  // Tüm partilere dön
  resetBtn.addEventListener("click", () => {
    render(parties);
  });

});
