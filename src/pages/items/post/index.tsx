import React, { useState, useEffect } from 'react';
import { postItem, uploadImage } from '../../../modules/item';
/* components */
import { CommonWrapTemplate } from '../../../components/layout/index';
import { LabelAndTextField, LoaderButton } from '../../../components/molecules/index';
import { BaseButton, BaseErrorText, BaseTextField } from '../../../components/uiParts/index';
import { useFormik } from 'formik';
import { PhotosUpload, FiveStarScore } from '../../../components/layout/index';
/* validate */
import { postItemValidate } from '../../../validate/item/postItem';
import { TItemValidate, TItemValidateError, TPostItem } from '../../../types/Item';

const ItemPost = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [scoreMint, setScoreMint] = useState(0);
  const [scoreChocolate, setScoreChocolate] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validate = (values: TItemValidate) => {
    let errors = {} as TItemValidateError;
    errors = postItemValidate<TItemValidateError>(values, errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: null,
      shops: '',
      period_start: '',
      period_end: '',
      supplement: '',
    },
    validate,
    onSubmit: async (values) => {
      if (flag && typeof values.price === 'number') {
        if (isMounted) {
          setIsLoading(true);
        }
        setFlag(false);

        const promises: Array<Promise<any>> = [];
        photos.map((photo) => {
          promises.push(uploadImage(photo));
        });
        const imageUrls: string[] = await Promise.all(promises);

        const itemObj: TPostItem = {
          name: values.name,
          images: imageUrls,
          price: values.price,
          shops: values.shops,
          period_start: values.period_start,
          period_end: values.period_end,
          score_mint: scoreMint,
          score_chocolate: scoreChocolate,
          score: score,
          supplement: values.supplement,
        };
        await postItem(itemObj);
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
          <p className="text-center text-2xl font-bold">????????????</p>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="name"
            label="?????????"
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
              ????????????<span className="text-sm">????????????3????????????</span>
            </p>
            <PhotosUpload name="photos" photos={photos} setPhotos={setPhotos} />
          </div>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="price"
            label="??????"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price ? formik.values.price : ''}
            type="number"
          >
            {formik.errors.price && formik.touched.price && (
              <BaseErrorText>{formik.errors.price}</BaseErrorText>
            )}
          </LabelAndTextField>
          <LabelAndTextField
            wrapClass="mt-3 mb-6"
            FieldClass="mt-2"
            id="shops"
            label="?????????"
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
              ????????????<span className="text-sm">???????????????????????????????????????</span>
            </p>
            <div className="flex items-center mb-3 mt-2">
              <p className="w-14">??????</p>
              <BaseTextField
                id="period_start"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.period_start}
                type="date"
              ></BaseTextField>
            </div>
            <div className="flex items-center">
              <p className="w-14">??????</p>
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
            <p>????????????</p>
            <FiveStarScore handleScore={handleScoreMint} scoreName="five-star_score-mint" />
          </div>
          <div>
            <p>????????????</p>
            <FiveStarScore
              handleScore={handleScoreChocolate}
              scoreName="five-star_score-chocolate"
            />
          </div>
          <div>
            <p>??????</p>
            <FiveStarScore handleScore={handleScore} scoreName="five-star_score" />
          </div>
          <LabelAndTextField
            wrapClass="mb-6"
            FieldClass="mt-2"
            id="supplement"
            label="??????"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.supplement}
            multiline={true}
            rows={3}
          ></LabelAndTextField>
          <LoaderButton
            wrapClassName="relative mt-10 text-center"
            buttonClassName="px-16"
            buttonType="submit"
            size="large"
            isLoading={isLoading}
          >
            ??????
          </LoaderButton>
        </form>
      </div>
    </CommonWrapTemplate>
  );
};

export default ItemPost;
