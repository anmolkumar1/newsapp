import React, { Component } from 'react'
import loadingImg from '../LoadingImg.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadingImg} alt={loadingImg} />
      </div>
    )
  }
}

export default Spinner
