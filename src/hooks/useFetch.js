import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        function getData() {
            fetch(url)
                .then(response => response.json())
                .then(result => setData(result))
        };

        getData();
    }, [url]);

    return [data]
}

export default useFetch