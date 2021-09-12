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

type TProps = {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  isShowButton?: boolean;
  width?: 'full' | 'normal';
};

const BaseMediaCard = ({
  className = '',
  // image = 'https://firebasestorage.googleapis.com/v0/b/chocomint-c4a70.appspot.com/o/my-img%2Fno_img.jpg?alt=media&token=294a7188-bb19-44f1-b581-58909649a322',
  image = '/images/no_img.jpg',
  title = '',
  description = '',
  isShowButton = true,
  width = 'normal',
}: TProps) => {
  const CustomCard = withStyles({
    root: {
      // SP
      // width: '40vw',
      width: width === 'full' ? '100%' : '30%',
    },
  })(Card);

  return (
    <CustomCard className={className}>
      <CardActionArea>
        <CardMedia
          // image="https://image.faspa.epark.jp/shop_data/cake-takeout-sweetsguide/images/material/F10295251000001_item06.jpg"
          image={image}
          component="img"
          title="チョコミント商品の画像"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {isShowButton && (
        <CardActions>
          <Button size="small" color="primary">
            詳細を見る
          </Button>
        </CardActions>
      )}
    </CustomCard>
  );
};

export default BaseMediaCard;
