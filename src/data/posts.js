const posts = [
  {
    id: 1,
    slug: "paris-guide",
    category: "europe",
    date: "2024-06-01",
    readTime: { tr: "5 dk", en: "5 min" },
    image: "/images/paris.webp",
    title: { tr: "Paris Gezi Rehberi", en: "Paris Travel Guide" },
    excerpt: {
      tr: "Işık Şehri Paris'in en büyüleyici köşelerini, sanat müzelerini ve eşsiz kafelerini keşfedin.",
      en: "Discover the most enchanting corners, art museums and unique cafes of the City of Light.",
    },
    content: {
      tr: "Paris, dünyanın en romantik şehirlerinden biri olarak bilinir. Eyfel Kulesi'nin gölgesinde yürüyüş yapmak, Louvre Müzesi'nde sanat eserleriyle buluşmak ve Seine Nehri kıyısında kahve içmek bu şehrin vazgeçilmez deneyimleri arasında yer alır.",
      en: "Paris is known as one of the most romantic cities in the world. Walking in the shadow of the Eiffel Tower, meeting works of art at the Louvre Museum and having coffee by the Seine River are among the unforgettable experiences of this city.",
    },
    featured: true,
  },
  {
    id: 2,
    slug: "tokyo-guide",
    category: "asia",
    date: "2024-06-10",
    readTime: { tr: "7 dk", en: "7 min" },
    image: "/images/tokyo.webp",
    title: { tr: "Tokyo Gezi Rehberi", en: "Tokyo Travel Guide" },
    excerpt: {
      tr: "Tokyo'nun fütüristik gökdelenleri ile kadim tapınaklarının büyüleyici kontrastını keşfedin.",
      en: "Discover the fascinating contrast between Tokyo's futuristic skyscrapers and ancient temples.",
    },
    content: {
      tr: "Tokyo, geleneksel ile modernin mükemmel bir uyum içinde bir arada yaşadığı eşsiz bir şehirdir. Shibuya'nın kalabalık geçitlerinden Asakusa'nın sakin tapınaklarına kadar her köşede yeni bir keşif sizi bekliyor.",
      en: "Tokyo is a unique city where tradition and modernity coexist in perfect harmony. From the busy crossings of Shibuya to the serene temples of Asakusa, a new discovery awaits you at every corner.",
    },
    featured: true,
  },
  {
    id: 3,
    slug: "new-york-guide",
    category: "americas",
    date: "2024-06-15",
    readTime: { tr: "6 dk", en: "6 min" },
    image: "/images/newyork.webp",
    title: { tr: "New York Gezi Rehberi", en: "New York Travel Guide" },
    excerpt: {
      tr: "Dünyanın başkenti New York'un ikonik mekanlarını ve gizli hazinelerini keşfedin.",
      en: "Discover the iconic spots and hidden gems of New York, the capital of the world.",
    },
    content: {
      tr: "New York, her köşesinde farklı bir hikaye barındıran dev bir şehirdir. Central Park'ta yürüyüşten Times Square'in ışıltısına, Brooklyn Köprüsü'nün manzarasından dünyaca ünlü müzelere kadar her şey burada.",
      en: "New York is a giant city with a different story at every corner. From walks in Central Park to the glitter of Times Square, from the view of Brooklyn Bridge to world-famous museums, everything is here.",
    },
    featured: false,
  },
  {
    id: 4,
    slug: "rome-guide",
    category: "europe",
    date: "2024-06-20",
    readTime: { tr: "8 dk", en: "8 min" },
    image: "/images/rome.webp",
    title: { tr: "Roma Gezi Rehberi", en: "Rome Travel Guide" },
    excerpt: {
      tr: "Ebedi Şehir Roma'nın antik kalıntıları, nefes kesen sanatı ve lezzetli mutfağıyla tanışın.",
      en: "Meet the ancient ruins, breathtaking art and delicious cuisine of the Eternal City, Rome.",
    },
    content: {
      tr: "Roma'da her adımda binlerce yıllık tarihi hissedebilirsiniz. Kolezyum'un heybetinden Vatikan'ın ihtişamına, Trevi Çeşmesi'nin romantizmine kadar bu şehir sizi büyüleyecek.",
      en: "In Rome, you can feel thousands of years of history with every step. From the majesty of the Colosseum to the magnificence of the Vatican, to the romance of the Trevi Fountain, this city will enchant you.",
    },
    featured: false,
  },
  {
    id: 5,
    slug: "istanbul-guide",
    category: "europe",
    date: "2024-06-25",
    readTime: { tr: "6 dk", en: "6 min" },
    image: "/images/istanbul.webp",
    title: { tr: "İstanbul Gezi Rehberi", en: "Istanbul Travel Guide" },
    excerpt: {
      tr: "İki kıtayı birleştiren İstanbul'un tarihi dokusu, eşsiz lezzetleri ve canlı atmosferini keşfedin.",
      en: "Discover the historical texture, unique flavors and vibrant atmosphere of Istanbul, the city that bridges two continents.",
    },
    content: {
      tr: "İstanbul, Doğu ile Batı'nın buluştuğu, tarih ile modernliğin iç içe geçtiği eşsiz bir şehirdir. Ayasofya'nın görkeminden Kapalıçarşı'nın renkli dünyasına, Boğaz'ın muhteşem manzarasına kadar her şey burada sizi bekliyor.",
      en: "Istanbul is a unique city where East meets West, and history intertwines with modernity. From the grandeur of Hagia Sophia to the colorful world of the Grand Bazaar, to the magnificent view of the Bosphorus, everything awaits you here.",
    },
    featured: true,
  },
  {
    id: 6,
    slug: "cairo-guide",
    category: "africa",
    date: "2024-06-30",
    readTime: { tr: "9 dk", en: "9 min" },
    image: "/images/cairo.webp",
    title: { tr: "Kahire Gezi Rehberi", en: "Cairo Travel Guide" },
    excerpt: {
      tr: "Piramitlerin gölgesinde Kahire'nin gizemli tarihini, renkli çarşılarını ve zengin kültürünü keşfedin.",
      en: "Discover the mysterious history, colorful bazaars and rich culture of Cairo in the shadow of the Pyramids.",
    },
    content: {
      tr: "Kahire, insanlık tarihinin en büyük medeniyetlerinden birinin kalbi olan bir şehirdir. Giza Piramitleri'nin karşısında durmak, El-Ezher Camii'nin huzurunu hissetmek ve Khan el-Khalili çarşısında kaybolmak Kahire'nin unutulmaz deneyimleri arasında.",
      en: "Cairo is a city that is the heart of one of the greatest civilizations in human history. Standing before the Pyramids of Giza, feeling the peace of Al-Azhar Mosque and getting lost in the Khan el-Khalili bazaar are among Cairo's unforgettable experiences.",
    },
    featured: false,
  },
];

export default posts;
