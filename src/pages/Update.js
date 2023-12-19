import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/slice/user";
import { useNavigate, useParams } from "react-router";

function Update() {
    const [inputValue, setInputValue] = useState({
        id: '',
        name: '',
        about: '',
        price: '',
        discount: '',
        img: '',
    });
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    const navigate = useNavigate();

    const { id } = useParams();
    const targetUser = users.find(item => item.id === id);

    useEffect(() => {
        setInputValue(targetUser);
    }, [targetUser]);

    function getInput(name, value) {
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    function editFunction() {
        dispatch(updateUser(inputValue));
        navigate('/');
    }

    return (
        <main className="m-auto vh-100 d-flex align-items-center justify-content-center">
            <form className="text-center d-flex flex-column gap-3">
                <h1 className="h3 mb-5 fw-normal">Update product</h1>
                <div className="form-floating">
                    <input
                        value={inputValue.name}
                        onChange={(e) => getInput(e.target.name, e.target.value)}
                        name="name"
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Product name"
                    />
                    <label htmlFor="floatingInput">Product name</label>
                </div>
                <div className="form-floating">
                    <input
                        value={inputValue.about}
                        onChange={(e) => getInput(e.target.name, e.target.value)}
                        name="about"
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Product name"
                    />
                    <label htmlFor="floatingInput">Product about</label>
                </div>
                <div className="d-flex gap-4">
                    <div className="form-floating">
                        <input
                            value={inputValue.price}
                            onChange={(e) => getInput(e.target.name, e.target.value)}
                            name="price"
                            type="number"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Price</label>
                    </div>
                    <div className="form-floating">
                        <input
                            value={inputValue.discount}
                            onChange={(e) => getInput(e.target.name, e.target.value)}
                            name="discount"
                            type="number"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Discount</label>
                    </div>
                </div>
                <div className="form-floating">
                    <input
                        value={inputValue.img}
                        onChange={(e) => getInput(e.target.name, e.target.value)}
                        name="img"
                        type="text"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Product image</label>
                </div>
                <button onClick={editFunction} className="btn btn-primary w-100 py-3 mt-5" type="button">Update</button>
            </form>
        </main>
    )
}

export default Update