import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { logo } from 'utils';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  return (
    <Stack
      direction='row'
      position='sticky'
      alignItems='center'
      justifyContent='space-between'
      p={2}
      sx={{ backgroundColor: '#000', top: 0 }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};
