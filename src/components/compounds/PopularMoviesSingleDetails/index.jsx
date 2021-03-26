import React from 'react';
import Button from "../../elements/Button";
import './popularmoviessingledetails.style.css';

const PopularSingle = (props) => {
    const {location: {state: movie}, history} = props;
    if (!movie) {
        history.push('/popular-movies')
    }
    console.log(movie)

    return (
        <div className={'popular-movies container'}>
            <div className={'history-button'}>
                <button className={'history-btn'} onClick={history.goBack}>Go Back</button>
            </div>
            <div  className={'popular-movies_popular-content block-elements-margin'}>
                <div>
                    <div className={'single-emage-div'}>
                        <img className={'single-emage'} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                             alt={movie.title}/>
                    </div>
                    {/*<TopRatedCard/>*/}
                    <Button/>
                </div>

                <div className={'popular-movies_popular-content_details tiny-elements-margin-lr'}>
                    <p><h2>{movie.original_title}</h2></p>
                    <p className={'underline tiny-elements-margin-tb'}>Overview</p>
                    <span>{movie.overview}</span>
                    <p>Released in {movie.release_date}</p>
                    <p>Language originally in <b>{movie.original_language}</b></p>
                    <div className={'mini-emage-div block-elements-margin'}>
                        <img className={'mini-emage single-emage'}
                             src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`} alt={'foto'}/>
                    </div>

                </div>

                <div style={{width:'800px'}}>
                    {''}
                </div>
                <div style={{width:'800px'}}>
                    {''}
                </div>
            </div>

        </div>
    );
};

export default PopularSingle;