import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModalVariant from '../modalVariant/modalVariant';

export default function CardVariant({title,imgSrc,handleLikeChange,userKey,isLiked}) {
  return (
    <>
    <Card key={userKey} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgSrc}
        alt="user image"
        
      />
      {/* <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeChange}>
          <FavoriteIcon className={`${isLiked?'!text-red-500':'!text-gray-500'}`}/>
        </IconButton>
      </CardActions>
    </Card>
 
    </>
  );
}
