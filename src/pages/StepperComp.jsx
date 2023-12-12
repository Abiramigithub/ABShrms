import React from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const steps = [
    { label: 'Step 1', heading: 'Salary revision', content: 'Content for Step 1Content for Step 1Content for Step 1' },
    { label: 'Step 2', heading: 'Salary revision', content: 'Content for Step 2' },
    { label: 'Step 3', heading: 'Salary revision', content: 'Content for Step 3' },
    { label: 'Step 4', heading: 'Salary revision', content: 'Content for Step 4' },
    { label: 'Step 4', heading: 'Onset Salary', content: 'Content for Step 4' },
];

const CustomStepper = () => {
    return (
        <Stack direction="row" spacing={4}>
            <Stepper
                activeStep={0}
                orientation="vertical"
                sx={{
                    width: '20px',
                    '.MuiStepConnector-line': {
                        minHeight: '60px', // Adjust the line height as needed
                        borderLeftStyle: 'dotted',
                        borderLeftWidth: '1px'

                    },
                }}
            >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            icon={
                                index === 2 ? (
                                    <div
                                        style={{
                                            backgroundColor: '#9F1B1A',
                                            borderRadius: '50%',
                                            width: '30px',
                                            height: '30px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TrendingDownIcon sx={{ fontSize: '14px', color: 'white' }} />
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            backgroundColor: '#74A954',
                                            borderRadius: '50%',
                                            width: '30px',
                                            height: '30px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TrendingUpIcon sx={{ fontSize: '14px', color: 'white' }} />
                                    </div>
                                )
                            }
                        />
                    </Step>
                ))}
            </Stepper>

            <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                {steps.map((step, index) => (
                    <React.Fragment key={step.label}>
                        <Typography variant="h6" sx={{ fontSize: '10px', fontFamily: 'poppins', fontWeight: 1000, display: 'flex' }}>{step.heading} &nbsp;<span style={{ color: 'grey' }}>Effective</span> &nbsp;Jun 01,2023 &nbsp;<span style={{ textDecoration: 'underline' }}>View Salary Breakup</span> &nbsp;<span className="ml-auto" style={{ marginLeft: 'auto', textDecoration: 'underline' }}>View Revision Letter</span></Typography>
                        <Card style={{
                            width: "60rem",
                            backgroundColor: index === 2 ? '#FEE5E0' : '#F1F1F1',
                            height: '4rem'
                        }}>
                            <CardContent>
                                <Typography sx={{ fontSize: '10px', fontFamily: 'poppins' }}>
                                    <div className='d-flex' >
                                        <div>
                                            <div style={{ color: 'grey' }}>Gross Salary</div>
                                            <div style={{ fontWeight: 1000 }}>INR 8,92,944</div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-center mx-2'>+</div>
                                        <div>
                                            <div style={{ color: 'grey' }}>Employer Contribution</div>
                                            <div style={{ fontWeight: 1000 }}>INR 21,600</div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-center mx-2'>+</div>

                                        <div>
                                            <div style={{ color: 'grey' }}>Variables</div>
                                            <div style={{ fontWeight: 1000 }}>INR 0</div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-center mx-2'>=</div>

                                        <div>
                                            <div style={{ color: 'grey' }}>Total CTC</div>
                                            <div style={{ fontWeight: 1000 }}>INR 9,14,544</div>
                                        </div>
                                        <div className='ms-auto' style={{ fontSize: '20px', cursor: 'pointer' }}>&#9662;</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
    );
};

export default CustomStepper;
