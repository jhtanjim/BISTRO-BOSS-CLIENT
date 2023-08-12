import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzatImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu()
    const deserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div className=''>


            <Cover
                img={menuImg}
                title='Our Menu'
            ></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"

            ></SectionTitle>
            {/* offer menu item */}
            <MenuCategory

                items={offered}

            ></MenuCategory>
            {/* desert menu items */}
            <MenuCategory

                items={deserts}
                title="dessert"
                img={desertImg}
            >

            </MenuCategory>
            {/* pizza */}
            <MenuCategory

                items={pizza}
                title="pizza"
                img={pizzatImg}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory

                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            {/* soup */}
            <MenuCategory

                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;