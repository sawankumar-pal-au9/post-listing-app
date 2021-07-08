import React from 'react';
import './DisplayPosts.css';

const DisplayPosts = ({ posts, setPosts }) => {

    const handleDelete = (idx) => {
        setPosts(prevPosts => {
            let updatedPosts = prevPosts.filter((post, id) => id !== idx);
            return [ ...updatedPosts ];
        });
    };

    return (
        <div>
            {
                posts.map((post, idx) => {
                    return (
                        <div className="posts" key={ idx }>
                            <div className="postHead">
                                <span className="postHeadText">
                                    { `Post ${idx + 1}` }
                                </span>
                                <span 
                                    className="postDelete"
                                    onClick={ (e) => handleDelete(idx) }
                                >
                                    <i className="fa fa-trash"></i>
                                </span>
                            </div>
                        
                            <div className="postBody">
                                <span className="postBodyText">
                                    { post.text }
                                </span>
                                {
                                    post.gif && 
                                    <img src={ post.gif } alt="gif" />
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DisplayPosts;