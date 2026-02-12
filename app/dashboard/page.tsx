"use client"
import React from 'react'
import DocumentsPage from './documents/page'
import Link from 'next/link';
import Search from '../../components/Search';
import SideBar from '../../components/ui/Sidebar';

const Dashboard = () => {
  return (
    <>
      <DocumentsPage/>
      <Search/>

      
    </>
  )
}

export default Dashboard