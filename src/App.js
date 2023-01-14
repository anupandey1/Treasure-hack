
import react,{useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Home'
import Result from './components/Result'
import './App.css';
import './Result.css'
import Main from './components/Main'


function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [diet, setDiet] = useState("balanced");
  const [health, setHealth] = useState("vegetarian");
  const [cuisineType, setCuisineType] = useState("Asian");
  const [mealType, setmealType] = useState("Lunch");

async function  fetchData(e){
     e.preventDefault()
     let APP_ID = 'd9e7fa81'
     let API_KEY = 'd052e3bf5628e329edb77793dc2ef012'
     try {
      let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${search}&diet=${diet}&health=${health}&cuisineType=${cuisineType}&mealType=${mealType}`)
     const dataa = await response.json()
      setData(dataa);
      window.scrollTo({top:0,behavior:'scroll'});
      
     } catch (error) {

      console.log(error.message);
    }
  }


  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  console.log(search);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                fetchData={fetchData}
                handleChange={handleChange}
                search={search}
                data={data}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                data={data}
                diet={diet}
                health={health}
                cuisineType={cuisineType}
                mealType={mealType}
                setmealType={setmealType}
                setDiet={setDiet}
                fetchData={fetchData}
                setHealth={setHealth}
                setCuisineType={setCuisineType}/>
            }
          />

    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Main/>}/>
        <Route path="/" element={<Landing fetchData={fetchData} handleChange={handleChange} search={search} data={data}/>}/>
        <Route path="/result" element={<Result data={data} diet={diet} health={health} cuisineType={cuisineType} mealType={mealType} setmealType={setmealType} setDiet={setDiet} fetchData={fetchData} setHealth={setHealth} setCuisineType={setCuisineType} />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
