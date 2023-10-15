import React from "react";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Cart({ item }) {
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
        <Button size="small" variant="contained">     <KeyboardArrowUpIcon /></Button>
        <Button size="small"variant="contained">    <KeyboardArrowDownIcon />
</Button>
      </CardActions>
     
    </Card>
  
  
  
  </>;
}

export default Cart;
