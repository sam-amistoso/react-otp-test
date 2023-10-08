// noinspection JSUnusedGlobalSymbols

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PalmettoOTP from '../index';

const meta: Meta<typeof PalmettoOTP> = {
  component: PalmettoOTP,
  title: 'Palmetto OTP Cognito',
  argTypes: {},
};

export default meta;

// @ts-ignore
export const PrimaryPalmettoOTP: Story = () => {
  const handleClose = () => {
    console.log('Close Trigger');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <PalmettoOTP
        email={'sam.amistoso@designli.co'}
        phone={'111-111-111'}
        idToken={
          'eyJraWQiOiJcL0xGWklyaE1Ic1BaOEdzYlU2blk2Y3VWMEZ4c3BtYXA5TCt4OXVrVjhiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlZWNmOTk1OS1mOTdjLTRlZjQtYjJhMy1jMDUzM2E3ZTc0NmYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfM2YxZWZCcG9vIiwiY29nbml0bzp1c2VybmFtZSI6ImFtaXN0b3NvIiwiYXVkIjoiNGkwYnBybzhicTljdXNxa2lndDFqNGdiOWYiLCJldmVudF9pZCI6IjIzMTI1Nzg5LTM5Y2QtNDA3Zi1iMDkyLTU2MDQyMTMwYzcwNyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjk2NDMwMjgwLCJjdXN0b206Y2h1bmsxIjoiZXlKcFpDSTZPVGcwTnl3aWNIWk5kV3gwYVhCc1pWVnpaWElpT2pIRUUwRmtiV2x1YVhOMGNtRjBiOGtVWTJOdmRXNTBURzlqYTJWa0lqb3d4QlJRWlhKemIyNUhhWFpsYms1aGJXVWlPaUpUWVcwaXlocE5hV1JrYkdYR0cyNTFiR3pLR2xOMWNzY3lRVzFwYzNSdmMyXC9GTjA5bVptbGpaVkJvYjI3RUd6RXhNUzB3TURERUJEREZIMDF2WW1sczJoOVBjbWRoYm1sNllYUnBiMjVWYm1sMHgySkZWRWtnTHlCRVpYTnBaMjVzYVNBb1JHVjJaV3h2Y0cxbGJuUXBJaXdpZFhObGNtN0dLbUhxQUl4bGJXRnBiQ0k2SW5OaGJTN0lGMEJreDBRdVk4UWpjM1JoZEhWejVBRERjSEJ5YjNabFpDSXNJbXhoYzNSVmNHUmhkT1FCSkNJeU1ESXpMVEV3TFRBeVZERTBPakU0T2pRekxqQXdNRnJsQUs1RWIyMWhhVzVKUk9jQllGWnY1QUdWNVFGWFEyRnVVMlZ1WkVMRVRVWG1BSWptQVQ1emRXSnpZM0pwWW1WVWI4Y1labUZzYzJVc0ltRjBkSEpwWW5WMFpYTWlPbHQ3SWxCRlQwUEZDVlBrQUo1RFZDSjlYWDBzZXlKTVJVMVFSOU1ZVFVsVTFCZFRSVkpEVEVWUTFFcFFWRkpCUTB2SkdVUk9XY3NaU1U3VEdWTlZVRkJVVE5NWlJVZFNSVk5UMHhsRVRVSEpGbEpGVVNMRUZERXhJanBiWGNZZ1EwUlBWOHBxNmdDY1VrVlEwMDVXOHdFVFhlWUMySFJwZG1WSGNtOTFjT2NCakdOMWNuSmxiblRGRStZQlVHbkZHRzdrQXVCRFJVMUVJaXdpWVNJNk1NUlhhU0k2NUFOR3hCdFpiM0pyeGhveHh4b3h4elZEYUdGeWJHVnpkRzl1enlBMnh5QnZiR3hsMGg0NHhoNUVhV3hzMEJ3ek9jWWNVR2xqYTJWdWMrNEFrVFBHSEVGcGEyWEhOOGdhTVRuSFZFeGxlR2x1WjNSdmJpQkRieUF0SUV4bGVDQk5aV1JwWTJGc0lFTmxiblJsY3M0NE5UTEdOMUpsWjJsdmJzUWxUMUR2QUpIbkFNdE9aWGRpWlhKeWVjNUFNc2RBUm14dmNtVnVZMlhPSGpIbkFNMUViM0pqYUdWenkzNWQ2UUdOVUc5emFlUUQxK2tCa09nQkF1UUQzVW5rQUxMa0FKZnJBOW9neURMbEFqakVaamcyTU1ZelEyRnNiR1J2ZDI0ZzVRVG5Jc1JtWVdOalpYTnpWR1wva0FUSTZJbU16TkRNNFlUSTBOVEl6TWpRMk1ESTRZek5oWWpnNE5qUmlORGsyTVRReUluMD0iLCJleHAiOjE2OTY0MzM4NzYsImlhdCI6MTY5NjQzMDI4MCwiZW1haWwiOiJzYW0uYW1pc3Rvc29AZGVzaWdubGkuY28ifQ.U0ZWfjEl938bAZMN1AUf601CxDXEZdOt9VgQGzZMl88KKwDgMs3A-_bznSPHT-NHhN1-h5LBrPxnsm339tFHy_3kik1SSdggYlYeRcSOIogOEum9Tw3H2qscPvQlb2aMZMULkOGfJT8qtoA0Q2hl24QNmbp-FBKBxF-VuvMhsY1d1Zjsk5j3Uh7Y9xlY9CEmVTYghK7nlq0cS0o3bi5JhZJqazy_jJmHb3A4xK3-eFVeAZMZ-HXzZXrYdRuZ-uFc1lQO6TPyhwx-X5nKbzAHBJyoPLBJm712RTxN9IKr_yEPq-IRcw9xY2h6JNJM9Gh4q1slyIIq13c0zb8JXH0Prg'
        }
        onClose={handleClose}
      />
    </div>
  );
};

type Story = StoryObj<typeof PalmettoOTP>;
