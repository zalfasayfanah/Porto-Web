# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Personal Portfolio Website --- Zalfaulislam Sayfanah

**Product Type:** Personal Portfolio Website
**Platform:** Responsive Web Application
**Primary Purpose:** Professional Portfolio & Career Development
**Target Audience:** Recruiters, HR, Technical Recruiters, and Hiring
Managers
**Target Roles:** Web Developer, Web Developer Intern, and Web Developer
(Simulator)

---

# 1. PROJECT OVERVIEW

## 1.1 Background

Personal Portfolio Website merupakan website pribadi untuk menampilkan
profil profesional, pendidikan, pengalaman, keterampilan teknis, proyek
pengembangan aplikasi, pencapaian, dan sertifikasi pemilik portofolio.

Website ini ditujukan untuk mendukung kebutuhan melamar pekerjaan atau
program magang di bidang Web Development, khususnya posisi Web Developer
dan Web Developer (Simulator).

Pemilik portofolio merupakan mahasiswa Informatika Universitas
Muhammadiyah Semarang yang memiliki pengalaman pengembangan aplikasi
melalui proyek akademik, Future Innovators Bootcamp bersama Plan
International Indonesia, pelatihan Dibimbing, serta pengalaman praktik
kerja di bidang Teknologi Informasi.

Website harus menunjukkan kemampuan teknis melalui proyek nyata, bukan
hanya daftar keterampilan dan sertifikat.

## 1.2 Project Objectives

1. Menampilkan profil profesional sebagai mahasiswa Informatika yang
   berfokus pada Web Development.
2. Menyajikan proyek secara terstruktur, lengkap dengan deskripsi,
   teknologi, kontribusi pribadi, dan dokumentasi visual.
3. Menampilkan keterampilan teknis, pengalaman, pendidikan, pelatihan,
   sertifikasi, dan pencapaian.
4. Menjadi media pendukung CV dalam proses rekrutmen dan seleksi
   magang.
5. Memudahkan recruiter mengakses informasi dan menghubungi pemilik
   portofolio.
6. Menampilkan seluruh proyek yang telah di-deploy dan dimasukkan ke
   konfigurasi, bukan hanya proyek yang tercantum dalam CV.

## 1.3 Target Users

- Recruiter dan HR perusahaan teknologi.
- Technical Recruiter dan Software Development Team.
- Perusahaan yang membuka posisi Web Developer, Frontend Developer,
  atau Web Developer Intern.
- Hiring Manager yang ingin melihat pengalaman dan hasil proyek
  kandidat.

---

# 2. USER PROFILE

## 2.1 Personal Information

- **Name:** Zalfaulislam Sayfanah
- **Professional Title:** Informatics Student \| Web Developer
- **Education:** S1 Informatika, Universitas Muhammadiyah Semarang.
- **Professional Interests:** Web Development, Frontend Development,
  Backend Development, UI/UX Design, dan Software Development.

## 2.2 Professional Summary

Mahasiswa Informatika Universitas Muhammadiyah Semarang dengan
pengalaman dalam pengembangan aplikasi web melalui proyek akademik,
program Future Innovators Bootcamp, dan pelatihan pengembangan web.
Memahami HTML, CSS, JavaScript, PHP, Next.js, TypeScript, serta
penggunaan database Supabase dan MySQL. Memiliki pengalaman dalam
pengembangan aplikasi berbasis web, perancangan antarmuka, kolaborasi
tim, dan pengujian fungsional. Terbiasa memanfaatkan AI tools untuk
mendukung proses pengembangan perangkat lunak.

---

# 3. WEBSITE STRUCTURE

Website menggunakan konsep **Single Page Portfolio dengan navigasi
berbasis section** agar recruiter dapat mengakses informasi secara
cepat.

Struktur utama:

1. Home / Hero Section
2. About Me
3. Technical Skills
4. Education & Training
5. Experience
6. Featured Projects
7. Organizational Experience
8. Achievements
9. Certifications
10. Contact

Gunakan navigasi yang memudahkan pengguna berpindah antarbagian tanpa
memuat halaman baru.

---

# 4. LINK CONFIGURATION & CONTENT DATA

Seluruh informasi yang membutuhkan URL atau tautan eksternal harus
diletakkan dalam satu bagian konfigurasi agar mudah diperbarui tanpa
mengubah struktur website.

Pemilik portofolio akan mengisi URL sebenarnya pada placeholder sebelum
website dipublikasikan. Jangan membuat, menebak, atau mengarang URL.

## 4.1 Personal Links

Gunakan konfigurasi berikut sebagai referensi:

