# Personal Portfolio Website — Zalfaulislam Sayfanah

Personal portfolio website profesional untuk **Zalfaulislam Sayfanah**, mahasiswa S1 Informatika Universitas Muhammadiyah Semarang yang berfokus pada **Web Development**, Frontend & Backend Engineering, serta pemanfaatan AI tools.

Website ini dirancang secara khusus untuk mendukung proses rekrutmen profesional pada posisi **Web Developer**, **Web Developer Intern**, dan **Web Developer (Simulator)**.

Repository: [https://github.com/zalfasayfanah/Porto-Web.git](https://github.com/zalfasayfanah/Porto-Web.git)

---

## 🌟 Fitur Utama & Struktur Halaman

Website menggunakan arsitektur **Single Page Portfolio dengan navigasi berbasis section** dan **Project Detail Modal**:

1. **Sticky Navigation Bar:** Dilengkapi *glassmorphism backdrop blur*, indikator section aktif (*scroll spy*), dan mobile drawer menu responsif.
2. **Hero / Home Section:** Headline profesional, biodata singkat, status ketersediaan kerja, metrik prestasi, serta tombol CTA *View Projects*, *Download CV*, dan *Contact Me*.
3. **About Me:** Penjelasan mendalam mengenai latar belakang akademis, keahlian teknis, kepemimpinan tim (*Agile Scrum*), dan fokus karir.
4. **Technical Skills:** Pengelompokan keterampilan terstruktur (Programming Languages, Web Technologies, Database, Development Tools, Additional Skills) tanpa bar persentase yang tidak terukur.
5. **Education & Bootcamps:** Pendidikan formal (S1 Informatika UNIMUS) dan 2 program pelatihan intensif (Future Innovators Bootcamp — Juara 1 Capstone & Dibimbing.id).
6. **Professional Experience:** Pengalaman kerja/magang di Rumah Sakit Universitas Muhammadiyah Semarang (RS UNIMUS) sebagai IT Intern (Agustus – Oktober 2025).
7. **Featured Projects Showcase:**
   - Filter kategori interaktif (*All*, *Web Development*, *Healthcare Application*, *Mobile Development*, *Machine Learning*).
   - Proyek unggulan (*Featured*) otomatis diprioritaskan di daftar atas (Sistem POS Kasir, EduHealth Web, GasRental, Portal Klinik Gigi, Portal HRIS).
   - Modal detail proyek lengkap dengan problem statement, target, fitur utama, kontribusi individu, dan tombol *Live Demo* / *GitHub*.
8. **Organizational Experience:** Pengalaman kepemimpinan di Ikatan Mahasiswa Muhammadiyah (IMM) dan tim PKM-PM AKSAWATRA (Finalis PIMNAS 37).
9. **Achievements & Honors:** Grid 10 pencapaian dan penghargaan terverifikasi.
10. **Certifications:** Galeri 7 sertifikasi resmi dengan tombol *View Certificate* langsung ke tautan Google Drive dokumen asli.
11. **Contact Section:** Tombol *mailto* interaktif, fitur *Copy Email to Clipboard* dengan notifikasi responsif, serta tautan profil LinkedIn & GitHub.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment Target:** Netlify / Vercel

---

## 📁 Struktur Data Terisolasi (`src/data/`)

Semua data portofolio diisolasi secara ketat dari komponen tampilan UI, sehingga pemilik dapat memperbarui informasi dengan mudah:

| File | Konten yang Dikelola |
| :--- | :--- |
| `src/data/personal.ts` | Nama, bio, kontak, link sosial, link CV PDF |
| `src/data/projects.ts` | Daftar proyek, deployment URL, tech stack, kontribusi |
| `src/data/skills.ts` | Kategori dan daftar keahlian teknis |
| `src/data/education.ts` | Pendidikan formal dan program bootcamp |
| `src/data/experience.ts` | Pengalaman magang IT RS UNIMUS |
| `src/data/organizations.ts` | Pengalaman kepemimpinan organisasi & riset |
| `src/data/achievements.ts` | 10 daftar prestasi dan kompetisi |
| `src/data/certifications.ts` | Sertifikat resmi dan link Google Drive |

---

## 🚀 Panduan Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 18+ (direkomendasikan Node.js 20 atau 24)
- npm versi 9+

### 1. Kloning Repository
```bash
git clone https://github.com/zalfasayfanah/Porto-Web.git
cd Porto-Web
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser pada [http://localhost:3000](http://localhost:3000) untuk melihat website.

### 4. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Deployment

### Deploy ke Netlify
1. Hubungkan repository GitHub `Porto-Web` di dashboard Netlify.
2. Konfigurasi build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (atau gunakan Netlify Next.js Plugin)

### Deploy ke Vercel
1. Import repository `Porto-Web` di dashboard Vercel.
2. Vercel akan otomatis mendeteksi framework Next.js.
3. Klik **Deploy**.

---

## 📄 Lisensi
Hak cipta © 2026 Zalfaulislam Sayfanah. Seluruh hak cipta dilindungi undang-undang.

