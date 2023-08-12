import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto text-center  my-24  lg:w-3/12'>
            <p className=' text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='lg:text-4xl uppercase border-y-4  lg:py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;