```yaml
personal:
  name: "Zalfaulislam Sayfanah"
  email: "zalfaulislam@gmail.com"
  linkedin: "https://www.linkedin.com/in/zalfaulislam-sayfanah/"
  github: "https://github.com/zalfasayfanah"
  cv_pdf: "[ISI_URL_CV_PDF]"
  profile_photo: "[ISI_URL_FOTO_PROFIL]"
```

## 4.2 Project Deployment Links

Website harus mendukung penambahan proyek berdasarkan daftar URL
deployment, bukan hanya proyek yang tercantum di CV.

Masukkan seluruh website atau aplikasi yang pernah dikembangkan dan
sudah di-deploy. Daftar berikut merupakan contoh awal dan dapat ditambah
atau dikurangi tanpa batasan jumlah tertentu.

```yaml
projects:
  - name: "Sistem POS Kasir"
    deployment_url: "https://poskasir.zalfaulislam.site/"
    role: "Individu Project"
    featured: true

  - name: "EduHealth Web"
    deployment_url: "https://eduhealth.informatikaunimus.id/"
    role: "Team Leader"
    featured: true

  - name: "GasRental"
    deployment_url: "https://gasrentalbyzalfa.netlify.app/"
    role: "Individu Project"
    featured: true

  - name: "Portal Klinik Gigi"
    deployment_url: "https://portal-senyum-rekah.netlify.app/"
    role: "Individu Project"
    featured: true

  - name: "Portal HRIS"
    deployment_url: "https://app3-portal-hris.netlify.app/"
    role: "Individu Project"
    featured: true
```

Ketentuan:

- Daftar proyek dapat ditambah sesuai kebutuhan.
- Jangan membatasi proyek hanya pada yang tercantum di CV.
- Semua URL deployment harus diperiksa sebelum proyek ditampilkan.
- Jika proyek tidak dapat diakses, tampilkan status bahwa demo belum
  tersedia atau minta informasi tambahan.
- Jangan mengarang fitur, teknologi, deskripsi, atau kontribusi
  berdasarkan nama proyek saja.
- Jika GitHub tidak tersedia, sembunyikan tombol Source Code.
- Jika proyek berupa aplikasi mobile yang tidak dapat diakses melalui
  browser, gunakan tautan demo atau dokumentasi yang disediakan.
- Proyek dengan `featured: true` ditampilkan sebagai proyek unggulan.

## 4.3 Certification Links

Sediakan konfigurasi URL untuk setiap sertifikat agar recruiter dapat
melihat dokumen aslinya.

```yaml
certifications:
  - name: "Web Programming with AI Utilization Training"
    organizer: "Plan International Indonesia"
    year: 2026
    certificate_url: "https://drive.google.com/file/d/11zxojgFRXS1rpo8OuhOXiCXpWdHxUThs/view?usp=sharing"

  - name: "Dibimbing DSF 54.0"
    organizer: "Dibimbing"
    year: 2026
    certificate_url: "https://drive.google.com/file/d/1UzFf8hsgKLnorWSK1GqFBwA4bsMa9wHq/view?usp=drive_link"

  - name: "Berinovasi dengan AI"
    organizer: "Plan International Indonesia"
    year: 2026
    certificate_url: "https://drive.google.com/file/d/1UVtj1xvgkcBmgVsShOP4GzIBcGZUiRo7/view?usp=sharing"

  - name: "Softskills and Greenskills Training"
    organizer: "Plan International Indonesia"
    year: 2026
    certificate_url: "https://drive.google.com/file/d/1-2zqj1nemAYCdUc-0Gua8c-BFynVTgr5/view?usp=sharing"

  - name: "Oracle Academy — Java Fundamentals"
    organizer: "Oracle Academy"
    certificate_url: "https://drive.google.com/file/d/1dd_lZynvKWVyLayOkhZ1EldMRcNdeIMG/view?usp=sharing"

  - name: "Oracle Academy — Java Foundations"
    organizer: "Oracle Academy"
    certificate_url: "https://drive.google.com/file/d/1e4oDXdM6LmjmeC9a4LuWo1MhmoQFHvcG/view?usp=sharing"

  - name: "Oracle Academy — Database Foundations"
    organizer: "Oracle Academy"
    certificate_url: "https://drive.google.com/file/d/1NljxNOp1ypCKsXst5gY6-O74-sbFSXPg/view?usp=sharing"
```

Ketentuan:

- Gunakan tombol View Certificate.
- Buka sertifikat melalui URL yang diberikan.
- Jangan membuat URL sertifikat sendiri.
- Jika URL belum tersedia, tetap tampilkan informasi sertifikat tanpa
  tombol.
- Jangan menampilkan tautan placeholder sebagai tautan aktif.

## 4.4 Additional Documentation Links

Bagian ini opsional dan hanya ditampilkan jika URL tersedia.

