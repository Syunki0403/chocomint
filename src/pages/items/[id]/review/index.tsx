import React, { useState } from 'react';
import { postReview } from '../../../../modules/review';
import { useRouter } from 'next/router';
/* components */
import { CommonWrapTemplate } from '../../../../components/layout/index';
import { LabelAndTextField } from '../../../../components/molecules/index';
import { BaseButton, BaseErrorText } from '../../../../components/uiParts/index';
import { useFormik } from 'formik';
import { FiveStarScore } from '../../../../components/layout/index';
/* validate */
import { postReviewValidate } from '../../../../validate/review/postReview';
import { TReviewValidate, TItemValidateError, TPostReview } from '../../../../types/Review';

const ItemReview = () => {
  const [scoreMint, setScoreMint] = useState(0);
  const [scoreChocolate, setScoreChocolate] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const validate = (values: TReviewValidate) => {
    let errors = {} as TItemValidateError;
    errors = postReviewValidate<TItemValidateError>(values, errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      sentence: '',
    },
    validate,
    onSubmit: (values) => {
      if (flag) {
        setFlag(false);
        const reviewObj: TPostReview = {
          item_id: id as string,
          sentence: values.sentence,
          score_mint: scoreMint,
          score_chocolate: scoreChocolate,
          score: score,
        };
        postReview(reviewObj);
      }
    },
  });

  const handleScoreMint = (score: number) => {
    setScoreMint(score);
  };

  const handleScoreChocolate = (score: number) => {
    setScoreChocolate(score);
  };

  const handleScore = (score: number) => {
    setScore(score);
  };

  return (
    <CommonWrapTemplate>
      <div className="mb-12 mt-6 mx-auto w-8/10 md:w-5/10">
        <form onSubmit={formik.handleSubmit}>
          <p className="text-center text-2xl font-bold">商品レビュー</p>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="sentence"
            label="レビュー"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sentence}
            multiline={true}
            rows={3}
          >
            {formik.errors.sentence && formik.touched.sentence && (
              <BaseErrorText>{formik.errors.sentence}</BaseErrorText>
            )}
          </LabelAndTextField>
          <div>
            <p>ミント感</p>
            <FiveStarScore handleScore={handleScoreMint} scoreName="five-star_score-mint" />
          </div>
          <div>
            <p>チョコ感</p>
            <FiveStarScore
              handleScore={handleScoreChocolate}
              scoreName="five-star_score-chocolate"
            />
          </div>
          <div>
            <p>評価</p>
            <FiveStarScore handleScore={handleScore} scoreName="five-star_score" />
          </div>
          <div className="mt-10 text-center">
            <BaseButton className="px-16" type="submit" size="large">
              投稿
            </BaseButton>
          </div>
        </form>
      </div>
    </CommonWrapTemplate>
  );
};

export default ItemReview;
