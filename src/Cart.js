import React from "react";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from "react-redux";
import { increment,decrement } from "./redux/CartSlice";

function Cart({ item }) {

const dispatch=useDispatch();


  return <>

<Card >
      <CardMedia
        sx={{ height: 400 }}
        image={item.images}
    
      />
    <div style={{ display: "flex", alignItems:"center", justifyContent:"space-around" }}>
    <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
        {item.price.toLocaleString()} TL
        </Typography>
     
      </CardContent>
      <CardActions>
      <div style={{ display: "flex",flexDirection:"column", alignItems:"center" }}>
          <Button size="small" variant="contained" onClick={()=>dispatch(increment({ itemId: item.id }))}>
            <KeyboardArrowUpIcon />
          </Button>
          <Typography gutterBottom variant="h5" component="div">
            {item.quantity}
          </Typography>
          <Button size="small" variant="contained" onClick={()=>dispatch(decrement({ itemId: item.id }))}>
            <KeyboardArrowDownIcon />
          </Button>
        </div>
      </CardActions>
    </div>
   
    
  
    </Card>
   
  
  
  </>;
}

export default Cart;
