import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Img, Break, Heading, HeadingLarge, Inner, HeadingSM, SVG, LinkText, Text, Button, HeadingS } from "./styles/discover";


const Discover = () => {
    return (
        <Inner>
            <HeadingSM>Fan favorites</HeadingSM>
            <HeadingS>This weeks's top TV and movies</HeadingS>
            <Movie url="trending/all/week"/>
            <HeadingLarge>Discover</HeadingLarge>
            <HeadingSM>Movies</HeadingSM>
            <Movie url="discover/movie" media_type={"movie"} />
            <Break/>
            <HeadingSM>TV Shows</HeadingSM>
            <Movie url="discover/tv" media_type={"tv"}/>
        </Inner>
    )
}

const Movie = (props) => {
    const movies = `${process.env.REACT_APP_API_URL}/${props.url}?api_key=${process.env.REACT_APP_API_KEY}`
    const[moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch(movies)
        .then(resp => resp.json())
        .then(res => {
            setMoviesList(res.results);
        })
    }, [movies])

    return (
        <Container>{moviesList.map((item) => {
            return <Item key={item.id} {...item} media_type={item.media_type ? item.media_type : props.media_type}/>
        })}
        </Container>
    )
}

const Item = (props) => {
    const base_url =  "http://image.tmdb.org/t/p/w185/";
    const img_url = base_url + props.poster_path;
    const id = props.id;
    const media_type = props.media_type;

    return (
        <Card>
            <Link to={`/${media_type}/${id}`}>
                <Img src={img_url} alt={props.title}/>
            </Link>
            <Break/>
            <Inner style={{ height: '80px'}}>       
                <SVG width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></SVG>
                <Text>
                    {props.vote_average}
                </Text>
                <Heading>
                    <LinkText href="#">{props.title ? props.title : props.original_name}</LinkText>
                </Heading>
            </Inner>
            <Button>
                <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></SVG>
                Watchlist
            </Button>
        </Card>
    )
}

export default Discover;