import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';

const useCarts = () => {


    const { user } = useContext(AuthContext)

    const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bistro-boss-server-jhtanjim.vercel.app/carts?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        },
    })

    return [cart, refetch]







};

export default useCarts;