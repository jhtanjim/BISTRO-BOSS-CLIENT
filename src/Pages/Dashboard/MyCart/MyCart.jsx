import React from 'react';
import useCarts from '../../../hooks/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCarts()
    // console.log(cart);
    // reduce function
    const total = cart.reduce((sum, item) => item.price + sum, 0);




    // delete
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-jhtanjim.vercel.app/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )


                        }
                    })
            }
        })

    }

    return (






        <div className='w-full max-w-4xl '>



            <div className='uppercase h-[60px] mb-4 align-items-center font-semibold flex justify-evenly'>
                <h3 className="text-3xl">Total Items : {cart.length}</h3>
                <h3 className="text-3xl">Total Price : {total}</h3>
                <Link to='/dashboard/payment'><button className="btn btn-warning  btn-sm">Pay</button></Link>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>JoItem Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td className='text-end'> ${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white">

                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }








                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default MyCart;