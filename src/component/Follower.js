import React from 'react';

const Follower = ({avatar_url,login}) => {

    console.log(avatar_url)
    return (
        <div>
            <img alt={login} src={avatar_url} width='50px' height='50px'></img>
        </div>
    );
};

export default Follower;