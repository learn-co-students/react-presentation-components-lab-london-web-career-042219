import React from 'react'


const SimplerComponent = ({handleClick, output}) => {
  return (
    <div  onClick ={handleClick}>
      {output}
    </div>
  )

}


export default SimplerComponent