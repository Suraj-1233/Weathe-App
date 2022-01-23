import  React ,{useState , useEffect} from 'react';
import  './CSS.css';


const Temp = () => {
   
  const [city, setCity] = useState(null);
  const [search ,setSearch] = useState("jaunpur");
      useEffect( () => {
              const fetchApi =async () =>{
                 const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=b16539268bc7d406e1a610ae31387e35` 
                 const response =await fetch(url); 
                   const resJson = await response.json();
                   setCity(resJson.main);
              }
          fetchApi();
            },[search])

  return(
   <>
               <div className='box'>
                   <div className='inputData'>
                   <input type="search" 
                    value={search}
                   className="inputFiled" 
                   onChange={(event) =>{ setSearch(event.target.value) } } />
                    </div>
                      {!city ?(<h1 className='errorMassage'>no data found</h1>):(
                      <div>
     <div className='info'>
         <h2 className="location">
         <i className="fas fa-street-view"> </i>
          {search}
           </h2>
           <h1 className='temp'>
       {city.temp}
           </h1>
           <h3 className="tempmin_max"> Min : {city.temp_min} | Max: {city.temp_max}</h3>

     </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
  </div>
   
                      )};          
               
              
               </div>
      
      

   </>
  )};

export default Temp;
