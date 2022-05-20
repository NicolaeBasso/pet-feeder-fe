import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/auth';

import { useNavigate } from 'react-router-dom';

//using useNavigate hook. Use history allows us to access the history object and call push to navigate to a path

const Logout = ({ dispatchUserLogout }) => { //create a function, pass in the dispatched key from our mapsDispatchtoProps
    const history = useNavigate(); //convention to make a const variable assigned to useNavigate function call

    const handleOnClick = () => {
        dispatchUserLogout().then(() => history.push('/')) //passing our mapDispatch, get promise. then call push on our history const
    }

    return ( //use parens after return to say read this next thing as your return value
        <button 
            className="bg-gray-700 px-4 py-3 rounded-md"
            onClick={handleOnClick}>
        Log Out
        </button>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchUserLogout: () => dispatch(userLogout())
    }

}

export default connect(null, mapDispatchToProps)(Logout)