import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCarts()
    // TODO: admin server er kaj baki
    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">
                        {
                            isAdmin ?
                                // jodi admin hoi
                                <>
                                    {/* <!-- Sidebar content here --> */}
                                    <li><NavLink to='dashboard/home' ><FaHome />Admin Home  </NavLink></li>
                                    <li><NavLink to='addItem'><FaUtensils />Add An  Item  </NavLink></li>
                                    <li><NavLink to='manageItems'><FaWallet /> Manage Items</NavLink></li>
                                    <li><NavLink to='dashboard/history'><FaBook /> Manage Bookings</NavLink></li>
                                    <li><NavLink to='allusers'><FaUsers /> All Users</NavLink></li>




                                </> :





                                // jodi user hoi
                                <>


                                    {/* <!-- Sidebar content here --> */}
                                    <li><NavLink to='dashboard/home' ><FaHome />User Home  </NavLink></li>
                                    <li><NavLink to='dashboard/reservations'><FaCalendarAlt />Reservations  </NavLink></li>
                                    <li><NavLink to='dashboard/history'><FaWallet /> Payment History</NavLink></li>
                                    <li className=''>
                                        <NavLink to='mycart'><FaShoppingCart />My Cart
                                            <span className="badge  badge-secondary">+{cart?.length || 0}</span>

                                        </NavLink></li>

                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome />Home  </NavLink></li>
                        <li><NavLink to='/menu'> <FaHome />Our Menu</NavLink></li>
                        <li><NavLink to='/order/pizza'> <FaHome />Order food</NavLink></li>
                        <li><NavLink><FaCalendarAlt />Reservations  </NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;