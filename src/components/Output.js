import React from 'react'

const Output = (props) => {
  return (
    <div style={{margin:'1rem auto', width: '30%', textAlign:'center', padding: '3rem 1rem', background: 'grey', color: 'white', fontSize: '2rem'}}>{props.children}</div>
  )
}

export default Output