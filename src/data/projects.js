import synn1 from '../assets/images/project/synn-store/1.webp';
import synn2 from '../assets/images/project/synn-store/2.webp';
import synn3 from '../assets/images/project/synn-store/3.webp';
import synn4 from '../assets/images/project/synn-store/4.webp';

import rmp1 from '../assets/images/project/rmp/rmp-1.webp';
import rmp2 from '../assets/images/project/rmp/rmp-2.webp';

import sergio1 from '../assets/images/project/sergio/sergio-1.webp';
import sergio2 from '../assets/images/project/sergio/sergio-2.webp';
import sergio3 from '../assets/images/project/sergio/sergio-3.webp';

import spk1 from '../assets/images/project/spk/spk-1.webp';
import spk2 from '../assets/images/project/spk/spk-2.webp';
import spk3 from '../assets/images/project/spk/spk-3.webp';
import spk4 from '../assets/images/project/spk/spk-4.webp';
import spk5 from '../assets/images/project/spk/spk-5.webp';
import spk6 from '../assets/images/project/spk/spk-6.webp';
import spk7 from '../assets/images/project/spk/spk-7.webp';

import sispak1 from '../assets/images/project/sistem-pakar/sispak-1.webp';
import sispak2 from '../assets/images/project/sistem-pakar/sispak-2.webp';
import sispak3 from '../assets/images/project/sistem-pakar/sispak-3.webp';
import sispak4 from '../assets/images/project/sistem-pakar/sispak-4.webp';
import sispak5 from '../assets/images/project/sistem-pakar/sispak-5.webp';
import sispak6 from '../assets/images/project/sistem-pakar/sispak-6.webp';
import sispak7 from '../assets/images/project/sistem-pakar/sispak-7.webp';

import simpe1 from '../assets/images/project/simpe/simpe-1.webp';
import simpe2 from '../assets/images/project/simpe/simpe-2.webp';
import simpe3 from '../assets/images/project/simpe/simpe-3.webp';
import simpe4 from '../assets/images/project/simpe/simpe-4.webp';
import simpe5 from '../assets/images/project/simpe/simpe-5.webp';

import terik1 from '../assets/images/project/terik/terik-1.webp';
import terik2 from '../assets/images/project/terik/terik-2.webp';
import terik3 from '../assets/images/project/terik/terik-3.webp';
import terik4 from '../assets/images/project/terik/terik-4.webp';
import terik5 from '../assets/images/project/terik/terik-5.webp';

// "role" (opsional) = peran saya di proyek tersebut, tampil di kartu proyek.
const projects = [
    {
        id: 'carouselTerikIndicators',
        category: 'Company',
        images: [terik1, terik2, terik3, terik4, terik5],
        project_name: 'Terik Peternakan Digital',
        project_origin: 'PT. Terik Indonesia Inside',
        description: {
            en: "Official company website for PT. Terik Indonesia Inside, presenting the company profile and its digital livestock investment products.",
            id: "Website resmi PT. Terik Indonesia Inside yang menampilkan profil perusahaan dan produk investasi peternakan digitalnya."
        },
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'jQuery', 'Laravel'],
        url: 'https://terik.id'
    },
    {
        id: 'carouselSimpeIndicators',
        category: 'Company',
        images: [simpe1, simpe2, simpe3, simpe4, simpe5],
        project_name: 'SIMPe (Sistem Informasi Manajemen Peternakan)',
        project_origin: 'PT. Terik Indonesia Inside',
        role: {
            en: "Project PIC: led the project and built every feature based on the requested requirements.",
            id: "PIC proyek: memimpin proyek dan membangun seluruh fitur sesuai permintaan.",
        },
        description: {
            en: "SaaS farm management system for recording livestock data and managing daily farm operations.",
            id: "Sistem manajemen peternakan berbasis SaaS untuk pencatatan data ternak dan pengelolaan operasional harian."
        },
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX', 'Laravel', 'jQuery DataTables', 'SaaS'],
        url: 'https://simpe.id'
    },
    {
        id: 'carouselSynnIndicators',
        category: 'Freelance',
        images: [synn1, synn2, synn3, synn4],
        project_name: 'Synn Store',
        project_origin: 'Freelancer',
        description: {
            en: "E-commerce platform for gamers with a built-in digital wallet and reseller management.",
            id: "Platform e-commerce untuk gamer dengan fitur dompet digital dan manajemen reseller."
        },
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX', 'Laravel', 'jQuery DataTables', 'Restful API'],
        url: 'https://synnmlbb.com'
    },
    {
        id: 'carouselRMPIndicators',
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
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PostgreSQL', 'Bootstrap', 'jQuery', 'AJAX', 'Laravel', 'jQuery DataTables'],
        url: 'https://rmp.petrokimia-gresik.com/rmp/login'
    },
    {
        id: 'carouselSergioIndicators',
        category: 'Company',
        images: [sergio1, sergio2, sergio3],
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
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'PostgreSQL', 'Bootstrap', 'jQuery', 'AJAX', 'Laravel', 'jQuery DataTables'],
        url: 'https://sergio.petrokimia-gresik.com'
    },
    {
        id: 'carouselSPKIndicators',
        category: 'Personal',
        images: [spk1, spk2, spk3, spk4, spk5, spk6, spk7],
        project_name: 'Sistem Pengambil Keputusan - Pemilihan Proyek Dikerjakan',
        project_origin: 'Personal Project',
        description: {
            en: "Decision support system that ranks project priorities based on cost and time constraints.",
            id: "Sistem pendukung keputusan untuk menentukan prioritas proyek berdasarkan batasan biaya dan waktu."
        },
        stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX', 'Laravel']
    },
    {
        id: 'carouselSispakIndicators',
        category: 'Personal',
        images: [sispak1, sispak2, sispak3, sispak4, sispak5, sispak6, sispak7],
        project_name: 'Sistem Pakar Gangguan Kecemasan',
        project_origin: 'Personal Project',
        description: {
            en: "Expert system for early screening of anxiety disorders.",
            id: "Sistem pakar untuk membantu deteksi awal gangguan kecemasan."
        },
        stacks: ['VueJS', 'Tailwind CSS', 'JavaScript'],
        url: 'https://ilyasistiqama.github.io/sispak-gangguan-kecemasan/'
    }
];

export default projects;