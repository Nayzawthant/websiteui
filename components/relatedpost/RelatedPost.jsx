import React from 'react'
import { API_URL } from '../api/Api'
import Image from 'next/image';
import Link from 'next/link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { format } from 'timeago.js';

const RelatedPost = ({ item }) => {
    return (
        
                <div className="related-post-inner">
                    <div className='related_Image'>
                    <figure className="related-card-img">
                        <Image src={item.image} alt="" width={500} height={500} />
                        <figcaption>
                            <ImageOutlinedIcon className='h3' />
                        </figcaption>
                        <Link href={item.id}></Link>
                    </figure>
                    </div>
                    <div className="related-content">
                        <p className="related-span">
                            {item.title}
                        </p>
                        <p className="related-cate">
                            {item.category.name}
                        </p>
                        <div className="related-time">
                            <div className="time">
                                <QueryBuilderIcon className='content-icon' />
                                <span>{format(item.createdAt)}</span>
                            </div>
                            <div className="comment">
                                <PreviewOutlinedIcon className='content-icon' />
                                <span>{item.viewCounts}</span>
                            </div>
                        </div>
                    </div>
                </div>

      
    )
}

export default RelatedPost
