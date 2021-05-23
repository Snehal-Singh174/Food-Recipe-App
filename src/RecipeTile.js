import React from 'react';
import RecipeIngredient from './RecipeIngredient';
import './RecipeTile.css';
import {useState} from 'react';

export default function RecipeTile({recipe}) {

    const [buttonPopup, setbuttonPopup] = useState(false);

    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null && (
        <div className="recipeTile">
            <div className="recipediv" onClick={()=> setbuttonPopup(true)}>
                <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt=""/>  
                <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
            </div>
            <RecipeIngredient trigger={buttonPopup} setTrigger={setbuttonPopup}>
            <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt=""/>  
                <h4 className = "desc">{recipe["recipe"]["label"]}</h4>
                <h5 className = "desc">Recipe</h5>
                <p className = "desc">{recipe["recipe"]["ingredientLines"]}</p>
            </RecipeIngredient>
        </div>)
    );
}
