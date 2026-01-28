import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  './Bai1/StudentInfo.css'
import Header from './Bai1/Header'
import Footer from './Bai1/Footer'
import StudentInfo from './Bai1/StudentInfo'

function App() {
  return(
    <>
      <Header/>
      <StudentInfo hoten="Nguyễn Trần Phi Hoàng" 
      mssv="23711521" 
      lop="DHKTPM19B"></StudentInfo>
      <Footer></Footer>
    </>
  );
}

export default App
