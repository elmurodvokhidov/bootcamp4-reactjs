import { useContext } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../context/Context";
import { FaMessage } from "react-icons/fa6";

function Card() {
    const { products } = useContext(Context);

    const { id } = useParams();
    const targetCard = products.find(item => item.id === +id)

    return (
        <div className="wrapper">
            {
                targetCard ?
                    <div className="card">
                        <img src={targetCard.image} alt={targetCard.title} />
                        <h1>{targetCard.title}</h1>
                        <h2>{targetCard.description.length > 50 ? targetCard.description.slice(0, 50) + "..." : targetCard.description}</h2>
                        <h3>{targetCard.price}</h3>
                        <h4>{targetCard.category}</h4>
                        <span>{targetCard.rating.rate}</span>
                        <div className="rating">
                            <FaMessage />
                            <p>{targetCard.rating.count}</p>
                        </div>
                    </div>
                    :
                    <div className="cardSkeleton">
                        <div className="skeletonImg"></div>
                        <div className="skeletonText1"></div>
                        <div className="skeletonText2"></div>
                        <div className="skeletonText3"></div>
                    </div>
            }
        </div>
    )
}

export default Card