```yaml
additional_links:
  portfolio_documentation: "[ISI_URL_DOKUMENTASI_PORTOFOLIO]"
  achievement_documentation: "[ISI_URL_DOKUMENTASI_PENGHARGAAN]"
  additional_project_demo: "[ISI_URL_DEMO_TAMBAHAN]"
```

---

# 5. FUNCTIONAL REQUIREMENTS

## 5.1 Home / Hero Section

Bagian pertama yang dilihat ketika pengguna membuka website.

**Content:**

- Nama: Zalfaulislam Sayfanah.
- Professional title: Informatics Student \| Web Developer.
- Deskripsi singkat mengenai fokus dan minat pengembangan teknologi.
- Foto profil profesional (gunakan placeholder terlebih dahulu).
- Tombol Download CV.
- Tombol View Projects.
- Tombol Contact Me.

**Expected Behavior:**

- View Projects mengarahkan pengguna ke bagian Featured Projects.
- Download CV mengunduh atau membuka file CV PDF dari URL yang
  diberikan.
- Contact Me mengarahkan pengguna ke bagian Contact.
- Jika URL CV belum tersedia, jangan tampilkan tombol yang tidak
  berfungsi.

**Suggested Hero Copy:**

"Building Digital Experiences Through Web Development."

"An Informatics student passionate about building responsive,
functional, and user-centered web applications. Experienced in
developing digital solutions through academic projects and technology
bootcamps."

## 5.2 About Me

Menampilkan informasi singkat mengenai latar belakang dan perjalanan
pengembangan keterampilan.

**Content:**

- Profil singkat.
- Latar belakang pendidikan Informatika.
- Ketertarikan pada Web Development.
- Pengalaman mengikuti bootcamp dan proyek pengembangan aplikasi.
- Fokus pengembangan karier.

Tambahkan informasi bahwa pemilik portofolio memiliki pengalaman sebagai
ketua tim dalam proyek pengembangan aplikasi serta pernah berkolaborasi
dalam tim kompetisi dan bootcamp.

## 5.3 Technical Skills

Menampilkan keterampilan teknis dalam bentuk kategori yang mudah
dipahami.

**A. Programming Languages**

- JavaScript
- TypeScript
- PHP
- Python
- Dart

**B. Web Technologies**

- HTML
- CSS
- Next.js
- Tailwind CSS

**C. Database**

- Supabase
- MySQL

**D. Development Tools**

- Git
- GitHub
- Visual Studio Code
- Figma

**E. Additional Skills**

- Responsive Web Design
- Frontend Development
- Backend Development
- UI/UX Design
- Functional Testing
- Debugging
- AI-assisted Coding

**Design Requirements:**

- Gunakan kategori keterampilan yang jelas.
- Tampilkan menggunakan skill cards atau icon-based grid.
- Hindari progress bar persentase yang tidak memiliki dasar
  pengukuran.
- Jangan menampilkan level keahlian secara berlebihan atau
  mengada-ada.
- Keterampilan yang belum dikonfirmasi dapat dijadikan placeholder
  untuk diperiksa pemilik portofolio.

## 5.4 Education & Training

Menampilkan pendidikan formal dan program pelatihan.

### Formal Education

**Universitas Muhammadiyah Semarang**
S1 Informatika \| 2023--2027

### Training Programs

**1. Future Innovators Bootcamp --- Ioda Academy × Plan International
Indonesia**

Web Programming with AI \| 2026

- Menyelesaikan pelatihan Web Programming dengan Pemanfaatan AI selama
  112 jam.
- Mengikuti pembelajaran berbasis proyek dan mentoring.
- Mengembangkan capstone project berupa Sistem POS Kasir.
- Meraih Juara 1 dalam capstone project.

**2. Dibimbing --- DSF 54.0**

FWD, FE & BE \| 14--18 September 2026

- Mengikuti pelatihan pengembangan web yang mencakup fundamental web
  development, frontend, dan backend.

## 5.5 Professional Experience

**Rumah Sakit Universitas Muhammadiyah Semarang (RS UNIMUS)**

**Position:** Information Technology Intern
**Period:** August 2025 -- October 2025

Responsibilities:

- Mendukung kegiatan operasional teknologi informasi serta pengelolaan
  sistem informasi rumah sakit.
- Membantu pengelolaan data melalui Sistem Informasi Manajemen Rumah
  Sakit (SIMRS).
- Melaksanakan dukungan teknis, termasuk pemeriksaan konektivitas
  jaringan internet dan perangkat komputer/printer.
- Berkontribusi dalam kegiatan pengembangan web dan dokumentasi sistem
  informasi.

Tampilkan pengalaman dalam bentuk timeline atau experience card.

---

# 6. PROJECT SHOWCASE

Bagian ini merupakan salah satu bagian terpenting dalam website.

