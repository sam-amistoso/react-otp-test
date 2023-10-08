import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import Box from '@mui/material/Box';
import Typo from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '../Button';
import Timer from './Timer';
import ErrorPage from '../ErrorPage';

import SecurityIcon from '@mui/icons-material/Security';
import CloseIcon from '@mui/icons-material/Close';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

import useStyles from './PalmettoOTP.styles';
import '../styles/index.css';

import { FormatEmail, FormatPhone } from '../../utils';
import { useFetch } from '../../hooks';
import { IEndpoint } from '../../interfaces/IEndpoint';

export interface PalmettoOTPProps {
  email: string;
  phone: string;
  idToken: string;
  onClose: (confirm: boolean) => void;
  onError?: (msg: string) => void;
  onSuccess?: (msg: string) => void;
}

const PalmettoOTP: React.FC<PalmettoOTPProps> = ({ email, phone, idToken, onClose, ...props }) => {
  const { isPending, fetchData } = useFetch();
  const classes = useStyles();
  const [{ otp, numInputs, placeholder, inputType }, setConfig] = React.useState({
    otp: '',
    numInputs: 6,
    placeholder: '',
    inputType: 'text' as const,
  });
  const [optionValue, setOptionValue] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [requestSent, setRequestSent] = useState(false);
  const [keyData, setKeyData] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState(true);

  const disableSendCode = optionValue === null;
  const disableReSend = requestSent;

  const handleCloseAction = (confirm: boolean) => {
    if (onClose) onClose(confirm);
  };

  const handleSubmit = () => {
    const fixOTP = otp;

    if (!keyData) {
      return console.log('Missing Key Code');
    }

    const endpoint: IEndpoint = {
      method: 'GET',
      url: `/${keyData}/${fixOTP}`,
    };
    setRequestSent(true);
    setShowTimer(true);
    fetchData<{ response: boolean }>(idToken, endpoint)
      .then((res) => {
        if (res?.response) {
          console.log('Successfully Pass OTP Security!');
          if (props.onSuccess) props.onSuccess('Success');
          if (onClose) onClose(true);
        } else {
          if (props.onError) props.onError('OTP Verification Failed');
          if (onClose) onClose(false);
          setErrorMsg('OTP Verification Failed');
        }
      })
      .finally(() => {
        setRequestSent(false);
        setShowTimer(false);
      });
  };

  const handleSendRequest = () => {
    // setRequestSent(true);
    // handleNext();

    if (activeStep === 1 && idToken && optionValue) {
      setRequestSent(true);
      const endpoint: IEndpoint = {
        method: 'GET',
        url: optionValue === 'email' ? '/email' : '/sms',
      };
      fetchData<{ key: number }>(idToken, endpoint)
        .then((res) => {
          if (res) {
            setKeyData(res.key);
            handleNext();
          }
        })
        .catch((err) => {
          console.log('🚀~file:PalmettoOTP.tsx:108 ~ err: ', err);
          setErrorMsg(err);
        });
    }
  };

  const handleReSendRequest = () => {
    setRequestSent(true);
    setShowTimer(true);
  };

  const handleCBTimer = () => {
    setShowTimer(false);
    setRequestSent(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionValue((event.target as HTMLInputElement).value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  const handleTryAgain = () => {
    setActiveStep(1);
    setErrorMsg(null);
  };

  const LabelRadio: React.FC<{ title: string; detail: string }> = ({ title, detail }) => {
    return (
      <Box sx={classes.labelContainer}>
        <Typo fontSize='16px' fontWeight={500}>
          {title}
        </Typo>
        <Typo fontSize='12px' fontWeight={400}>
          {detail}
        </Typo>
      </Box>
    );
  };

  const PageStep1: React.FC = () => {
    return (
      <>
        <Box sx={classes.headerWrapper}>
          <Box sx={classes.closeBtn}>
            <CloseIcon
              sx={{ width: '24px', height: '24px' }}
              onClick={() => handleCloseAction(false)}
            />
          </Box>
          <SecurityIcon sx={{ width: '32px', height: '32px', color: '#C2C2C2' }} />
          <Typo variant='h4'>Multi factor authentication</Typo>
          <Typo fontSize='14px' fontWeight={400}>
            A message with a verification code will be sent to your chosen method.
          </Typo>
        </Box>
        {errorMsg ? (
          <ErrorPage message={errorMsg} onTrigger={handleTryAgain} />
        ) : (
          <>
            <FormControl style={{ width: '100%' }}>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={optionValue}
                onChange={handleChange}>
                <FormControlLabel
                  sx={classes.radioBtnContainer}
                  style={optionValue === 'email' ? classes.active : classes.inActive}
                  value='email'
                  control={<Radio sx={classes.radioInput} />}
                  label={<LabelRadio title='Email Address' detail={FormatEmail(email)} />}
                />
                <FormControlLabel
                  sx={classes.radioBtnContainer}
                  style={optionValue === 'sms' ? classes.active : classes.inActive}
                  value='sms'
                  control={<Radio sx={classes.radioInput} />}
                  label={<LabelRadio title='SMS Code' detail={phone ? FormatPhone(phone) : ''} />}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant='contained'
              fullWidth
              sx={classes.primaryBtn}
              onClick={handleSendRequest}
              disabled={disableSendCode}
              progress={isPending}>
              SEND CODE
            </Button>
          </>
        )}
      </>
    );
  };

  const PageStep2: React.FC<{ detail: string }> = ({ detail }) => {
    return (
      <>
        <Box sx={classes.headerWrapper}>
          <Box sx={classes.closeBtn}>
            <CloseIcon
              sx={{ width: '24px', height: '24px' }}
              onClick={() => handleCloseAction(false)}
            />
          </Box>
          {optionValue === 'email' ? (
            <MarkEmailReadIcon sx={{ width: '32px', height: '32px', color: '#C2C2C2' }} />
          ) : (
            <SecurityUpdateGoodIcon sx={{ width: '32px', height: '32px', color: '#C2C2C2' }} />
          )}
          <Typo variant='h4'>Multi factor authentication</Typo>
          <Typo fontSize='14px' fontWeight={400}>
            A message with a verification code has been sent to{' '}
            {<span style={{ color: 'rgba(0, 0, 0, 0.56)' }}>{detail}</span>}. Enter the code to
            continue.
          </Typo>
        </Box>
        {errorMsg ? (
          <ErrorPage message={errorMsg} onTrigger={handleTryAgain} />
        ) : (
          <>
            <Box sx={classes.rowCodeContainer}>
              <OTPInput
                containerStyle='container-style'
                inputStyle='input-style'
                numInputs={numInputs}
                onChange={handleOTPChange}
                renderSeparator={<span className='span-style' />}
                value={otp}
                placeholder={placeholder}
                inputType={inputType}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus={false}
              />
            </Box>
            <Box sx={classes.footerBtn}>
              <Button
                fullWidth
                neutral
                disabled={disableReSend}
                endIcon={showTimer ? <Timer seconds={50} cb={handleCBTimer} /> : null}
                onClick={handleReSendRequest}>
                RE-SEND
              </Button>
              <Button
                fullWidth
                progress={isPending}
                onClick={handleSubmit}
                disabled={otp.length < numInputs}>
                SUBMIT
              </Button>
            </Box>
          </>
        )}
      </>
    );
  };

  return (
    <Box sx={classes.container}>
      {activeStep === 1 ? (
        <PageStep1 />
      ) : (
        <PageStep2
          detail={optionValue === 'email' ? FormatEmail(email) : phone ? FormatPhone(phone) : ''}
        />
      )}
    </Box>
  );
};

export default PalmettoOTP;
