import React from 'react';
import { Navigate } from 'react-router-dom';
import { Cookie } from '../../constants/getToken';

export default function AuthRoute(props) {
    if (Cookie() === 1) {
        return <Navigate to='/' replace />
    }
    return props.children;
}
