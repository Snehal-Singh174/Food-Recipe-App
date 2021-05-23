import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import RecipeTile from './RecipeTile';


function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")

  const YOUR_API_ID = YOUR_API_ID;
  const YOUR_APP_KEY = YOUR_APP_KEY;

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_API_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="mainapp">
      <h1>Food Parlour 🍔</h1>
      <form className = "searchFrom" onSubmit={onSubmit}>
      <input type = "text" placeholder="Enter Ingridient" value={query} onChange={(e)=> setquery(e.target.value)} className = "search_input"></input>
        <input type = "submit" value="Search" className="app_submit"/>
        <select className="app_drop">
          <option onClick={()=>sethealthLabel("vegan")}>Vegan</option>
          <option onClick={()=>sethealthLabel("vegetarian")}>vegetarian</option>
          <option onClick={()=>sethealthLabel("paleo")}>paleo</option>
          <option onClick={()=>sethealthLabel("dairy-free")}>dairy-free</option>
          <option onClick={()=>sethealthLabel("gluten-free")}>gluten-free</option>
          <option onClick={()=>sethealthLabel("wheat-free")}>wheat-free</option>
          <option onClick={()=>sethealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={()=>sethealthLabel("egg-free")}>egg-free</option>
          <option onClick={()=>sethealthLabel("peanut-free")}>peanut-free</option>
          <option onClick={()=>sethealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={()=>sethealthLabel("soy-free")}>soy-free</option>
          <option onClick={()=>sethealthLabel("fish-free")}>fish-free</option>
          <option onClick={()=>sethealthLabel("shellfish-free")}>shellfish-free</option>
        </select>
      </form>
      <div className="app_recipe">
          {recipes.map(recipe =>{
              return <RecipeTile recipe={recipe}/>
          })
          }
      </div>
    </div>
  );
}

export default App;
