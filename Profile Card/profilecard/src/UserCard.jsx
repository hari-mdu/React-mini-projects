import React from 'react'
import PropTypes from 'prop-types'

const UserData = [
    {
        name : "Ram Kumar",
        city : "Madurai",
        role : "Front-End Developer",
        skills : ["HTML","CSS","Javascript","React","Redux"],
        online : true,
        profile : "images/image1.jpg"
    },
    {
        name : "Aravind",
        city : "Chennai",
        role : "Back-End Developer",
        skills : ["Python","Django","MySQL","NodeJS"],
        online : false,
        profile : "images/image2.jpg"
    },
    {
        name : "Prithvi Raj",
        city : "Salem",
        role : "Front-End Developer",
        skills : ["HTML","CSS","Javascript","React","Redux"],
        online : true,
        profile : "images/image3.jpg"
    },
]

function User(props){
    return(
        <div className='card-container'>
            <span className={props.online?'pro online':'pro offline'}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} alt='user' className='img' width={'150px'} height={'150px'}></img>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.role}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function UserCard() {
  return (
        <>
            {UserData.map((user, index)=>(
                <User key={index}
                name={user.name}
                city={user.city}
                role={user.role}
                skills={user.skills}
                online={user.online}
                profile={user.profile}
                />
            ))}
        </>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
}