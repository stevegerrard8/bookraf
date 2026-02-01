document.addEventListener("DOMContentLoaded", () => {
  
  // ÖRNEK KİTAP VERİTABANI
  const books = [
    {
      title: "Türk Modernleşmesi",
      author: "Şerif Mardin",
      publisher: "İletişim",
      year: 2017,
      topic: "Siyaset Bilimi",
      tags: ["Modernleşme", "Türkiye", "Tarih"],
      description: "Türkiye'nin modernleşme sürecini inceleyen klasik bir eser. Osmanlı'dan Cumhuriyet'e geçiş döneminin sosyolojik analizi.",
      cover: "📘"
    },
    {
      title: "Türkiye'nin Son Yüzyılı",
      author: "İlber Ortaylı",
      publisher: "İş Bankası",
      year: 2020,
      topic: "Tarih",
      tags: ["Osmanlı", "Cumhuriyet", "Tarih"],
      description: "Son yüzyılın Türkiye tarihi üzerine kapsamlı bir çalışma. Toplumsal ve siyasi dönüşümlerin analizi.",
      cover: "📕"
    },
    {
      title: "Modern Mahrem",
      author: "Nilüfer Göle",
      publisher: "Metis",
      year: 2016,
      topic: "Sosyoloji",
      tags: ["Toplum", "Modernite", "Kadın"],
      description: "Modernite ve mahremiyet kavramlarının Türkiye bağlamında incelenmesi. Kadın ve kamusal alan ilişkisi.",
      cover: "📗"
    },
    {
      title: "Huzur",
      author: "Ahmet Hamdi Tanpınar",
      publisher: "Doğan",
      year: 2015,
      topic: "Edebiyat",
      tags: ["Roman", "Klasik", "Türk Edebiyatı"],
      description: "Türk edebiyatının başyapıtlarından biri. İstanbul'un atmosferini ve toplumsal dönüşümü anlatan roman.",
      cover: "📙"
    },
    {
      title: "Bu Ülke",
      author: "Cemil Meriç",
      publisher: "İletişim",
      year: 2018,
      topic: "Felsefe",
      tags: ["Düşünce", "Toplum", "Kültür"],
      description: "Türk düşünce hayatının önemli isimlerinden Cemil Meriç'in toplum ve kültür üzerine yazıları.",
      cover: "📔"
    },
    {
      title: "İslam'ın Doğuşu",
      author: "Maxime Rodinson",
      publisher: "Can",
      year: 2019,
      topic: "Tarih",
      tags: ["İslam", "Tarih", "Din"],
      description: "İslam dininin ortaya çıkışını tarihsel ve sosyolojik açıdan inceleyen akademik çalışma.",
      cover: "📘"
    },
    {
      title: "Toplumsal Cinsiyet ve Kalkınma",
      author: "Deniz Kandiyoti",
      publisher: "Metis",
      year: 2021,
      topic: "Sosyoloji",
      tags: ["Toplumsal Cinsiyet", "Kalkınma", "Kadın"],
      description: "Toplumsal cinsiyet perspektifinden kalkınma politikalarının analizi.",
      cover: "📕"
    },
    {
      title: "Osmanlı İmparatorluğu Tarihi",
      author: "İlber Ortaylı",
      publisher: "YKY",
      year: 2016,
      topic: "Tarih",
      tags: ["Osmanlı", "İmparatorluk", "Tarih"],
      description: "Osmanlı İmparatorluğu'nun kuruluşundan yıkılışına kadar kapsamlı tarihi.",
      cover: "📗"
    },
    {
      title: "İdeoloji ve Ütopya",
      author: "Karl Mannheim",
      publisher: "Metis",
      year: 2017,
      topic: "Sosyoloji",
      tags: ["İdeoloji", "Ütopya", "Bilgi Sosyolojisi"],
      description: "Bilgi sosyolojisinin temel metinlerinden. İdeoloji ve ütopya kavramlarının analizi.",
      cover: "📙"
    },
    {
      title: "Türkiye'de Toplumsal Yapı",
      author: "Mübeccel Kıray",
      publisher: "İletişim",
      year: 2019,
      topic: "Sosyoloji",
      tags: ["Toplum", "Yapı", "Değişim"],
      description: "Türkiye'nin toplumsal yapısını ve değişim dinamiklerini inceleyen önemli çalışma.",
      cover: "📔"
    },
    {
      title: "Ekonominin Temelleri",
      author: "Paul Samuelson",
      publisher: "Can",
      year: 2020,
      topic: "Ekonomi",
      tags: ["Ekonomi", "Teori", "Piyasa"],
      description: "Modern ekonomi biliminin temel ilkelerini açıklayan klasik ders kitabı.",
      cover: "📘"
    },
    {
      title: "Siyaset Bilimi",
      author: "Andrew Heywood",
      publisher: "Doğan",
      year: 2018,
      topic: "Siyaset Bilimi",
      tags: ["Siyaset", "Teori", "Devlet"],
      description: "Siyaset biliminin temel kavramlarını ve teorilerini kapsamlı şekilde ele alan ders kitabı.",
      cover: "📕"
    },
    {
      title: "Antropolojiye Giriş",
      author: "Conrad Kottak",
      publisher: "YKY",
      year: 2021,
      topic: "Antropoloji",
      tags: ["Antropoloji", "Kültür", "Toplum"],
      description: "Kültürel ve fiziksel antropolojinin temellerini anlatan giriş niteliğinde eser.",
      cover: "📗"
    },
    {
      title: "Psikoloji ve Yaşam",
      author: "Richard Gerrig",
      publisher: "İş Bankası",
      year: 2019,
      topic: "Psikoloji",
      tags: ["Psikoloji", "Davranış", "Zihin"],
      description: "Psikolojinin temel konularını günlük yaşamla ilişkilendirerek anlatan kapsamlı çalışma.",
      cover: "📙"
    },
    {
      title: "Batı Felsefesi Tarihi",
      author: "Bertrand Russell",
      publisher: "Can",
      year: 2022,
      topic: "Felsefe",
      tags: ["Felsefe", "Tarih", "Düşünce"],
      description: "Antik Yunan'dan modern döneme kadar Batı felsefesinin kapsamlı tarihi.",
      cover: "📔"
    },
    {
      title: "Din Sosyolojisi",
      author: "Mehmet Taplamacıoğlu",
      publisher: "İletişim",
      year: 2020,
      topic: "Sosyoloji",
      tags: ["Din", "Sosyoloji", "İnanç"],
      description: "Dinin toplumsal boyutlarını sosyolojik perspektiften inceleyen temel kaynak.",
      cover: "📘"
    },
    {
      title: "Osmanlı'dan Cumhuriyet'e Problemler",
      author: "Erik Jan Zürcher",
      publisher: "İletişim",
      year: 2017,
      topic: "Tarih",
      tags: ["Osmanlı", "Cumhuriyet", "Dönüşüm"],
      description: "Osmanlı'nın son döneminden Cumhuriyet'in kuruluşuna geçiş sürecinin analizi.",
      cover: "📕"
    },
    {
      title: "Kalkınma İktisadı",
      author: "Todaro & Smith",
      publisher: "Doğan",
      year: 2021,
      topic: "Ekonomi",
      tags: ["Kalkınma", "Ekonomi", "Gelişme"],
      description: "Gelişmekte olan ülkelerin ekonomik sorunlarını ve kalkınma stratejilerini inceler.",
      cover: "📗"
    },
    {
      title: "Demokrasi Teorileri",
      author: "David Held",
      publisher: "Metis",
      year: 2019,
      topic: "Siyaset Bilimi",
      tags: ["Demokrasi", "Siyaset", "Teori"],
      description: "Klasik ve çağdaş demokrasi teorilerinin kapsamlı değerlendirmesi.",
      cover: "📙"
    },
    {
      title: "Türkiye'de Siyasal Partiler",
      author: "Sabri Sayarı",
      publisher: "İş Bankası",
      year: 2018,
      topic: "Siyaset Bilimi",
      tags: ["Partiler", "Siyaset", "Türkiye"],
      description: "Türkiye'deki siyasal partilerin tarihi ve yapısal analizi.",
      cover: "📔"
    }
  ];

  const searchInput = document.getElementById("searchInput");
  const publisherFilter = document.getElementById("publisherFilter");
  const topicFilter = document.getElementById("topicFilter");
  const authorFilter = document.getElementById("authorFilter");
  const yearFrom = document.getElementById("yearFrom");
  const yearTo = document.getElementById("yearTo");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetBtn");
  const booksList = document.getElementById("booksList");
  const bookCount = document.getElementById("bookCount");

  // Filtreleri uygula
  function getFilteredBooks() {
    let filtered = [...books];
    
    // Arama
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.topic.toLowerCase().includes(searchTerm) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        book.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Yayınevi
    if (publisherFilter.value) {
      filtered = filtered.filter(book => book.publisher === publisherFilter.value);
    }
    
    // Konu
    if (topicFilter.value) {
      filtered = filtered.filter(book => book.topic === topicFilter.value);
    }
    
    // Yazar
    if (authorFilter.value) {
      filtered = filtered.filter(book => book.author === authorFilter.value);
    }
    
    // Yıl aralığı
    if (yearFrom.value) {
      filtered = filtered.filter(book => book.year >= parseInt(yearFrom.value));
    }
    if (yearTo.value) {
      filtered = filtered.filter(book => book.year <= parseInt(yearTo.value));
    }
    
    return filtered;
  }

  // Sıralama
  function sortBooks(books, sortType) {
    const sorted = [...books];
    
    switch(sortType) {
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title, 'tr'));
      case 'year-desc':
        return sorted.sort((a, b) => b.year - a.year);
      case 'year-asc':
        return sorted.sort((a, b) => a.year - b.year);
      case 'author':
        return sorted.sort((a, b) => a.author.localeCompare(b.author, 'tr'));
      default:
        return sorted;
    }
  }

  // Kitapları render et
  function renderBooks() {
    const filtered = getFilteredBooks();
    const sorted = sortBooks(filtered, sortSelect.value);
    
    bookCount.textContent = sorted.length;
    booksList.innerHTML = '';
    
    if (sorted.length === 0) {
      booksList.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">📚</div>
          <div class="no-results-text">Aradığınız kriterlere uygun kitap bulunamadı</div>
          <p style="color:#999;">Filtreleri değiştirerek tekrar deneyin</p>
        </div>
      `;
      return;
    }
    
    sorted.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      
      bookCard.innerHTML = `
        <div class="book-cover">${book.cover}</div>
        <div class="book-info">
          <div class="book-title">${book.title}</div>
          <div class="book-author">✍️ ${book.author}</div>
          <div class="book-meta">
            <span><strong>📖</strong> ${book.publisher}</span>
            <span><strong>📅</strong> ${book.year}</span>
            <span><strong>🏷️</strong> ${book.topic}</span>
          </div>
          <div class="book-tags">
            ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="book-description">${book.description}</div>
        </div>
      `;
      
      booksList.appendChild(bookCard);
    });
  }

  // Event listeners
  searchInput.addEventListener("input", renderBooks);
  publisherFilter.addEventListener("change", renderBooks);
  topicFilter.addEventListener("change", renderBooks);
  authorFilter.addEventListener("change", renderBooks);
  yearFrom.addEventListener("input", renderBooks);
  yearTo.addEventListener("input", renderBooks);
  sortSelect.addEventListener("change", renderBooks);
  
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    publisherFilter.value = "";
    topicFilter.value = "";
    authorFilter.value = "";
    yearFrom.value = "";
    yearTo.value = "";
    sortSelect.value = "title";
    renderBooks();
  });
  
  // İlk yükleme
  renderBooks();
});
