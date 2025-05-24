import React from 'react'
import '../App.css'
const Square = ({value,onClick}) => {
  return (
    <div

    onClick={onClick}
    style={{
        border:'1px solid',
        height:'100 px',
        width:'100%',
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }}
    
    className="square">
      <h5>{value}</h5>
    </div>
  )
}

export default Square
