import React from 'react'
import Seo from '../seo'
import '../variables.css'
import '../global.css'

export default function({ children }){
  return <>
    <Seo/>
    <main>{children}</main>
  </>
}
