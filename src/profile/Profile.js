import React from 'react'
import HandleName from './handleName'
import '../App.css';

const Profile = ({fullName, bio, profession}) => {
    const alertMyInput = (name) => alert(name + fullName);
    return (
        <div style ={{color:'black', textAlign:'centre', backgroundColor:'gray', height:'610px', padding: '20px' }}>
            <h2><span>Hello, My name is:</span>  {fullName}</h2>
            <h4><span>this is my bio: </span> {bio}</h4>
            <h3><span>Am still:</span>  {profession}</h3>
          
           <img src="https://picsum.photos/200/300?nocachedw" alt="this is the " /> 
           
            <HandleName alertMyInput={alertMyInput} />
        </div>
    )
}

export default Profile
