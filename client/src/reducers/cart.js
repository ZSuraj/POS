const Cart = {
    items: [],
    totalPrice: 0,
    totalQuantities: 0,
  };

const cartReducer = (state= Cart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log(action.payload.menu.itemName)
            const {product, quantity} = action.payload
            const existingItem = state.items.find(item => item._id === product._id)
            if (existingItem) {
                const TotalPrice = product.itemPrice * quantity
                const TotalQuantities = quantity
                product.itemNos = quantity
                var updatedCartItems = [...state.items];
                updatedCartItems[existingItem] = product
                if (quantity == 0) {
                  updatedCartItems = updatedCartItems.filter(item => item.itemNos != 0)
                }
                return {
                    ...state, items: updatedCartItems, totalPrice: TotalPrice, totalQuantities: TotalQuantities 
                }
            } else {
                // console.log(quantity)
                const TotalPrice = state.totalPrice + product.itemPrice * quantity
                const TotalQuantities = state.totalQuantities + quantity
                product.itemNos = quantity 
                return {
                    ...state, items: [...state.items, product], totalPrice: TotalPrice, totalQuantities: TotalQuantities 
                }
            }

        case 'REMOVE_FROM_CART':
          return {...state, items: state.items.filter(item => item.id !== action.payload.product._id)}
        case 'CLEAR_CART':
          return {...state, items: []};
        default:
          return state
    }
}






























function updateCart(items, itemToAdd) {
    const existingItem = items.find(item => item.id === itemToAdd.id);
  
    if (existingItem) {
      // if the item already exists in the cart, update the quantity and price
      return items.map(item => {
        if (item.id === itemToAdd.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: itemToAdd.price * (item.quantity + 1)
          };
        }
        return item;
      });
    } else {
    
      // if the item doesn't exist in the cart, add it with a quantity of 1, name, and price
      const newItem = {
        id: itemToAdd._id,
        name: itemToAdd.itemName,
        price: itemToAdd.itemPrice,
        quantity: 1
      };
      return [...items, newItem];
    }
  }  

export default cartReducer