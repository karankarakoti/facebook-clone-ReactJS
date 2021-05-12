import React from 'react'
import WidgetRow from './WidgetRow'
import './Widgets.css'

const Widgets = () =>{
    return(
        <div className='widgets'>
            <h3>Users</h3>
            <WidgetRow username='Karan Karakoti' profilePic='https://lh3.googleusercontent.com/ogw/ADGmqu_eRSnpjnyRPWjcsmXpRTBPWK-VdPChvpnimsds8g=s83-c-mo' />
            <WidgetRow username='Karan Karakoti' profilePic='https://lh3.googleusercontent.com/ogw/ADGmqu_eRSnpjnyRPWjcsmXpRTBPWK-VdPChvpnimsds8g=s83-c-mo' />
            <WidgetRow username='Karan Karakoti' profilePic='https://lh3.googleusercontent.com/ogw/ADGmqu_eRSnpjnyRPWjcsmXpRTBPWK-VdPChvpnimsds8g=s83-c-mo' />
        </div>
    )
}

export default Widgets
