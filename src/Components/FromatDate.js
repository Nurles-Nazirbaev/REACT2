import React from 'react'

const FromatDate = (props) => {
    const formatDate = (date) => {
        return date.toLocaleDateString()
    }
  return (
    <div>
      <span>{formatDate(props.date)}</span>
    </div>
  )
}

export default FromatDate
