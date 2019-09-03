import React from 'react';

const renderPro = props => {
    const {login, profile} = props;
    if(login){
        return (
            <div>
                <h2>{profile.name}</h2>
                <h3>{profile.email}</h3>
                <img src={profile.imageUrl} alt="image" />
            </div>
        )
    }
    else{
        return(
            <div><h1>Error</h1></div>
        )
    }
}

export default renderPro;