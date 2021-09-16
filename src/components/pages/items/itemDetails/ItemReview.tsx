import React from 'react';
import { BaseReviewCard } from '../../../uiParts/index';

const ItemReview = () => {
  const date = new Date();

  return (
    <div className="flex flex-col flex-wrap items-center py-6 md:flex-row md:py-10">
      <div className="3xl:w-1/4 md:w-1/3">
        <BaseReviewCard
          className="mb-6 mx-auto w-full md:mb-10"
          user="チョコミント大好き好き君"
          date={date}
          review="いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
          scoreChocolate={2}
          scoreMint={0}
          score={5}
          width="full"
        />
      </div>
      <div className="3xl:w-1/4 md:w-1/3">
        <BaseReviewCard
          className="mb-10 mx-auto w-full"
          user="チョコミント大好き好き君"
          date={date}
          review="いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
          scoreChocolate={2}
          scoreMint={0}
          score={5}
          width="full"
        />
      </div>
      <div className="3xl:w-1/4 md:w-1/3">
        <BaseReviewCard
          className="mb-10 mx-auto w-full"
          user="チョコミント大好き好き君"
          date={date}
          review="いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
          scoreChocolate={2}
          scoreMint={0}
          score={5}
          width="full"
        />
      </div>
      <div className="3xl:w-1/4 md:w-1/3">
        <BaseReviewCard
          className="mb-10 mx-auto w-full"
          user="チョコミント大好き好き君"
          date={date}
          review="いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
          scoreChocolate={2}
          scoreMint={0}
          score={5}
          width="full"
        />
      </div>
      <div className="3xl:w-1/4 md:w-1/3">
        <BaseReviewCard
          className="mb-10 mx-auto w-full"
          user="チョコミント大好き好き君"
          date={date}
          review="いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
          scoreChocolate={2}
          scoreMint={0}
          score={5}
          width="full"
        />
      </div>
    </div>
  );
};

export default ItemReview;
