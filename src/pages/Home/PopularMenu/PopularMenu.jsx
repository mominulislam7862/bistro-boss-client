import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from '../../../hocks/useMenu';



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    //         .catch((error) => console.error("Error fetching menu data:", error));
    // }, []);

    return (
        <section className='mb-12'>
            <SectionTitle
                heading="Form our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {/* Render the popular menu here */}
                {popular.map((item) => <MenuItem
                    key={item.id}
                    item={item}
                ></MenuItem>

                )}
            </div>

        </section>
    );
};

export default PopularMenu;