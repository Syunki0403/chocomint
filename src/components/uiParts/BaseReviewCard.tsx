import React from 'react';
/* material-ui */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

type TProps = {
  className?: string;
  user: string;
  date: Date;
  review: string;
  scoreMint: number;
  scoreChocolate: number;
  score: number;
  width?: 'full' | 'normal';
};

const BaseReviewCard = ({
  className = '',
  user,
  date,
  review,
  scoreMint,
  scoreChocolate,
  score,
  width = 'normal',
}: TProps) => {
  const CustomCard = withStyles({
    root: {
      width: width === 'full' ? '100%' : '30%',
    },
  })(Card);

  const year = date.getFullYear();
  const month = ('00' + (date.getMonth() + 1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);
  const ymd = year + '/' + month + '/' + day;

  return (
    <CustomCard className={className}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="h3" className="media-card_maintypography">
            レビュー
          </Typography>
          <Typography variant="body2" component="p">
            {review}
          </Typography>
          <Typography variant="h6" component="h3" className="media-card_maintypography">
            ミント感
          </Typography>
          <Typography variant="body2" component="p">
            <span className="star5_rating" data-rate={scoreMint}></span>
          </Typography>
          <Typography variant="h6" component="h3" className="media-card_maintypography">
            チョコ感
          </Typography>
          <Typography variant="body2" component="p">
            <span className="star5_rating" data-rate={scoreChocolate}></span>
          </Typography>
          <Typography variant="h6" component="h3" className="media-card_maintypography">
            評価
          </Typography>
          <Typography variant="body2" component="p">
            <span className="star5_rating" data-rate={score}></span>
          </Typography>
          <Typography variant="body2" component="p" className="mt-5">
            投稿者：{user}
          </Typography>
          <Typography variant="body2" component="p">
            投稿日時：{ymd}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default BaseReviewCard;
