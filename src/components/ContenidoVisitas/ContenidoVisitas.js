//Style
import "./ContenidoVisitas.scss";

//imagenes
import porque_img from "../../assets/img/porque-img.png";
import visitas_ilustracion from "../../assets/img/visitas-ilustracion.png";

const ContenidoVisitas = () => {
    return(
        <div className= "talleres-visitas-container">
            <section className="talleres">
                <h1>Talleres en las aulas</h1>
                <article className="article-talleres">
                    <p className="con-los-jovenes">Con los jovenes de CrESI <b>no nos quedamos quietos y salimos a dar talleres en las escuelas.</b><br/> <hr className="salto"/>
                    Utilizando juegos y dinámicas vamos aprendiendo y contestando dudas. Además vamos ampliando nuestra base de datos para incorporar nuevas dudas a nuestra app.</p>
                    <div className="img-container">
                        <img src={porque_img} alt="porque_img"/>
                    </div>
                    <div className="visitar-tu-escuela">
                        <h2>¿Queres que visitemos tu escuela?</h2>
                        <div className="inscribir-preguntas">
                            <div><button>Inscribite haciendo click acá</button></div>
                            <p className="email"> o escribinos a <a href="appcresi@gmail.com">appcresi@gmail.com</a></p>
                            <div className="preguntas">
                                <h3>¿Como son los talleres?</h3>
                                <p>Duran 2 horas y media, se realizan dinámicas y juegos. Preferentemente para grupos de hasta 50 alumnos, desde 2do a 6to año del secundario.</p>
                                <h3>Costo del taller:</h3>
                                <p>El taller tiene un costo de $50 por estudiante (No excluyente). Con el mismo costeamos gasto de traslado, materiales y viandas del grupo.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="visitas">
                <h1>Estas son las escuelas y hogares que visitamos:</h1>
                <article className="article-visitas">
                    <ul>
                        <li>Hogar Personitas, en Alberdi</li>
                        <li>Colegio San Roque y la EES N°19 de Campana</li>
                        <li>Escuela de Educación Especial N°504</li>
                        <li>Universidad Nacional Tecnológica</li>
                        <li>Escuela Media N°4, Del Viso, Pilar</li>
                        <li>Escuela N°2 Feliciano Chiclana, en Gualeguay, Entre Ríos</li>
                        <li>Escuela Comunitaria de Villa Astolfi de Pilar</li>
                        <li>Instituto José Manuel Estrada, Exaltación de la Cruz</li>
                        <li>Universidad Nacional de José C. Paz (UNPAZ)</li>
                        <li>Universidad de Palermo, CABA</li>
                        <li>Escuela Secundaria N°4 de Del Viso</li>
                        <li>Colegio Santa Soledad Torres Acosta de Grand Bourd</li>
                        <li>Escuela Técnica N°3 de Del Viso</li>
                        <li>Escuela Secundaria N°4, Zarate</li>
                        <li>Escuela de Educación Técnica N°1, Escobar</li>
                        <li>Instituto Secundario de Rauch</li>
                        <li>Escuela Agropecuaria, Rauch</li>
                        <li>CEPT N°5, Rauch</li>
                        <li>Escuela Secundaria N°2, Rauch</li>
                        <li>Escuela Secundaria N°3, Rauch</li>
                        <li>Escuela de Educación Técnica N°1, Rauch</li>
                        <li>Instituto Inmaculada Concepción, Rauch</li>
                        <li>Escuela Secundaria N°2 en Los Cardales</li>
                        <li>Instituto Santa Rosa de Villa Rosa, Pilar</li>
                        <li>Escuela Secundaria N°26, Campana</li>
                        <li>Escuela Técnica N°2 de Derqui</li>
                    </ul>
                </article>
                <div className="visita-img">
                    <img src={visitas_ilustracion} alt="visitas_ilustracion"/>
                </div>
            </section>
        </div>
    );

    
};
export default ContenidoVisitas;