import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./store";

function App() {
  const dispatch = useDispatch();
  const cats = useSelector((state)=>{
    return state.cats.cats;
  })

  useEffect(()=>{
    dispatch(getCatsFetch());
  })

  console.log(cats);
  return (
  <>
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats.</p>
      <hr/>

      <div className="Gallery">
        {cats.map((cat)=>{
          return <div key={cat.id} className="row">
            <div className="column column-left">
              {/* <img src={cat.img.url} width="200" height="200"></img> */}
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  </>
  );
}

export default App;
