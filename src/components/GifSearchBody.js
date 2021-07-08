import React, { useState, useEffect } from 'react';
import './GifSearchBody.css';
import axios from 'axios';

const GifSearchBody = ({ setGif, setGifClicked }) => {
    const [gifText, setGifText] = useState("");
    const [gifObj, setGifObj] = useState([]);

    useEffect(() => {
        async function trendingGif() {
            try {
                const res = await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=Xz31756LfSK7DWI6ezfAvmVGk8xEq056");
                setGifObj(res.data.data);
            }
            catch (error) {
                console.log(error);
            };  
        };
        trendingGif();    
    }, []);

    const handleChange = async (e) => {
        try {
            setGifText(e.target.value);
            let res1;
            if(e.target.value) {
                res1 = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Xz31756LfSK7DWI6ezfAvmVGk8xEq056&q=${e.target.value}`);
            } else {
                res1 = await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=Xz31756LfSK7DWI6ezfAvmVGk8xEq056");
            }
            
            setGifObj(res1.data.data);
        }
        catch(error) {
            console.log(error);
        };
    };

    const handleGifSelect = (gifUrl) => {
        setGif(gifUrl);
        setGifClicked(false);
    };

    return (
        <div className="gifSearchContainer">
            <input 
                className="gifText"
                type="text"
                placeholder="search"
                value={ gifText }
                onChange={ handleChange }
            />
            <div className="gifContainer">
                {
                    gifObj.map((obj, idx) => {
                        return (
                            <img 
                                key={ idx }
                                className="gif"
                                onClick={ (e) => handleGifSelect(obj.images.fixed_width.url) }
                                src={ obj.images.fixed_width.url } 
                                alt={ obj.images.fixed_width_downsampled.url }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default GifSearchBody;