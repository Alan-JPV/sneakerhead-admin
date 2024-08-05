import React from 'react'
import ad1 from '../components/ad1.png'
import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container" style={{marginLeft:'300px',height:'1000px'}}>
      <div className="page-admin-home">
        <img
          src={ad1}
          alt="ad113040"
          className="page-ad11"
        />
        <span className="page-text">
          <span>WELCOME ADMIN</span>
        </span>
      </div>
    </div>
  )
}

export default Page
