import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate , useParams} from 'react-router-dom';

export default function Card() {
    const [state, setState] = useState([]);
    const [updated, setUpdated] = useState(" ");
    const { id } = useParams();
 

    useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=sa&apiKey=2e17dffe5e274272a9cd25a881f7ce29&category=business').
      then(res => {
        console.log(res.data.articles);
        setState(res.data.articles)
  
  
      })
    }, [])
  
  
  
    
  
  
  
    return (

     <div>
       <h1>list articles </h1>
       <div className='card-con'>
  
 
  
        {state.map(Items => {
          return (
            <div className='card-cont2'>
              <h4>{Items.author}</h4>
              <br/>
              
              <img src={Items.urlToImage} width="250" height={"250"}></img>
              
          
              <div>
           <Link to ={`/ReveiwCard/${Items}`}>  <button>Review</button></Link>
              <br/>
            
              </div>
              <br/>
              
          </div>
          )
        }
        )
        } 

        
      </div>
  
      </div>
  
    )
  }
