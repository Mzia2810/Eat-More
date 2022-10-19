import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  selectedItem: {
    itemsList: [],
    restaurantName: '',
  },
  totalPrice: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const {restaurantName , restaurantId, checkboxValue, item} = action.payload;
      // console.log('restaurant Items :: Restaurant item id  ::',item[1]);
      
      // if (checkboxValue === true & restaurantId === item.rid)  {
      //   state.totalPrice += item.price;
      // } else if (checkboxValue === false) {
      //   state.totalPrice -= item.price;
      // } else if (state.totalPrice == 0) {
      //   state.totalPrice = 0;
      // }
      if (checkboxValue & restaurantId === item.rid ) {
        state.selectedItem.itemsList.push({
          item: item,
          checkboxValue: checkboxValue,
          restaurantName:restaurantName,
        });
        
        // console.log('check cart in store : : :',state.selectedItem.itemsList)
      } else {

        state.selectedItem.itemsList = state.selectedItem.itemsList.filter(
          a => a.item.id != action.payload.item.id,
        );
        state.selectedItem.restaurantName= action.payload.restaurantName;
      }
    },

    
    cartItemsInStoreNow(state,action) {
      const n  = action.payload;
      n.map((del) => {
        state.selectedItem.itemsList.filter(item=>item.item.id!=del.item.id)
      })
      // console.log('How to remove cart items  ==============',action.payload)
      
    },


    ///.......................................................................................
    // itemIncrement(state, action) {
    //   const id = action.payload;

    //   const addQuantity = state.list.find(item => item.id === id);
    //   if (addQuantity) {
    //     addQuantity.quantity++;
    //     addQuantity.totalAmount += addQuantity.price;
    //   }
    // },

    // itemDecrement(state, action) {
    //   const id = action.payload;

    //   const removeQuantity = state.list.find(item => item.id === id);
    //   if (removeQuantity.quantity === 1) {
    //     removeQuantity.quantity = 1;
    //   } else {
    //     removeQuantity.quantity--;
    //     removeQuantity.totalAmount -= removeQuantity.price;
    //   }
    // },
    // removeItem(state, action) {
    //   const removeItem = state.list.filter(item => item.id !== action.payload);
    //   if (removeItem === 0) {
    //     state.list = [];
    //   } else {
    //     state.list = removeItem;
    //   }
    // },
  },
});

export const {addToCart,cartItemsInStoreNow, itemIncrement, itemDecrement, removeItem} =
  cartSlice.actions;
export default cartSlice.reducer;
