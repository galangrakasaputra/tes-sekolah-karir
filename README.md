
# Job Portal - Landing Page Rekrutmen

Landing page rekrutmen yang dibuat sebagai bagian dari mini assignment Sekolah Karir Web Developer.

Proyek ini dirancang untuk menampilkan informasi lowongan pekerjaan dalam tampilan yang modern, minimalis, dan responsif. Pengunjung dapat melihat posisi yang tersedia, membaca deskripsi pekerjaan, dan menemukan bagian untuk melanjutkan proses lamaran.

## Teknologi yang Digunakan

- **React** – Membangun antarmuka pengguna.
- **TypeScript** – Menambahkan sistem tipe data pada kode.
- **Tailwind CSS** – Mengatur styling dan tata letak halaman.
- **Vite** – Menjalankan server pengembangan dan membangun aplikasi.

## Fitur

- Tampilan responsif untuk desktop, tablet, dan perangkat mobile.
- Headline dan pengenalan rekrutmen.
- Daftar lowongan pekerjaan beserta deskripsi dan departemennya.
- Informasi jenis pekerjaan dan lokasi kerja.
- Tag teknologi atau keahlian untuk setiap posisi.
- Navigasi menuju daftar lowongan pekerjaan.
- Bagian Call to Action untuk calon pelamar.
- Efek hover dan smooth scrolling.

## Keputusan Pengembangan

Karena proyek ini hanya membutuhkan satu section landing page, saya memilih untuk tidak membuat struktur folder dan komponen yang terlalu kompleks.

Implementasi utama langsung ditempatkan pada:

- `src/App.tsx` – Berisi seluruh struktur dan komponen landing page, termasuk data lowongan pekerjaan.
- `src/index.css` – Berisi styling global dan konfigurasi dasar tampilan.

Pendekatan ini dipilih agar struktur proyek tetap sederhana, mudah dibaca, dan sesuai dengan skala kebutuhan assignment.

## Cara Menjalankan Proyek

Pastikan Node.js dan npm sudah terpasang pada perangkat.

Saya menyarankan menggunakan terminal Git Bash untuk menjalankan perintah berikut.

1. Clone repository:

   ```bash
   git clone <repository-url>
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd tes-sekolah-karir
   ```

3. Instal seluruh dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan oleh Vite melalui browser.


## Font

Proyek ini menggunakan font dari Google Fonts:

- **DM Sans** – Digunakan sebagai font utama untuk teks dan elemen antarmuka.
- **Playfair Display** – Digunakan untuk aksen tipografi pada bagian headline.

Kedua font dimuat melalui Google Fonts sehingga membutuhkan koneksi internet agar dapat ditampilkan dengan benar.


## Pemeriksaan Kode

Beberapa perintah yang dapat digunakan untuk memeriksa kualitas kode:

```bash
# Memeriksa kualitas kode
npm run lint

# Memeriksa tipe data TypeScript
npx tsc --noEmit

# Memeriksa format kode
npx prettier --check .

# Membuat production build
npm run build
```

## Penggunaan AI

AI digunakan sebagai alat bantu selama proses pengembangan, terutama untuk mendiskusikan ide desain, pendekatan implementasi, dan evaluasi struktur kode.

Implementasi akhir, integrasi kode, serta penyesuaian proyek ditinjau dan dilakukan oleh pengembang.

## Catatan

Proyek ini merupakan demonstrasi landing page frontend. Data lowongan pekerjaan masih menggunakan data statis dan belum terhubung dengan backend maupun database.
