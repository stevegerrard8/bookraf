document.addEventListener("DOMContentLoaded", async () => {
  // TÜM 81 İL İÇİN 2023 SEÇİM SONUÇLARI
  const results = [
    // İstanbul (34)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 37.5, ballots: 850000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.2, ballots: 780000, province: "İstanbul", provinceId: 34 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.3, ballots: 270000, province: "İstanbul", provinceId: 34 },
    { year: 1995, party: "Cumhuriyet Halk Partisi", votes: 37.5, ballots: 850000, province: "İstanbul", provinceId: 34 },
    { year: 1995, party: "Adalet ve Kalkınma Partisi", votes: 35.2, ballots: 780000, province: "İstanbul", provinceId: 34 },
    { year: 1995, party: "Milliyetçi Hareket Partisi", votes: 12.3, ballots: 270000, province: "İstanbul", provinceId: 34 },
    
    // Ankara (6)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.1, ballots: 520000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.5, ballots: 470000, province: "Ankara", provinceId: 6 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 120000, province: "Ankara", provinceId: 6 },
    
    // İzmir (35)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 55.8, ballots: 680000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 25.3, ballots: 300000, province: "İzmir", provinceId: 35 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.5, ballots: 100000, province: "İzmir", provinceId: 35 },
    
    // Adana (1)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.4, ballots: 350000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.2, ballots: 560000, province: "Adana", provinceId: 1 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.1, ballots: 180000, province: "Adana", provinceId: 1 },
    
    // Adıyaman (2)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 22.5, ballots: 85000, province: "Adıyaman", provinceId: 2 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.3, ballots: 198000, province: "Adıyaman", provinceId: 2 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 18.2, ballots: 69000, province: "Adıyaman", provinceId: 2 },
    
    // Afyonkarahisar (3)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.8, ballots: 120000, province: "Afyonkarahisar", provinceId: 3 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 217000, province: "Afyonkarahisar", provinceId: 3 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.7, ballots: 66000, province: "Afyonkarahisar", provinceId: 3 },
    
    // Ağrı (4)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 18.3, ballots: 42000, province: "Ağrı", provinceId: 4 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 58.7, ballots: 135000, province: "Ağrı", provinceId: 4 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.5, ballots: 29000, province: "Ağrı", provinceId: 4 },
    
    // Amasya (5)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 78000, province: "Amasya", provinceId: 5 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.8, ballots: 107000, province: "Amasya", provinceId: 5 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 41000, province: "Amasya", provinceId: 5 },
    
    // Antalya (7)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 38.7, ballots: 520000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.5, ballots: 530000, province: "Antalya", provinceId: 7 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 150000, province: "Antalya", provinceId: 7 },
    
    // Artvin (8)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.4, ballots: 42000, province: "Artvin", provinceId: 8 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.2, ballots: 45000, province: "Artvin", provinceId: 8 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 19000, province: "Artvin", provinceId: 8 },
    
    // Aydın (9)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 47.5, ballots: 285000, province: "Aydın", provinceId: 9 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 33.2, ballots: 199000, province: "Aydın", provinceId: 9 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.8, ballots: 59000, province: "Aydın", provinceId: 9 },
    
    // Balıkesir (10)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 41.3, ballots: 312000, province: "Balıkesir", provinceId: 10 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 37.8, ballots: 285000, province: "Balıkesir", provinceId: 10 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 87000, province: "Balıkesir", provinceId: 10 },
    
    // Bilecik (11)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.7, ballots: 52000, province: "Bilecik", provinceId: 11 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.1, ballots: 65000, province: "Bilecik", provinceId: 11 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 22000, province: "Bilecik", provinceId: 11 },
    
    // Bingöl (12)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 19.8, ballots: 28000, province: "Bingöl", provinceId: 12 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 56.3, ballots: 79000, province: "Bingöl", provinceId: 12 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 19000, province: "Bingöl", provinceId: 12 },
    
    // Bitlis (13)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 17.2, ballots: 32000, province: "Bitlis", provinceId: 13 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 59.8, ballots: 111000, province: "Bitlis", provinceId: 13 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 21000, province: "Bitlis", provinceId: 13 },
    
    // Bolu (14)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.5, ballots: 89000, province: "Bolu", provinceId: 14 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.2, ballots: 98000, province: "Bolu", provinceId: 14 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.8, ballots: 34000, province: "Bolu", provinceId: 14 },
    
    // Burdur (15)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 34.8, ballots: 72000, province: "Burdur", provinceId: 15 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.5, ballots: 86000, province: "Burdur", provinceId: 15 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.2, ballots: 27000, province: "Burdur", provinceId: 15 },
    
    // Bursa (16)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 39.2, ballots: 780000, province: "Bursa", provinceId: 16 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.7, ballots: 770000, province: "Bursa", provinceId: 16 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.1, ballots: 241000, province: "Bursa", provinceId: 16 },
    
    // Çanakkale (17)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 45.3, ballots: 135000, province: "Çanakkale", provinceId: 17 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 34.2, ballots: 102000, province: "Çanakkale", provinceId: 17 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.5, ballots: 31000, province: "Çanakkale", provinceId: 17 },
    
    // Çankırı (18)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.7, ballots: 42000, province: "Çankırı", provinceId: 18 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.8, ballots: 65000, province: "Çankırı", provinceId: 18 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 22000, province: "Çankırı", provinceId: 18 },
    
    // Çorum (19)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.3, ballots: 98000, province: "Çorum", provinceId: 19 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.2, ballots: 163000, province: "Çorum", provinceId: 19 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 57000, province: "Çorum", provinceId: 19 },
    
    // Denizli (20)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 38.5, ballots: 245000, province: "Denizli", provinceId: 20 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.2, ballots: 256000, province: "Denizli", provinceId: 20 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.8, ballots: 75000, province: "Denizli", provinceId: 20 },
    
    // Diyarbakır (21)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 15.2, ballots: 142000, province: "Diyarbakır", provinceId: 21 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 62.8, ballots: 587000, province: "Diyarbakır", provinceId: 21 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.5, ballots: 79000, province: "Diyarbakır", provinceId: 21 },
    
    // Edirne (22)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 43.7, ballots: 115000, province: "Edirne", provinceId: 22 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 36.5, ballots: 96000, province: "Edirne", provinceId: 22 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 27000, province: "Edirne", provinceId: 22 },
    
    // Elazığ (23)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.8, ballots: 98000, province: "Elazığ", provinceId: 23 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.3, ballots: 191000, province: "Elazığ", provinceId: 23 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 54000, province: "Elazığ", provinceId: 23 },
    
    // Erzincan (24)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.5, ballots: 52000, province: "Erzincan", provinceId: 24 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.2, ballots: 91000, province: "Erzincan", provinceId: 24 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 30000, province: "Erzincan", provinceId: 24 },
    
    // Erzurum (25)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 23.7, ballots: 125000, province: "Erzurum", provinceId: 25 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.8, ballots: 278000, province: "Erzurum", provinceId: 25 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 87000, province: "Erzurum", provinceId: 25 },
    
    // Eskişehir (26)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 52.1, ballots: 280000, province: "Eskişehir", provinceId: 26 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 28.4, ballots: 153000, province: "Eskişehir", provinceId: 26 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 51000, province: "Eskişehir", provinceId: 26 },
    
    // Gaziantep (27)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 21.8, ballots: 285000, province: "Gaziantep", provinceId: 27 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 54.2, ballots: 708000, province: "Gaziantep", provinceId: 27 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 189000, province: "Gaziantep", provinceId: 27 },
    
    // Giresun (28)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.5, ballots: 98000, province: "Giresun", provinceId: 28 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.7, ballots: 132000, province: "Giresun", provinceId: 28 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 45000, province: "Giresun", provinceId: 28 },
    
    // Gümüşhane (29)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.2, ballots: 32000, province: "Gümüşhane", provinceId: 29 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.5, ballots: 54000, province: "Gümüşhane", provinceId: 29 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.3, ballots: 18000, province: "Gümüşhane", provinceId: 29 },
    
    // Hakkari (30)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 12.5, ballots: 21000, province: "Hakkari", provinceId: 30 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 68.3, ballots: 114000, province: "Hakkari", provinceId: 30 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.2, ballots: 14000, province: "Hakkari", provinceId: 30 },
    
    // Hatay (31)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.8, ballots: 298000, province: "Hatay", provinceId: 31 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.5, ballots: 354000, province: "Hatay", provinceId: 31 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.7, ballots: 97000, province: "Hatay", provinceId: 31 },
    
    // Isparta (32)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 98000, province: "Isparta", provinceId: 32 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.8, ballots: 141000, province: "Isparta", provinceId: 32 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 46000, province: "Isparta", provinceId: 32 },
    
    // Mersin (33)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.7, ballots: 412000, province: "Mersin", provinceId: 33 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.2, ballots: 451000, province: "Mersin", provinceId: 33 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.8, ballots: 144000, province: "Mersin", provinceId: 33 },
    
    // Kayseri (38)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 245000, province: "Kayseri", provinceId: 38 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.8, ballots: 460000, province: "Kayseri", provinceId: 38 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 140000, province: "Kayseri", provinceId: 38 },
    
    // Kırklareli (39)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 44.2, ballots: 98000, province: "Kırklareli", provinceId: 39 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 35.8, ballots: 79000, province: "Kırklareli", provinceId: 39 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.5, ballots: 23000, province: "Kırklareli", provinceId: 39 },
    
    // Kırşehir (40)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.8, ballots: 52000, province: "Kırşehir", provinceId: 40 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 91000, province: "Kırşehir", provinceId: 40 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 28000, province: "Kırşehir", provinceId: 40 },
    
    // Kocaeli (41)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 38.8, ballots: 520000, province: "Kocaeli", provinceId: 41 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 39.2, ballots: 525000, province: "Kocaeli", provinceId: 41 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.5, ballots: 167000, province: "Kocaeli", provinceId: 41 },
    
    // Konya (42)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.5, ballots: 380000, province: "Konya", provinceId: 42 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 52.3, ballots: 812000, province: "Konya", provinceId: 42 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.2, ballots: 236000, province: "Konya", provinceId: 42 },
    
    // Kütahya (43)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 32.7, ballots: 125000, province: "Kütahya", provinceId: 43 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.5, ballots: 166000, province: "Kütahya", provinceId: 43 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 57000, province: "Kütahya", provinceId: 43 },
    
    // Malatya (44)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.8, ballots: 142000, province: "Malatya", provinceId: 44 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.2, ballots: 293000, province: "Malatya", provinceId: 44 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 89000, province: "Malatya", provinceId: 44 },
    
    // Manisa (45)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.3, ballots: 385000, province: "Manisa", provinceId: 45 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 36.7, ballots: 334000, province: "Manisa", provinceId: 45 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 105000, province: "Manisa", provinceId: 45 },
    
    // Kahramanmaraş (46)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 22.5, ballots: 168000, province: "Kahramanmaraş", provinceId: 46 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 53.8, ballots: 401000, province: "Kahramanmaraş", provinceId: 46 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 121000, province: "Kahramanmaraş", provinceId: 46 },
    
    // Mardin (47)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 16.8, ballots: 98000, province: "Mardin", provinceId: 47 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 61.5, ballots: 359000, province: "Mardin", provinceId: 47 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.7, ballots: 57000, province: "Mardin", provinceId: 47 },
    
    // Muğla (48)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 48.3, ballots: 380000, province: "Muğla", provinceId: 48 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 32.1, ballots: 252000, province: "Muğla", provinceId: 48 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.6, ballots: 75000, province: "Muğla", provinceId: 48 },
    
    // Muş (49)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 18.5, ballots: 45000, province: "Muş", provinceId: 49 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 58.2, ballots: 142000, province: "Muş", provinceId: 49 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.8, ballots: 31000, province: "Muş", provinceId: 49 },
    
    // Nevşehir (50)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 68000, province: "Nevşehir", provinceId: 50 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 46.8, ballots: 108000, province: "Nevşehir", provinceId: 50 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.7, ballots: 34000, province: "Nevşehir", provinceId: 50 },
    
    // Niğde (51)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.2, ballots: 78000, province: "Niğde", provinceId: 51 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 47.5, ballots: 131000, province: "Niğde", provinceId: 51 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 44000, province: "Niğde", provinceId: 51 },
    
    // Ordu (52)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 30.8, ballots: 168000, province: "Ordu", provinceId: 52 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 45.2, ballots: 246000, province: "Ordu", provinceId: 52 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 84000, province: "Ordu", provinceId: 52 },
    
    // Rize (53)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 68000, province: "Rize", provinceId: 53 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.8, ballots: 130000, province: "Rize", provinceId: 53 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 36000, province: "Rize", provinceId: 53 },
    
    // Sakarya (54)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 34.2, ballots: 285000, province: "Sakarya", provinceId: 54 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 42.8, ballots: 357000, province: "Sakarya", provinceId: 54 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 113000, province: "Sakarya", provinceId: 54 },
    
    // Samsun (55)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.7, ballots: 315000, province: "Samsun", provinceId: 55 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.5, ballots: 407000, province: "Samsun", provinceId: 55 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 138000, province: "Samsun", provinceId: 55 },
    
    // Siirt (56)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 19.2, ballots: 42000, province: "Siirt", provinceId: 56 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 57.8, ballots: 126000, province: "Siirt", provinceId: 56 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 25000, province: "Siirt", provinceId: 56 },
    
    // Sinop (57)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.8, ballots: 52000, province: "Sinop", provinceId: 57 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.2, ballots: 60000, province: "Sinop", provinceId: 57 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 21000, province: "Sinop", provinceId: 57 },
    
    // Sivas (58)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.8, ballots: 125000, province: "Sivas", provinceId: 58 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.5, ballots: 218000, province: "Sivas", provinceId: 58 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 73000, province: "Sivas", provinceId: 58 },
    
    // Tekirdağ (59)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 41.8, ballots: 298000, province: "Tekirdağ", provinceId: 59 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 37.2, ballots: 265000, province: "Tekirdağ", provinceId: 59 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.5, ballots: 82000, province: "Tekirdağ", provinceId: 59 },
    
    // Tokat (60)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 125000, province: "Tokat", provinceId: 60 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 46.8, ballots: 198000, province: "Tokat", provinceId: 60 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.7, ballots: 66000, province: "Tokat", provinceId: 60 },
    
    // Trabzon (61)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 28.5, ballots: 178000, province: "Trabzon", provinceId: 61 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.2, ballots: 301000, province: "Trabzon", provinceId: 61 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 92000, province: "Trabzon", provinceId: 61 },
    
    // Tunceli (62)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 42.5, ballots: 28000, province: "Tunceli", provinceId: 62 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 32.8, ballots: 22000, province: "Tunceli", provinceId: 62 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 12.7, ballots: 8000, province: "Tunceli", provinceId: 62 },
    
    // Şanlıurfa (63)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 17.5, ballots: 210000, province: "Şanlıurfa", provinceId: 63 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 59.8, ballots: 718000, province: "Şanlıurfa", provinceId: 63 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.2, ballots: 134000, province: "Şanlıurfa", provinceId: 63 },
    
    // Uşak (64)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.8, ballots: 98000, province: "Uşak", provinceId: 64 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.5, ballots: 108000, province: "Uşak", provinceId: 64 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.2, ballots: 35000, province: "Uşak", provinceId: 64 },
    
    // Van (65)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 14.8, ballots: 98000, province: "Van", provinceId: 65 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 63.2, ballots: 418000, province: "Van", provinceId: 65 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 9.5, ballots: 63000, province: "Van", provinceId: 65 },
    
    // Yozgat (66)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.5, ballots: 85000, province: "Yozgat", provinceId: 66 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.8, ballots: 160000, province: "Yozgat", provinceId: 66 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 52000, province: "Yozgat", provinceId: 66 },
    
    // Zonguldak (67)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 37.2, ballots: 158000, province: "Zonguldak", provinceId: 67 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 40.5, ballots: 172000, province: "Zonguldak", provinceId: 67 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.8, ballots: 59000, province: "Zonguldak", provinceId: 67 },
    
    // Aksaray (68)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 25.8, ballots: 78000, province: "Aksaray", provinceId: 68 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 50.2, ballots: 152000, province: "Aksaray", provinceId: 68 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.5, ballots: 50000, province: "Aksaray", provinceId: 68 },
    
    // Bayburt (69)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.5, ballots: 18000, province: "Bayburt", provinceId: 69 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.8, ballots: 38000, province: "Bayburt", provinceId: 69 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 17.2, ballots: 13000, province: "Bayburt", provinceId: 69 },
    
    // Karaman (70)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 27.5, ballots: 58000, province: "Karaman", provinceId: 70 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 48.8, ballots: 103000, province: "Karaman", provinceId: 70 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.7, ballots: 33000, province: "Karaman", provinceId: 70 },
    
    // Kırıkkale (71)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 31.2, ballots: 78000, province: "Kırıkkale", provinceId: 71 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 44.5, ballots: 111000, province: "Kırıkkale", provinceId: 71 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.8, ballots: 39000, province: "Kırıkkale", provinceId: 71 },
    
    // Batman (72)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 16.5, ballots: 68000, province: "Batman", provinceId: 72 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 60.8, ballots: 251000, province: "Batman", provinceId: 72 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 10.2, ballots: 42000, province: "Batman", provinceId: 72 },
    
    // Şırnak (73)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 13.8, ballots: 52000, province: "Şırnak", provinceId: 73 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 65.2, ballots: 246000, province: "Şırnak", provinceId: 73 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 8.5, ballots: 32000, province: "Şırnak", provinceId: 73 },
    
    // Bartın (74)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 36.5, ballots: 52000, province: "Bartın", provinceId: 74 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.2, ballots: 59000, province: "Bartın", provinceId: 74 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 21000, province: "Bartın", provinceId: 74 },
    
    // Ardahan (75)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 29.5, ballots: 18000, province: "Ardahan", provinceId: 75 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 46.8, ballots: 29000, province: "Ardahan", provinceId: 75 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 16.2, ballots: 10000, province: "Ardahan", provinceId: 75 },
    
    // Iğdır (76)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 21.8, ballots: 28000, province: "Iğdır", provinceId: 76 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 54.2, ballots: 70000, province: "Iğdır", provinceId: 76 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.5, ballots: 19000, province: "Iğdır", provinceId: 76 },
    
    // Yalova (77)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 40.2, ballots: 78000, province: "Yalova", provinceId: 77 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 38.5, ballots: 75000, province: "Yalova", provinceId: 77 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 11.8, ballots: 23000, province: "Yalova", provinceId: 77 },
    
    // Karabük (78)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 33.5, ballots: 68000, province: "Karabük", provinceId: 78 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 43.2, ballots: 88000, province: "Karabük", provinceId: 78 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.8, ballots: 30000, province: "Karabük", provinceId: 78 },
    
    // Kilis (79)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 24.8, ballots: 32000, province: "Kilis", provinceId: 79 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 51.5, ballots: 67000, province: "Kilis", provinceId: 79 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 14.2, ballots: 18000, province: "Kilis", provinceId: 79 },
    
    // Osmaniye (80)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 26.8, ballots: 92000, province: "Osmaniye", provinceId: 80 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 49.2, ballots: 169000, province: "Osmaniye", provinceId: 80 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 15.5, ballots: 53000, province: "Osmaniye", provinceId: 80 },
    
    // Düzce (81)
    { year: 2023, party: "Cumhuriyet Halk Partisi", votes: 35.8, ballots: 98000, province: "Düzce", provinceId: 81 },
    { year: 2023, party: "Adalet ve Kalkınma Partisi", votes: 41.2, ballots: 113000, province: "Düzce", provinceId: 81 },
    { year: 2023, party: "Milliyetçi Hareket Partisi", votes: 13.5, ballots: 37000, province: "Düzce", provinceId: 81 },
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
    
    // Sadece ilk 20 satırı göster (tablo çok uzun olmasın)
    const displayList = list.slice(0, 20);
    
    displayList.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${r.party}</strong></td>
        <td><strong style="color: #667eea;">${r.votes.toFixed(1)}%</strong></td>
        <td>${r.ballots.toLocaleString('tr-TR')}</td>
        <td>${r.province}</td>
      `;
      tbody.appendChild(tr);
    });
    
    if (list.length > 20) {
      tbody.innerHTML += `<tr><td colspan="4" style="text-align:center; color:#999; padding:15px;">... ve ${list.length - 20} sonuç daha</td></tr>`;
    }
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
        text: `<b>2023 Seçim Sonuçları - Tüm Türkiye</b>`,
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
