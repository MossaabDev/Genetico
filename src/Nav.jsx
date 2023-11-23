import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const pagesList = [{
    id: 0,
    path:'/'
  },
  {
    id: 1,
    path:'/Range'
  },
  {
    id: 2,
    path:'/Population'
  },
  {
    id: 3,
    path:'/Crossover'
  }];
  const [index, setIndex] = useState(0);
  const goToNext = () =>{
    const nextIndex = (index + 1) % pagesList.length;
    setIndex(nextIndex);
    navigate(pagesList[nextIndex].path);

  }

  const goToPrevious = () =>{
    const previousIndex = (index - 1 + pagesList.length) % pagesList.length;
    setIndex(previousIndex);
    navigate(pagesList[previousIndex].path);
  }
  return (
    <div>
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={goToNext}>Next</button>
    </div>
  )
}

export default Nav