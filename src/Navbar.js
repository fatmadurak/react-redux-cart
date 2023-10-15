import React from 'react';
import { BsFillBasketFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Navbar() {
    const { quantity } = useSelector((store) => store.cart);

    return (
        <Container maxWidth="xl">
            <Paper elevation={3} style={{ padding: '20px' }}>
                <ul className='cartList' style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                    <li>
                        <Typography variant="h3" color={"primary"}>Cart App</Typography>
                    </li>
                    <li>
                        <div style={{ display: 'flex', alignItems: 'center', position:"relative" }}>
                            <Typography variant="h5" style={{ marginRight: '5px', position:"absolute", right:"-10px", top:"-20px",background:"orange", borderRadius:"100%",width:"1rem"}}>
                                {quantity}
                            </Typography>
                            <BsFillBasketFill size={40} color="blue" />
                        </div>
                    </li>
                </ul>
            </Paper>
        </Container>
    );
}

export default Navbar;