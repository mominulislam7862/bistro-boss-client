import chef from '../../../../assets/home/chef-service.jpg';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const Recommend = () => {
    return (
        <div>
            <SectionTitle
            subHeading="should try"
            heading="recommends"
            > </SectionTitle>
            <div className='flex md:col-span-3 gap-8 ml-8 '>
                <div className="card bg-gray-400 w-96 shadow-xl">
                    <figure className="">
                        <img
                            src={chef}
                            alt=""
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to card</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-400 w-96 shadow-xl">
                    <figure className="">
                        <img
                            src={chef}
                            alt=""
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to card</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-400 w-96 shadow-xl">
                    <figure className="">
                        <img
                            src={chef}
                            alt=""
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;