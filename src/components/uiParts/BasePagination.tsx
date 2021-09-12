import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { COLORS } from '../../const/color';

const useStyles = makeStyles((theme) => ({
  ul: {
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: COLORS.MINT,
      color: '#fff',
    },
  },
}));

type TProps = {
  className?: string;
  boundaryCount?: number;
  count: number;
  defaultPage?: number;
  page?: number;
  onChange?: any;
  siblingCount?: number;
  hideButton?: boolean;
  size?: 'large' | 'medium' | 'small';
  variant?: 'outlined' | 'text';
};

const BasePagination = ({
  className = '',
  boundaryCount = 1,
  count,
  defaultPage = 1,
  page = 1,
  onChange,
  siblingCount = 1,
  hideButton = false,
  size = 'medium',
  variant = 'text',
}: TProps) => {
  const classes = useStyles();

  return (
    <Pagination
      className={className}
      classes={{ ul: classes.ul }}
      count={count}
      boundaryCount={boundaryCount}
      defaultPage={defaultPage}
      page={page}
      onChange={onChange}
      siblingCount={siblingCount}
      hidePrevButton={hideButton}
      hideNextButton={hideButton}
      size={size}
      variant={variant}
    />
  );
};

export default BasePagination;
