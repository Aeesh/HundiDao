import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiTabs-scroller': {
            width: '100%'
        },
        '& .MuiToolbar-root ': {
            justifyContent: 'space-between'
        },
    },
    boxCon: {
      // width: '70%',
      // padding: '1rem',
      marginLeft: '200px'
    },
    cardWrap: {
      width: '80%',
      height: '500px',
      padding: '3rem',
      margin: ' auto',
      background: '#efefef !important',
    },
    cards: {
      position: 'relative',
      background: '#fff !important',
      color: '#fff !important',
      height: '100%',
    },
    btn: {
      background: '#fff !important',
      color: '#1976d2 !important',
      marginTop: '15px !important',
      marginRight: '25px !important',
    },
    img: {
      width: '150px',
      height: '50px',
    }
});
