import "./App.css";
import Netflix from "./images/logo-netflix.jpg";
import picturesCategories from "./pictures.json";

function App() {
  return (
    <div>
      <div>
        <img alt="logo netflix" src={Netflix} />
      </div>
      <div>
        {picturesCategories.map((element, index) => {
          return <h2 key={index}>{element.category}</h2>;
        })}
        <div></div>
      </div>
    </div>
  );
}

export default App;
