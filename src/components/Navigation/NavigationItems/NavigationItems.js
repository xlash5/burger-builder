import React from 'react';

import classnames from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (

    <ul className={classnames.NavigationItems}>
        <NavigationItem link="/" active>
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/" >
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;

