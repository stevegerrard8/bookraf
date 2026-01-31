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
      ideologies: ["Muhafazakâr demokrasi"],
      status: "Aktif"
    },
    {
      name: "Milliyetçi Hareket Partisi",
      founded: 1969,
      ideologies: ["Türk milliyetçiliği"],
      status: "Aktif"
    },
    {
      name: "Demokrat Parti",
      founded: 1983,
      ideologies: ["Liberal muhafazakârlık"],
      status: "Aktif"
    },
    {
      name: "Serhat UYAR",
      founded: 1983,
      ideologies: ["Liberal muhafazakârlık"],
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
