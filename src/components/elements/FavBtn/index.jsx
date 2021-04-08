import React, {useState,useContext} from 'react';
import {GlobalContext} from "../../../context/globalstate";
import {AiFillHeart} from 'react-icons/all'


const FavBtn = ({movie}) => {
    const {addMovieToFavorites} = useContext(GlobalContext)
  const [color, setColor] = useState('')
    const handleColor = () => {
      setColor('red')
    }



    return (
        <div>
            <button onClick={() => {addMovieToFavorites(movie)}}>
                <AiFillHeart
                    role={'button'}
                    onClick={handleColor}
                    className={'heart'}
                    style={{color:color }}
                />
            </button>
        </div>
    );
};

export default FavBtn;