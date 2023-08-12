import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00 am to 10.00pm'}
                heading={'ORDER ONLINE'}
            >
            </SectionTitle>
            <div className='max-w-screen-xl mx-auto mb-24'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" className='' />
                        <h3 className='lg:lg:text-4xl uppercase text-center text-white -mt-20'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center text-white -mt-20'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center text-white -mt-20'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center text-white -mt-20'>Desers</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center text-white -mt-20'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;