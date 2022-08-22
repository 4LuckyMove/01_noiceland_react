import React from 'react';
import { Link } from 'react-router-dom';

import { Slider, PostList } from '../../components';
import { dataSlides, dataMainPosts, dataLatestPosts, dataFeaturedPosts } from '../../data/dummy';
import './home.scss';

const Home = () => {

  return (
    <div className='home'>
      <div className="home__container container">
        <Slider slides={dataSlides} />
        <div className="home__main-posts main-posts">
          <PostList posts={dataMainPosts} countPosts={'all'} />
        </div>
        <div className="home__latest-posts latest-posts">
          <div className="home__header">
            <h1>Latest Posts</h1>
          </div>
          <PostList posts={dataLatestPosts} countPosts={8} />
          <div className="latest-posts__body-link">
            <Link to='/latest-posts' className='latest-posts__link' >
              View All Latest Posts
            </Link>
          </div>
        </div>
        <div className="home__featured-posts featured-posts">
          <div className="home__header">
            <h1>Featured Posts</h1>
          </div>
          <PostList posts={dataFeaturedPosts} countPosts={'all'} />
        </div>
      </div>
    </div>
  )
}

export default Home