import { useNavigate, useLocation } from 'react-router-dom'
//import { ExploreIcon, OfferIcon, PersonOutlineIcon } from './Icons'
import OfferIcon from '../assets/svg/localOfferIcon.svg?react'
import ExploreIcon from '../assets/svg/exploreIcon.svg?react'
import PersonOutlineIcon from '../assets/svg/personOutlineIcon.svg?react'

const Navbar = () => {
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navListItems'>
          <li className='navbarListItem'>
            <ExploreIcon fill='2c2c2c' width='36px' height='36px' />
            <p>Explore</p>
          </li>
          <li className='navbarListItem'>
            <OfferIcon fill='2c2c2c' width='36px' height='36px' />
            <p>Offer</p>
          </li>
          <li className='navbarListItem'>
            <PersonOutlineIcon fill='2c2c2c' width='36px' height='36px' />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
