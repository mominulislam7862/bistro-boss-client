import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../Home/Catagori/Catagory.css';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Catagory = () => {
    return (
        <>
            <section>
                <SectionTitle
               
                heading={"Order Online"}
                subHeading={"Form 11.00am to 10.00pm"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide>
                        <div>
                            <img src={slide1} alt="" />
                            <h3 className='text-4xl uppercase text-center text-white -mt-16'>salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={slide2} alt="" />
                            <h3 className='text-4xl uppercase text-center text-white -mt-16'>salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={slide3} alt="" />
                            <h3 className='text-4xl uppercase text-center text-white -mt-16'>salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={slide4} alt="" />
                            <h3 className='text-4xl uppercase text-center text-white -mt-16'>salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={slide5} alt="" />
                            <h3 className='text-4xl uppercase text-center text-white -mt-16'>salads</h3>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </section>
        </>
    );
};

export default Catagory;