import React, { useRef, useState } from 'react'
import Link from 'next/link';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Headerss = ({ setSearch }) => {
    console.log(setSearch)

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState(false);
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");
        setIcon(prev => !prev)
    };

    return (
        <div className="mainnavcontainer">
            <div className="mainnav">
                <nav className="nav">
                    <div className='header-main-img'>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.TwpUYN61rd2kgZQjgHnYyQHaFz&pid=Api&P=0" alt="" />
                        <span>Sports</span>
                    </div>
                    <ul className={active}>
                        <li className="nav__item">
                            <Link href="/" style={{ textDecoration: 'none' }} className="nav__link">
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/aboutpage" style={{ textDecoration: 'none' }} className="nav__link">
                                About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/contactpage" style={{ textDecoration: 'none' }} className="nav__link">
                                Contact
                            </Link>
                        </li>
                        <div className="contact-name">
                            <input type="text" placeholder='Search this blog' onChange={e => setSearch(e.target.value)} className='contact-input' />
                            <SearchOutlinedIcon />
                        </div>
                    </ul>

                    {
                        icon ? <div onClick={navToggle} className='header-button' >
                            <DisabledByDefaultIcon />
                        </div> :
                            <div onClick={navToggle} className='header-button' >
                                <DehazeIcon />
                            </div>
                    }
                </nav>
            </div>
        </div>
    )
}

export default Headerss;