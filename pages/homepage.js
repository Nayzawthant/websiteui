import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import CreateIcon from '@mui/icons-material/Create';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ShareIcon from '@mui/icons-material/Share';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '@/components/api/Api';
import { format } from 'timeago.js';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Homepage = () => {
    const [img, setImg] = useState(true);
    const [allPost, setAllPost] = useState([]);
    const [allCate, setAllCate] = useState([]);
    const [page, setPage] = useState(1);

    const getPosts = async () => {
        let param = `v1/posts/public/latest_posts/?sortBy=_id:desc&page=${page}&limit=6`

        const resultPost = await (await axios.get(API_URL + param)).data
        setPage(resultPost?.page)
        setAllPost(resultPost);
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }
    const posthandel = () => {
        setImg(prev => !prev);
    }

    const allLostComment = async () => {
        const resultComment = await (await axios.get(API_URL + 'v1/comments')).data;

        if (allPost?.results?.id === resultComment.postId) {
            setAllPost({ ...allPost, numberOfComments: resultComment.postId })
        }
    }

    const allLoadCate = async () => {
        const result = await (await axios.get(API_URL + 'v1/categories/public/latest_categories')).data;
        setAllCate(result)
    }

    useEffect(() => {
        allLostComment();
        allLoadCate();
        getPosts();
    }, [page]);
    return (
        <>
            <div className='cate'>
                <div className="inner-cate">
                    <div className="cate-left">
                        <div className="cate-inner-icon">
                            <MenuOpenIcon className='cate-icon' />
                        </div>
                        {
                            allCate?.results?.map((cate, index) => {
                                return (

                                    <Link href={`categorypage/${cate.id}`} className="cate-inner" key={index} >{cate.name}</Link>

                                )
                            })
                        }

                    </div>
                    <div className="cate-right">
                        {
                            img === true ?
                                <div className="cate-light" onClick={posthandel}>
                                    <AcUnitOutlinedIcon className='cate-icon' />
                                </div> :
                                <div className="cate-dark" onClick={posthandel} >
                                    <AcUnitOutlinedIcon className='cate-icon' />
                                </div>
                        }
                    </div>
                </div>

            </div>
            <div className="container">

                <div className='learnmore'>
                    <button
                        className={1 >= page ? 'square_btnnot' : 'square_btn'}
                        disabled={1 >= page} onClick={() => handlePrev()}
                        style={{ marginRight: '10px', outline: 'none', border: 'none' }}
                    >
                        <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                    </button>
                    <span className='page__span'>Page {allPost.page} / {allPost.totalPages}</span>
                    <button
                        className={allPost?.totalPages <= page ? 'square_btnnot' : 'square_btn'}
                        disabled={allPost?.totalPages <= page} onClick={() => handleNext()} style={{ marginLeft: '10px', outline: 'none', border: 'none' }}
                    >
                        <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                    </button>
                    <div className='container-card-first'>
                        {
                            allPost?.results?.map((item, index) => {
                                return (
                                    <div className="card" key={index}>
                                        <div className='container_Image'>
                                        <figure className="container-card-img">
                                            <Image src={item.image} className='img' alt="" width={500} height={500} />
                                            <figcaption>
                                                <ImageOutlinedIcon className='h3' />
                                            </figcaption>
                                            <Link href={`details/${item.id}`}></Link>
                                        </figure>
                                        </div>

                                        <div className={img ? "content" : "content-second"} >
                                            <div className="content-cate">
                                                <CreateIcon className='content-icon' />
                                                <Link href={`categorypage/${item?.category?.id}`} className="content-span"># {item?.category?.name}</Link>
                                            </div>
                                            <div id='content-home' className="content-title">
                                                <span  >{item.title}</span>
                                            </div>

                                            <div className="content-desc">
                                                <div id='content' dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                                                <span>...</span>
                                                <Link href={`details/${item.id}`}>readmore</Link>
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
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default Homepage
