import React from 'react'
//import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
export default function AdminLayout() {
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
        <Sidebar/>

    </>
  )
}
