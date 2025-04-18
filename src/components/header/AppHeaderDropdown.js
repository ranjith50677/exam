import React, { useContext, useEffect, useState } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

// import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from 'react-router-dom'
import { RoleMenuAccessContext } from '../../context/roleMenuContext'

const AppHeaderDropdown = () => {
  let navigate=useNavigate()
  const [Logout,setLogout]=useState(false)
  let {dispatch}=useContext(RoleMenuAccessContext)

  const handellogout=(e)=>{
      e.preventDefault();  
      localStorage.removeItem("hrmsv2-token")
      dispatch({type:"REMOVE_CONTEXT"})
      setLogout(true)
      navigate("/login")
    }
  const handelprofile=(e)=>{
      e.preventDefault();  
      navigate("/profile")
    }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={"https://www.w3schools.com/howto/img_avatar.png"} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#" onClick={handelprofile} >
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#" onClick={handellogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
