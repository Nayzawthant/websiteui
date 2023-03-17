import React, { useEffect, useState } from 'react'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { API_URL } from '@/components/api/Api';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { useRouter } from 'next/router';
import Search from '@/components/searchpage/Search';

const Catnavbar = ({ singleCategory, resSearchPost }) => {
    const [post, setPost] = useState([])
    let [page, setPage] = useState(1);
    const router = useRouter()
    const getCateId = router?.query?.id
    const getPosts = async (id) => {
        let param = `v1/posts/public/latest_posts/?category=${id}&sortBy=_id:desc&page=${page}&limit=3`

        const resultPost = await (await axios.get(API_URL + param)).data
        setPage(resultPost?.page)
        setPost(resultPost);
    }
    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }

    useEffect(() => {
        if (router.asPath !== router.route) {
            getPosts(getCateId);
        }
        
    }, [page, router]);

    return (
        <>
            <div className='second-main-container'>
                <Search post={resSearchPost} />
                <div className='cate'>
                    <div className="inner-cate">
                        <div className="cate-left">
                            <Link href={'/'} className='cate-inner-home' >Home</Link>
                            <span>/</span>
                            <Link href={singleCategory?.id} className='cate-inner-static' >{singleCategory?.name}</Link>

                        </div>
                        <div className="cate-right">
                            <button
                                className={1 >= page ? 'second_square_btnnot' : 'second_square_btn'}
                                disabled={1 >= page} onClick={() => handlePrev()}
                                style={{ marginRight: '10px', outline: 'none', border: 'none' }}
                            >
                                <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                            </button>
                            <span className='page__span'>Page {post.page} / {post.totalPages}</span>
                            <button
                                className={post?.totalPages <= page ? 'second_square_btnnot' : 'second_square_btn'}
                                disabled={post?.totalPages <= page} onClick={() => handleNext()} style={{ marginLeft: '10px', outline: 'none', border: 'none' }}
                            >
                                <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='learnmore-static'>
                        <div className='container-card-first'>
                            {
                                post?.results?.map((item, index) => {
                                    return (
                                        <PostCard item={item} key={index} />
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
  
export const getServerSideProps = async ({ params }) => {
    const singleCategory = (await axios.get(API_URL + `v1/categories/public/latest_categories/${params.id}`)).data
    const resSearchPost = await (await axios.get(API_URL + 'v1/posts/public/latest_posts')).data
    return {
        props: {
            singleCategory: singleCategory,
            resSearchPost: resSearchPost
        }
    }
}

export default Catnavbar
