import React from 'react';
import { Link } from 'react-router-dom';

import { PostList, NoPosts } from '../../components';
import { dataFilters, dataLatestPosts } from '../../data/dummy';
import { useFiltredPosts } from '../../hook/useFiltredPosts';
import { useStateContext } from '../../context/ContextProvider';
import './latestPosts.scss';

const LatestPosts = () => {
  const {category, setCategory} = useStateContext();


  const filtredPosts = useFiltredPosts(dataLatestPosts, category.filter);

  return (
    <div className='latest-posts'>
      <div className="latest-posts__container container">
        <div className="latest-posts__header header-page">
          <h1>Latest Posts</h1>
        </div>
        <div className="latest-posts__filter">
          {dataFilters.map((filter) => (
            <Link
              key={filter.name}
              to={filter.link}
              onClick={e => setCategory({filter: e.target.dataset.filter})}
              data-filter={filter.name}
              className={filter.name === category.filter ? 'active' : ''}
            >
              {filter.name}
            </Link>
          ))}
        </div>
        {filtredPosts.length === 0 ? <NoPosts /> : <PostList posts={filtredPosts} countPosts={'all'} />}
      </div>
    </div>
  )
}

export default LatestPosts