import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const contactpage = () => {
  return (
   <div className='contact_main_container'>
     <div className="contact-container">
        <div className="contact-box">
            <div className="left"></div>
            <div className="right">
                <h2>Contact Page</h2>
                <div className='right_contact_inner'>
                    <LocationOnIcon className='right_contact_inner_icon' />
                    <a className='right_contact_inner_span'>Mayangone Township, Yangon, Myanmar</a>
                </div>
                <div className='right_contact_inner'>
                    <PhoneIcon className='right_contact_inner_icon' />
                    <a className='right_contact_inner_span'>(959) 940095846</a>
                </div>
                <div className='right_contact_inner'>
                    <EmailIcon className='right_contact_inner_icon' />
                    <a className='right_contact_inner_span'>nayzawt349@gmail.com</a>
                </div>
                <div className='right_contact_inner'>
                    <LanguageOutlinedIcon className='right_contact_inner_icon' />
                    <a className='right_contact_inner_span'>Mayangone Township, Yangon, Myanmar</a>
                </div>
                
                
            </div>
        </div>
    </div>
   </div>
  )
}

export default contactpage
