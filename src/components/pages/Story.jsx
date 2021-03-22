import React, {Component} from "react"

const PHOTO = {
    women:require("../../assets/woman.jpg"),
    avoicon:require("../../assets/avo-icon.jpg")
}

class Story extends Component{
    render(){

        return(
            <div className="story">
               <h1 className="story-title">Once Upon a Time in Mexico</h1>
               <img
               className="story-photo"
               src={PHOTO.women}
               alt="mexican-lady"
               />
               <p className="story-paragraph">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus quaerat, architecto impedit minus magnam illo ea voluptatum hic, sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.
               </p>
             <img
             className="avo-icon"
             src={PHOTO.avoicon}
             alt="mini-avocado"
             />
               <p className="story-paragraph">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus quaerat, architecto impedit minus magnam illo ea voluptatum hic, sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.  sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.  sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.
              
               </p>
               <img
             className="avo-icon"
             src={PHOTO.avoicon}
             alt="mini-avocado"
             />
               
               <p className="story-paragraph">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus quaerat, architecto impedit minus magnam illo ea voluptatum hic, sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.   sint autem dolorum sunt, minima odio reiciendis optio. Illum, rerum ex.
               <br></br>
               -- Juan Fredo
               </p>
          
          
            
                  
                   
            </div>
        )
    }
}

export default Story