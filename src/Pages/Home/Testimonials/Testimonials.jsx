import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {


    const [reviews, setRevies] = useState([])

    useEffect(() => {

        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => {

                setRevies(data)
            })


    }, [])




    return (
        <section className='my-20'>
            <SectionTitle
                subHeading='What Our Client Say'
                heading={'Testimonials'}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide

                        key={review._id}


                    >
                        <div className='m-24 flex flex-col items-center my-16 mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>

                        </div>

                    </SwiperSlide>)
                }





            </Swiper>
        </section>
    );
};

export default Testimonials;