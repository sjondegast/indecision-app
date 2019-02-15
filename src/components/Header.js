import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>
);

// provide default values, this can be used to set a default if no title is provided and otherwise the 
// props will give the title... let's say there is a user that is not registered? then say user, 
// otherwise the props will get the username, retrieve the first name and show that to the screen.

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;