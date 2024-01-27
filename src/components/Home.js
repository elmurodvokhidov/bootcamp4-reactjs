import { useSelector } from "react-redux"
import CardComponent from "./Card"
import SimpleSlider from "./SimpleSlider"
import { Skeleton } from "./skeleton/Skeleton"
import { useEffect, useState } from "react";

function Home() {
    const { users, search } = useSelector(state => state.users);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);


    return (
        <div className="home container py-5">
            <div className="sliderWrapper pt-3">
                <SimpleSlider />
            </div>
            <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-left pb-4 pt-3">
                {
                    isLoading ? <Skeleton /> :
                        users.filter(item => {
                            if (item.name.toLowerCase().includes(search.toLowerCase())) return item
                        }).map(item => (
                            <CardComponent item={item} key={item.id} />
                        ))
                }
            </div>
        </div>
    )
}

export default Home