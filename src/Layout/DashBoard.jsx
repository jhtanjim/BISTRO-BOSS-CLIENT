import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';

const DashBoard = () => {
    const [cart] = useCarts()
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='dashboard/home' ><FaHome />User Home  </NavLink></li>
                        <li><NavLink to='dashboard/reservations'><FaCalendarAlt />Reservations  </NavLink></li>
                        <li><NavLink to='dashboard/history'><FaWallet /> Payment History</NavLink></li>
                        <li className=''>
                            <NavLink><FaShoppingCart />My Cart
                                <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                <div className="divider"></div> </NavLink></li>


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