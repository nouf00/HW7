import React, { useState , useEffect , useParams} from 'react'
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
export default function ReveiwCard( ) {

let {cardId}=useParams()
const [state, setState] = useState([]);


  // const [data,setData]=useState([])
// const [hidden, setHidden] = useState(true);
const NavN = useNavigate()

useEffect(() => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=sa&apiKey=2e17dffe5e274272a9cd25a881f7ce29&category=business${cardId}`).
  then(res => {
    console.log(res.data.articles);
    setState(res.data.articles)


  })
}, [])
      
  
//     };
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//       const res = JSON.parse(localStorage.getItem('LocalStoragePic'));
//       console.log(items)
//       if (items) {
//         setItems(items);
//       }
//     }, []);

    
  return (
    <div>
 
 {state.map(Items => {
          return (
            <div className='card-cont2'>
              <h4>{Items.author}</h4>
              <br/>
            <img src={Items.urlToImage} width="250" height={"250"}></img>
            <p>Title:{Items.title}</p>
            <a href={Items.url}>Link of the Paper</a>
          
            
              
          </div>
          )
        }
        )
        } 
    <button onClick={() => { NavN("/Card") }}> Go back </button> 

  </div>
  )
}
