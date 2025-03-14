import mysql from "../../assets/images/logo/mysql.png";
import postgresql from "../../assets/images/logo/postgresql.png";
import jquery from "../../assets/images/logo/jquery.png";
import ajax from "../../assets/images/logo/ajax.png";
// import expressjs from '../../assets/images/logo/expressjs.png';
import lumen from "../../assets/images/logo/lumen.png";
import restfulapi from "../../assets/images/logo/rest-api.png";
// import dart from "../../assets/images/logo/dart.png";
// import flutter from "../../assets/images/logo/flutter.png";
import codeigniter from "../../assets/images/logo/ci.png";

const skills = [
  { name: "HTML", isImg: false, src: "fa-brands fa-html5" },
  { name: "CSS", isImg: false, src: "fa-brands fa-css3-alt" },
  { name: "Javascript", isImg: false, src: "fa-brands fa-js" },
  { name: "PHP", isImg: false, src: "fa-brands fa-php" },
  { name: "MySQL", isImg: true, src: mysql },
  { name: "PostgreSQL", isImg: true, src: postgresql },
  { name: "Boostrap", isImg: false, src: "fa-brands fa-bootstrap" },
  { name: "Jquery", isImg: true, src: jquery },
  { name: "AJAX", isImg: true, src: ajax },
  { name: "AngularJS", isImg: false, src: "fa-brands fa-angular" },
  { name: "ReactJS", isImg: false, src: "fa-brands fa-react" },
  { name: "VueJS", isImg: false, src: "fa-brands fa-vuejs" },
  // { name: 'ExpressJS', isImg: true, src: expressjs },
  { name: "Laravel", isImg: false, src: "fa-brands fa-laravel" },
  { name: "Lumen", isImg: true, src: lumen },
  { name: "Codeigniter 4", isImg: true, src: codeigniter },
  { name: "Restful API", isImg: true, src: restfulapi },
  // { name: 'Dart', isImg: true, src: dart },
  // { name: 'Flutter', isImg: true, src: flutter },
];

export default skills;
