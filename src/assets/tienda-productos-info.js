//Imagenes
import abp_recurso_digital_img from "../assets/img/detalle-abp-recurso-dig.jpeg";
import cresi_game_img from "../assets/img/detalle-cresi-game.jpeg";
import curso_abp_img from "../assets/img/detalle-curso-abp.png";
import curso_classroom_cero_img from "../assets/img/detalle-curso-classroom-desde-cero.png";
import curso_classroom_img from "../assets/img/detalle-curso-classroom.jpeg";
import curso_app_img from "../assets/img/detalle-primera-app.jpeg";
import filtro_azar_img from "../assets/img/detalle-filtro-azar.jpeg";
import filtro_simple_img from "../assets/img/detalle-filtro-simple.jpeg";
import filtro_vf_img from "../assets/img/detalle-filtro-vf.jpeg";
import cafecito_img from "../assets/img/detalle-cafecito.png";

const productsInfo = [
  {
    id: "abp-recurso-digital",
    name: "ABP Recurso Digital",
    price: 100,
    description: {
      main: "Obtendrás un enlace de descarga con el PDF de la presentacion del Curso de ABP. El objetivo de este taller es que puedas integrar en tus procesos de planificación pedagógica la metodología del aprendizaje basado en proyectos (ABP), explorando sus potencialidades como metodología innovadora para enriquecer tu práctica docente.",
      temario: [
        "ABP vs. Aprendizaje tradicional.",
        "Rol del docente.",
        "Rol del alumnno.",
        "Metodología del ABP.",
        "Los contenidos curriculares frente a los ABP.",
        "Trabajo interdisciplinario.",
        "Uso de rúbricas.",
        "Importancia del uso de las TIC ́S.",
        "Evaluación: ¿cómo evaluar?",
      ],
      duration: "",
    },
    imgName: abp_recurso_digital_img,
    imgAlt: "",
    related: [
      "curso-abp-proyectos",
      "curso-classroom",
      "curso-classroom-cero",
      "curso-app",
    ],
  },
  {
    id: "cresi-game",
    name: "CrESI Game",
    price: 500,
    description: {
      main: "Juego de Mesa CrESI Game. Consta de un tablero, fichas y 120 cartas divididas en 5 categorías con preguntas y desafíos para realizar.",
      temario: [],
      duration: "",
    },
    imgName: cresi_game_img,
    imgAlt: "",
    related: ["filtro-azar", "filtro-simple", "filtro-vf", "cafecito"],
  },
  {
    id: "curso-abp-proyectos",
    name: "Curso “ABP – Aprendizaje Basado en Proyectos",
    price: 500,
    description: {
      main: "El curso es por grupo. Debe reunirse un mínimo de personas 4. Se utilizara Classroom (Plataforma para compartir material de trabajo y videos de apoyo) y Zoom para video conferencia.",
      temario: [
        "Metodología ABP.",
        "Conceptos básicos.",
        "Planificación con ABP.",
        "Puesta en práctica.",
      ],
      duration: "Curso de 2 horas. Encuentros teórico – práctico por Zoom.",
    },
    imgName: curso_abp_img,
    imgAlt: "",
    related: [
      "abp-recurso-digital",
      "curso-classroom",
      "curso-classroom-cero",
      "curso-app",
    ],
  },
  {
    id: "cafecito",
    name: "Cafecito",
    price: 50,
    description: {
      main: "Estamos realizando los trámites para constituir a CrESI como una ONG. De esta forma podremos seguir creciendo. Pero para eso necesitamos cubrir los gastos de escribanos y trámites. Por eso necesitamos de tu ayuda. Con tu donación lo haremos posible.",
      temario: [],
      duration: "",
    },
    imgName: cafecito_img,
    imgAlt: "",
    related: [
      "abp-recurso-digital",
      "curso-classroom",
      "curso-classroom-cero",
      "curso-app",
    ],
  },
  {
    id: "curso-classroom",
    name: "Curso Classroom",
    price: 5000,
    description: {
      main: "",
      temario: [
        "Crear una clase.",
        "Configurar el tablón de novedades.",
        "Configurar notas.",
        "Configurar notificaciones.",
        "Crear una clase.",
        "Insertar archivos.",
        "Insertar videos.",
        "Documentos compartidos.",
        "Devolución de tareas.",
      ],
      duration: "Curso de 2 horas. Encuentros teórico – práctico por Zoom.",
    },
    imgName: curso_classroom_img,
    imgAlt: "",
    related: [
      "abp-recurso-digital",
      "curso-abp-proyectos",
      "curso-classroom-cero",
      "curso-app",
    ],
  },
  {
    id: "curso-classroom-cero",
    name: "Curso Classroom desde Cero",
    price: 200,
    description: {
      main: "",
      temario: [
        "Crear una clase.",
        "Configurar el tablón de novedades.",
        "Configurar notas.",
        "Configurar notificaciones.",
        "Crear una clase.",
        "Insertar archivos.",
        "Insertar videos.",
        "Documentos compartidos.",
        "Devolución de tareas.",
      ],
      duration: "Curso de 2 horas. Encuentros teórico – práctico por Zoom.",
    },
    imgName: curso_classroom_cero_img,
    imgAlt: "",
    related: [
      "abp-recurso-digital",
      "curso-abp-proyectos",
      "curso-classroom",
      "curso-app",
    ],
  },
  {
    id: "curso-app",
    name: "Curso Mi primera App",
    price: 500,
    description: {
      main: "La mejor app podrá ser elegida para publicarse en forma gratuita en Play Store. Se utilizara Classroom (Plataforma para compartir material de trabajo y videos de apoyo), Zoom para video conferencia y App Inventor (Plataforma para crear aplicaciones).",
      temario: [
        "Prototipado de aplicaciones.",
        "Creación de aplicaciones.",
        "App Inventor.",
        "Programación en bloques.",
      ],
      duration: "Curso de 4 horas. Encuentros teórico – práctico por Zoom.",
    },
    imgName: curso_app_img,
    imgAlt: "",
    related: [
      "abp-recurso-digital",
      "curso-abp-proyectos",
      "curso-classroom-cero",
      "curso-classroom",
    ],
  },
  {
    id: "filtro-azar",
    name: "Filtro Imagen al Azar",
    price: 1000,
    description: {
      main: "Tiempo de desarrollo: Entre 2 a 3 días. Contenido: No incluye contenido. Debe ser aportado por el cliente. No se pueden publicar marcas y ciertos contenido restringidos. Tiempo de publicación en redes sociales: De 1 día a una semana dependiendo de la aprobación del filtro.",
      temario: [],
      duration: "",
    },
    imgName: filtro_azar_img,
    imgAlt: "",
    related: ["filtro-simple", "filtro-vf", "cresi-game", "cafecito"],
  },
  {
    id: "filtro-simple",
    name: "Filtro Simple",
    price: 500,
    description: {
      main: "Tiempo de desarrollo: Entre 2 a 3 días. Contenido: No incluye contenido. Debe ser aportado por el cliente. No se pueden publicar marcas y ciertos contenido restringidos. Tiempo de publicación en redes sociales: De 1 día a una semana dependiendo de la aprobación del filtro.",
      temario: [],
      duration: "",
    },
    imgName: filtro_simple_img,
    imgAlt: "",
    related: ["filtro-azar", "filtro-vf", "cresi-game", "cafecito"],
  },
  {
    id: "filtro-vf",
    name: "Filtro Verdadero Falso para Instagram/Facebook",
    price: 1500,
    description: {
      main: "Tiempo de desarrollo: Entre 2 a 3 días. Contenido: No incluye contenido. Debe ser aportado por el cliente. No se pueden publicar marcas y ciertos contenido restringidos. Tiempo de publicación en redes sociales: De 1 día a una semana dependiendo de la aprobación del filtro.",
      temario: [],
      duration: "",
    },
    imgName: filtro_vf_img,
    imgAlt: "",
    related: ["filtro-azar", "filtro-simple", "cresi-game", "cafecito"],
  },
];

export default productsInfo;
