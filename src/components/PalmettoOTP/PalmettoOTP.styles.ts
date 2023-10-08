const useStyles = () => {
  return {
    container: {
      position: 'relative',
      display: 'flex',
      width: '480px',
      padding: '24px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '32px',
      backgroundColor: '#FFF',
    },
    headerWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
      alignSelf: 'stretch',
    },
    closeBtn: {
      position: 'absolute',
      right: '24px',
      top: '24px',
      cursor: 'pointer',
    },
    primaryBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioBtnContainer: {
      display: 'flex',
      padding: '8px',
      alignItems: 'center',
      gap: '8px',
      alignSelf: 'stretch',
      borderRadius: '2px',
      margin: 'unset',
    },
    labelContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    active: {
      backgroundColor: '#1C43B1',
      color: '#FFF',
    },
    inActive: {
      backgroundColor: '#F7F7F7',
      color: '#000',
    },
    radioInput: {
      color: 'rgba(0, 0, 0, 0.6)',
      '&.Mui-checked': {
        color: '#FFF',
      },
    },
    rowCodeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      flex: '1 0 0',
      width: '100%',
    },
    input: {
      display: 'flex',
      maxWidth: '52px',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    divider: {
      height: '2px',
      width: '12px',
      flex: '1 0 0',
      background: '#E0E0E0',
    },
    footerBtn: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      alignSelf: 'stretch',
    },
    errorContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
  };
};

export default useStyles;
