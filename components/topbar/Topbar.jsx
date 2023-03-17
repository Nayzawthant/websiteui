
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InstagramIcon from '@mui/icons-material/Instagram';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';



 const Topbar = () => {
    const [side, setSide] = useState(true); 
    // const [rightSide, setRightSide] = useState(true);
    const handleSide = () => {
        setSide(prev => !prev);
    }

    // const handleRightSide = () => {
    //     setRightSide(rig => !rig);
    // }
    
  return (
    <div>
        <div className='topbar'>
        <div className="inner-topbar">
        <div className="left-top">
            <button className="top-logo" onClick={handleSide}>
                <GridViewIcon className='logo-icon'  />
                <span className="logo-h4">SIDE GADGETS</span>
                
            </button>
        </div>
        <div className="right-top">
            <div className="right-top-icon">
                <div className="twitter">
                    <a href=""><TwitterIcon className='logo-icon-right' /></a>
                </div>
                <div className="facebook">
                    <a href=""><FacebookIcon className='logo-icon-right' /></a>
                </div>
                <div className="smart-top">
                    <a href=""><SmartToyIcon className='logo-icon-right' /></a>
                </div>
                <div className="instagram">
                    <a href=""><InstagramIcon className='logo-icon-right' /></a>
                </div>
                <div className="be">
                    <a href=""><FormatBoldIcon className='logo-icon-right' /></a>
                </div>
                <div className="basket-top">
                    <a href=""><SportsBasketballIcon className='logo-icon-right' /></a>
                </div>
            </div>
        </div>
        </div>
    </div>
    <aside className="sidebar" >
        <div className="inner-sidebar"  data-collapse={side}>
            <div className='inner-sidebar-inner'>
            <div className="remove-sidebar">
            <button  onClick={handleSide}>
                <CloseOutlinedIcon className='remove-sidebar-icon'  />
            </button>
            </div>
            <div className="archive">
                <div className="border">
                    <div className="inner-border"></div>
                    <span className='archive-span'>Archive</span>
                </div>
                <div className="search-sidebar">
                <select className='search-select'>
                    <option value="Archive">Archive</option>
                    <option value="january">January(1)</option>
                    <option value="february">February(2)</option>
                    <option value="math">Math(3)</option>
                    <option value="april">April(4)</option>
                </select>
                </div>
                <hr />
                <div className="border">
                    <div className="inner-border"></div>
                    <span className='archive-span'>Labels</span>
                </div>
                <div className="label-category">
                    <a href={''} className='inner-label'>FASHION</a>
                    <a href={''} className='inner-label'>HAPPY STAR</a>
                    <a href={''} className='inner-label'>MOUNTAINS</a>
                    <a href={''} className='inner-label'>NATURE</a>
                    <a href={''} className='inner-label'>SPORTS</a>
                    <a href={''} className='inner-label'>WATERFALLS</a>
                </div>
                <hr />

                <div className="border">
                    <div className="inner-border"></div>
                    <span className='archive-span'>Contact Form</span>
                </div>
                <div className="contact-name">
                    <input type="text" placeholder='Name' className='contact-input' />
                    <PersonOutlineIcon />
                </div>
                <div className="contact-email">
                    <input type="email" className='contact-input' placeholder='Email *' />
                    <EmailOutlinedIcon />
                </div>
                <div className="contact-message">
                    <textarea name="text" className='contact-input' id="" placeholder='Message *'></textarea>
                </div>

                <button className="footer-sidbar-button">
                    <span className='footer-sidbar-span'>SEND</span>
                    <ReplySharpIcon />
                </button>

            </div>
            </div>
           
        </div>

    </aside>


    </div>
  );
};

export default Topbar;
