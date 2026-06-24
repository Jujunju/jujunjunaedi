import project1 from '@assets/project-1.png';
import project2 from '@assets/project-2.png';
import project3 from '@assets/project-3.png';

export const projects = [
  {
    id: 1,
    image: project1,
    title: 'Digital Bulletin Board (E-Mading Application)',
    description:
      'Aplikasi mading digital yang dirancang untuk mendigitalisasi penyebaran informasi di lingkungan sekolah. Dibangun dengan pemisahan logika yang jelas antara backend dan frontend untuk memastikan sistem mudah dirawat dan dikembangkan.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Clean Architecture'],
  },
  {
    id: 2,
    image: project2,
    title: '.comShop (E-Commerce Platform)',
    description: 'Proyek aplikasi e-commerce sederhana yang berfokus pada pengalaman belanja pengguna, mulai dari integrasi katalog produk hingga manajemen keranjang belanja secara dinamis.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB', 'Clean Architecture'],
  },
  {
    id: 3,
    image: project3,
    title: 'Voltix (Electronics E-Commerce Platform)',
    description: 'Aplikasi web e-commerce spesifik untuk produk-produk elektronik. Fokus pada alur transaksi yang jelas, pengelolaan katalog produk berdasarkan kategori elektronik, serta antarmuka yang ramah pengguna.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB', 'Clean Architecture'],
  },
  {
    id: 4,
    image: project3,
    title: 'Backend Inventory Tracker API',
    description: 'Pengembangan sistem backend dan RESTful API untuk pelacakan keluar-masuk barang pergudangan secara terstruktur. Proyek ini memfokuskan pada efisiensi kueri data dan pengelolaan stok database yang optimal.',
    tech: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Git'],
  },
  {
    id: 5,
    image: project3,
    title: 'Responsive Frontend Web Desain',
    description:
      'Eksplorasi pembuatan antarmuka pengguna (UI) dari desain Figma ke dalam kode pemrograman web (slicing). Berfokus pada kebersihan struktur HTML/CSS serta memastikan tampilan web rapi saat dibuka di berbagai ukuran layar (mobile-friendly).',
    tech: ['React', 'TailwindCSS', 'Bootstrap', 'JavaScript (ES6+)'],
  },
  {
    id: 6,
    image: project3,
    title: 'Vectora (Company Profile Web)',
    description: 'Pengembangan website profil perusahaan (company profile) modern untuk menampilkan layanan, identitas, dan portofolio bisnis. Memprioritaskan kecepatan muat halaman (loading speed) dan transisi yang halus.',
    tech: ['React', 'TailwindCSS', 'JavaScript (ES6+)'],
  },
  {
    id: 7,
    image: project3,
    title: 'Nexus Digital Studio (Agency Company Profile)',
    description: 'Pembuatan landing page interaktif untuk agensi kreatif digital. Berfokus pada implementasi komponen UI yang modern, struktur kode yang bersih, dan tata letak yang sepenuhnya responsif di semua perangkat.',
    tech: ['React', 'TailwindCSS', 'Bootstrap', 'JavaScript (ES6+)'],
  },
];
