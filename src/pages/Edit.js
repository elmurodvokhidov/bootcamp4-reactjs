import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { loginError } from "../slice/authslice";
import axios from "axios";
import { getArticle } from "../slice/articleslice";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const dispatch = useDispatch();
    const [article, setArticle] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getArticleInformation() {
            const { data } = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
            dispatch(getArticle(data.article));
            setArticle(data.article)
        };

        getArticleInformation();
    }, [dispatch, slug]);

    function getArticleVal(e) {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        });
    };

    async function handleEdit(e) {
        e.preventDefault();
        try {
            await axios.put(`https://api.realworld.io/api/articles/${slug}`, { article });
            navigate("/");
        } catch (error) {
            dispatch(loginError(error.message));
        }
    };

    return (
        <div className="row justify-content-center align-items-center vh-100">
            <form onSubmit={(e) => handleEdit(e)} className="col-4 d-flex flex-column gap-3">
                <h1 className="text-center">Update an article</h1>
                <div className="form-floating">
                    <input value={article?.title} onChange={(e) => getArticleVal(e)} required name="title" type="text" className="form-control" id="floatingInput" placeholder="..." />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating">
                    <input value={article?.description} onChange={(e) => getArticleVal(e)} required name="description" type="text" className="form-control" id="floatingEmail" placeholder="..." />
                    <label htmlFor="floatingEmail">Description</label>
                </div>
                <div className="form-floating">
                    <input value={article?.body} onChange={(e) => getArticleVal(e)} required name="body" type="text" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Body</label>
                </div>

                <button className="btn btn-dark w-100 py-3">Update</button>
            </form>
        </div>
    )
}

export default Edit