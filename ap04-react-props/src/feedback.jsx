import React from 'react'

const Feedback = props => {
  return (
    <div className='d-flex justify-content-evenly m-3'>
      {/* button[type=button].btn.btn-*2 */}
      <button 
        onClick={props.funcaoOk}
        type="button" 
        className="btn btn-primary">
          {props.textoOk}
      </button>
      <button 
        onClick={props.funcaoNok}
        type="button" 
        className="btn btn-danger">
          {props.textoNok}
        </button>
    </div>
  )
}

export default Feedback