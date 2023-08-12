import React from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { useParams } from 'react-router';
import useMenu from '../../hooks/UseMenu';
import OrderTab from '../Menu/OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';

const OrderPage = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()

    const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()



    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className='max-w-screen-2xl mx-auto'>



            <Helmet>
                <title>Bistro Boss| Order Food</title>
            </Helmet>


            <Cover
                img={orderImg}
                title="Order Food"
            ></Cover>
            <Tabs className='my-8' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>



                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <OrderTab
                        items={salad}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>

                    <OrderTab
                        items={pizza}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>

                    <OrderTab
                        items={soup}
                    ></OrderTab>

                </TabPanel>
                <TabPanel>

                    <OrderTab
                        items={dessert}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={drinks}
                    ></OrderTab>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default OrderPage;