import { Avatar } from '@material-ui/core'
import React from 'react'
import './WidgetRow.css'

const WidgetRow = ({profilePic, username}) => {
    return (
        <div className='widgetRow'>
            <Avatar src={profilePic} />
            <h4>{username}</h4>
        </div>
    )
}

export default WidgetRow
