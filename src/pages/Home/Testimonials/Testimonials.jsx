import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [rivews, setRivews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rivews')
            .then(res => res.json())
            .then(data => setRivews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading=" what our client say"
                heading="testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    rivews.map(rivew => <SwiperSlide
                        key={rivew._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rivew.rating}
                                readOnly
                            />

                            <p className="py-8">{rivew.details}</p>
                            <h3 className="text-2xl text-orange-400">{rivew.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;