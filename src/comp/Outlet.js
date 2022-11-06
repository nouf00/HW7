import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Card from './Card';
import Log from './Log';
import ReveiwCard from './ReveiwCard';
import Nav from './Nav';

export default function Outlet() {




  return (
    <div>
     
<Routes>
<Route  path='/' element={<Log/>}></Route>
<Route  path='/Card' element={<Card/>}></Route>
<Route  path='/ReveiwCard' element={<ReveiwCard/>}></Route>
<Route  path='/ReveiwCard/:cardId' element={<ReveiwCard/>}></Route>


</Routes>






    </div>
  )
}
