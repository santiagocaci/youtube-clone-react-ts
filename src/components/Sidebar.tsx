import type { Dispatch, SetStateAction, FC } from 'react';

import { Stack } from '@mui/material';

import { categories } from 'utils';

interface Props {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

export const Sidebar: FC<Props> = ({
  category: selectedCategory,
  setCategory,
}) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '94%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map(category => (
        <button
          onClick={() => setCategory(category.name)}
          className='category-btn'
          key={category.name}
          style={{
            backgroundColor: category.name === selectedCategory ? 'red' : '',
            color: 'white',
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
