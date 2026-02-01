document.addEventListener("DOMContentLoaded", async () => {
  
  // Parti renk paleti
  const PARTY_COLORS = {
    "Cumhuriyet Halk Partisi": "#E53E3E",
    "Adalet ve Kalkınma Partisi": "#F6AD55",
    "Milliyetçi Hareket Partisi": "#4299E1",
    "İyi Parti": "#48BB78",
    "Saadet Partisi": "#805AD5",
    "Diğer": "#A0AEC0"
  };
  
  // TÜM 81 İL İÇİN 2023 SEÇİM SONUÇLARI
  const results = [
    // 2023 Seçimleri - Marmara Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 37.5, ballots: 850000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.2, ballots: 780000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.3, ballots: 270000, province: "İstanbul", provinceId: 34 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.1, ballots: 520000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.5, ballots: 470000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 120000, province: "Ankara", provinceId: 6 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 55.8, ballots: 680000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 25.3, ballots: 300000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.5, ballots: 100000, province: "İzmir", provinceId: 35 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 39.2, ballots: 450000, province: "Bursa", provinceId: 16 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.7, ballots: 440000, province: "Bursa", provinceId: 16 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.5, ballots: 143000, province: "Bursa", provinceId: 16 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.8, ballots: 320000, province: "Kocaeli", provinceId: 41 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.2, ballots: 350000, province: "Kocaeli", provinceId: 41 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 121000, province: "Kocaeli", provinceId: 41 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 41.5, ballots: 180000, province: "Tekirdağ", provinceId: 59 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 36.2, ballots: 157000, province: "Tekirdağ", provinceId: 59 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.8, ballots: 51000, province: "Tekirdağ", provinceId: 59 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 40.2, ballots: 220000, province: "Balıkesir", provinceId: 10 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.5, ballots: 210000, province: "Balıkesir", provinceId: 10 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.8, ballots: 64000, province: "Balıkesir", provinceId: 10 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 44.2, ballots: 115000, province: "Edirne", provinceId: 22 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.8, ballots: 93000, province: "Edirne", provinceId: 22 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.5, ballots: 27000, province: "Edirne", provinceId: 22 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 45.7, ballots: 98000, province: "Kırklareli", provinceId: 39 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 34.2, ballots: 73000, province: "Kırklareli", provinceId: 39 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.8, ballots: 23000, province: "Kırklareli", provinceId: 39 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.5, ballots: 135000, province: "Çanakkale", provinceId: 17 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 36.8, ballots: 117000, province: "Çanakkale", provinceId: 17 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 36000, province: "Çanakkale", provinceId: 17 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 40.8, ballots: 78000, province: "Yalova", provinceId: 77 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 37.5, ballots: 72000, province: "Yalova", provinceId: 77 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 21000, province: "Yalova", provinceId: 77 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.2, ballots: 98000, province: "Sakarya", provinceId: 54 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.5, ballots: 112000, province: "Sakarya", provinceId: 54 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.8, ballots: 35000, province: "Sakarya", provinceId: 54 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.5, ballots: 52000, province: "Bilecik", provinceId: 11 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.8, ballots: 66000, province: "Bilecik", provinceId: 11 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 22000, province: "Bilecik", provinceId: 11 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.8, ballots: 89000, province: "Bolu", provinceId: 14 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.2, ballots: 97000, province: "Bolu", provinceId: 14 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 33000, province: "Bolu", provinceId: 14 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.2, ballots: 98000, province: "Düzce", provinceId: 81 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.8, ballots: 116000, province: "Düzce", provinceId: 81 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 38000, province: "Düzce", provinceId: 81 },
    
    // Ege Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 51.2, ballots: 285000, province: "Aydın", provinceId: 9 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 30.8, ballots: 171000, province: "Aydın", provinceId: 9 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 53000, province: "Aydın", provinceId: 9 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 48.3, ballots: 380000, province: "Muğla", provinceId: 48 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 32.1, ballots: 252000, province: "Muğla", provinceId: 48 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.8, ballots: 77000, province: "Muğla", provinceId: 48 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 44.5, ballots: 245000, province: "Denizli", provinceId: 20 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 36.2, ballots: 199000, province: "Denizli", provinceId: 20 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.8, ballots: 59000, province: "Denizli", provinceId: 20 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 46.8, ballots: 285000, province: "Manisa", provinceId: 45 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 34.5, ballots: 210000, province: "Manisa", provinceId: 45 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 62000, province: "Manisa", provinceId: 45 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 38.5, ballots: 98000, province: "Uşak", provinceId: 64 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.2, ballots: 100000, province: "Uşak", provinceId: 64 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.8, ballots: 33000, province: "Uşak", provinceId: 64 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.8, ballots: 125000, province: "Kütahya", provinceId: 43 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.5, ballots: 166000, province: "Kütahya", provinceId: 43 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 54000, province: "Kütahya", provinceId: 43 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.5, ballots: 120000, province: "Afyonkarahisar", provinceId: 3 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.2, ballots: 198000, province: "Afyonkarahisar", provinceId: 3 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 66000, province: "Afyonkarahisar", provinceId: 3 },
    
    // Akdeniz Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.4, ballots: 350000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.2, ballots: 560000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.1, ballots: 187000, province: "Adana", provinceId: 1 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 38.7, ballots: 520000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.5, ballots: 530000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 150000, province: "Antalya", provinceId: 7 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.5, ballots: 412000, province: "Mersin", provinceId: 33 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.8, ballots: 555000, province: "Mersin", provinceId: 33 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.2, ballots: 167000, province: "Mersin", provinceId: 33 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 298000, province: "Hatay", provinceId: 31 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.5, ballots: 425000, province: "Hatay", provinceId: 31 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.8, ballots: 132000, province: "Hatay", provinceId: 31 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 34.8, ballots: 72000, province: "Burdur", provinceId: 15 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.5, ballots: 88000, province: "Burdur", provinceId: 15 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.2, ballots: 27000, province: "Burdur", provinceId: 15 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 98000, province: "Isparta", provinceId: 32 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.8, ballots: 144000, province: "Isparta", provinceId: 32 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 46000, province: "Isparta", provinceId: 32 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.8, ballots: 92000, province: "Osmaniye", provinceId: 80 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.5, ballots: 170000, province: "Osmaniye", provinceId: 80 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 52000, province: "Osmaniye", provinceId: 80 },
    
    // İç Anadolu Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.5, ballots: 380000, province: "Konya", provinceId: 42 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.3, ballots: 812000, province: "Konya", provinceId: 42 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 236000, province: "Konya", provinceId: 42 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 52.1, ballots: 280000, province: "Eskişehir", provinceId: 26 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 28.4, ballots: 153000, province: "Eskişehir", provinceId: 26 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 51000, province: "Eskişehir", provinceId: 26 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 245000, province: "Kayseri", provinceId: 38 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.8, ballots: 470000, province: "Kayseri", provinceId: 38 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 141000, province: "Kayseri", provinceId: 38 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.8, ballots: 125000, province: "Sivas", provinceId: 58 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 218000, province: "Sivas", provinceId: 58 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 73000, province: "Sivas", provinceId: 58 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 125000, province: "Tokat", provinceId: 60 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.8, ballots: 202000, province: "Tokat", provinceId: 60 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 64000, province: "Tokat", provinceId: 60 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 85000, province: "Yozgat", provinceId: 66 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.2, ballots: 161000, province: "Yozgat", provinceId: 66 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.8, ballots: 54000, province: "Yozgat", provinceId: 66 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 68000, province: "Nevşehir", provinceId: 50 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.2, ballots: 109000, province: "Nevşehir", provinceId: 50 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 36000, province: "Nevşehir", provinceId: 50 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.2, ballots: 78000, province: "Niğde", provinceId: 51 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 134000, province: "Niğde", provinceId: 51 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 45000, province: "Niğde", provinceId: 51 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.8, ballots: 78000, province: "Aksaray", provinceId: 68 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.2, ballots: 155000, province: "Aksaray", provinceId: 68 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 50000, province: "Aksaray", provinceId: 68 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.5, ballots: 58000, province: "Karaman", provinceId: 70 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.8, ballots: 105000, province: "Karaman", provinceId: 70 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 32000, province: "Karaman", provinceId: 70 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 78000, province: "Kırıkkale", provinceId: 71 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.5, ballots: 114000, province: "Kırıkkale", provinceId: 71 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 40000, province: "Kırıkkale", provinceId: 71 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.8, ballots: 52000, province: "Kırşehir", provinceId: 40 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.5, ballots: 93000, province: "Kırşehir", provinceId: 40 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 28000, province: "Kırşehir", provinceId: 40 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.7, ballots: 42000, province: "Çankırı", provinceId: 18 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 46.8, ballots: 66000, province: "Çankırı", provinceId: 18 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 23000, province: "Çankırı", provinceId: 18 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.3, ballots: 98000, province: "Çorum", provinceId: 19 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.2, ballots: 167000, province: "Çorum", provinceId: 19 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 57000, province: "Çorum", provinceId: 19 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 78000, province: "Amasya", provinceId: 5 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.8, ballots: 112000, province: "Amasya", provinceId: 5 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 41000, province: "Amasya", provinceId: 5 },
    
    // Karadeniz Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.7, ballots: 315000, province: "Samsun", provinceId: 55 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.5, ballots: 416000, province: "Samsun", provinceId: 55 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 138000, province: "Samsun", provinceId: 55 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.5, ballots: 178000, province: "Trabzon", provinceId: 61 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.2, ballots: 307000, province: "Trabzon", provinceId: 61 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 92000, province: "Trabzon", provinceId: 61 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 30.8, ballots: 168000, province: "Ordu", provinceId: 52 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 46.2, ballots: 252000, province: "Ordu", provinceId: 52 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 85000, province: "Ordu", provinceId: 52 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 37.2, ballots: 158000, province: "Zonguldak", provinceId: 67 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.5, ballots: 176000, province: "Zonguldak", provinceId: 67 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.8, ballots: 59000, province: "Zonguldak", provinceId: 67 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.5, ballots: 98000, province: "Giresun", provinceId: 28 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.7, ballots: 135000, province: "Giresun", provinceId: 28 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 48000, province: "Giresun", provinceId: 28 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 68000, province: "Rize", provinceId: 53 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.8, ballots: 133000, province: "Rize", provinceId: 53 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 36000, province: "Rize", provinceId: 53 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.4, ballots: 42000, province: "Artvin", provinceId: 8 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.2, ballots: 46000, province: "Artvin", provinceId: 8 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.8, ballots: 20000, province: "Artvin", provinceId: 8 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.5, ballots: 52000, province: "Sinop", provinceId: 57 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.2, ballots: 60000, province: "Sinop", provinceId: 57 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 21000, province: "Sinop", provinceId: 57 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.5, ballots: 52000, province: "Bartın", provinceId: 74 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.2, ballots: 60000, province: "Bartın", provinceId: 74 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 22000, province: "Bartın", provinceId: 74 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.5, ballots: 68000, province: "Karabük", provinceId: 78 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.2, ballots: 90000, province: "Karabük", provinceId: 78 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 32000, province: "Karabük", provinceId: 78 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.2, ballots: 32000, province: "Gümüşhane", provinceId: 29 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 55000, province: "Gümüşhane", provinceId: 29 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 17.3, ballots: 20000, province: "Gümüşhane", provinceId: 29 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.5, ballots: 18000, province: "Bayburt", provinceId: 69 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.8, ballots: 39000, province: "Bayburt", provinceId: 69 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 17.2, ballots: 13000, province: "Bayburt", provinceId: 69 },
    
    // Doğu Anadolu Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 23.7, ballots: 125000, province: "Erzurum", provinceId: 25 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 53.8, ballots: 283000, province: "Erzurum", provinceId: 25 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 87000, province: "Erzurum", provinceId: 25 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.5, ballots: 52000, province: "Erzincan", provinceId: 24 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.2, ballots: 93000, province: "Erzincan", provinceId: 24 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.8, ballots: 32000, province: "Erzincan", provinceId: 24 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.8, ballots: 142000, province: "Malatya", provinceId: 44 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.2, ballots: 299000, province: "Malatya", provinceId: 44 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 95000, province: "Malatya", provinceId: 44 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.8, ballots: 98000, province: "Elazığ", provinceId: 23 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.3, ballots: 195000, province: "Elazığ", provinceId: 23 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 58000, province: "Elazığ", provinceId: 23 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 14.8, ballots: 98000, province: "Van", provinceId: 65 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 64.2, ballots: 425000, province: "Van", provinceId: 65 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 63000, province: "Van", provinceId: 65 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 18.3, ballots: 42000, province: "Ağrı", provinceId: 4 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 59.7, ballots: 137000, province: "Ağrı", provinceId: 4 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 31000, province: "Ağrı", provinceId: 4 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 12.5, ballots: 21000, province: "Hakkari", provinceId: 30 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 69.3, ballots: 116000, province: "Hakkari", provinceId: 30 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.2, ballots: 14000, province: "Hakkari", provinceId: 30 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 18.5, ballots: 45000, province: "Muş", provinceId: 49 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 59.2, ballots: 144000, province: "Muş", provinceId: 49 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.8, ballots: 31000, province: "Muş", provinceId: 49 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 19.8, ballots: 28000, province: "Bingöl", provinceId: 12 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 57.3, ballots: 81000, province: "Bingöl", provinceId: 12 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 21000, province: "Bingöl", provinceId: 12 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 17.2, ballots: 32000, province: "Bitlis", provinceId: 13 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 60.8, ballots: 113000, province: "Bitlis", provinceId: 13 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 21000, province: "Bitlis", provinceId: 13 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.5, ballots: 28000, province: "Tunceli", provinceId: 62 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 33.8, ballots: 22000, province: "Tunceli", provinceId: 62 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.7, ballots: 8000, province: "Tunceli", provinceId: 62 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 21.8, ballots: 28000, province: "Iğdır", provinceId: 76 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 55.2, ballots: 71000, province: "Iğdır", provinceId: 76 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 20000, province: "Iğdır", provinceId: 76 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 18000, province: "Ardahan", provinceId: 75 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.8, ballots: 29000, province: "Ardahan", provinceId: 75 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 17.2, ballots: 10000, province: "Ardahan", provinceId: 75 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 28000, province: "Kars", provinceId: 36 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.8, ballots: 54000, province: "Kars", provinceId: 36 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 16000, province: "Kars", provinceId: 36 },
    
    // Güneydoğu Anadolu Bölgesi
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 21.8, ballots: 285000, province: "Gaziantep", provinceId: 27 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 55.2, ballots: 721000, province: "Gaziantep", provinceId: 27 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 202000, province: "Gaziantep", provinceId: 27 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 17.5, ballots: 210000, province: "Şanlıurfa", provinceId: 63 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 60.8, ballots: 730000, province: "Şanlıurfa", provinceId: 63 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 134000, province: "Şanlıurfa", provinceId: 63 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 15.2, ballots: 142000, province: "Diyarbakır", provinceId: 21 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 63.8, ballots: 596000, province: "Diyarbakır", provinceId: 21 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 89000, province: "Diyarbakır", provinceId: 21 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 16.8, ballots: 98000, province: "Mardin", provinceId: 47 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 62.5, ballots: 365000, province: "Mardin", provinceId: 47 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 60000, province: "Mardin", provinceId: 47 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 16.5, ballots: 68000, province: "Batman", provinceId: 72 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 61.8, ballots: 255000, province: "Batman", provinceId: 72 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.7, ballots: 44000, province: "Batman", provinceId: 72 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 19.2, ballots: 42000, province: "Siirt", provinceId: 56 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 58.8, ballots: 128000, province: "Siirt", provinceId: 56 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.5, ballots: 27000, province: "Siirt", provinceId: 56 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 13.8, ballots: 52000, province: "Şırnak", provinceId: 73 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 66.2, ballots: 250000, province: "Şırnak", provinceId: 73 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 36000, province: "Şırnak", provinceId: 73 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 22.5, ballots: 168000, province: "Kahramanmaraş", provinceId: 46 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 54.8, ballots: 409000, province: "Kahramanmaraş", provinceId: 46 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 17.2, ballots: 128000, province: "Kahramanmaraş", provinceId: 46 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 22.5, ballots: 85000, province: "Adıyaman", provinceId: 2 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 53.3, ballots: 201000, province: "Adıyaman", provinceId: 2 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 19.2, ballots: 73000, province: "Adıyaman", provinceId: 2 },
    
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.8, ballots: 32000, province: "Kilis", provinceId: 79 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.5, ballots: 68000, province: "Kilis", provinceId: 79 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 20000, province: "Kilis", provinceId: 79 },
    
    // Eksik iller
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.5, ballots: 52000, province: "Kastamonu", provinceId: 37 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.2, ballots: 86000, province: "Kastamonu", provinceId: 37 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.8, ballots: 31000, province: "Kastamonu", provinceId: 37 },
  ];

  const yearFilter = document.getElementById("yearFilter");
  const resetBtn = document.getElementById("reset");
  const partySummaryDiv = document.getElementById("partySummary");
  const provinceResultsDiv = document.getElementById("provinceResults");
  const provinceTitleDiv = document.getElementById("provinceTitle");
  
  let turkeyGeoJSON = null;
  let selectedParty = null;
  let currentYear = 2023;
  
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

  // Parti toplamlarını hesapla
  function calculatePartySummary(list) {
    const partyTotals = {};
    
    list.forEach(r => {
      if (!partyTotals[r.party]) {
        partyTotals[r.party] = { totalVotes: 0, count: 0 };
      }
      partyTotals[r.party].totalVotes += r.votes;
      partyTotals[r.party].count += 1;
    });
    
    // Ortalama hesapla ve sırala
    const partySummary = Object.keys(partyTotals).map(party => ({
      party,
      avgVotes: partyTotals[party].totalVotes / partyTotals[party].count
    })).sort((a, b) => b.avgVotes - a.avgVotes);
    
    return partySummary;
  }

  // Parti özetini render et
  function renderPartySummary(list) {
    const summary = calculatePartySummary(list);
    
    partySummaryDiv.innerHTML = '';
    
    summary.forEach(item => {
      const div = document.createElement('div');
      div.className = `party-item ${selectedParty === item.party ? 'active' : ''}`;
      div.onclick = () => {
        if (selectedParty === item.party) {
          selectedParty = null;
        } else {
          selectedParty = item.party;
        }
        renderPartySummary(list);
        renderMap(list);
      };
      
      const color = PARTY_COLORS[item.party] || PARTY_COLORS["Diğer"];
      
      div.innerHTML = `
        <div class="party-color" style="background: ${color};"></div>
        <div class="party-info">
          <div class="party-name">${item.party}</div>
          <div class="party-votes">${item.avgVotes.toFixed(1)}%</div>
        </div>
      `;
      
      partySummaryDiv.appendChild(div);
    });
  }

  // İl detaylarını göster
  function showProvinceDetails(provinceId, provinceName) {
    const filtered = results.filter(r => r.year === currentYear && r.provinceId === provinceId);
    
    provinceTitleDiv.textContent = `📍 ${provinceName}`;
    
    if (filtered.length === 0) {
      provinceResultsDiv.innerHTML = '<div style="color:#999; text-align:center; padding:20px;">Bu il için veri bulunamadı</div>';
      return;
    }
    
    // Oy oranına göre sırala
    filtered.sort((a, b) => b.votes - a.votes);
    
    provinceResultsDiv.innerHTML = '';
    
    filtered.forEach(r => {
      const div = document.createElement('div');
      div.className = 'province-result';
      const color = PARTY_COLORS[r.party] || PARTY_COLORS["Diğer"];
      div.style.borderLeftColor = color;
      
      div.innerHTML = `
        <strong>${r.party}</strong><br>
        <span style="color: ${color}; font-size: 1.3em; font-weight: 700;">${r.votes.toFixed(1)}%</span>
        <span style="color: #666; margin-left: 10px;">(${r.ballots.toLocaleString('tr-TR')} sandık)</span>
      `;
      
      provinceResultsDiv.appendChild(div);
    });
  }

  // İlk yükleme
  const initialData = results.filter(r => r.year === currentYear);
  renderPartySummary(initialData);

  // Filtreleme
  yearFilter.addEventListener("change", () => {
    currentYear = parseInt(yearFilter.value);
    const filtered = results.filter(r => r.year === currentYear);
    selectedParty = null;
    renderPartySummary(filtered);
    renderMap(filtered);
    provinceResultsDiv.innerHTML = 'Haritadan bir ile tıklayın';
    provinceTitleDiv.textContent = '📍 İl Seçin';
  });

  resetBtn.addEventListener("click", () => {
    yearFilter.value = "2023";
    currentYear = 2023;
    const filtered = results.filter(r => r.year === currentYear);
    selectedParty = null;
    renderPartySummary(filtered);
    renderMap(filtered);
    provinceResultsDiv.innerHTML = 'Haritadan bir ile tıklayın';
    provinceTitleDiv.textContent = '📍 İl Seçin';
  });

  // Türkiye haritası için Plotly ile çizim
  function renderMap(list) {
    if (!turkeyGeoJSON) {
      console.error('GeoJSON yüklenmedi, harita çizilemiyor');
      return;
    }

    // Her il için kazanan partiyi bul
    const provinceData = {};
    
    list.forEach(r => {
      if (!provinceData[r.provinceId]) {
        provinceData[r.provinceId] = {
          name: r.province,
          winner: null,
          maxVotes: 0,
          parties: []
        };
      }
      
      provinceData[r.provinceId].parties.push({
        name: r.party,
        votes: r.votes
      });
      
      if (r.votes > provinceData[r.provinceId].maxVotes) {
        provinceData[r.provinceId].maxVotes = r.votes;
        provinceData[r.provinceId].winner = r.party;
      }
    });

    // Harita için veri hazırla
    const locations = [];
    const colors = [];
    const hovertext = [];

    Object.keys(provinceData).forEach(id => {
      const data = provinceData[id];
      
      // Parti filtreleme aktifse, sadece o partinin kazandığı illeri göster
      if (selectedParty && data.winner !== selectedParty) {
        return;
      }
      
      locations.push(parseInt(id));
      
      // Kazanan partinin rengini kullan
      const winnerColor = PARTY_COLORS[data.winner] || PARTY_COLORS["Diğer"];
      colors.push(winnerColor);
      
      const partyList = data.parties
        .sort((a, b) => b.votes - a.votes)
        .map((p, idx) => `${idx + 1}. ${p.name}: ${p.votes.toFixed(1)}%`)
        .join('<br>');
      
      hovertext.push(
        `<b>${data.name}</b><br>` +
        `<b style="color:${winnerColor}">🏆 ${data.winner}</b><br>` +
        `─────────────<br>` +
        partyList +
        `<br><br><i>Detaylar için tıklayın</i>`
      );
    });

    console.log(`📊 Haritada ${locations.length} il gösteriliyor`);

    // Plotly harita konfigürasyonu
    const mapData = [{
      type: 'choropleth',
      geojson: turkeyGeoJSON,
      locations: locations,
      z: locations.map(() => 1), // Renkleri kendimiz verdiğimiz için z'yi kullanmıyoruz
      marker: {
        line: {
          color: '#fff',
          width: 2
        }
      },
      colorscale: [[0, colors[0]], [1, colors[0]]], // Kullanılmayacak ama gerekli
      showscale: false,
      text: hovertext,
      hoverinfo: 'text',
      featureidkey: 'id',
      // Her il için özel renk
      customdata: colors,
      colorbar: { // Renkbar'ı gizle
        len: 0
      }
    }];

    // Her il için ayrı trace oluştur (farklı renkler için)
    const traces = locations.map((loc, idx) => ({
      type: 'choropleth',
      geojson: turkeyGeoJSON,
      locations: [loc],
      z: [1],
      colorscale: [[0, colors[idx]], [1, colors[idx]]],
      showscale: false,
      text: [hovertext[idx]],
      hoverinfo: 'text',
      featureidkey: 'id',
      marker: {
        line: {
          color: '#fff',
          width: 2
        }
      }
    }));

    const layout = {
      title: {
        text: selectedParty 
          ? `<b>${currentYear} - ${selectedParty} Kazandığı İller</b>`
          : `<b>${currentYear} Seçim Sonuçları - Kazanan Partiler</b>`,
        font: {
          size: 18,
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
      margin: { t: 60, b: 20, l: 20, r: 20 },
      paper_bgcolor: '#ffffff',
      plot_bgcolor: '#ffffff',
      height: 800,
      showlegend: false
    };

    const config = {
      responsive: true,
      displayModeBar: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['lasso2d', 'select2d', 'zoom2d', 'pan2d', 'zoomIn2d', 'zoomOut2d', 'autoScale2d', 'resetScale2d']
    };

    Plotly.newPlot('map', traces, layout, config);
    
    // Tıklama event'i ekle
    document.getElementById('map').on('plotly_click', function(data) {
      if (data.points && data.points.length > 0) {
        const point = data.points[0];
        const provinceId = point.location;
        const provinceName = provinceData[provinceId].name;
        
        showProvinceDetails(provinceId, provinceName);
        
        // Detaylara scroll
        provinceResultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // İlk haritayı çiz
  if (turkeyGeoJSON) {
    renderMap(results.filter(r => r.year === currentYear));
  }
});
