//import the menu item component
// Single dish card (e.g Pasta Carbonari)
import MenuItem from "./MenuItem";

// Functional component to display a category with its items
// const Category creates a React functional component
// ({ category }) means it expects a prop called category
//this prop is not a string, its an object from data
const Category = ({ category }) => {
  console.log(category)
  return (
    // a wrapper div with a CSS class (so you can style it later)
    <div className="category">
      {/* // displays the name of the category like appetizers or main courses,
      // the first category is the prop and the second is the property of that object */}
      <h2>{category.category}</h2> 
      {/* another wrapper for styling */}
      <div className="items">
        {/* loops over the items array inside the category
        ex..if the category is "appetizers", category.items might be and oject {}, {}, 
        for each dish (item) render a MenuItem component*/}
        {category.items.map((item) => (
          // passes the whole dish object down to the menuItem component
          //key=[item.id] React uses this to track which list items change
          //item={item} gives the Menu Item access to the dish details
          <MenuItem key={item.id} item={item} />

          //👉 Example in English:

// “Loop through all dishes in this category. For each dish, hand it to the MenuItem 
// component so it can display the name, price, and description. 
// Also, give React a key so it doesn’t get confused about which dish is which.”
        ))}
      </div>
    </div>
  );
};

// Exporting the component so it can be used in Menu.jsx
export default Category;
