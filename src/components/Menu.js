import React from 'react'
import Desktop from './Menus/Desktop'
import Mobile from './Menus/Mobile'
import useMatchMedia from '../hooks/useState/useMartchMedia'
//import ModalSwitch from './ModalSwitch'
import {BrowserRouter as Router} from 'react-router-dom'

const Menu = () => {
    const matches = useMatchMedia("(min-width: 800px)")
    return (
        <Router>
            {matches ? <Desktop/> : <Mobile/>}
        </Router>
    )
}

export default Menu;