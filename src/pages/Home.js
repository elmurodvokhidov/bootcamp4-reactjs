import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { articleError, articleSuccess } from '../slice/articleslice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { articles } = useSelector(state => state.articles);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        async function getArticles() {
            try {
                const { data } = await axios.get("https://api.realworld.io/api/articles");
                dispatch(articleSuccess(data.articles));
            } catch (error) {
                dispatch(articleError(error.message));
            }
        };

        getArticles();
    }, [dispatch])

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        articles.map((article, index) => (
                            <div className="col" key={index}>
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h5>{article.title.length > 50 ? article.title.slice(0, 50) + "..." : article.title}</h5>
                                        <p className="card-text">{article.description.length > 125 ? article.description.slice(0, 125) + "..." : article.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                {
                                                    article.author.username === user?.username ?
                                                        <>
                                                            <button onClick={() => navigate(`edit/${article.slug}`)} type="button" className="btn btn-sm btn-outline-success">Edit</button>
                                                            <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                                        </> : null
                                                }
                                            </div>
                                            <small className="text-body-secondary">{article.author.username}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home