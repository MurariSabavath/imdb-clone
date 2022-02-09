import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { Navbar, Footer } from '../components';


const MovieView = (props) => {
    const id = useParams();
    const [data, setData] = useState({});
    const url = `${process.env.REACT_APP_API_URL}/movie/${id.id}?api_key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((res) => {
            setData(res);
        })
    }, [url])

    return <>
        <Navbar/>
        <View data={data}/>
        <Footer/>
    </>
}

const View = ({data}) => {
    console.log(data);
    return <>
            <h1>{data.original_title}</h1>
        </>
}

export default MovieView;