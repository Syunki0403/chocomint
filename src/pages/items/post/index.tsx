import React, { useState } from 'react';
/* components */
import { CommonWrapTemplate } from '../../../components/layout/index';
import { LabelAndTextField } from '../../../components/molecules/index';
import { BaseButton, BaseErrorText, BaseTextField } from '../../../components/uiParts/index';
import { useFormik } from 'formik';
import { PhotosUpload, FiveStarScore } from '../../../components/layout/index';
/* validate */
import { postItemValidate } from '../../../validate/item/postItem';
import { TPostItem, TPostItemError } from '../../../types/Item';

const ItemPost = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [scoreMint, setScoreMint] = useState(0);
  const [scoreChocolate, setScoreChocolate] = useState(0);
  const [score, setScore] = useState(0);

  const validate = (values: TPostItem) => {
    let errors = {} as TPostItemError;
    errors = postItemValidate<TPostItemError>(values, errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: null,
      shops: '',
      period_start: '',
      period_end: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('form data', values);
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
          <p className="text-center text-2xl font-bold">商品投稿</p>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="name"
            label="商品名"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          >
            {formik.errors.name && formik.touched.name && (
              <BaseErrorText>{formik.errors.name}</BaseErrorText>
            )}
          </LabelAndTextField>
          <div className="mb-6">
            <p className="mb-3">
              商品画像<span className="text-sm">（※最大3枚まで）</span>
            </p>
            <PhotosUpload name="photos" photos={photos} setPhotos={setPhotos} />
          </div>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="price"
            label="価格"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price ? formik.values.price : ''}
          >
            {formik.errors.price && formik.touched.price && (
              <BaseErrorText>{formik.errors.price}</BaseErrorText>
            )}
          </LabelAndTextField>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="shops"
            label="販売店"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shops}
          >
            {formik.errors.shops && formik.touched.shops && (
              <BaseErrorText>{formik.errors.shops}</BaseErrorText>
            )}
          </LabelAndTextField>
          <div className="mb-6">
            <p>
              販売期間<span className="text-sm">（※不明の場合、未入力で）</span>
            </p>
            <div className="flex items-center mb-3 mt-2">
              <p className="w-14">開始</p>
              <BaseTextField
                id="period_start"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.period_start}
                type="date"
              ></BaseTextField>
            </div>
            <div className="flex items-center">
              <p className="w-14">終了</p>
              <BaseTextField
                id="period_end"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.period_end}
                type="date"
              ></BaseTextField>
            </div>
            {formik.errors.period_start && formik.touched.period_start && (
              <BaseErrorText>{formik.errors.period_start}</BaseErrorText>
            )}
          </div>
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

export default ItemPost;
