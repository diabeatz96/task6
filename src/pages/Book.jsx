import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import ErrorAlert from "../components/ErrorAlert.jsx";
import Skeleton from "react-loading-skeleton";
import {useEffect, useState} from "react";

const Book = () => {

    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [bookData, setBookData] = useState(null);
    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${params.id}`;
        console.log(url);
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBookData(response);
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    return (<Container>
        {error && <ErrorAlert>{error}</ErrorAlert>}
            {!error && loading && <div className="max-w-[230px]"><Skeleton count="5" /></div>}
            {!error && !loading &&
                <>
                    <div className= "grid min-w-full bg-amber-100 grid-cols-3 grid-rows-3 border solid border-4 " > {bookData.id} </div>
                </>
            }
    </Container>)
}

export default Book;