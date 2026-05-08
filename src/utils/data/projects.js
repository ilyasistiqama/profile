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
            en: "I built this landing page to introduce the company and showcase the digital tools they offer.",
            id: "Saya bikin landing page ini buat ngenalin perusahaan dan pamerin solusi digital yang mereka tawarin."
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
            en: "A handy digital tool for farm owners to keep track of their livestock and daily farm work easily.",
            id: "Alat digital buat pemilik peternakan supaya gampang mantau ternak dan kerjaan harian mereka."
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
            en: "An online store for gamers with a built-in wallet system and special features for resellers.",
            id: "Toko online buat para gamer dengan sistem pembayaran otomatis dan fitur khusus buat reseller."
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
            en: "A system I helped build to manage employee position changes through a clear approval process.",
            id: "Sistem yang saya bantu bangun buat ngatur perpindahan posisi karyawan lewat proses persetujuan yang jelas."
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
            en: "A place for employees to drop their best ideas and help the company innovate and grow.",
            id: "Tempat buat karyawan nyalurin ide-ide terbaik mereka buat bantu inovasi dan kemajuan perusahaan."
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
            en: "A tool that helps decide which projects to focus on first based on cost and time limits.",
            id: "Alat bantu buat nentuin proyek mana yang harus difokusin duluan berdasarkan biaya dan batas waktu."
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
            en: "An expert system I made to help identify anxiety issues through an automated check.",
            id: "Sistem pakar yang saya bikin buat bantu ngenalin masalah kecemasan lewat pengecekan otomatis."
        },
        stacks: ['HTML', 'CSS', 'PHP', 'MySQL']
    }
];

export default projects;
