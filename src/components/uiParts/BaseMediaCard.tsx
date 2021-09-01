import React from 'react';
/* material-ui */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const BaseMediaCard = () => {
  const CustomCard = withStyles({
    root: {
      width: '40vw',
    },
  })(Card);

  return (
    <CustomCard>
      <CardActionArea>
        <CardMedia
          image="https://image.faspa.epark.jp/shop_data/cake-takeout-sweetsguide/images/material/F10295251000001_item06.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            チョコミント
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            PABLO mini チョコミント
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          詳細を見る
        </Button>
      </CardActions> */}
    </CustomCard>
  );
};

export default BaseMediaCard;
