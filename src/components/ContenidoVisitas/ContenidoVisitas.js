//Style
import "./ContenidoVisitas.scss";

//imagenes
import porque_img from "../../assets/img/porque-img.png";

const ContenidoVisitas = () => {
    return(
        <div className= "talleres-visitas-container">
        <section className="talleres">
            <h1>Talleres en las aulas</h1>
            <article className="article-talleres">
                <p>Con los jovenes de CrESI no nos quedamos quietos y salimos a dar talleres en las escuelas. <br/> 
                Utilizando juegos y dinámicas vamos aprendiendo y contestando dudas. Además vamos ampliando nuestra base de datos para incorporar nuevas dudas a nuestra app.</p>
                <img src={porque_img} alt=""/>
                <div>
                    <h2>¿Queres que visitemos tu escuela?</h2>
                    <div>
                        <button>Inscribite haciendo click acá</button>
                        <p className="email"></p>
                        <div>
                            <h3>¿Como son los talleres?</h3>
                            <p></p>
                            <h3>Costo del taller:</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section className="visitas">
            <h1>Estas son las escuelas y hogares que visitamos:</h1>
            <article className="article-visitas">

            </article>
        </section>
        </div>
    );

    
};
export default ContenidoVisitas;