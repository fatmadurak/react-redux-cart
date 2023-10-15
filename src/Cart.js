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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
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
     
    </Card>
  
  
  
  </>;
}

export default Cart;
