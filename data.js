document.addEventListener("DOMContentLoaded", () => {

const parties = [
  {
    name: "Cumhuriyet Halk Partisi",
    founded: 1923,
    ideology: "Sosyal demokrasi, Kemalizm",
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

console.log("Container:", container); // 🔍 TEST

parties.forEach(party => {
  const div = document.createElement("div");
  div.className = "party";
  div.innerHTML = `
    <strong>${party.name}</strong><br>
    <small>Kuruluş: ${party.founded}</small><br>
    <small>İdeoloji: ${party.ideology}</small><br>
    <small>Durum: ${party.status}</small>
  `;
  container.appendChild(div);
});

});
