import { createSlice } from "@reduxjs/toolkit";
import {data} from "../data"


export const cartSlice=createSlice({

    name:"cart",
    initialState:{
  
        quantitiy:1,
        cartItems:{data},
        total:0,
     

    },
    reducers:{

    



    }





})

export default cartSlice.reducer

