import React, {Component} from "react"

class Pledge extends Component {
    render(){
const PHOTOS = {
    food:require("../../assets/food.jpg")
}
        return(
            <div className="pledge-container">

                <img
                className = "food-image"
                src={PHOTOS.food}
                alt="mexican-food"
                />
                <p className="pledge-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo illo facere, veniam debitis aliquam quam dignissimos quod modi non dicta repudiandae voluptatum eaque corrupti rem earum quae ex aut.
                </p>

            </div>
        )
    }
}

export default Pledge