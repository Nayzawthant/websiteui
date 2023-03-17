import Link from 'next/link'
import React, { useContext } from 'react'
import { LayoutContext } from '@/pages/Layout/Layout';
import Image from 'next/image';


const Search = ({ post }) => {
    console.log(post);
    let { search } = useContext(LayoutContext)

    return (
        <div className={(search === '') ? 'search-container-none' : 'search-container'}>
            <div className="search-items">
                {
                    post?.results?.filter((data) => {
                        if (search === '') {
                            return data
                        } else if (data?.title.toLowerCase().includes(search.toLowerCase())) {
                            return data
                        }
                    }).map((data, i) => (
                        <div key={i}>
                            <div className="search-item">
                                <div className="search-image">
                                    <Image src={data.image} width={500} height={500} alt="" />
                                </div>

                                <div className="search-text">
                                    <Link href={`/details/${data.id}`} style={{ textDecoration: 'none' }} className='link'>{data.title}</Link>
                                </div>
                            </div>
                            <div className="searchborder"></div>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Search;