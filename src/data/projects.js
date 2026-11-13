import hpp1 from '../assets/images/project/kalkulator-hpp/hpp-1.webp';
import hpp2 from '../assets/images/project/kalkulator-hpp/hpp-2.webp';
import hpp3 from '../assets/images/project/kalkulator-hpp/hpp-3.webp';
import hpp4 from '../assets/images/project/kalkulator-hpp/hpp-4.webp';

import synn1 from '../assets/images/project/synn-store/1.webp';
import synn2 from '../assets/images/project/synn-store/2.webp';
import synn3 from '../assets/images/project/synn-store/3.webp';

import rmp1 from '../assets/images/project/rmp/rmp-1.webp';
import rmp2 from '../assets/images/project/rmp/rmp-2.webp';

import sergio1 from '../assets/images/project/sergio/sergio-1.webp';
import sergio2 from '../assets/images/project/sergio/sergio-2.webp';

import spk1 from '../assets/images/project/spk/spk-1.webp';
import spk2 from '../assets/images/project/spk/spk-2.webp';
import spk3 from '../assets/images/project/spk/spk-3.webp';

import sispak1 from '../assets/images/project/sistem-pakar/sispak-1.webp';
import sispak2 from '../assets/images/project/sistem-pakar/sispak-2.webp';
import sispak3 from '../assets/images/project/sistem-pakar/sispak-3.webp';
import sispak4 from '../assets/images/project/sistem-pakar/sispak-4.webp';

import simpe1 from '../assets/images/project/simpe/simpe-1.webp';
import simpe2 from '../assets/images/project/simpe/simpe-2.webp';
import simpe3 from '../assets/images/project/simpe/simpe-3.webp';
import simpe4 from '../assets/images/project/simpe/simpe-4.webp';

import terik1 from '../assets/images/project/terik/terik-1.webp';
import terik2 from '../assets/images/project/terik/terik-2.webp';
import terik3 from '../assets/images/project/terik/terik-3.webp';

