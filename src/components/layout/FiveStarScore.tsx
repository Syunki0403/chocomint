import React from 'react';

type TProps = {
  handleScore: (score: number) => void;
  scoreName: string;
};

const FiveStarScore = ({ handleScore, scoreName }: TProps) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const ele = document.getElementById(scoreName);
    if (ele) {
      for (let index = 1; index <= 5; index++) {
        ele.children[index - 1].classList.remove('active');
        if (target.getAttribute('data-rate') && index <= Number(target.getAttribute('data-rate'))) {
          ele.children[index - 1].classList.add('active');
        }
      }
      handleScore(Number(target.getAttribute('data-rate')));
    }
  };

  const onClear = () => {
    const ele = document.getElementById(scoreName);
    if (ele) {
      for (let index = 1; index <= 5; index++) {
        ele.children[index - 1].classList.remove('active');
      }
      handleScore(0);
    }
  };

  return (
    <div>
      <div id={scoreName}>
        {[...Array(5)].map((_: number, index: number) => {
          return (
            <span
              key={index}
              className="input-star5_rating"
              data-rate={index + 1}
              onClick={(e: React.MouseEvent<HTMLInputElement>) => handleClick(e)}
            >
              ★
            </span>
          );
        })}
      </div>
      <p className="inline-block mb-5 mt-3 text-gray-400 cursor-pointer" onClick={() => onClear()}>
        CLEAR
      </p>
    </div>
  );
};

export default FiveStarScore;
