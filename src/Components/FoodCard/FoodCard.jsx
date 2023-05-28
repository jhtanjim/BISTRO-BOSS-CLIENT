import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, category } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=' absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white '>${price}</p>
                <div className="card-body flex-col items-center">
                    <p>{category}</p>
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 my-8 border-0 border-b-4  border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;