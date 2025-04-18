import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter style={{ 
      // position: "fixed",
      bottom: 0,
      width:'100%'}}>
      <div>
        
        <span className="ms-1">2016 - {new Date().getFullYear()} &copy; Copyright {" "}
          <a href="https://coreui.io" target="_blank" rel="noopener noreferrer" style={{color: "#333",fontWeight:"600",textDecoration: "none"}}>
            CODIIS
          </a>. All Rights Reserved. Connected Digital Systems Private Limited</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
