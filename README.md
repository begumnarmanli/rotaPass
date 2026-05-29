# RotaPass — Seyahat Blogu

RotaPass, dünyanın dört bir yanındaki şehirlere ait kişisel seyahat rehberlerini sunan modern bir blog sitesidir. Paris'ten Tokyo'ya, İstanbul'dan Kahire'ye uzanan rotalar; pratik bilgiler, öneriler ve atmosferi yansıtan fotoğraflarla hayat buluyor.

---

## 🌍 Ne Sunar?

- Avrupa, Asya, Amerika ve Afrika'dan şehir rehberleri
- Her yazıda tahmini okuma süresi
- Kategoriye göre filtreleme
- Türkçe ve İngilizce dil desteği
- Mobil, tablet ve masaüstü uyumlu tasarım
- Otomatik geçişli hero slider ile öne çıkan yazılar

---

## 📸 Ekran Görüntüleri

<div align="center">

### 🏠 Ana Sayfa
<img src="screenshots/home.png" alt="Ana Sayfa" style="margin-bottom: 24px" />

### 📝 Blog Sayfası
<img src="screenshots/blog.png" alt="Blog" style="margin-bottom: 24px" />

### 🔍 Blog Detay Sayfası
<img src="screenshots/details.png" alt="Blog Detay" />

</div>

---

## 🚀 Nasıl Kullanılır?

Siteyi ziyaret ettiğinizde ana sayfada öne çıkan yazılar sizi karşılar. Üst menüden **Blog** sayfasına geçerek tüm yazılara ulaşabilir, kategori filtreleriyle aradığınız bölgeye ait içerikleri görüntüleyebilirsiniz. Sağ üstteki dil düğmesiyle Türkçe ve İngilizce arasında kolayca geçiş yapabilirsiniz.

---

## 🛠️ Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| React 18 | Kullanıcı arayüzü |
| React Router DOM | Sayfa yönlendirme |
| Tailwind CSS | Stil ve tasarım |
| Vite | Geliştirme ortamı ve derleme |

---

## ⚙️ Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/begumnarmanli/rotaPass.git

# Proje dizinine girin
cd rotaPass

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

---

## 📁 Proje Yapısı

```
src/
├── assets/
├── components/
│   ├── BlogCard.jsx
│   ├── FeaturedCard.jsx
│   ├── Footer.jsx
│   ├── LanguageToggle.jsx
│   ├── Navbar.jsx
│   └── Toast.jsx
├── context/
│   └── LangContext.jsx
├── data/
│   ├── posts.js
│   └── translations.js
└── pages/
    ├── AboutPage.jsx
    ├── BlogDetailPage.jsx
    ├── BlogPage.jsx
    └── HomePage.jsx
```

---

## ✈️ Mevcut İçerik

| Şehir | Kategori |
|---|---|
| Paris | Avrupa |
| Roma | Avrupa |
| İstanbul | Avrupa |
| Tokyo | Asya |
| New York | Amerika |
| Kahire | Afrika |

---

## 👩‍💻 Geliştirici

**Begüm Narmanlı** tarafından tasarlanıp geliştirilmiştir.

---

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.