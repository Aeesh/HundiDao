import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props) {
  const {fieldText, placeholder, value, handleChange, name} = props;
  // const [name, setName] = React.useState('');
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        name={name}
        fullWidth
        label={fieldText}
        placeholder={placeholder}
        id="fullWidth"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}