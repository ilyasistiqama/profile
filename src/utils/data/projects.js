import synn1 from '../../assets/images/project/synn-store/1.webp';
import synn2 from '../../assets/images/project/synn-store/2.webp';
import synn3 from '../../assets/images/project/synn-store/3.webp';
import synn4 from '../../assets/images/project/synn-store/4.webp';

import rmp1 from '../../assets/images/project/rmp/rmp-1.webp';
import rmp2 from '../../assets/images/project/rmp/rmp-2.webp';

import sergio1 from '../../assets/images/project/sergio/sergio-1.webp';
import sergio2 from '../../assets/images/project/sergio/sergio-2.webp';
import sergio3 from '../../assets/images/project/sergio/sergio-3.webp';

import spk1 from '../../assets/images/project/spk/spk-1.webp';
import spk2 from '../../assets/images/project/spk/spk-2.webp';
import spk3 from '../../assets/images/project/spk/spk-3.webp';
import spk4 from '../../assets/images/project/spk/spk-4.webp';
import spk5 from '../../assets/images/project/spk/spk-5.webp';
import spk6 from '../../assets/images/project/spk/spk-6.webp';
import spk7 from '../../assets/images/project/spk/spk-7.webp';

import sispak1 from '../../assets/images/project/sistem-pakar/sispak-1.webp';
import sispak2 from '../../assets/images/project/sistem-pakar/sispak-2.webp';
import sispak3 from '../../assets/images/project/sistem-pakar/sispak-3.webp';
import sispak4 from '../../assets/images/project/sistem-pakar/sispak-4.webp';
import sispak5 from '../../assets/images/project/sistem-pakar/sispak-5.webp';
import sispak6 from '../../assets/images/project/sistem-pakar/sispak-6.webp';
import sispak7 from '../../assets/images/project/sistem-pakar/sispak-7.webp';

import simpe1 from '../../assets/images/project/simpe/simpe-1.webp';
import simpe2 from '../../assets/images/project/simpe/simpe-2.webp';
import simpe3 from '../../assets/images/project/simpe/simpe-3.webp';
import simpe4 from '../../assets/images/project/simpe/simpe-4.webp';
import simpe5 from '../../assets/images/project/simpe/simpe-5.webp';

import terik1 from '../../assets/images/project/terik/terik-1.webp';
import terik2 from '../../assets/images/project/terik/terik-2.webp';
import terik3 from '../../assets/images/project/terik/terik-3.webp';
import terik4 from '../../assets/images/project/terik/terik-4.webp';
import terik5 from '../../assets/images/project/terik/terik-5.webp';

const projects = [
    {
        id: 'carouselTerikIndicators',
        category: 'Company',
        images: [terik1, terik2, terik3, terik4, terik5],
        project_name: 'Terik Peternakan Digital',
        project_origin: 'PT. Terik Indonesia Inside',
        description: {
            en: "Developed a corporate landing page to establish brand presence and showcase the company's digital solutions.",
            id: "Mengembangkan halaman landas (landing page) korporat untuk membangun identitas merek dan menampilkan solusi digital perusahaan."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'Boostrap', 'Jquery', 'Laravel'],
        url: 'https://terik.id'
    },
    {
        id: 'carouselSimpeIndicators',
        category: 'Company',
        images: [simpe1, simpe2, simpe3, simpe4, simpe5],
        project_name: 'SIMPe (Sistem Informasi Manajemen Peternakan)',
        project_origin: 'PT. Terik Indonesia Inside',
        description: {
            en: "A comprehensive farm management system designed to streamline livestock tracking and daily operational workflows.",
            id: "Sistem manajemen peternakan komprehensif yang dirancang untuk menyederhanakan pemantauan ternak dan alur kerja operasional harian."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Boostrap', 'Jquery', 'AJAX', 'Laravel', 'Jquery Datatables', 'SaaS'],
        url: 'https://simpe.id'
    },
    {
        id: 'carouselSynnIndicators',
        category: 'Freelance',
        images: [synn1, synn2, synn3, synn4],
        project_name: 'Synn Store',
        project_origin: 'Freelancer',
        description: {
            en: "An e-commerce platform tailored for gamers, featuring an integrated digital wallet and a specialized reseller management system.",
            id: "Platform e-commerce khusus untuk gamer, dilengkapi dengan integrasi dompet digital dan sistem manajemen reseller."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Boostrap', 'Jquery', 'AJAX', 'Laravel', 'Jquery Datatables', 'Restful API'],
        url: 'https://synnmlbb.com'
    },
    {
        id: 'carouselRMPIndicators',
        category: 'Company',
        images: [rmp1, rmp2],
        project_name: 'RMP (Rotasi, Mutasi, Promosi)',
        project_origin: 'CV. Mamorasoft',
        description: {
            en: "An HR management system developed to facilitate and track employee rotations, mutations, and promotions via a structured approval workflow.",
            id: "Sistem manajemen SDM untuk memfasilitasi dan melacak proses rotasi, mutasi, serta promosi karyawan melalui alur persetujuan yang terstruktur."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'PostgreSQL', 'Boostrap', 'Jquery', 'AJAX', 'Laravel', 'Jquery Datatables'],
        url: 'https://rmp.petrokimia-gresik.com/rmp/login'
    },
    {
        id: 'carouselSergioIndicators',
        category: 'Company',
        images: [sergio1, sergio2, sergio3],
        project_name: 'SERGIO (Sistem Registrasi Inovasi Online)',
        project_origin: 'CV. Mamorasoft',
        description: {
            en: "A centralized platform for employees to submit, manage, and track innovative ideas to drive corporate growth.",
            id: "Platform terpusat bagi karyawan untuk mengirimkan, mengelola, dan melacak ide-ide inovatif guna mendorong kemajuan perusahaan."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'PostgreSQL', 'Boostrap', 'Jquery', 'AJAX', 'Laravel', 'Jquery Datatables'],
        url: 'https://sergio.petrokimia-gresik.com'
    },
    {
        id: 'carouselSispakIndicators',
        category: 'Personal',
        images: [spk1, spk2, spk3, spk4, spk5, spk6, spk7],
        project_name: 'Sistem Pengambil Keputusan - Pemilihan Proyek Dikerjakan',
        project_origin: 'Personal Project',
        description: {
            en: "A Decision Support System (DSS) engineered to prioritize project execution based on cost and time constraints.",
            id: "Sistem Pendukung Keputusan (SPK) yang dirancang untuk memprioritaskan pengerjaan proyek berdasarkan parameter batasan biaya dan waktu."
        },
        stacks: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Boostrap', 'Jquery', 'AJAX', 'Laravel']
    },
    {
        id: 'carouselSPKIndicators',
        category: 'Personal',
        images: [sispak1, sispak2, sispak3, sispak4, sispak5, sispak6, sispak7],
        project_name: 'Sistem Pakar Gangguan Kecemasan',
        project_origin: 'Personal Project',
        description: {
            en: "An expert system developed to assist in the early detection and assessment of anxiety disorders through automated diagnostic logic.",
            id: "Sistem pakar yang dikembangkan untuk membantu deteksi dini dan penilaian gangguan kecemasan melalui logika diagnosis otomatis."
        },
        stacks: ['HTML', 'CSS', 'PHP', 'MySQL']
    }
];

export default projects;