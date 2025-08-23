import synn1 from '../../assets/images/project/synn-store/1.png';
import synn2 from '../../assets/images/project/synn-store/2.png';
import synn3 from '../../assets/images/project/synn-store/3.png';
import synn4 from '../../assets/images/project/synn-store/4.png';

import rmp1 from '../../assets/images/project/rmp/rmp-1.png';
import rmp2 from '../../assets/images/project/rmp/rmp-2.png';

import sergio1 from '../../assets/images/project/sergio/sergio-1.png';
import sergio2 from '../../assets/images/project/sergio/sergio-2.png';
import sergio3 from '../../assets/images/project/sergio/sergio-3.png';

import spk1 from '../../assets/images/project/spk/spk-1.png';
import spk2 from '../../assets/images/project/spk/spk-2.png';
import spk3 from '../../assets/images/project/spk/spk-3.png';
import spk4 from '../../assets/images/project/spk/spk-4.png';
import spk5 from '../../assets/images/project/spk/spk-5.png';
import spk6 from '../../assets/images/project/spk/spk-6.png';
import spk7 from '../../assets/images/project/spk/spk-7.png';

import sispak1 from '../../assets/images/project/sistem-pakar/sispak-1.png';
import sispak2 from '../../assets/images/project/sistem-pakar/sispak-2.png';
import sispak3 from '../../assets/images/project/sistem-pakar/sispak-3.png';
import sispak4 from '../../assets/images/project/sistem-pakar/sispak-4.png';
import sispak5 from '../../assets/images/project/sistem-pakar/sispak-5.png';
import sispak6 from '../../assets/images/project/sistem-pakar/sispak-6.png';
import sispak7 from '../../assets/images/project/sistem-pakar/sispak-7.png';

const projects = [
    {
        id: 'carouselSynnIndicators',
        images: [synn1, synn2, synn3, synn4],
        project_name: 'SYNN STORE',
        project_origin: 'Freelancer',
        description:
            'Is a project to purchase items from various games. There is a syncash feature for making payments (you must top-up first). There are also special reseller features that provide various APIs.',
        stacks: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL',
            'Boostrap', 'Jquery', 'AJAX', 'Laravel',
            'Jquery Datatables', 'Restful API'
        ],

        url: 'https://synnmlbb.com'
    },
    {
        id: 'carouselRMPIndicators',
        images: [rmp1, rmp2],
        project_name: 'RMP',
        project_origin: 'CV. Mamorasoft',
        description:
            'This project is a system for proposing changes to the grade echelon/position of the proposed employee, which requires approval from each work unit superior and admin approval to check whether the employee is eligible for a change in grade echelon/position.',
        stacks: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'PostgreSQL',
            'Boostrap', 'Jquery', 'AJAX', 'Laravel',
            'Jquery Datatables'
        ],
        url: 'https://rmp.petrokimia-gresik.com/rmp/login'
    },
    {
        id: 'carouselSergioIndicators',
        images: [sergio1, sergio2, sergio3],
        project_name: 'SERGIO',
        project_origin: 'CV. Mamorasoft',
        description:
            'This project is a system for accommodating employee ideas and innovations which will later be implemented in the company if the idea is approved by all relevant approvals. For approval, it consists of KID, Facilitator, Verifier, and SVP. After approval is carried out, it will then be assessed at the compartment and then company level by each jury. This idea will also be competed at the company, national and international levels.',
        stacks: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'PostgreSQL',
            'Boostrap', 'Jquery', 'AJAX', 'Laravel',
            'Jquery Datatables'
        ],
        url: 'https://sergio.petrokimia-gresik.com'
    },
    {
        id: 'carouselSispakIndicators',
        images: [spk1, spk2, spk3, spk4, spk5, spk6, spk7],
        project_name: 'SPK PEMILIHAN PROYEK DIKERJAKAN',
        project_origin: 'Personal Project',
        description:
            'This project is my final undergraduate project, where this application is a decision making application in choosing which project to work on first (priority). Using a combination of Analytical Hierarchy Process (AHP) and Simple Additive Weighting (SAW) methods to determine the weight of each criterion. The criteria themselves consist of Cost, Time Limit, Installment Amount, Number of Installments.',
        stacks: [
            'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL',
            'Boostrap', 'Jquery', 'AJAX', 'Laravel'
        ]
    },
    {
        id: 'carouselSPKIndicators',
        images: [sispak1, sispak2, sispak3, sispak4, sispak5, sispak6, sispak7],
        project_name: 'SISTEM PAKAR GANGGUAN KECEMASAN',
        project_origin: 'Personal Project',
        description:
            'This project is a psychological health expert system project for excessive anxiety disorder. This project uses 2 methods of drawing conclusions, namely Forward Chaining and Backward Chaining.',
        stacks: ['HTML', 'CSS', 'PHP', 'MySQL']
    }
];

export default projects;
