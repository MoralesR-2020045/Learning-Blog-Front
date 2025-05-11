import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar.jsx' 
import { Publication } from '../../components/Publication.jsx'
import "./homePage.css"
export const HomePage = () => {
  return (
    <div className="homepage-container">
      <Sidebar />
      <Publication/>
    </div>
  )
}
