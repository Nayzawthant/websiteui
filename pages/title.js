import React, { useState } from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const title = () => {
        const [header, setHeader] = useState(false);
        const [big, setBig] = useState(false);
        const handleHeader = () => {
            setHeader(hed => !hed);
        }

    
    

    const handleBig = () => {
        setBig(prev => !prev);
    }

  return (
    <div>
        <div className='header'>
      <div className="inner-header">
        <div className="header-left">
            <div className="header-logo">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/10/44/runner-304409_960_720.png" className='header-logo-img' alt="" />
            </div>
            <h4 className="header-title">Sports</h4>
        </div>
        <div className="header-right">
            <div className="header-right-child-second">
                <a href="" className='header-home'>Home</a>
            </div>
            <div className="header-right-child" onClick={handleHeader}  >
                <div className='header-home header-home-second' >Post & Page</div>
                <ArrowDownwardOutlinedIcon className='header-icon'  />
                <div className={header ? "postpage" : 'postpage-second' }>
                    <div className="postpage-inner">
                        <a href="" className='postpage-inner-child' >
                            <div >Posts Demos</div>
                            <ChevronRightIcon className='post-inner-icon' />
                        </a>
                        <hr />
                        <a href="" className='postpage-inner-child' >
                            <div >Custom Pages</div>
                            <ChevronRightIcon className='post-inner-icon' />
                        </a>  
                        <hr />
                        <a href="" className='postpage-inner-child' >
                            <div >Static Pages</div>
                        </a> 
                        <hr />
                        <a href="" className='postpage-inner-child' >
                            <div >Typography</div>
                        </a> 
                        <hr />
                        <a href="" className='postpage-inner-child' >
                            <div >Short Codes</div>
                        </a>  
                    </div>
                    
                </div>
            </div>
            
            <div className="header-right-child" onClick={handleBig}>
                <p className="header-home">Big Drop</p>
                <ArrowDropDownOutlinedIcon className='header-icon' />
            </div>
            <div className="header-right-child">
                <p className="header-home">One Mega</p>
                <KeyboardDoubleArrowRightOutlinedIcon className='header-icon' />
            </div>
            <div className="header-right-child">
                <p className="header-home">Multi Mega</p>
                <KeyboardDoubleArrowRightOutlinedIcon className='header-icon' />
            </div>
            <div className="header-right-child">
                <a href="*" className="header-home">Error 404</a>
            </div>
            <div className="header-right-search">
                <SearchOutlinedIcon className='header-icon' />
            </div>
    
      </div>
    </div>
        <div className={big ? "bigpage" : 'big-second'}>
            <div className="big-inner">
            <div className="big-inner-big">
                    <p className='big-inner-child' >
                        <div >Large Drop Item 1</div>
                        <div className='big-inner-child-border'></div>
                    </p>
                    
                    <p className='big-inner-child' >
                        <div >Large Drop Item 2</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 3</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 4</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 5</div>
                        <div className='big-inner-child-border'></div>
                    </p>
            </div>
            <div className="big-inner-big">
                    <p className='big-inner-child' >
                        <div >Large Drop Item 6</div>
                        <div className='big-inner-child-border'></div>
                    </p>
                    
                    <p className='big-inner-child' >
                        <div >Large Drop Item 7</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 8</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 9</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 10</div>
                        <div className='big-inner-child-border'></div>
                    </p>
            </div>
            <div className="big-inner-big">
                    <p className='big-inner-child' >
                        <div >Large Drop Item 11</div>
                        <div className='big-inner-child-border'></div>
                    </p>
                    
                    <p className='big-inner-child' >
                        <div >Large Drop Item 12</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 13</div>
                        <div className='big-inner-child-border'></div> 
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 14</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 15</div>
                        <div className='big-inner-child-border'></div>
                    </p>
            </div>

            <div className="big-inner-big">
                    <p className='big-inner-child' >
                        <div >Large Drop Item 16</div>
                        <div className='big-inner-child-border'></div>
                    </p>
                    
                    <p className='big-inner-child' >
                        <div >Large Drop Item 17</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 18</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 19</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 20</div>
                        <div className='big-inner-child-border'></div>
                    </p>
            </div>

            <div className="big-inner-big">
                    <p className='big-inner-child' >
                        <div >Large Drop Item 21</div>
                        <div className='big-inner-child-border'></div>
                    </p>
                    
                    <p className='big-inner-child' >
                        <div >Large Drop Item 22</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 23</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 24</div>
                        <div className='big-inner-child-border'></div>
                    </p>

                    <p className='big-inner-child' >
                        <div >Large Drop Item 25</div>
                        <div className='big-inner-child-border'></div>
                    </p>
            </div>
                
            </div>
                </div>  
        
        
    </div>
    
    </div>
  )
}

export default title;