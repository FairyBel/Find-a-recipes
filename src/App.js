import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import RecipeComponent from './RecipeComponent';

function App() {
  const MY_ID = '56136e89';
  const MY_KEY = '4eedcf57cf7154dc71691cbef90417a7';

  const[mySearch, setMySearch] = useState('');
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmitted,setWordSubmitted] = useState('strawberries')

  useEffect(() =>{
    const getRecipe = async ()=>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e)=>{
    setMySearch(e.target.value)
  }

   const finalSearch = (e) =>{
    e.preventDefault();
    setWordSubmitted(mySearch);
   } 

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src = {video} type = 'video/mp4'/>
        </video>
      </div>
    <div className='container'>
      <h1>Find recipes for every taste!</h1>
    </div>
    <div className='container'>
      <h3>Search by ingredients:</h3>
    </div>
    <div className='container'>
      <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}> 
      </input>
      </form>
    </div>
    <div className='container'>
      <button onClick={finalSearch}><img src="https://img.freepik.com/free-vector/bacon-heart-shaped-pan_1308-114948.jpg?t=st=1668354041~exp=1668354641~hmac=8f288cec1f39522c640941359de5aa3c2dcfadb4b2047eec42051cad153f2c8b" className='icon' alt='icon'/></button>
    </div>
    
      {myRecipes.map((element,id)=>(
        <RecipeComponent key={id} 
        label={element.recipe.label}
        dishType={element.recipe.mealType}
        image={element.recipe.image}
        ingredients={element.recipe.ingredientLines} 
        />
      ))}
    

    </div>
  );
}

export default App;
