import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaYoutube,
  FaPinterest,
  FaEarthAmericas,
} from "react-icons/fa6";

import {
FaHome,
FaPen,
FaCamera,
FaLaptopCode,
FaPrint,
FaChalkboardTeacher,
FaInfoCircle,
FaMailBulk,
FaBriefcase,
FaNewspaper,
FaDownload,
FaBook,
FaShoppingBag,
FaVideo,
FaGlideG,
FaUsers,
FaShieldAlt,
FaBox,
FaTags,
FaBuilding,
FaTshirt,
FaBoxOpen,
FaLayerGroup,
} from "react-icons/fa";
export const menu = [
  { name: "Blog", href: "/blog" },
  { name: "Tienda", href: "/tienda" },
  { name: "Cursos", href: "/cursos" },
];
export const soporte = [
  { name: "Contacto", href: "/contacto" },
  { name: "Envios", href: "/envios" },
  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
];
export const compania = [
  { name: "Quienes Somos", href: "/nosotros/quienes-somos" },
  { name: "Recursos", href: "/recursos" },
  { name: "Vacantes", href: "/vacante" },
];
export const legal = [
  { name: "Facturación", href: "facturacion" },
  { name: "Aviso de Privacidad", href: "/privacidad" },
  { name: "Términos y Condiciones", href: "/terminos" },
];
export const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/CreadoresCreativos.MX",
    icon: () => <FaFacebook className="h6 w-6"/>,
  },
  {
    name: "X-Twitter",
    href: "https://www.twitter.com/Creadores_Creat",
    icon: () => <FaXTwitter className="h6 w-6"/>,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/creadores_creat",
    icon: () => <FaInstagram className="h6 w-6"/>,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@emprendedorescreativos2018",
    icon: () => <FaYoutube className="h6 w-6"/>,
  },
  {
    name: "Telegram",
    href: "https://t.me/+8q0-Zd0_u3kzYWU5",
    icon: () => <FaTelegram className="h6 w-6"/>,
  },

  {
    name: "Pinterest",
    href: "https://www.pinterest.com.mx/emprendedorescreativos2019/",
    icon: () => <FaPinterest className="h6 w-6"/>,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@emprendedores_creativos",
    icon: () => <FaTiktok className="h6 w-6"/>,
  },
];

export const servicios = [
  {
    name: "Diseño Gráfico",
    href: "/diseno-grafico",
    icon: <FaPen />,
  },
  {
    name: "Fotografía",
    href: "/fotografia",
    icon: <FaCamera />,
  },
  {
    name: "Diseño y Desarrollo Web",
    href: "/diseno-y-desarrollo-web",
    icon: <FaLaptopCode />,
  },
  {
    name: "Impresión",
    href: "/impresion",
    icon: <FaPrint />,
  },
  {
    name: "Asesorias",
    href: "/asesorias",
    icon: <FaChalkboardTeacher />,
  },
];

export const company = [
  {
    name: "Quienes somos",
    href: "/nosotros/quienes-somos",
    icon: <FaInfoCircle />,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <FaMailBulk />,
  },
  {
    name: "Recursos",
    href: "/recursos",
    icon: <FaDownload />,
  },
  {
    name: "Glosario Gráfico",
    href: "/glosario",
    icon: <FaGlideG />,
  },
  {
    name: "Vacantes",
    href: "/vacantes",
    icon: <FaBriefcase />,
  },
  {
    name: "Responsabilidad Social",
    href: "/nosotros/responsabilisad-social",
    icon: <FaNewspaper />,
  },
  {
    name: "Política ambiental",
    href: "/nosotros/politica-medioambiental",
    icon: <FaEarthAmericas />,
  },
];

export const SideMenu = [
{
  id: '1',
  category: 'home',
  items: [
    {
      id:   '1',
      name: 'Inicio',
      icon2: <FaHome/>,
      href: '/',
    },
    {
      id:   '2',
      name: 'Blog',
      icon2: <FaBook/>,
      href: '/blog',
    },
    {
      id:   '3',
      name: 'Tienda',
      icon2: <FaShoppingBag/>,
      href: '/tienda',
    },
    {
      id:   '4',
      name: 'Cursos',
      icon2: <FaVideo/>,
      href: '/cursos',
    },
  ]
},
{
  id: '2',
  category: 'servicios',
  items: [
    {
      id:   '1',
      name: 'Diseño Gáfico',
      icon2: <FaPen/>,
      href: '/diseno-grafico',
    },
    {
      id:   '2',
      name: 'Fotografía',
      icon2: <FaCamera/>,
      href: '/fotografia',
    },
    {
      id:   '3',
      name: 'Diseño y Desarrollo Web',
      icon2: <FaLaptopCode/>,
      href: '/diseno-y-desarrollo-web',
    },
    {
      id:   '4',
      name: 'Asesorias',
      icon2: <FaChalkboardTeacher/>,
      href: '/asesorias',
    },
  ]
},
{
  id: '3',
  category: 'empresa',
  items: [
    {
      id:   '1',
      name: 'Quienes Somos',
      icon2: <FaInfoCircle/>,
      href: '/nosotros/quienes-somos',
    },
    {
      id:   '2',
      name: 'Contacto',
      icon2: <FaMailBulk/>,
      href: '/contacto',
    },
    {
      id:   '3',
      name: 'Recursos',
      icon2: <FaDownload/>,
      href: '/recursos',
    },
    {
      id:   '4',
      name: 'Glosario Gráfico',
      icon2: <FaGlideG/>,
      href: '/glosario',
    },
    {
      id:   '5',
      name: 'Resposabilidad Social',
      icon2: <FaNewspaper/>,
      href: '/nosotros/responsabilidad-social',
    },
    {
      id:   '6',
      name: 'Política de medio ambiente',
      icon2: <FaEarthAmericas/>,
      href: '/nosotros/politica-medioambiente',
    },
  ]
},
];

export const data = {
  home: [
    { name: 'Inicio', href: '/admin/dashboard', icon: FaHome, current: false },
  ],
  users: [
    { name: 'Usuarios', href: '/admin/usuarios', icon: FaUsers, current: false },
    { name: 'Roles y Permisos', href: '/admin/roles-permisos', icon: FaShieldAlt, current: false },  
  ],

  catalog: [
    { name: 'Categorias ', href: '/admin/categoria', icon: FaBox, current: false },
    { name: 'Cupones', href: '/admin/cupones', icon: FaTags, current: false },
    { name: 'Oferta laboral', href: '/admin/vacante', icon: FaBuilding, current: false },
    { name: 'Glosario', href: '/admin/glosario', icon: FaLayerGroup, current: false },
  ],
  
  venta: [
    { name: 'Blog', href: '/admin/blog', icon: FaBook, current: false },
    { name: 'Productos', href: '/admin/productos', icon: FaTshirt, current: false },
    { name: 'Cursos', href: '/admin/cursos', icon: FaVideo, current: false },
  ],

  services: [
    { name: 'Fotografía', href: '/admin/fotografia', icon: FaCamera, current: false },
    { name: 'Diseño Gráfico', href: '/admin/diseño-grafico', icon: FaPen, current: false },
    { name: 'Diseño Web', href: '/admin/diseño-web', icon: FaLaptopCode, current: false },
    { name: 'Paquetes', href: '/admin/paquetes', icon: FaBoxOpen, current: false },
    { name: 'Impresion', href: '/admin/impresion', icon: FaPrint, current: false },
  ],

}