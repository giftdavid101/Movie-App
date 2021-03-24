import React,{useState,useEffect} from 'react';
import './homepage.style.css';
import Axios from 'axios';
import Card from "../../components/elements/Card";
import SearchBar from "../../components/elements/Searchbar";


const HomePage = () => {
    const [query, setQuery] = useState('')
    const [movies,setMovies] = useState([])
    const [pagination, setPagination] = useState(1)
    const mainUrl = process.env.REACT_APP_API_BASE_LINK
    /**
     * @param {string} link -takes the page link
     */


    const requestMovies =(link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${mainUrl}&language=en-US&page=${pagination}`)=> {
        console.log(link)
        Axios.get(link).then((response) =>{
            const {data,status} = response
            console.log(response)
            if(status === 200){
                setMovies(data.results)
            }
        }).catch((err) => {
            console.log(err)
        });
    }
  useEffect(() =>{
       requestMovies()
  },[])

    return (
        <div className={'homepage'}>
            {/*<SearchBar/>*/}
            <div className={'homepage_hp-c container'}>
                {
                    movies.map((el) => (
                        <Card key={el.id}>
                            <div className={'card_emage-div'}>
                                <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`} alt={el.title}/>
                            </div>
                            <h5>{el.title}</h5>
                            <div>{el.vote_average}</div>
                        </Card>
                    ))
                }
            </div>


        </div>
    );
};

export default HomePage;