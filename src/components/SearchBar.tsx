import { useState } from 'react';
import type { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';

import { SearchOutlined } from '@mui/icons-material';

import 'index.css';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`search/${searchTerm}`);
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        width: { xs: '200px', sm: '40%' },
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        style={{ width: 'calc(100% - 50px)' }}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
