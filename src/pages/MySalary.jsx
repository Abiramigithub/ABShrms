import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SalaryDetails from './SalaryDetails';


export default function MySalary() {
    return (
        <div>
            <div className='row p-2' style={{ background: "white", borderRadius: '20px', fontSize: '10px', fontFamily: "poppins" }}>
                <div className='col-4 p-2 mx-2' style={{ background: '#CBE7FF', borderRadius: '5px' }}>
                    <div className='row'>
                        <div>
                            Current CTC
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-6' style={{ fontWeight: 1500 }}>
                            INR:8,92,944.00/Annum

                        </div>
                        <div className='col-6' style={{ float: 'right' }}>
                            <span style={{ textDecoration: 'underline', color: 'orange', float: 'right' }}>Salary breakup</span>

                        </div>
                    </div>
                </div>
                <div className='col-7 p-2 mx-2' style={{ background: '#FFE3CB', borderRadius: '5px' }}>
                    <div className='row'>
                        <div className='col-2 d-flex align-items-center justify-content-center'>
                            <strong>Payroll</strong>
                        </div>
                        <div className='col-2 '>
                            <div className='row'>
                                Renumeration
                            </div>
                            <div className='row' style={{ fontWeight: 1000 }}>
                                Monthly
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                Pay Cycle
                            </div>
                            <div className='row' style={{ fontWeight: 1000 }}>
                                21,Jan-20,Feb
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                Attendence
                            </div>
                            <div className='row' style={{ fontWeight: 1000 }}>
                                1,Feb-20,Mar
                            </div>
                        </div>
                        <div className='col-2'>

                        </div>
                        <div className='col-2'>

                        </div>
                    </div>
                </div>

            </div>

            <br />
            <SalaryDetails />
        </div>
    )
}