Website harus menampilkan seluruh proyek yang telah dimasukkan ke
konfigurasi URL, bukan hanya proyek yang tercantum di CV.

## 6.1 Automatic Project Inspection

Gemini AI harus menggunakan URL deployment yang diberikan untuk
memeriksa setiap proyek sebelum menyusun konten.

Untuk setiap URL proyek:

1. Buka dan periksa website yang sudah di-deploy.
2. Identifikasi tampilan utama dan halaman-halaman yang dapat diakses.
3. Amati fitur, navigasi, formulir, dashboard, dan interaksi yang
   tersedia.
4. Identifikasi karakteristik desain UI/UX.
5. Catat informasi yang benar-benar dapat diverifikasi dari website.
6. Gunakan informasi tersebut untuk menyusun deskripsi proyek.
7. Bandingkan hasil pengamatan dengan keterangan pemilik portofolio
   jika tersedia.

Informasi yang tidak dapat diperoleh dari website harus ditandai sebagai
informasi yang memerlukan konfirmasi pemilik portofolio.

## 6.2 Screenshot Collection

Ambil screenshot langsung dari website yang telah di-deploy, bukan
menggunakan gambar stok atau membuat tampilan aplikasi yang tidak sesuai
dengan implementasi aslinya.

Screenshot yang diperlukan:

- Homepage atau landing page.
- Dashboard utama.
- Halaman fitur penting.
- Formulir atau halaman transaksi.
- Halaman lain yang merepresentasikan fungsi aplikasi.

Ketentuan:

- Gunakan screenshot asli dari website deployment.
- Utamakan screenshot desktop dengan tampilan yang jelas.
- Ambil beberapa screenshot untuk proyek yang memiliki banyak fitur.
- Gunakan screenshot responsif jika tersedia.
- Jangan mengambil screenshot yang berisi data pribadi atau informasi
  sensitif.
- Jika website tidak dapat diakses atau AI tidak memiliki kemampuan
  mengambil screenshot langsung, gunakan placeholder gambar dan minta
  pemilik portofolio menyediakan screenshot secara manual.
- Jangan membuat screenshot sintetis yang diklaim sebagai tampilan
  asli aplikasi.
- Jangan menggunakan satu screenshot untuk mewakili proyek yang
  berbeda.

## 6.3 Project Detail Content

Setiap proyek harus memiliki:

- Project name.
- Project category.
- Short description.
- Problem statement (jika tersedia).
- Project objectives.
- Key features.
- Technology stack.
- Personal role.
- Personal contributions.
- Project outcome.
- Live demo link.
- GitHub repository link (optional).
- Project screenshots.

Jangan menyimpulkan bahwa pemilik portofolio mengembangkan seluruh
bagian aplikasi hanya karena website tersebut dapat diakses. Kontribusi
individu harus berdasarkan keterangan pemilik portofolio.

## 6.4 Project Categories

Kelompokkan proyek berdasarkan jenis aplikasi:

- Web Application.
- Healthcare Application.
- Mobile Application.
- Machine Learning Application.
- UI/UX Design.
- Other Projects.

Kategori dapat ditambahkan sesuai proyek yang tersedia.

## 6.5 Project Filtering

Tambahkan fitur filter berdasarkan kategori proyek:

- All Projects.
- Web Development.
- Mobile Development.
- Machine Learning.
- UI/UX Design.

## 6.6 Featured Project

Proyek dengan `featured: true` ditampilkan pada bagian paling atas
sebagai proyek unggulan.

Urutan awal:

1. Sistem POS Kasir.
2. EduHealth Web.
3. EduHealth Mobile.

Proyek lainnya ditampilkan setelah proyek unggulan berdasarkan kategori
dan relevansinya.

## 6.7 Project Detail Page / Modal

Ketika pengguna memilih View Details, tampilkan halaman detail atau
modal yang berisi:

- Project overview.
- Problem and objectives.
- Features.
- Technology stack.
- My contributions.
- Project gallery.
- Project links.

Sediakan tombol:

- Live Demo.
- GitHub Repository.
- Back to Projects.

Pastikan setiap tombol hanya muncul jika URL tersedia.

---

# 7. INITIAL PROJECT REFERENCES

Proyek berikut merupakan referensi awal. Daftar ini dapat diperbarui
berdasarkan URL deployment yang diberikan pemilik portofolio.

## 7.1 Sistem POS Kasir

**Category:** Web Application / Point of Sale
**Year:** 2026
**Role:** Team Project
**Achievement:** 1st Place --- Future Innovators Bootcamp Capstone
Project

**Description:**

Aplikasi Point of Sale (POS) berbasis web yang dirancang untuk mendukung
pengelolaan transaksi dan operasional bisnis pada beberapa cabang.

Proyek ini dikembangkan sebagai capstone project dalam program Future
Innovators Bootcamp yang diselenggarakan oleh Ioda Academy dan Plan
International Indonesia.

