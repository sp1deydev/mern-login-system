import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

ProtectedRoute.propTypes = {
    
};

function ProtectedRoute(props) {
    const currentUser = useSelector((state)=> state.user.currentUser) || null;
    const isLoading = useSelector((state)=> state.user.isLoading)
    const navigate = useNavigate();
    useEffect(()=> {
        if(!currentUser ||  Object.keys(currentUser).length === 0 ) {
            toast.info('Please login first');
            navigate(`/login?redirect=${window.location.pathname}`)
        }
        else {
        }
        //authorization 
        //
    }, [currentUser, navigate]);
    return <Fragment>{currentUser && props.children}</Fragment>;
}

export default ProtectedRoute;