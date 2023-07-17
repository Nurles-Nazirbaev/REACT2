import React from 'react'
import Img from './Img'
import FromatDate from './FromatDate'
import Site from './Site'
import './Render.css'

const Render = (props) => {


  return (
    <div className='renderDiv'>
      <h1>{props.userName}</h1>
      <h1>age: {props.useAge}</h1>
      <Img img={props.img}/>
      <FromatDate date={props.dateToday}/>
      <Site http={props.site} siteNameButton={props.siteName}/>
    </div>
  )
}

export default Render
