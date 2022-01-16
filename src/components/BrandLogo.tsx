import React from 'react'
import brandLogo from '../assets/img/brand-logo.svg'

export const BrandLogo: React.FC<{
  maxWidth:
    | '10%'
    | '20%'
    | '30%'
    | '40%'
    | '50%'
    | '60%'
    | '70%'
    | '80%'
    | '90%'
    | '100%'
}> = ({ maxWidth }) => {
  return <img style={{ maxWidth: maxWidth }} src={brandLogo} alt="" />
}
