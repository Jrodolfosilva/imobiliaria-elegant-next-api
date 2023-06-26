"use client"
import { useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Preloader from './components/preloader'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets:['latin'],weight:["400","500","600"]})

export const metadata = {
  title: 'Elegant imóveis',
  description: 'Imobiliária com os melhores imóveis, confira nossas condições e localidades',
}

export default function RootLayout({ children }) {
 



  return (
    <html lang="pt-br">
      <body className={poppins.className}>
  

        <Header/>
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
