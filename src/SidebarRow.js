import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({imgSrc, Icon, title}) =>  {
    return (
        <div className='sidebarRow'>
            {imgSrc && <Avatar src={imgSrc} />}
            {Icon && <Icon />  }
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
