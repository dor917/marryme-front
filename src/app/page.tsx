import React from 'react';
import MainButton from './components/button/MainButton';
import style from "./globals.module.css"


export default function Home() {
  return (
    <>
      <div className={style.mainBtnBox}>
        <MainButton btnText='Guest' hrefUrl='/guest'/>
        <MainButton btnText='Hero' hrefUrl='/hero'/>
      </div>
    </>
      
  )
}
