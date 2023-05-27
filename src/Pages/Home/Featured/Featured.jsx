import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureimg from '../../../assets/home/featured.jpg'
import './Features.css'
const Featured = () => {
    return (
        <div className='featured-item  bg-fixed pt-8 my-20'>
            <SectionTitle
                subHeading='check it out'
                heading='Feature Item'

            ></SectionTitle>
            <div className='md:flex justify-center items-center pt-12 pb-20 px-36 bg-slate-500 bg-opacity-60'>

                <div >
                    <img src={featureimg} alt="" />
                </div>
                <div className='md:ml-10 text-white'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione deserunt corporis consequuntur pariatur nisi, alias est mollitia deleniti? Aut, quas, in eaque aliquid ex ipsam odit tenetur optio nobis qui ipsa magnam quo. Sapiente expedita officia sunt eligendi sit?</p>
                    <button className="btn btn-outline my-8 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;