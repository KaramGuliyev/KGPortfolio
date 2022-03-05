import React from 'react'
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/loading.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Karam GULIYEV</h1>
      <h5 className="text-light">FULLSTACK DEVELOPER</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href='#contact' className='scroll__down'>
        Scroll Down
      </a>
      </div>
    </header>
  )
}

export default Header