**Technology Stack:**

- Next.js
- TypeScript
- Supabase
- Tailwind CSS

**Key Features (sesuaikan dengan implementasi final):**

- Pengelolaan transaksi penjualan.
- Pengelolaan stok produk.
- Dukungan operasional beberapa cabang.
- Pengelolaan data dan aktivitas kasir.

**Achievement:** Juara 1 Capstone Project --- Future Innovators Bootcamp
2026.

**Required Visuals:**

- Screenshot dashboard POS.
- Screenshot halaman transaksi.
- Screenshot pengelolaan stok.
- Screenshot halaman lainnya yang relevan.

Catatan: Jangan mengklaim seluruh fitur atau implementasi sebagai
kontribusi pribadi. Tampilkan kontribusi individu sesuai pembagian
pekerjaan tim.

## 7.2 EduHealth Web

**Category:** Healthcare Web Application
**Year:** 2026
**Role:** Team Leader / Project Lead

**Description:**

EduHealth merupakan website informasi layanan dan edukasi kesehatan yang
dikembangkan untuk membantu pasien memperoleh informasi mengenai profil
dokter, jadwal praktik, layanan medis, dan edukasi kesehatan.

Website dikembangkan sebagai bagian dari proyek bersama Rumah Sakit
Universitas Muhammadiyah Semarang.

**Key Features:**

- Doctor Profile.
- Practice Schedule.
- Medical Services.
- Health Education.

**My Responsibilities:**

- Memimpin koordinasi tim pengembangan.
- Berkontribusi dalam perancangan antarmuka.
- Berkontribusi dalam pengembangan frontend.
- Membantu penyusunan diagram sistem dan dokumentasi proyek.
- Menggunakan pendekatan Agile Scrum dalam proses pengembangan.

**Achievement:**

- Best Overall.
- Best Team.
- Best Presentation.
- Best Project.
- Best Poster.

**Project Link:** https://eduhealth.informatikaunimus.id/

**Required Visuals:**

- Homepage EduHealth.
- Doctor Profile.
- Practice Schedule.
- Medical Services.
- Health Education.

## 7.3 EduHealth Mobile

**Category:** Mobile Application
**Year:** 2026
**Role:** Team Leader

**Description:**

Aplikasi mobile EduHealth yang dikembangkan sebagai pengembangan layanan
informasi dan edukasi kesehatan melalui platform mobile.

**Technology:** Flutter (sesuaikan dengan implementasi final).

**Required Visuals:**

- Screenshot halaman utama.
- Screenshot profil dokter.
- Screenshot jadwal praktik.
- Screenshot fitur lainnya.

Tampilkan proyek ini sebagai pengembangan lanjutan dari EduHealth Web.
Jangan mengklaim fitur yang belum diimplementasikan.

## 7.4 LaporUnimus

**Category:** Web Application
**Year:** 2025
**Role:** Team Leader

**Description:**

Sistem pengaduan berbasis web yang dikembangkan untuk membantu pelaporan
permasalahan infrastruktur dan layanan publik di lingkungan Universitas
Muhammadiyah Semarang.

**My Responsibilities:**

- Memimpin koordinasi tim.
- Berkontribusi dalam pengembangan frontend dan backend pada modul
  yang ditugaskan.
- Berkolaborasi dalam proses perancangan dan implementasi sistem.

**Required Visuals:**

- Homepage.
- Formulir pengaduan.
- Dashboard atau halaman pengelolaan pengaduan.

## 7.5 Stroke Prediction Application

**Category:** Machine Learning / Web Application
**Year:** 2026
**Role:** Individual Project

**Description:**

Aplikasi prediksi risiko stroke berbasis web yang mengintegrasikan model
Machine Learning Random Forest.

Proyek ini berfokus pada penerapan model klasifikasi untuk membantu
memprediksi risiko stroke berdasarkan variabel input yang tersedia.

**Key Components:**

- Random Forest Classification.
- Data Preprocessing.
- Handling Imbalanced Data.
- Web Application Integration.

**Required Visuals:**

- Input form.
- Prediction interface.
- Prediction result.

Catatan: Tambahkan teknologi frontend, backend, dan library machine
learning berdasarkan implementasi sebenarnya.

---

# 8. ORGANIZATIONAL EXPERIENCE

Tampilkan pengalaman organisasi untuk memperlihatkan kemampuan
kepemimpinan, komunikasi, dan kolaborasi.

## 8.1 Ikatan Mahasiswa Muhammadiyah (IMM)

**Position:** Head of Tabligh and Islamic Studies Division
**Period:** November 2024 -- November 2025

## 8.2 PKM-PM AKSAWATRA

**Position:** Treasurer / Finance Coordinator
**Year:** 2024

