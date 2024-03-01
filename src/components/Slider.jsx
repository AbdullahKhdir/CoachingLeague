import React from 'react';
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material'
import image_one from '../public/images/giraffe-4366005_1280.jpg';
import image_two from '../public/images/glass-2016_1280.jpg';
import image_three from '../public/images/unique-4025390_1280.jpg';
import dog_one from '../public/images/dogs/dog-img.jpg';
import dog_two from '../public/images/dogs/lady-img.jpg';

const Slider = () => {
    var items = [
        {
            description: "Probably the most random thing you have ever seen!",
            img: dog_one
        },
        {
            description: "Probably the most random thing you have ever seen!",
            img: image_one
        },
        {
            description: "Probably the most random thing you have ever seen!",
            img: image_two
        },
        {
            description: "Probably the most random thing you have ever seen!",
            img: image_three
        },
        {
            description: "Hello World!",
            img: dog_two
        }
    ];

    function Item(props)
    {
        return (
            <Paper className="mui-paper">
                <img className={'slider-image'} src={props.item.img} alt="alt.png"/>
                <p className='slider-description'>{props.item.description}</p>

                <Button className="CheckButton">
                    Get Coaching Session
                </Button>
            </Paper>
        )
    }

    return (
        <>
            <Carousel 
                className="mui-carousel" 
                autoPlay={false}
                indicatorIconButtonProps={{
                    style: {
                        // position: 'relative',
                        // width: '100%',
                        // paddingTop: '0px',
                        // marginTop: '10px',
                        // textAlign: 'center'
                    }
                }}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </>
    );
};

export default Slider;