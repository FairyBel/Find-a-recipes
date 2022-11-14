function RecipeComponent({label, dishType, image,ingredients}){

    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
       
        <div className="container">
        <img src={image} alt='food'/>
        </div>
        <div className="container">
            <h3>Meal type: {dishType}</h3>
        </div>

        <div className="container">
            <ul className="list">
                {ingredients.map((ingredients,index) =>(
                   <li key={index}>
                    <img src='https://cdn-icons-png.flaticon.com/512/3633/3633528.png' alt='logo' width='30px' />
                    {ingredients}
                    </li> ))}
            </ul>

        </div>
       
    </div>)
}
export default RecipeComponent;