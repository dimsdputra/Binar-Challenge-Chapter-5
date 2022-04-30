import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent,  Container,  Grid,  Typography } from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'


const Image = styledComponents.img`
    width: 12vw;
    height: 15vw;
    margin-left: 9vw;
    margin-top: 3vw;
    margin-bottom: 3vw;
`
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    marginTop: '2vw',
    bottom: 0,
    textTransform: 'none',
    fontSize: '1.2vw',
    width:'20vw',
    marginLeft: '4.5vw',
    textDecoration: 'none',
    padding: '6px 12px',
    border: '1px solid',
    height: '3vw',
    lineHeight: 1.5,
    backgroundColor: '#5CB85F',
    borderColor: '#5CB85F',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#86b75b',
      borderColor: '#86b75b',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#5CB85F',
      borderColor: '#5CB85F',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
function ProductComponents() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product
        return (
            <Container sx={{}}>
              <Card sx={{ maxWidth:'35vw', height: '45vw', marginTop:'5vw', boxShadow: 2 }} key={id}>
                <Image src={image} alt="" srcset=""/>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'400'}}>{title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'bold'}}>
                    Rp. {price} / hari
                    </Typography>
                    <Typography variant="body2" mb={1}>
                    {category}
                    </Typography>
                    <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><PeopleOutlineIcon sx={{marginRight:1, marginBottom:1}}/> 4 Orang</Typography>
                    <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><SettingsOutlinedIcon sx={{marginRight:1, marginBottom:1}}/> Manual</Typography>
                    <Typography variant="body2" sx={{alignItems:'center', display:'flex'}}><CalendarTodayOutlinedIcon sx={{marginRight:1}}/> Tahun 2020</Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/product/${id}`}>
                    <BootstrapButton variant="contained">Pilih Mobil
                    </BootstrapButton>
                  </Link>
                </CardActions>
              </Card>
            </Container>
        )
    })
  return (
    <>{renderList}</>
  )
}

export default ProductComponents