import React from 'react'
import './Recipe.css'

const Recipe = ({image, title, calories, source, ingredients}) => {
    return (
        <div className="container">
            <img src={image} alt={title} className="recipe__image"/>
            <h2 className="title">{title}</h2>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}</ol>
            <p className="calories">Calories: {calories}</p>
            <p>Recipe By- {source}</p>
        </div>
    )
}

export default Recipe
