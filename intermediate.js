// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// HINT: Function to display menu items by category
function displayMenuItems(menu) {
    // HINT: Get a reference to the menu container in your HTML
    const menuSection = document.getElementById('menu');
    // HINT: Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries()) {
        // HINT: Create an h3 element for the category
        let categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        // HINT: Append the category heading to the menu container
        menuSection.appendChild(categoryElement);
        // HINT: Create a list element for the items in the category
        let itemsListElement = document.createElement('ul');
        // HINT: Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // HINT: Attach a click event listener to the list item to add it to the order
            let listItemElement = document.createElement('li');
            listItemElement.textContent = item;
            listItemElement.addEventListener('click', () => addToOrder(item));
            // HINT: Append the list item to the category's list
            itemsListElement.appendChild(listItemElement);
        
        });
        menuSection.appendChild(itemsListElement);
    }
}

// HINT: Callback function for adding an item to the order
function addToOrder(itemName) {
    // HINT: Get references to the order items list and order total element in your HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // HINT: Create a list item for the order
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = itemName;
    // HINT: Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);
    // HINT: Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + 100.00;
    orderTotalElement.textContent = newTotal.toFixed(2); 
}

// HINT: Function to initialize the menu system
function initMenuSystem(menu) {
    // HINT: Call the displayMenuItems function to display the menu
    displayMenuItems(menu);
}

// HINT: Call the init function to start the menu system
initMenuSystem(menu);
