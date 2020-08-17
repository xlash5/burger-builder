import React from 'react';

import classnames from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (

    <ul className={classnames.NavigationItems}>
        <NavigationItem link="/">
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/orders" >
            Orders
        </NavigationItem>
    </ul>
);

export default navigationItems;

