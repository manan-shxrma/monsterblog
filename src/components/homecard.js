import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"


function homeCard(props){
    return( 
                 
    <div className="homeblogmob" style={{padding :"0 0 6rem 3rem", width:"400%"}}> 
     <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Image"
          height="140"
          image={props.img}
          style={{display: 'flex',flexWrap:"wrap"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small"><Link style={{textDecoration:"none", color:"white"}} to={`/post/${props.name}`}>Read</Link></Button>
          <Button  size="small"><a style={{textDecoration:"none", color:"black"}} href="/post">home</a></Button>
        </CardActions>
      </Card>
  </div>
  )
}
export default homeCard