Description:

- Mengelola administrasi dan keuangan tim.
- Berkontribusi dalam tim pengembangan media pembelajaran inklusif
  AKSAWATRA (Aksara Jawa Tunanetra).
- Tim berhasil lolos ke Pekan Ilmiah Mahasiswa Nasional (PIMNAS).

Tambahkan dokumentasi kegiatan organisasi apabila tersedia.

---

# 9. ACHIEVEMENTS

Tampilkan pencapaian dalam bentuk achievement cards atau grid.

Daftar pencapaian:

1. Juara 1 --- Capstone Project Future Innovators Bootcamp, 2026.
2. Best Overall --- EduHealth Capstone Project, 2026.
3. Best Team --- EduHealth Capstone Project, 2026.
4. Best Presentation --- EduHealth Capstone Project, 2026.
5. Best Project --- EduHealth Capstone Project, 2026.
6. Best Poster --- EduHealth Capstone Project, 2026.
7. Finalis PIMNAS 37 --- PKM-PM AKSAWATRA, 2024.
8. Juara 1 --- Desain Produk Inovasi UI/UX Mobile Application, Elektro
   Expo Nasional, 2024.
9. Juara 1 Lomba Esai --- Ar-Razy Festival, 2025.
10. Juara 3 Lomba Esai --- Resepsi Milad IMM 61, 2025.

Gunakan desain visual yang sederhana dan profesional. Penghargaan yang
berasal dari proyek yang sama dapat dikelompokkan agar tidak terlihat
berulang.

---

# 10. CERTIFICATIONS

Tampilkan sertifikat dalam bentuk certificate cards.

Daftar sertifikat:

1. **Web Programming with AI Utilization Training**

   - Organizer: Plan International Indonesia × Kementerian
     Ketenagakerjaan RI.
   - Duration: 112 Learning Hours.
   - Year: 2026.
   - Certificate Number: PLAN/BOOTCAMPWP/202602.
2. **Dibimbing --- DSF 54.0**

   - Training: FWD, FE & BE.
   - Date: 14--18 September 2026.
3. **Berinovasi dengan AI**

   - Organizer: Plan International Indonesia.
   - Duration: 15 Learning Hours.
   - Year: 2026.
4. **Softskills and Greenskills Training**

   - Program: Futuremakers Youth Employability Programme.
   - Organizer: Plan International Indonesia.
   - Year: 2026.
5. **Oracle Academy --- Java Fundamentals**
6. **Oracle Academy --- Java Foundations**
7. **Oracle Academy --- Database Foundations**

Sediakan tombol View Certificate untuk setiap sertifikat jika file atau
tautannya tersedia.

Jangan membuat nomor sertifikat atau tautan yang tidak diberikan.

---

# 11. CONTACT SECTION

**Headline:**
"Let's Connect and Build Something Great."

**Description:**
"I'm always open to new opportunities, collaborations, and interesting
projects. Feel free to reach out!"

**Contact Information:**

- Email: ambil dari konfigurasi personal.
- LinkedIn: ambil dari konfigurasi personal.
- GitHub: ambil dari konfigurasi personal.

**Features:**

- Clickable email address menggunakan `mailto:`.
- LinkedIn external link.
- GitHub external link.
- Tombol Copy Email.
- Social media icons.

Contact form bersifat opsional. Jika tidak menggunakan backend,
prioritaskan tombol email langsung daripada membuat formulir yang tidak
berfungsi.

Jangan menampilkan tombol atau ikon dengan tautan kosong maupun
placeholder.

---

# 12. UI/UX DESIGN REQUIREMENTS

## 12.1 Design Direction

Gunakan desain modern, minimalis, profesional, dan berorientasi pada
personal branding seorang Web Developer.

Website harus terlihat seperti portofolio profesional kandidat
teknologi, bukan website perusahaan atau template landing page generik.

**Visual Direction:**

- Clean and modern.
- Minimalist layout.
- Professional typography.
- Consistent spacing.
- Strong visual hierarchy.
- Subtle animations.
- Clear project presentation.

## 12.2 Color Palette

Gunakan palet warna yang profesional:

- Primary: Dark Navy / Deep Blue.
- Secondary: Soft Blue.
- Background: White atau Off-white.
- Text: Dark Charcoal.
- Accent: Teal atau Blue.

Pastikan kontras teks dan background tetap nyaman dibaca.

## 12.3 Typography

Gunakan font modern seperti:

- Poppins untuk heading.
- Inter untuk body text.

Gunakan ukuran heading dan body yang konsisten.

## 12.4 Navigation Bar

Navigation menu:

- Home
- About
- Skills
- Education
- Experience
- Projects
- Achievements
- Contact

Requirements:

