import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
                setLoading(false);
                // const popularItems = data.filter(item => item.category === 'popular');
                // setMenu(popularItems)
            })
            .catch((error) => console.error("Error fetching menu data:", error));
    }, []);
    return [menu, loading]
}

export default useMenu;