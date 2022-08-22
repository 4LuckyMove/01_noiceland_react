import React, { useState } from 'react';

import { PostItem, Modal } from '../../components'

import './postList.scss';

const PostList = ({ posts, countPosts }) => {
    const [modalOpen, setModalOpen] = useState({postId: '', isShow: false});
    return (
        <div className='post-list'>
            {modalOpen.isShow
                ? document.body.classList.add('hide')
                : document.body.classList.remove('hide')
            }
            {posts.map((post, index) => (
            <React.Fragment key={post.id}>
                {countPosts !== 'all'
                    ? (
                        <>
                            {(index+1) <= countPosts &&
                                <>
                                <PostItem
                                    id={post.id}
                                    image={post.image}
                                    category={post.category}
                                    title={post.title}
                                    author={post.author}
                                    openModal={() => setModalOpen({postId: post.id, isShow: true})}
                                />
                                {post.id === modalOpen.postId && modalOpen.isShow &&
                                    <Modal
                                    open={modalOpen}
                                    isOpen={setModalOpen}
                                    title={post.title}
                                    category={post.category}
                                    author={post.author}
                                    image={post.image}
                                    description={post.description}
                                    />
                                }
                                </>
                            }
                        </>
                    )
                    : (
                        <>
                            <PostItem
                                id={post.id}
                                image={post.image}
                                category={post.category}
                                title={post.title}
                                author={post.author}
                                openModal={() => setModalOpen({postId: post.id, isShow: true})}
                            />
                            {post.id === modalOpen.postId && modalOpen.isShow &&
                                <Modal
                                open={modalOpen}
                                isOpen={setModalOpen}
                                title={post.title}
                                category={post.category}
                                author={post.author}
                                image={post.image}
                                description={post.description}
                                />
                            }
                        </>
                    )
                }
                </React.Fragment>
            ))}
        </div>
    )
}

export default PostList