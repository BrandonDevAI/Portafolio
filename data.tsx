import { BookText, CodeSquare, HomeIcon, UserRound, Twitter , Github, Crop, Pencil, Computer, Book, Rocket, Speech, Linkedin} from "lucide-react";
import { FaInstagram, FaFacebook , FaTiktok } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={2} />,
        src: "https://github.com/BrandonDevAI",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={2} />,
        src: "https://www.linkedin.com/in/brandon-nu%C3%B1ez-aguirre-b85640399/",
    },
    {
        id: 3,
        logo: <FaTiktok size={25} strokeWidth={1} />,
        src: "https://www.tiktok.com/@brandondev.nuez",
    },
    {
        id: 4,
        logo: <FaInstagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/brandondevnunez/",
    },
    {
        id: 5,
        logo: <FaFacebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/profile.php?id=61555195312851",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador FullStack",
        subtitle: "Builder Home S.A.C.",
        description: "Desarrollé una plataforma inmobiliaria y un sistema de gestión de clientes y ventas. También implementé automatizaciones comerciales para reducir tareas manuales y mejorar la gestión de prospectos.",
        date: "Marz 2026",
    },
    {
        id: 2,
        title: "Desarrollador Full Stack",
        subtitle: "Developing Solutions",
        description: "Desarrollé plataformas educativas para cursos de tecnología, integrando inscripciones, gestión de usuarios y seguimiento de cursos para simplificar los procesos administrativos.",
        date: "Nov 2024",
    },
    {
        id: 3,
        title: "Desarrollador web ",
        subtitle: "Freelancer",
        description: "Desarrollé aplicaciones web y soluciones personalizadas para clientes, participando en la creación de interfaces, funcionalidades backend e integraciones entre servicios.",
        date: "Abril 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Empresas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 0,
        textalt: "FullStack",
        text: "Area de especialidad",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo FullStack",
        description: "Desarrollo de aplicaciones web completas, desde el frontend hasta el backend, APIs y bases de datos.",
    },
    {
        icon: <Pencil />,
        title: "Frontend",
        description: "Construcción de interfaces modernas, responsivas y orientadas a una excelente experiencia de usuario con Next.js.",
    },
    {
        icon: <Computer />,
        title: "Backend & APIs",
        description: "Diseño e implementación de APIs REST, lógica de negocio y servicios backend con Node.js, Express y NestJS.",
    },
    {
        icon: <Book />,
        title: "SaaS",
        description: "Desarrollo de productos SaaS de principio a fin, diseñando funcionalidades y arquitecturas preparadas para crecer.",
    },
    {
        icon: <Rocket />,
        title: "Inteligencia Artificial",
        description: "Integración de IA en aplicaciones web para crear funcionalidades inteligentes y automatizar procesos .",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "App Educativa",
        image: "/image-p.jpg",
        urlGithub: "#!",
        urlDemo: "https://sanmarcosgo.com/",
    },
    {
        id: 2,
        title: "App Videos IA",
        image: "/viral.jpg",
        urlGithub: "https://github.com/BrandonDevAI/ViralFlowy",
        urlDemo: "https://viral-flowy.vercel.app/",
    },
    {
        id: 3,
        title: "Takuora",
        image: "/takuora.png",
        urlGithub: "https://github.com/BrandonDevAI/Takuora-lp",
        urlDemo: "https://takuora.com",
    },
    {
        id: 6,
        title: "Memorama Game",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "https://brandodevelop.github.io/Memorama/",
    },
    {
        id: 7,
        title: "CRM Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "https://brandodevelop.github.io/CRM/",
    },
    {
        id: 8,
        title: "App para Ligar",
        image: "/image-8.jpg",
        urlGithub: "https://github.com/BrandonDevAI/GileAI",
        urlDemo: "https://gileai.vercel.app/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "Antes solo teníamos un Facebook caótico. Brandon nos hizo un sitio web donde los clientes ahora ven el menú, reservan y piden delivery. Todo automatizado. Las reservas subieron 40% el primer mes. Fue como cambiar el triciclo por un auto eléctrico.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Ana María",
        description:
            "Nuestro sitio parecía de los 2000. Brandon lo modernizó, sumó pagos online y reservas con horario. Ahora atendemos más y contestamos menos el teléfono.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Gonzalo López",
        description:
            "Nos hizo una web con sistema de reservas mejor que cualquier app. Ahora todo es online, sin llamadas, con recordatorios por WhatsApp. Ahorra tiempo, evita errores y nos hace ver pro.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Carlos Sanchez",
        description:
            "Le pedí a Brandon un sitio con actitud, que se vea brutal y funcione. Lo hizo: diseño potente, fotos, videos, reservas online y hasta QR en el local. Pensó en el negocio, no solo en la web.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Laura Snow",
        description:
            "Queríamos elegancia y profesionalismo y  lo clavó. La web parece de una franquicia internacional, con formularios inteligentes, captación de leads y seguimiento automático. Un cambio total.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "Le pedí una app para entrenadores y entregó una plataforma robusta, simple y escalable. Me ayudó a lanzar el MVP, validarlo y conseguir mis primeros 10 clientes. Fue como tener un socio tech.",
        imageUrl: "/profile6.png",
    },
];