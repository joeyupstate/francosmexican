import React, {Component} from "react"





class Menu extends Component{
  

    render(){
        const FOOD= [
            {title:
            "de Cochinita Pibil — 13",
            description:"braised pulled pork cooked with Achiote, topped with avocado, pickled habanero red onions, and orange."},
            
            {title:"al Pastor — 14",
            description:"guajillo chile marinated pork, onion, cilantro and grilled pineapple. Served with a side of avocado salsa."},
            
            {title:"de Suadero — 13",
            description:"a thin cut of beef from the brisket with onion, cilantro and avocado salsa"},
            
            {title:"de Carne Asada — 14",
            description:"grass fed marinated grilled skirt steak, onion and cilantro."},
            
            {title:"de Tinga de Pollo — 12",
            description:"organic shredded chicken cooked in a Chipotle salsa, topped with shredded lettuce and queso fresco."},
            
            {title:"de Pescado — 14",
            description:"grilled 'fish of the day' marinated with Mexican herbs and topped with home made pickled cabbage and avocado salsa."},
            
            {title:"de Carnitas — 13",
            description:"braised berkshire pork  onion, cilantro."},
            
            {title:"Hongos y Huitlacoche — 12",
            description:"mushrooms, huitlacoche, grilled corn, queso fresco."},
            
            {title:"Tacos Dorados — 13",
            description:"three crispy rolled tacos de tinga de pollo; chipotle marinated organic chicken. Topped with spicy salsa roja, shredded lettuce, queso fresco, crema fresca and avocado salsa."
            }
            ]
            
    

        return(
            <div className="food-menu">
                    <h1 className="tacos">Tacos</h1>
            {FOOD.map((food)=>(
                <div className="menu-column">
                    <h2 className="menu-title">{food.title}</h2>
                    <h5 className="menu-description">{food.description}</h5>
                    </div>
                
                
                

            ))}


</div>
        )
    }
}

export default Menu