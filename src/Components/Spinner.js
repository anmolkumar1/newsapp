import React from 'react'
import loadingImg from '../LoadingImg.gif'
const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loadingImg} alt={loadingImg} />
      </div>
    )
}

export default Spinner
