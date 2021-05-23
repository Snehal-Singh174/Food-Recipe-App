import React from 'react'
import './RecipeIngredient.css'

 function RecipeIngredient(props) {
    return (props.trigger) ? (
    <div className="recipe_dialog">
            <div className="recipe_ingredient">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                { props.children }
            </div>
        </div>
        ) : "";
    
}

export default RecipeIngredient