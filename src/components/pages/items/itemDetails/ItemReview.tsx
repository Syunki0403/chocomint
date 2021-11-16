import Reactconsole, { useState, useEffect } from 'react';
import { BaseReviewCard } from '../../../uiParts/index';
/* types */
import { TReview } from '../../../../types/Review';
/* recoil */
import { useRecoilValue } from 'recoil';
import { reviewsState } from 'src/recoil/atoms/review';

type TProps = {
  id: string;
};

const ItemReview = ({ id }: TProps) => {
  const date = new Date();
  const reviews = useRecoilValue(reviewsState);
  const [filterdReviews, setFilterdReviews] = useState<TReview[]>([]);

  useEffect(() => {
    if (id) {
      const newReviews = reviews.filter((review) => review.item_id === id);
      setFilterdReviews(newReviews);
    }
  }, [id, reviews]);

  return (
    <div className="flex flex-col flex-wrap items-center py-6 md:flex-row md:py-10">
      {filterdReviews.map((review, index) => {
        return (
          <div key={index} className="w-full md:w-1/3">
            <BaseReviewCard
              className="mb-6 mx-auto w-full md:mb-10"
              user={review.user_info.name}
              date={date}
              review={review.sentence}
              scoreChocolate={review.score_chocolate}
              scoreMint={review.score_mint}
              score={review.score}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemReview;
