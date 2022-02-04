import React from 'react'
import Seo from '../seo'

export default function({ children }){
  return <>
    <Seo/>
    <main>{children}</main>
  </>
}
