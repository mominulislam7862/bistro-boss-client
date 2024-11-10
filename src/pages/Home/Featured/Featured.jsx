import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import '../Featured/featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 py-10">
            <SectionTitle
                subHeading="check it out"
                heading="featured item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500
            bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p>where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quae eveniet perferendis nostrum nihil vel sequi nemo asperiores optio et quas doloribus provident officia at maxime voluptate illum, aperiam quaerat quos excepturi dolore suscipit. Qui, nostrum voluptatum. Quas, sapiente, reprehenderit aliquam, officia placeat vitae aliquid quam delectus labore perspiciatis provident.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>



    );
};

export default Featured;