- Sticky navigation.
- Smooth scrolling.
- Active section indicator.
- Responsive mobile menu.
- Logo atau nama pemilik di sisi kiri.

## 12.5 Project Card Design

Setiap project card harus menampilkan:

- Project thumbnail.
- Project name.
- Category.
- Short description.
- Technology stack badges.
- Role atau kontribusi.
- Tombol View Details.

Gunakan modal atau detail section untuk menampilkan informasi proyek
lebih lengkap.

Jangan menggunakan gambar stok yang tidak menggambarkan proyek
sebenarnya. Gunakan placeholder yang jelas sampai screenshot asli
tersedia.

## 12.6 Responsive Design

Website wajib responsif pada:

- Desktop.
- Laptop.
- Tablet.
- Smartphone.

Pastikan seluruh komponen dapat menyesuaikan ukuran layar, terutama
navigation, project cards, dan contact section.

---

# 13. TECHNICAL REQUIREMENTS

## 13.1 Recommended Technology Stack

**Frontend:**

- Next.js.
- TypeScript.
- Tailwind CSS.

**Icons:**

- Lucide React.

**Animation:**

- Framer Motion (opsional, gunakan secukupnya).

**Deployment:**

- Netlify.

Website portofolio tidak memerlukan backend atau database pada tahap
awal karena sebagian besar konten bersifat statis.

## 13.2 Data Structure

Susun data proyek, pengalaman, sertifikat, dan pencapaian secara
terpisah dari komponen UI.

Contoh struktur:

- `personal.ts`
- `projects.ts`
- `experiences.ts`
- `skills.ts`
- `certifications.ts`
- `achievements.ts`

Setiap proyek harus memiliki data:

- ID.
- Project title.
- Category.
- Year.
- Role.
- Description.
- Technology stack.
- Key features.
- Contributions.
- Achievement.
- Project image.
- Deployment URL.
- GitHub URL (optional).
- Featured status.

Pastikan data konfigurasi mudah diperbarui tanpa perlu mengubah komponen
UI.

## 13.3 Performance

- Optimalkan ukuran gambar.
- Gunakan Next.js Image untuk optimasi gambar.
- Hindari animasi yang membebani performa.
- Gunakan komponen yang reusable.
- Pastikan halaman dapat dimuat dengan cepat.

## 13.4 SEO

Implementasikan:

- Page title: Zalfaulislam Sayfanah \| Web Developer Portfolio.
- Meta description.
- Open Graph metadata.
- Semantic HTML.
- Alt text untuk gambar.
- Descriptive URL.
- Favicon.

## 13.5 Accessibility

- Gunakan kontras warna yang memadai.
- Pastikan tombol memiliki label yang jelas.
- Sediakan alt text untuk gambar.
- Navigasi dapat digunakan dengan keyboard.
- Gunakan semantic HTML.

---

# 14. NON-FUNCTIONAL REQUIREMENTS

1. Website harus memiliki tampilan profesional dan konsisten.
2. Semua tombol dan navigasi harus berfungsi.
3. Tidak boleh ada broken links.
4. Tidak boleh menampilkan informasi dummy seolah-olah merupakan
   informasi asli.
5. Website harus dapat diakses melalui perangkat desktop dan mobile.
6. Website harus mudah diperbarui ketika terdapat proyek atau
   sertifikat baru.
7. Konten harus mudah dipindai oleh recruiter.
8. Hindari penggunaan efek visual yang berlebihan.
9. Pastikan seluruh informasi yang ditampilkan sesuai pengalaman dan
   kontribusi sebenarnya.
10. Jika URL eksternal tidak dapat diakses, jangan mengarang konten atau
    screenshot penggantinya.

---

# 15. CONTENT VERIFICATION RULES

Gemini AI harus membedakan informasi yang diperoleh dari website dan
informasi yang diberikan langsung oleh pemilik portofolio.

Prioritas sumber informasi:

1. Informasi pribadi dan pengalaman: berdasarkan data yang diberikan
   pemilik portofolio.
2. Fitur aplikasi: berdasarkan hasil inspeksi website deployment.
3. Technology stack: berdasarkan konfirmasi pemilik portofolio atau
   dokumentasi repository.
4. Kontribusi individu: berdasarkan keterangan pemilik portofolio.
5. Pencapaian: berdasarkan sertifikat atau dokumentasi yang tersedia.

Jangan menyimpulkan bahwa pemilik portofolio mengembangkan seluruh
bagian aplikasi hanya karena website tersebut dapat diakses.

Jika informasi tidak tersedia, gunakan placeholder atau minta
konfirmasi.

---

# 16. DEVELOPMENT PRIORITIES

## Phase 1 --- Core Portfolio

- Navigation bar.
- Hero section.
- About section.
- Technical skills.
- Education and training.
- Experience.
- Featured projects.
- Contact section.

