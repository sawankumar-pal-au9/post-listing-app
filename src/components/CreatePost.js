import React, { useState } from 'react';
import "./CreatePost.css";
import GifSearchBody from './GifSearchBody';

const CreatePost = ({ setPosts }) => {
    const [postText, setPostText] = useState("");
    const [gifClicked, setGifClicked] = useState(false);
    const [gifImage, setGifImage] = useState("");

    const handleClearClick = (e) => {
        setPostText("");
        setGifClicked(false);
        setGifImage("");
    };

    const handlePostClick = (e) => {
        if(postText || gifImage) {
            let postData = {
                text: postText,
                gif: gifImage 
            };

            setPosts(prevPosts => {
                prevPosts.push(postData);
                return [ ...prevPosts ];
            });
            setPostText("");
            setGifClicked(false);
            setGifImage("");

        } else {
            alert("Post cannot be empty.")
        };
    };

    return (
        <div className="container">
            <textarea 
                className="postText"
                placeholder="Write Something, Here!"
                rows="3"
                cols="30"
                value={ postText }
                onChange={ (e) => setPostText(e.target.value) }
            ></textarea>

            {
                gifImage && 
                <div className="gifImage">
                    <img src={ gifImage } alt="gif"/>
                    <button 
                        className="closeBtn"
                        onClick={ (e) => setGifImage("") }
                    >
                        &times;
                    </button>
                </div>
            }
            
            <button 
                className="gifButton"
                onClick={ (e) => setGifClicked(!gifClicked) }
            >
                GIF
            </button>

            {
                gifClicked && 
                <GifSearchBody 
                    setGif={ setGifImage } 
                    setGifClicked={ setGifClicked } 
                />
            }
            
            <div className="actionBtns">
                <button 
                    className="actionBtn"
                    onClick={ handleClearClick }
                >
                    Clear
                </button>
                <button 
                    className="actionBtn"
                    onClick={ handlePostClick }
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default CreatePost;