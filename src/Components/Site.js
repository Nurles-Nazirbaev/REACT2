import React from 'react'

const Site = (props) => {
  return (
    <a href={props.http}><button>{props.siteNameButton}</button></a>
  )
}

export default Site
