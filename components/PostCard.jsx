import React, { useState } from 'react'
import { API_URL } from './api/Api'
import CreateIcon from '@mui/icons-material/Create';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ShareIcon from '@mui/icons-material/Share';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'timeago.js';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';

const PostCard = ({item}) => {
    const [img, setImg] = useState(true);
    const posthandel = () => {
        setImg(prev => !prev);
    }

    return (
        
        <div className="card">
            <figure className="container-card-img">
                <Image src={ item.image} alt="" width={500} height={500} />
                <figcaption>
                    <ImageOutlinedIcon className='h3' />
                </figcaption>
                <Link href={`/details/${item.id}`}></Link>
            </figure>

            <div className={img ? "content" : "content-second"} >
                <div className="content-cate">
                    <CreateIcon className='content-icon' />
                    <Link href={`/details/${item.id}`} className="content-span"># {item?.category?.name}</Link>
                </div>
                <div id='content-home' className="content-title">
                    <div id='content-home'>{item.title}</div>
                </div>

                <div className="content-desc">
                    <div id='content' dangerouslySetInnerHTML={{ __html: item.desc }} />
                    <span>...</span>
                    <Link href={`/details/${item.id}`}>readmore</Link>
                </div>

                <div className="content-footer">
                    <div className="time">
                        <QueryBuilderIcon className='content-icon' />
                        <span className="time-span">{format(item.createdAt)}</span>
                    </div>
                    <div className="time">
                        <PreviewOutlinedIcon className='content-icon' />
                        <span className="time-span">{item.viewCounts} views</span>
                    </div>
                    <div className="time">
                        <ShareIcon className='content-icon' />

                        <span className="time-span">SHARE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