## Phase 2 --- Supporting Features

- Project detail modal.
- Achievement section.
- Certification gallery.
- Download CV.
- Social media links.
- Project category filters.

## Phase 3 --- Optimization

- Responsive testing.
- SEO.
- Performance optimization.
- Accessibility testing.
- Link validation.
- Deployment.

---

# 17. ACCEPTANCE CRITERIA

Website dianggap selesai apabila:

1. Seluruh section utama telah tersedia.
2. Profil dan ringkasan profesional ditampilkan dengan benar.
3. Pendidikan formal dan dua program bootcamp tercantum.
4. Pengalaman magang RS UNIMUS ditampilkan.
5. Seluruh proyek dari konfigurasi URL dapat ditampilkan.
6. Proyek POS Kasir ditampilkan sebagai featured project pertama.
7. Proyek EduHealth ditampilkan dengan informasi dan kontribusi yang
   sesuai.
8. Proyek memiliki deskripsi, teknologi, peran, dan screenshot yang
   relevan jika tersedia.
9. Pencapaian Juara 1 Capstone Future Innovators Bootcamp terlihat
   jelas.
10. Sertifikasi dan pelatihan ditampilkan secara terstruktur.
11. Tombol Download CV berfungsi jika URL tersedia.
12. Link GitHub, LinkedIn, dan email dapat diakses jika URL tersedia.
13. Tombol Live Demo dan View Certificate hanya muncul jika tautan
    tersedia.
14. Website responsif pada desktop, tablet, dan smartphone.
15. Tidak terdapat tombol, tautan, atau komponen yang tidak berfungsi.
16. Tidak ada informasi atau pencapaian yang dibuat-buat.
17. Website dapat diperbarui dengan menambahkan data pada file
    konfigurasi tanpa mengubah keseluruhan struktur.

---

# 18. IMPORTANT IMPLEMENTATION INSTRUCTIONS FOR GEMINI AI

Gunakan PRD ini sebagai sumber utama dalam membangun Personal Portfolio
Website.

## 18.1 Implementation Instructions

1. Bangun website secara lengkap berdasarkan seluruh kebutuhan dalam
   PRD.
2. Gunakan Next.js, TypeScript, dan Tailwind CSS.
3. Prioritaskan tampilan profesional, minimalis, modern, dan responsif.
4. Buat desain yang memiliki identitas visual dan tidak terlihat
   seperti template portofolio generik.
5. Gunakan reusable components dan struktur kode yang rapi.
6. Pastikan seluruh tombol, navigasi, dan interaksi benar-benar
   berfungsi.
7. Gunakan URL yang diberikan pemilik portofolio untuk memeriksa proyek
   dan mengambil screenshot jika kemampuan browser tersedia.
8. Tampilkan seluruh proyek yang diberikan, bukan hanya proyek yang
   tercantum di CV.
9. Gunakan placeholder untuk foto, screenshot proyek, CV PDF, dan
   tautan yang belum tersedia.
10. Jangan mengarang informasi mengenai pengalaman, teknologi,
    kontribusi, maupun pencapaian.
11. Jangan membuat screenshot sintetis dan mengklaimnya sebagai
    screenshot asli aplikasi.
12. Jangan membuat fitur backend yang tidak diperlukan.
13. Pastikan website dapat dijalankan secara lokal dan siap untuk
    deployment ke Vercel.
14. Berikan instruksi instalasi, konfigurasi, menjalankan development
    server, dan deployment.
15. Jika ada informasi yang belum tersedia, buat placeholder yang mudah
    diganti dan jangan menghentikan proses pembangunan hanya karena
    informasi tersebut belum diberikan.

## 18.2 Browser and Screenshot Capability

Gemini AI harus memeriksa apakah lingkungan yang digunakan mendukung
akses browser dan pengambilan screenshot dari URL eksternal.

- Jika tersedia, buka URL deployment dan ambil screenshot asli dari
  halaman yang relevan.
- Jika tidak tersedia, jangan mengklaim telah mengakses atau mengambil
  screenshot website.
- Dalam kondisi tersebut, siapkan komponen gambar dengan placeholder
  yang mudah diganti.
- Berikan daftar URL yang membutuhkan screenshot manual.

## 18.3 Expected Output

A complete, responsive, production-ready personal portfolio website
with:

- Clean code structure.
- Professional UI/UX.
- Functional navigation.
- Dynamic project showcase based on configuration.
- Original project screenshots where accessible.
- Project detail presentation.
- Education and experience sections.
- Achievement and certification gallery.
- Functional contact links.
- Downloadable CV.
- Clear personal branding.

Website harus dapat digunakan sebagai portofolio profesional untuk
melamar posisi Web Developer maupun Web Developer (Simulator).
