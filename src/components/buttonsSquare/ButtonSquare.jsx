import React from 'react'


const ButtonSquare = ({src, text, key}) => {
  return (

  <>
            <div className="btn-square">
                <div className="btn-square-icon">
                    {src}
                </div>
                <h6 className="btn-square-text" > {text}   </h6>
            </div>
        

  </>
  )
}

export default ButtonSquare