import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props) {
  const {fieldText, placeholder} = props;
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label={fieldText}
        placeholder={placeholder}
        id="fullWidth"
        value={name}
        onChange={handleChange}
      />
    </Box>
  );
}