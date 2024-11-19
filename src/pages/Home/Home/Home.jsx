import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import Catagory from "../Catagori/Catagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Contrack from "./contrack/Contrack";
import Recommend from "./contrack/Recommend";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Bannar></Bannar>
            <Catagory></Catagory>
            <Contrack></Contrack>
            <Recommend></Recommend>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;