import React from 'react';
import {Route, useLocation} from 'react-router-dom'
import Modal from './Modal'

const ModalSwitch = () => {
    const location = useLocation()
    const background = location.states && location.state.background
    return (
        <>
            {background && <Route path="/img/:id" children={<Modal />} />}
        </>
    );
}

export default ModalSwitch;