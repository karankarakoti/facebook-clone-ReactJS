import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

const Story = ({ image, profileSrc, profileName }) => {
    return (
        <div className='story' style={{ backgroundImage:`url(${image})` }}>
            <Avatar src={profileSrc} className='story__avatar' />
            <h4>{profileName}</h4>
        </div>
    )
}

export default Story
