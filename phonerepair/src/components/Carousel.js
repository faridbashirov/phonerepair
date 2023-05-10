import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Carousels = () => {
  return (
    <div className="h-[600px] w-full bg-[#22282e] flex items-center border-b-[1px]">
        <Carousel responsive={responsive} className='h-[300px] w-full' infinite={true}
  autoPlay={true }
  autoPlaySpeed={1500}
  >
  <div>   <Card  className=' w-[330px] lg:w-[330px] h-auto  flex flex-col items-center '>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
        className=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card></div>
  <div>   <Card  className=' w-[330px] lg:w-[330px] h-auto flex flex-col items-center '>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
        className=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card> </div>
  <div><Card  className=' w-[330px] lg:w-[330px] h-auto flex flex-col items-center '>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
        className=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card></div>
  <div>
  <Card  className=' w-[330px] lg:w-[330px] h-auto flex flex-col items-center '>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
        className=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card>
    
     </div>
</Carousel>;
    </div>
  
  )
}

export default Carousels