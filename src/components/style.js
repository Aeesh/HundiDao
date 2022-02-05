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
      // background: '#efefef',
      height: '100%',
    },
    inputBtn: {
      background: '#fff !important',
      color: '#efefef !important',
      width: '30px',
      height: '30px',
      marginTop: '15px !important',
      // left: '100px',
      // right: '100px'
    }
});
