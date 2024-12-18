import "./App.css";
import HTMLFlipBook from "react-pageflip";
import portada from "./img/Portada.mp4";
import page_2 from "./img/Page_2.jpg";
import page_3 from "./img/Page_3.jpg";
import page_4 from "./img/Page_4.jpg";

function App() {
  return (
    <div className="App">
      <HTMLFlipBook className="book" width={300} height={500} size="stretch">
        <div className="pagina">
          <video
            className="video-container altura-max"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={portada} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <div className="pagina">
          <img src={page_2} alt="" />
        </div>
        <div className="pagina">
          <img src={page_3} alt="" />
        </div>
        <div className="pagina">
          <img src={page_4} alt="" />
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;
