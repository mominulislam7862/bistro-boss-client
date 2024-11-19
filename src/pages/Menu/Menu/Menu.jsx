
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../hocks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import { Helmet } from "react-helmet-async";

const Menu = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
             <Helmet>
                <title>Bistr o Boss sm | sm Menu</title>
            </Helmet> 
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="don't miss" heading="today's offered">
               </SectionTitle>
               {/* offered menu items */}
               <MenuCategory items={offered}></MenuCategory>
               {/* dessered menu items */}
               <MenuCategory 
               items={dessert}
               title="dessert"
               img={dessertImg}
               ></MenuCategory>
        
               <MenuCategory 
               items={pizza}
               title="pizza"
               img={pizzaImg}
               ></MenuCategory>
               {/* salad menu items */}
               <MenuCategory 
               items={salad}
               title="salad"
               img={saladImg}
               ></MenuCategory>
               {/* soup menu items */}
               <MenuCategory 
               items={soup}
               title="soup"
               img={soupImg}
               ></MenuCategory>
              

          
        </div>
    );
};

export default Menu;