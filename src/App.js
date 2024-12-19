import "./App.css";
import HTMLFlipBook from "react-pageflip";
import portada from "./img/Portada.mp4";
import page_2 from "./img/Page_2.jpg";
import page_3 from "./img/Page_3.jpg";
import page_4 from "./img/Page_4.jpg";
import background from "./img/background.jpg";
import icon_gmaps from "./img/Google_Maps_icon.png";

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover", // Asegura que la imagen cubra todo el área
    backgroundRepeat: "no-repeat", // Evita repeticiones
    backgroundPosition: "center", // Centra la imagen
    width: "100vw", // Asegura que el contenedor ocupe el 100% del ancho de la ventana
    height: "100vh", // Asegura que el contenedor ocupe el 100% de la altura de la ventana
    overflow: "hidden", // Opcional: oculta el contenido desbordado si es necesario
  };

  return (
    <div className="App" style={myStyle}>
      <a
        href="https://maps.app.goo.gl/uqMfePdyfNEpbqsZ8" // Enlace a WhatsApp o cualquier red
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button"
      >
        <img src={icon_gmaps} alt="" height="40" />
      </a>
      <HTMLFlipBook
        className="book"
        width={300} // Ajusta el ancho
        height={500} // Altura fija
        size="stretch" // El libro se ajusta al contenedor
        mobileScrollSupport={true} // Habilita el scroll en dispositivos móviles
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={600}
      >
        <div className="pagina">
          <video className="page-container" autoPlay loop muted playsInline>
            <source src={portada} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <div className="pagina">
          <img className="page-container" src={page_2} alt="" />
        </div>
        <div className="pagina">
          <img className="page-container" src={page_3} alt="" />
        </div>
        <div className="pagina">
          <img className="page-container" src={page_4} alt="" />
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;
