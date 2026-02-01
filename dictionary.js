document.addEventListener("DOMContentLoaded", () => {
  
  // SOSYAL BİLİMLER TERİMLERİ SÖZLÜĞÜ
  const terms = [
    {
      term: "Demokrasi",
      field: "Siyaset Bilimi",
      definition: "Halkın egemenliğine dayanan yönetim biçimi. Yunanca 'demos' (halk) ve 'kratos' (iktidar) kelimelerinden türemiştir. Demokratik sistemlerde iktidar halktan gelir ve seçimler yoluyla belirlenir. Temel özellikleri arasında çoğulculuk, ifade özgürlüğü, hukukun üstünlüğü ve temel insan haklarının korunması yer alır.",
      related: ["Seçim", "Temsil", "Çoğulculuk", "Katılım"]
    },
    {
      term: "Kapitalizm",
      field: "Ekonomi",
      definition: "Üretim araçlarının özel mülkiyete dayalı olduğu, piyasa ekonomisinin hakim olduğu ekonomik sistem. Kâr güdüsü, serbest piyasa, rekabet ve özel girişimcilik temel unsurlarıdır. Adam Smith'in 'görünmez el' metaforu kapitalizmde piyasanın kendi kendini düzenleyeceği fikrini ifade eder.",
      related: ["Piyasa", "Serbest Rekabet", "Liberalizm", "Özel Mülkiyet"]
    },
    {
      term: "Sosyalizm",
      field: "Siyaset Bilimi",
      definition: "Üretim araçlarının toplumsal mülkiyetini ve ekonomik planlamayı savunan ideoloji ve ekonomik sistem. Toplumsal eşitlik, sosyal adalet ve kolektif mülkiyet temel ilkeleridir. Karl Marx ve Friedrich Engels'in teorileri sosyalizmin teorik temellerini oluşturur.",
      related: ["Komünizm", "Eşitlik", "Sınıf Mücadelesi", "Kolektivizm"]
    },
    {
      term: "Toplum",
      field: "Sosyoloji",
      definition: "Ortak bir coğrafyada yaşayan, belirli normlar ve değerler etrafında örgütlenen, sürekli etkileşim içinde bulunan insanların oluşturduğu yapı. Toplum, kültür, dil, gelenekler ve kurumlar aracılığıyla bireyleri bir arada tutar ve toplumsal düzeni sağlar.",
      related: ["Kültür", "Kurum", "Sosyalleşme", "Toplumsal Yapı"]
    },
    {
      term: "Kültür",
      field: "Antropoloji",
      definition: "Bir toplumun maddi ve manevi değerlerinin, yaşam biçiminin, sanat eserlerinin, inançlarının ve geleneklerinin bütünü. E.B. Tylor'a göre kültür, 'bilgi, inanç, sanat, ahlak, hukuk, gelenek ve toplumun bir üyesi olarak insanın kazandığı diğer yetenek ve alışkanlıkları içeren karmaşık bir bütündür.'",
      related: ["Toplum", "Değer", "Norm", "Gelenek"]
    },
    {
      term: "İdeoloji",
      field: "Siyaset Bilimi",
      definition: "Toplumsal, siyasal ve ekonomik düzene ilişkin sistematik düşünce ve inanışlar bütünü. İdeoloji, toplumun nasıl örgütlenmesi gerektiğine dair kapsamlı bir görüş sunar ve siyasi eyleme yön verir. Karl Mannheim ideolojileri 'gerçekliği maskeleyici' işlev gören düşünce sistemleri olarak tanımlar.",
      related: ["Siyaset", "Dünya Görüşü", "İnanç", "Değer"]
    },
    {
      term: "Modernleşme",
      field: "Sosyoloji",
      definition: "Geleneksel toplumların sanayi toplumuna dönüşüm süreci. Kentleşme, sanayileşme, demokratikleşme, sekülerleşme ve rasyonelleşme gibi değişimleri içerir. Weber'in rasyonelleşme teorisi, Durkheim'ın işbölümü analizi ve Marx'ın kapitalist dönüşüm teorisi modernleşmenin farklı boyutlarını inceler.",
      related: ["Sanayileşme", "Kentleşme", "Sekülerleşme", "Rasyonelleşme"]
    },
    {
      term: "Hegemonya",
      field: "Siyaset Bilimi",
      definition: "Antonio Gramsci'nin geliştirdiği kavram. Bir sınıfın veya grubun, zor kullanmadan rıza yoluyla toplum üzerinde kurduğu egemenlik. Hegemonya, kültürel ve ideolojik araçlarla toplumsal onayın kazanılmasını ve iktidarın meşrulaştırılmasını ifade eder.",
      related: ["İktidar", "Rıza", "Egemenlik", "İdeoloji"]
    },
    {
      term: "Oryantalizm",
      field: "Kültürel Çalışmalar",
      definition: "Edward Said'in kavramsallaştırdığı, Batı'nın Doğu'yu öteki olarak kurguladığı söylem ve temsil biçimi. Oryantalizm, Batı'nın Doğu'yu egzotik, geri kalmış ve gizemli olarak tasvir etmesini ve bu sayede kolonyal hakimiyeti meşrulaştırmasını eleştirir.",
      related: ["Ötekileştirme", "Kolonializm", "Kimlik", "Temsil"]
    },
    {
      term: "Globalizasyon",
      field: "Ekonomi",
      definition: "Dünya ekonomilerinin, kültürlerinin ve toplumlarının artan oranda birbirine bağlanması ve entegrasyonu süreci. Ticaretin, sermayenin, bilginin ve insanların sınırlar ötesi hareketliliğinin artmasını ifade eder. Anthony Giddens, globalizasyonu 'uzak yerlerdeki olayların yerel olaylarca şekillendirildiği ve bunların etkisinde kaldığı dünya çapında toplumsal ilişkilerin yoğunlaşması' olarak tanımlar.",
      related: ["Ekonomik Entegrasyon", "Kültürel Değişim", "Küreselleşme", "Sermaye"]
    },
    {
      term: "Toplumsal Sınıf",
      field: "Sosyoloji",
      definition: "Ekonomik konumları, yaşam tarzları ve değerleri benzer olan insan grupları. Karl Marx sınıfları üretim araçlarıyla ilişkilerine göre tanımlarken, Max Weber ekonomik konum, statü ve güç boyutlarını birlikte değerlendirir. Sınıf, toplumsal eşitsizliğin temel kaynaklarından biridir.",
      related: ["Eşitsizlik", "Statü", "Tabakalaşma", "Burjuvazi"]
    },
    {
      term: "Etnisite",
      field: "Antropoloji",
      definition: "Ortak kültür, dil, din, atalar ve tarihsel deneyimlere dayanan grup kimliği. Benedict Anderson'un 'hayali cemaatler' kavramı, etnik kimliklerin sosyal olarak inşa edildiğini vurgular. Etnisite, toplumsal dayanışmanın kaynağı olabileceği gibi çatışmaların da temelini oluşturabilir.",
      related: ["Kimlik", "Kültür", "Millet", "Grup"]
    },
    {
      term: "Patriarki",
      field: "Sosyoloji",
      definition: "Erkek egemenliğine dayalı toplumsal sistem. Aileden devlet kurumlarına kadar toplumsal yapılarda erkek otoritesinin hakim olması. Feminist teoride patriarki, kadınların sistematik olarak dezavantajlı konumda tutulmasının temel nedeni olarak görülür.",
      related: ["Toplumsal Cinsiyet", "Feminizm", "Egemenlik", "Eşitsizlik"]
    },
    {
      term: "Sekülerleşme",
      field: "Sosyoloji",
      definition: "Dini inanç ve kurumların toplumsal yaşamdaki etkisinin azalması süreci. Weber'in 'dünyanın büyüsünün bozulması' metaforu modern toplumlarda dini düşüncenin gerilemesini ifade eder. Sekülerleşme, modernleşmenin önemli bir boyutudur.",
      related: ["Modernleşme", "Din", "Laiklik", "Rasyonelleşme"]
    },
    {
      term: "Bürokrasi",
      field: "Siyaset Bilimi",
      definition: "Max Weber'in ideal tip olarak tanımladığı rasyonel-yasal örgütlenme biçimi. Hiyerarşi, uzmanlaşma, yazılı kurallar, kişisel olmayan ilişkiler ve teknik yeterlilik temeline dayanan yönetim sistemi. Modern devletin ve kapitalist ekonominin temel örgütlenme biçimidir.",
      related: ["Rasyonelleşme", "Hiyerarşi", "Kurum", "Devlet"]
    },
    {
      term: "Sivil Toplum",
      field: "Siyaset Bilimi",
      definition: "Devlet ve piyasa alanı dışında, bireylerin gönüllü olarak örgütlendiği kamusal alan. Dernekler, vakıflar, sendikalar, meslek örgütleri gibi kurumlar sivil toplumun parçalarıdır. Tocqueville, sivil toplum örgütlerini demokrasinin okulu olarak görür.",
      related: ["Demokrasi", "Kamusal Alan", "STK", "Katılım"]
    },
    {
      term: "Anomie",
      field: "Sosyoloji",
      definition: "Émile Durkheim'ın geliştirdiği kavram. Toplumsal normların zayıflaması veya çökmesi sonucu ortaya çıkan normsuzluk ve belirsizlik durumu. Hızlı toplumsal değişim dönemlerinde bireyler arasında yönelim kaybı ve ahlaki kargaşa yaratır.",
      related: ["Norm", "Toplumsal Düzen", "Durkheim", "Sapma"]
    },
    {
      term: "Habitus",
      field: "Sosyoloji",
      definition: "Pierre Bourdieu'nun geliştirdiği kavram. Bireylerin toplumsal konumlarından kaynaklanan, içselleştirdikleri kalıcı eğilimler, algı ve davranış kalıpları. Habitus, sınıfsal konumun bedenselleşmiş halidir ve bireylerin zevk, tercih ve eylemlerini şekillendirir.",
      related: ["Bourdieu", "Sermaye", "Alan", "Sınıf"]
    },
    {
      term: "Postmodernizm",
      field: "Felsefe",
      definition: "Modernizmin temel varsayımlarını sorgulayan düşünce akımı. Büyük anlatılara, evrensel doğrulara ve ilerlemeciliğe karşı şüpheci yaklaşım. Lyotard'ın 'meta-anlatıların sonu' ifadesi postmodernizmin ana temasını özetler. Çoğulculuk, parçalanma ve görecelilik vurgular.",
      related: ["Modernizm", "Meta-anlatı", "Çoğulculuk", "Görecelik"]
    },
    {
      term: "Kimlik",
      field: "Sosyoloji",
      definition: "Bireyin veya grubun kendini tanımlama ve ifade etme biçimi. Stuart Hall'a göre kimlik sabit değil, sürekli inşa edilen ve değişen bir süreçtir. Kimlik hem bireysel özelliklerden hem de toplumsal kategorilerden (cinsiyet, etnisite, sınıf) oluşur.",
      related: ["Benlik", "Etnisite", "Toplumsal Cinsiyet", "Kültür"]
    },
    {
      term: "Devlet",
      field: "Siyaset Bilimi",
      definition: "Belirli bir toprak üzerinde egemenlik yetkisine sahip, meşru şiddet tekeline sahip siyasi örgütlenme. Max Weber devleti 'belirli bir toprak parçası üzerinde meşru fiziksel güç kullanımını başarıyla tekelleştiren insan topluluğu' olarak tanımlar.",
      related: ["Egemenlik", "Otorite", "Meşruiyet", "İktidar"]
    },
    {
      term: "Toplumsal Cinsiyet",
      field: "Sosyoloji",
      definition: "Kadın ve erkek olmanın toplumsal ve kültürel olarak inşa edilmiş boyutu. Biyolojik cinsiyet (sex) ile farklı olarak, toplumsal cinsiyet (gender) öğrenilir ve kültürden kültüre değişir. Judith Butler'a göre toplumsal cinsiyet performatiftir, tekrarlayan eylemlerle üretilir.",
      related: ["Feminizm", "Cinsiyet", "Patriarki", "Kimlik"]
    },
    {
      term: "Milliyetçilik",
      field: "Siyaset Bilimi",
      definition: "Millet fikrine dayanan, ulusal birlik ve bağımsızlığı önceleyen ideoloji ve siyasi hareket. Ernest Gellner milliyetçiliği 'siyasal ve ulusal birimin örtüşmesi gerektiğini ileri süren siyasi ilke' olarak tanımlar. Benedict Anderson milleti 'hayali bir siyasi cemaat' olarak kavramsallaştırır.",
      related: ["Millet", "Ulus", "Kimlik", "Egemenlik"]
    },
    {
      term: "Ekonomi Politik",
      field: "Ekonomi",
      definition: "Ekonomik süreçleri siyasi iktidar ilişkileri bağlamında inceleyen yaklaşım. Adam Smith, David Ricardo ve Karl Marx ekonomi politiğin kurucuları arasındadır. Ekonomik yapı ile siyasi güç arasındaki ilişkileri, kapitalizmin işleyişini ve sınıf çatışmalarını analiz eder.",
      related: ["Kapitalizm", "İktidar", "Sınıf", "Üretim"]
    },
    {
      term: "Rasyonelleşme",
      field: "Sosyoloji",
      definition: "Max Weber'in modernleşme teorisinin merkezinde yer alan kavram. Toplumsal yaşamın giderek daha hesaplanabilir, öngörülebilir ve etkili hale gelmesi süreci. Bürokrasi, bilimsel yöntem ve kapitalist üretim rasyonelleşmenin örnekleridir. Weber bunun 'demir kafes' yaratabileceği konusunda uyarır.",
      related: ["Weber", "Modernleşme", "Bürokrasi", "Kapitalizm"]
    },
    {
      term: "Popülizm",
      field: "Siyaset Bilimi",
      definition: "Halkı homojen bir bütün olarak gören ve elitlere karşı konumlandıran siyaset tarzı. Cas Mudde popülizmi 'toplumu nihai olarak iki homojen ve antagonist gruba bölünmüş olarak gören ince merkezli bir ideoloji' olarak tanımlar. Charismatik liderlik ve düşman yaratma popülizmin özellikleridir.",
      related: ["Halk", "Elit", "Karizmatik Lider", "Demokrasi"]
    },
    {
      term: "Liberalizm",
      field: "Siyaset Bilimi",
      definition: "Birey özgürlüğünü, bireysel hakları, serbest piyasayı ve sınırlı devleti savunan ideoloji. John Locke'un doğal haklar teorisi ve Adam Smith'in serbest piyasa anlayışı liberalizmin temellerini oluşturur. Klasik liberalizm ekonomik özgürlüğü, sosyal liberalizm ise refahı vurgular.",
      related: ["Özgürlük", "Birey", "Serbest Piyasa", "Demokrasi"]
    },
    {
      term: "Muhafazakarlık",
      field: "Siyaset Bilimi",
      definition: "Geleneksel değerleri, kurumları ve kademeli değişimi savunan ideoloji. Edmund Burke'un Fransız Devrimi eleştirisi muhafazakar düşüncenin klasiğidir. Din, aile, mülkiyet ve toplumsal hiyerarşi gibi geleneksel kurumların korunmasını önemser.",
      related: ["Gelenek", "Değişim", "Kurum", "Otorite"]
    },
    {
      term: "Faşizm",
      field: "Siyaset Bilimi",
      definition: "Aşırı milliyetçiliğe, tek parti diktatörlüğüne ve totaliter devlet kontrolüne dayanan ideoloji. Mussolini'nin İtalya'sı ve Hitler'in Almanya'sı tarihsel örnekleridir. Korporatizm, militarizm, anti-demokratik yapı ve lidere mutlak bağlılık temel özellikleridir.",
      related: ["Totalitarizm", "Milliyetçilik", "Otorite", "Diktatörlük"]
    },
    {
      term: "Piyasa",
      field: "Ekonomi",
      definition: "Mal ve hizmetlerin değiş tokuş edildiği, alıcı ve satıcıların buluştuğu mekanizma. Adam Smith'e göre piyasa 'görünmez el' aracılığıyla kendi kendini düzenler. Arz ve talep yasaları piyasa fiyatlarını ve kaynak dağılımını belirler.",
      related: ["Kapitalizm", "Arz-Talep", "Fiyat", "Rekabet"]
    },
    {
      term: "Kolektivizm",
      field: "Siyaset Bilimi",
      definition: "Toplumsal bütünü bireyden üstün tutan, ortak mülkiyet ve kolektif eylemi savunan düşünce. Komünizm, sosyalizm ve anarko-sendikalizm kolektivist ideolojilerdir. Bireyci yaklaşımların aksine grup çıkarlarını ve dayanışmayı önceler.",
      related: ["Sosyalizm", "Toplulukçuluk", "Dayanışma", "Kollektif"]
    }
  ];

  const searchInput = document.getElementById("searchInput");
  const alphabetBtns = document.querySelectorAll(".alphabet-btn");
  const termsList = document.getElementById("termsList");
  const totalTermsEl = document.getElementById("totalTerms");
  const shownTermsEl = document.getElementById("shownTerms");
  const fieldsCountEl = document.getElementById("fieldsCount");
  
  let selectedLetter = "all";

  // Filtreleme
  function getFilteredTerms() {
    let filtered = [...terms];
    
    // Harf filtresi
    if (selectedLetter !== "all") {
      filtered = filtered.filter(term => 
        term.term.toLocaleUpperCase('tr').startsWith(selectedLetter)
      );
    }
    
    // Arama
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
      filtered = filtered.filter(term =>
        term.term.toLowerCase().includes(searchTerm) ||
        term.definition.toLowerCase().includes(searchTerm) ||
        term.field.toLowerCase().includes(searchTerm) ||
        term.related.some(r => r.toLowerCase().includes(searchTerm))
      );
    }
    
    return filtered;
  }

  // İstatistikleri güncelle
  function updateStats(shownCount) {
    totalTermsEl.textContent = terms.length;
    shownTermsEl.textContent = shownCount;
    
    const uniqueFields = [...new Set(terms.map(t => t.field))];
    fieldsCountEl.textContent = uniqueFields.length;
  }

  // Terimleri render et
  function renderTerms() {
    const filtered = getFilteredTerms();
    
    // Alfabetik sırala
    const sorted = filtered.sort((a, b) => 
      a.term.localeCompare(b.term, 'tr')
    );
    
    updateStats(sorted.length);
    termsList.innerHTML = '';
    
    if (sorted.length === 0) {
      termsList.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">📖</div>
          <div class="no-results-text">Aradığınız kriterlere uygun terim bulunamadı</div>
          <p style="color:#999;">Farklı bir arama terimi veya harf deneyin</p>
        </div>
      `;
      return;
    }
    
    sorted.forEach(term => {
      const termCard = document.createElement('div');
      termCard.className = 'term-card';
      
      const firstLetter = term.term.charAt(0).toLocaleUpperCase('tr');
      
      termCard.innerHTML = `
        <div class="term-header">
          <div>
            <div class="term-title">${term.term}</div>
            <span class="term-field">${term.field}</span>
          </div>
          <div class="term-letter">${firstLetter}</div>
        </div>
        <div class="term-definition">${term.definition}</div>
        ${term.related.length > 0 ? `
          <div class="term-related">
            <span class="term-related-label">İlgili Kavramlar:</span>
            ${term.related.map(r => `<span class="related-tag">${r}</span>`).join('')}
          </div>
        ` : ''}
      `;
      
      termsList.appendChild(termCard);
    });
  }

  // Event listeners
  searchInput.addEventListener("input", renderTerms);
  
  alphabetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alphabetBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedLetter = btn.dataset.letter;
      renderTerms();
    });
  });

  // İlk yükleme
  renderTerms();
});
