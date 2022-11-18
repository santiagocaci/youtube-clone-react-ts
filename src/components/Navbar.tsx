import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
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
      sx={{ backgroundColor: '#000', top: 0, zIndex: 1 }}
    >
      <Link to={`/`} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <Typography
        ml={{ xs: 0, sm: 1 }}
        variant='h6'
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontSize: { xs: '16px' },
          flexGrow: 1,
          alignSelf: 'flex-end',
          color: 'gray',
        }}
      >
        By Santiago Caci
      </Typography>
      <SearchBar />
    </Stack>
  );
};
