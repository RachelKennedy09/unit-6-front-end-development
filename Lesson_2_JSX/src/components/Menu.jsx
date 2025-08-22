// Top-level menu renderer. the parent that calls category for each section of
// you restaurant menu
// The job is to import all the menu data, lop through each category, render a <Category /> for each one
// Master Menu board that organizes everything



// where the objects are
import { menuData } from "../data/menuData"; 
// how to display one section of the menu
import Category from "./Category";

// Functional component that maps through categories and displays them
// doesn't take any props. it just uses the menuData
const Menu = () => {
  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>
      {/* loop through each category onbject in y our menu data */}
      {menuData.map((category, index) => (
        // key=index unique identifier for React
      // better to not use
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

// Exporting the Menu component
export default Menu;

