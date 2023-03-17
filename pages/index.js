import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Homepage from './homepage'
import Search from '@/components/searchpage/Search'
import { API_URL } from '@/components/api/Api'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState('');

  const getPosts = async () => {
    const resultPost = await ( await axios.get(API_URL + 'v1/posts/public/latest_posts')).data
    setPosts(resultPost);
  }

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <div>
       {/* <div className='home'>
     
          <Topbar />
          <Header />
        
      </div> */}
      <div className='main-container'>
        <Search post={posts} />
        <Homepage />
        
      </div>
      
    </div>
  )

 
}
