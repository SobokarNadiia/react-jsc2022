import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
}

export {Header};