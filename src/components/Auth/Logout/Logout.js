import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../../../Store/actions/index';

function Logout(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.logout());
        props.history.push("/");
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Logout;