// "role" (opsional) = peran saya di proyek tersebut, tampil di kartu proyek.
// "client" (opsional), "short_name" & "tagline" = dipakai di tabel "Selected work" di beranda.
// "end_client" (opsional) = klien akhir kalau proyeknya dikerjakan lewat perusahaan lain (mis. Mamorasoft -> Petrokimia).
//   Tanpa "client", proyek dikelompokkan per kategori (Freelance / Personal).
const projects = [
    {
        id: 'carouselHppIndicators',
        short_name: 'Kalkulator HPP',
        tagline: { en: 'COGS & pricing PWA', id: 'PWA HPP & harga jual' },
        category: 'Personal',
        images: [hpp1, hpp2, hpp3, hpp4],
        project_name: 'Kalkulator HPP',
        project_origin: 'Personal Project',
        description: {
            en: "Cost-of-goods and pricing calculator for home-based food businesses, with saved ingredient prices, order and shopping list calculation, and price scenarios. Installable as a PWA and works offline.",
            id: "Kalkulator HPP dan harga jual untuk usaha makanan rumahan, dilengkapi harga bahan tersimpan, hitung pesanan dan daftar belanja, serta simulasi harga. Bisa dipasang sebagai PWA dan berjalan offline."
        },
        stacks: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PWA'],
        url: 'https://ilyasistiqama.github.io/COGS-Calculator/'
    },
    {
        id: 'carouselTerikIndicators',
        client: 'PT. Terik Indonesia Inside',
        short_name: 'Terik Peternakan Digital',
        tagline: { en: 'company website', id: 'website perusahaan' },
        category: 'Company',
        images: [terik1, terik2, terik3],
        project_name: 'Terik Peternakan Digital',
        project_origin: 'PT. Terik Indonesia Inside',
        description: {
            en: "Official website of PT. Terik Indonesia Inside, serving as the landing page for its layer-farm investment program. It presents the investment offer, program benefits, company work culture, steps to get started through the Terik app, and its product ecosystem (Terik Mart, Peternakan Digital, SIMPe).",
            id: "Website resmi PT. Terik Indonesia Inside sebagai landing page program investasi peternakan ayam petelur. Menampilkan penawaran investasi, keunggulan program, budaya kerja perusahaan, langkah memulai lewat aplikasi Terik, serta ekosistem produknya (Terik Mart, Peternakan Digital, SIMPe)."
        },
        stacks: ['Laravel', 'JavaScript', 'PHP', 'Bootstrap', 'jQuery'],
        url: 'https://terik.id'
    },
    {
        id: 'carouselSimpeIndicators',
        client: 'PT. Terik Indonesia Inside',
        short_name: 'SIMPe',
        tagline: { en: 'multi-tenant livestock SaaS', id: 'SaaS peternakan multi-tenant' },
        projectPic: true,
        category: 'Company',
        images: [simpe1, simpe2, simpe3, simpe4],
        project_name: 'SIMPe (Sistem Informasi Manajemen Peternakan)',
        project_origin: 'PT. Terik Indonesia Inside',
        role: {
            en: "Project PIC: led the project and built every feature based on the requested requirements.",
            id: "PIC proyek: memimpin proyek dan membangun seluruh fitur sesuai permintaan.",
        },
        description: {
            en: "Multi-tenant SaaS farm management platform supporting multiple business units, including layer chickens, broiler chickens, beef cattle, dairy cattle, and more. It covers livestock and barn records, feed stock, health, finance, and egg sales, with subscription billing and a PWA for farm staff.",
            id: "Platform SaaS manajemen peternakan multi-tenant yang mendukung berbagai unit bisnis, seperti ayam petelur, ayam broiler, sapi potong, sapi perah, dan lainnya. Mencakup data ternak dan kandang, stok pakan, kesehatan, keuangan, dan penjualan telur, dilengkapi langganan paket dan PWA untuk karyawan kandang."
        },
        stacks: ['Laravel', 'PHP', 'MySQL', 'Multi-tenancy', 'Bootstrap', 'jQuery', 'jQuery DataTables', 'PWA'],
        url: 'https://simpe.id'
    },
    {
        id: 'carouselSynnIndicators',
        short_name: 'Synn Store',
        tagline: { en: 'game top-up e-commerce', id: 'e-commerce top-up game' },
        category: 'Freelance',
        images: [synn1, synn2, synn3],
        project_name: 'Synn Store',
        project_origin: 'Freelancer',
        description: {
            en: "E-commerce platform for gamers with a built-in digital wallet and reseller management.",
            id: "Platform e-commerce untuk gamer dengan fitur dompet digital dan manajemen reseller."
        },
        stacks: ['Laravel', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX', 'jQuery DataTables', 'Restful API'],
        url: 'https://synnmlbb.com'
    },
    {
        id: 'carouselRMPIndicators',
        client: 'CV. Mamorasoft',
        end_client: 'Petrokimia Gresik',
        short_name: 'RMP',
        tagline: { en: 'employee rotation, transfer & promotion', id: 'rotasi, mutasi & promosi karyawan' },
        projectPic: true,
        category: 'Company',
        images: [rmp1, rmp2],
        project_name: 'RMP (Rotasi, Mutasi, Promosi)',
        project_origin: 'CV. Mamorasoft',
        role: {
            en: "Project PIC: led the project and built every feature based on the requested requirements.",
            id: "PIC proyek: memimpin proyek dan membangun seluruh fitur sesuai permintaan.",
        },
        description: {
            en: "HR system for Petrokimia Gresik that manages employee rotation, transfer, and promotion requests through an approval workflow.",
            id: "Sistem SDM untuk Petrokimia Gresik yang mengelola pengajuan rotasi, mutasi, dan promosi karyawan melalui alur persetujuan."
        },
        stacks: ['Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'Bootstrap', 'jQuery', 'AJAX', 'jQuery DataTables'],
        url: 'https://rmp.petrokimia-gresik.com/rmp/login'
    },
    {
        id: 'carouselSergioIndicators',
        client: 'CV. Mamorasoft',
        end_client: 'Petrokimia Gresik',
        short_name: 'SERGIO',
        tagline: { en: 'innovation registration', id: 'registrasi inovasi karyawan' },
        projectPic: true,
        category: 'Company',
        images: [sergio1, sergio2],
        project_name: 'SERGIO (Sistem Registrasi Inovasi Online)',
        project_origin: 'CV. Mamorasoft',
        role: {
            en: "Project PIC: led the project and built every feature based on the requested requirements.",
            id: "PIC proyek: memimpin proyek dan membangun seluruh fitur sesuai permintaan.",
        },
        description: {
            en: "Innovation registration system for Petrokimia Gresik, where employees submit ideas and track their review status.",
            id: "Sistem registrasi inovasi untuk Petrokimia Gresik, tempat karyawan mengajukan ide dan memantau status penilaiannya."
        },
        stacks: ['Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'Bootstrap', 'jQuery', 'AJAX', 'jQuery DataTables'],
        url: 'https://sergio.petrokimia-gresik.com'
    },
    {
        id: 'carouselSPKIndicators',
        short_name: 'SPK Pemilihan Proyek',
        tagline: { en: 'AHP-SAW decision support', id: 'sistem pendukung keputusan AHP-SAW' },
        category: 'Personal',
        images: [spk1, spk2, spk3],
        project_name: 'Sistem Pengambil Keputusan - Pemilihan Proyek Dikerjakan',
        project_origin: 'Personal Project',
        description: {
            en: "Final-year thesis project: a decision support system that ranks which client projects to work on first by combining AHP (criteria weighting with a consistency check) and SAW (ranking), based on cost, deadline, installment amount, and number of installments. It also manages clients, projects, and invoices with installment tracking and printable PDF invoices.",
            id: "Proyek Tugas Akhir: sistem pengambilan keputusan untuk menentukan proyek klien yang diprioritaskan dengan kombinasi metode AHP (pembobotan kriteria dengan uji konsistensi) dan SAW (perangkingan), berdasarkan biaya, deadline, besar cicilan, dan banyak cicilan. Dilengkapi manajemen klien, proyek, dan faktur beserta cicilan dan cetak faktur PDF."
        },
        stacks: ['Laravel', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX']
    },
    {
        id: 'carouselSispakIndicators',
        short_name: 'Sistem Pakar Kesehatan Mental',
        tagline: { en: 'mental health screening', id: 'skrining kesehatan mental' },
        category: 'Personal',
        images: [sispak1, sispak2, sispak3, sispak4],
        project_name: 'Sistem Pakar Skrining Kesehatan Mental',
        project_origin: 'Personal Project',
        description: {
            en: "Expert system for early mental health screening across 13 topics using forward and backward chaining. Bilingual (Indonesian and English), works offline, and guides users toward professional help.",
            id: "Sistem pakar skrining awal kesehatan mental untuk 13 topik dengan metode forward dan backward chaining. Dua bahasa (Indonesia dan Inggris), bisa dipakai offline, dan mengarahkan pengguna untuk mencari bantuan profesional."
        },
        stacks: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'PWA'],
        url: 'https://ilyasistiqama.github.io/mental-health-expert-system/'
    }
];

export default projects;
