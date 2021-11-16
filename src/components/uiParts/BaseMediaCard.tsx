import React from 'react';
import Router from 'next/router';
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
  imgClassName?: string;
  image?: string;
  title?: string;
  description?: string;
  isShowButton?: boolean;
  width?: 'full' | 'normal';
  onClick?: VoidFunction;
};

const BaseMediaCard = ({
  className = '',
  imgClassName = '',
  image = '/images/no_img.jpg',
  title = '',
  description = '',
  isShowButton = true,
  width = 'normal',
  onClick,
}: TProps) => {
  const CustomCard = withStyles({
    root: {
      width: width === 'full' ? '100%' : '30%',
    },
  })(Card);

  return (
    <CustomCard className={className}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={imgClassName}
          image={image}
          component="img"
          title="チョコミント商品の画像"
        />
        <CardContent>
          <Typography
            className="media-card_maintypography"
            gutterBottom
            variant="h6"
            component="h3"
          >
            {title}
          </Typography>
          <Typography
            className="media-card_subtypography"
            color="textSecondary"
            variant="body2"
            component="p"
          >
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
