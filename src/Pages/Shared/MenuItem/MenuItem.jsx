import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item

    return (
        <div className='flex space-x-4 mx-auto'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-40 h-20 ' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p className='text-sm'>{recipe}</p>

            </div>
            <p className='text-yellow-500 '>{price}</p>
        </div>
    );
};

export default MenuItem;