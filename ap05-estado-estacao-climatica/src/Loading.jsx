import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center border rounded p-3'>
        <div
        style={{width: '3rem', height: 'rem'}}
        className='spinner-border text-primary'
        role='status'
        >
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading