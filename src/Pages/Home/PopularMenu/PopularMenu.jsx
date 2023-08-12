import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {



    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('Menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //     setMenu(popularItems);
    //         })
    // }, [])


    return (
        <section className=' max-w-screen-xl mx-auto mb-24'>

            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Items'
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-10 '>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}


                    ></MenuItem>)
                }
            </div>

            <button className="btn  my-8 border-0 border-b-4 text">View Full Menu</button>

        </section>
    );
};

export default PopularMenu;