
import React, { useState, useEffect, useRef } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import axios from 'axios';
import { format } from 'timeago.js';
import { API_URL } from '@/components/api/Api';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CreateIcon from '@mui/icons-material/Create';
import ShareIcon from '@mui/icons-material/Share';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputEmoji from "react-input-emoji";
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import RelatedPost from '@/components/relatedpost/RelatedPost';
import PopularPost from '@/components/popularpost/PopularPost';
import Search from '@/components/searchpage/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Details = ({ post, allPost, allCategory, allComment, resSearchPost }) => {
    const [noOfElement, setNoOfElement] = useState(3);
    const [commentBox, setCommentBox] = useState(false);
    const [addBox, setAddBox] = useState(false);
    const [allView, setAllView] = useState([])
    const [comment, setComment] = useState({
        name: '',
        desc: '',
        postId: ''
    });

    console.log(allComment)
    console.log(comment)

    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const addhandel = () => {
        setAddBox(prev => !prev);

    }

    const posthandel = () => {
        setCommentBox(prev => !prev);
        setComment({ ...comment, postId: post?.id })
    }

    const inputChange = (e) => {
        setComment({ ...comment, name: e.target.value })
    }
    const textChange = (e) => {
        setComment({ ...comment, desc: e })
    }


    const viewPost = async () => {
        try {
            const viewPost = await (await axios.get(API_URL + `v1/posts/public/latest_posts/?sortBy=viewCounts:desc&limit=${noOfElement}`)).data
            setAllView(viewPost);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        viewPost()
    }, [noOfElement])

    const readMore = () => {
        if (noOfElement < 9) {
            setNoOfElement(prev => prev + 3)
        } else {
            setNoOfElement(prev => prev + 0)
        }

    }

    const onSubmit = async (e) => {
        const result = await axios.post(API_URL + 'v1/comments', comment, {});
        window.location.reload()
    };

    return (
        <div>
            <div className='postabout'>
                <Search post={resSearchPost} />
                <div className='postabout-title'>
                    <div className='postabout-header'>
                        <span>{post?.title}</span>
                    </div>
                    <div className='postabout-inner'>
                        <div className='postabout-user'>
                            <PersonOutlineIcon className='postabout-icon' />
                            <p ><span className='postabout-user-span'>{post.userId.name}</span></p>
                        </div>

                        <div className='postabout-user'>
                            <QueryBuilderIcon className='postabout-icon' />
                            <p ><span className='postabout-user-span'>{format(post?.createdAt)}</span></p>
                        </div>

                        <div className='postabout-user'>
                            <PreviewOutlinedIcon className='postabout-icon' />
                            <p ><span className='postabout-user-span'>{post?.viewCounts} views</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='postabout-container'>
                <div className='post-container-inner'>
                    <div className='post-inner-left'>
                        <div className='ads'>
                            <span>ADS GO HERE</span>
                        </div>
                        <div className='img'>
                            <Image src={post?.image} alt='' width={1000} height={1000} />
                        </div>
                        <div className='desc' dangerouslySetInnerHTML={{ __html: post?.desc }} />


                        <div className='ads'>
                            <span>ADS GO HERE</span>
                        </div>

                        <div className='related'>
                            <div className="related-head">
                                <AutoAwesomeMosaicIcon className='related-icon' />
                                <span>RELATED POSTS</span>
                            </div>


                            <div className="content-cate">
                                <CreateIcon className='content-icon' />Labels
                                <span className="content-span">#{post?.category.name}</span>
                            </div>
                            <Swiper
                                ref={swiperRef}

                                autoplay={{
                                    delay: 2000, // Adjust the delay value as needed
                                    disableOnInteraction: false, // Allow autoplay even when user interacts with the slider
                                }}
                                spaceBetween={0}
                                slidesPerView={3}


                            >
                               {
                                    allPost?.results?.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <RelatedPost item={item}  />
                                            </SwiperSlide>
                                        )
                                    })
                                }

                                <button className="prev-button" onClick={handlePrev}>
                                    <MdArrowBackIos />
                                </button>
                                <button className="next-button" onClick={handleNext}>
                                    <MdArrowForwardIos />
                                </button>


                            </Swiper>

                            <div className="related-share">
                                <div className="related-time">
                                    <ShareIcon className='related-content-icon' />
                                    <span className="related-time-span">Share</span>
                                </div>
                                <div className="related-top-icon">
                                    <div className="related-twitter">
                                        <Link href=""><TwitterIcon className='logo-icon-right' /></Link>
                                    </div>
                                    <div className="related-facebook">
                                        <Link href=""><FacebookIcon className='logo-icon-right' /></Link>
                                    </div>
                                    <div className="related-smart-top">
                                        <Link href=""><SmartToyIcon className='logo-icon-right' /></Link>
                                    </div>
                                    <div className="related-instagram">
                                        <Link href=""><InstagramIcon className='logo-icon-right' /></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='main-related-comment'>
                            <div className="related-comment-title">
                                <InsertCommentIcon className='related-comment-title-icon' />
                                <div>COMMENTS</div>
                            </div>
                            <div className='related-comment'>
                                {
                                    allComment?.results?.map((com, index) => {
                                        return (
                                            <>
                                                {
                                                    com.postId === post?.id ?
                                                        <div className="back-reply" key={index} >
                                                            <div className="comment-box">
                                                                <div className="comment-box-left">
                                                                    <AccountCircleIcon className='comment-box-left-icon' />
                                                                </div>
                                                                <div className="comment-box-border"></div>

                                                                <div className="comment-box-right" >
                                                                    <div className="comment-box-title">{com?.name}</div>
                                                                    <div className="comment-box-desc">
                                                                        <span>{com?.desc}</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div> : null
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className='reply-box'>
                                <div className={addBox ? "inner-reply" : "inner-reply-second"}>
                                    <div className="reply-box-left">
                                        <AccountCircleIcon className='reply-box-left-icon' />
                                    </div>
                                    <div className="inner-reply-right"  >
                                        <div className="inner-reply-right-header">
                                            <div className="reply-inner-title">Comment as:</div>

                                            <input type='text' placeholder='Your Name *' value={comment.name} onClick={posthandel} />

                                        </div>

                                        <div className={commentBox ? 'comment-profile' : 'comment-profile-second'}>
                                            <div className='comment-profile-header'>
                                                <span>Edit Profile</span>
                                                <button onClick={posthandel} >CONTINUE</button>
                                            </div>
                                            <div className="input-data">
                                                <input type="text" name='commentName' value={comment.name} onChange={inputChange} required />
                                                <div className="underline"></div>
                                                <label>Name</label>
                                            </div>
                                        </div>
                                        <InputEmoji
                                            value={comment.desc}
                                            onChange={textChange}
                                            cleanOnEnter
                                            placeholder="Type a comment *"

                                        />

                                        {
                                            comment.name === '' ? <div>Your Field Require</div> : <button onClick={onSubmit} className="comment-button" >SEND</button>
                                        }

                                    </div>

                                </div>

                                <button className='add-comment' onClick={addhandel} >Add Comment</button>
                            </div>
                        </div>

                    </div>

                    <div className='post-inner-right'>
                        <div className='post-inner-right-main'>
                            <div className="border">
                                <div className="inner-border"></div>
                                <span className='archive-span'>Labels</span>
                            </div>
                            <div className="label-category">
                                {
                                    allCategory?.results?.map((cates, index) => {
                                        return (
                                            <Link href={`/categorypage/${cates.id}`} className='inner-label' key={index} >{cates.name}</Link>
                                        )
                                    })
                                }

                            </div>
                            <hr />


                            <div className="border">
                                <div className="inner-border"></div>
                                <span className='archive-span'>Popular Posts</span>
                            </div>
                            <div className='main-popular'>
                                {
                                    allView?.results?.map((item, index) => {
                                        return (
                                            <PopularPost item={item} key={index} />
                                        )
                                    })
                                }
                                <div className='read-more-button' style={{ display: noOfElement === 9 ? 'none' : "block" }} onClick={readMore}>readmore</div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const resSearchPost = await (await axios.get(API_URL + 'v1/posts/public/latest_posts')).data
    const allCate = await (await axios.get(API_URL + 'v1/categories/public/latest_categories')).data;
    const res = await (await axios.get(API_URL + `v1/posts/public/latest_posts/${params.id}`)).data
    const resView = await (await axios.patch(API_URL + `v1/posts/public/latest_posts/${params.id}`)).data
    const allComments = await (await axios.get(API_URL + 'v1/comments')).data

    const allCategoryStyle = await (await axios.get(API_URL + `v1/posts/public/latest_posts/?category=${res.category.id}`)).data

    return {
        props: {
            post: res,
            allPost: allCategoryStyle,
            allCategory: allCate,
            allComment: allComments,
            resSearchPost: resSearchPost,
        }
    }
}

export default Details