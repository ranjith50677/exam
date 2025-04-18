import React, { Suspense, useContext, useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useNavigate  } from 'react-router-dom'
// import { RoleMenuAccessContext } from './context/roleMenuContext'
import './scss/style.scss'
// import { sync } from 'framer-motion'
import { getUser } from './utility/apiService'
import fatculty from './context/fatculty'
// import { getProfile, getRoleMenuAccessById } from './utility/apiService'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App(){ 
  const navigate=useNavigate()
  const [ref,setRef]=useState(false)
  const Access=useContext(fatculty)
  let getToken=localStorage.getItem('token') 
 
  useEffect(()=>{
    const handle=async()=>{
      // console.log(res?.data?.message);
      try {
        let res=await getUser()
        if(!res?.ok){
          localStorage.removeItem('token')
          navigate('/login')
          return alert(res?.data?.message)
       }
        Access.isfaculty=res?.data?.data?.isFaculty
        Access.name=res?.data?.data?.name
      } catch (error) {
        console.log(error)
      }
    }
    if(getToken){
      handle()
    }
  },[]) 

 const remove=async()=>{
    console.log('hi');
  if(getToken){
  let res=await getUser()
  if(!res?.ok){
    localStorage.removeItem('token')
    navigate('/login')
    return alert(res?.data?.message)
 }
}
}
 
  remove()

  return (
      <Suspense fallback={loading}>
        {/* {setRef(!ref)
          } */}
          <Routes>
         {!getToken ? <Route exact path="/login" name="Login Page" element={<Login/>}/>:
          <Route path="*" name="Home" element={<DefaultLayout />} />}
        </Routes>
       {!getToken && <Navigate to="/login" replace />}
        </Suspense>
  )
}

export default App
