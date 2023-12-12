import React from 'react'
import StepperComp from './StepperComp'

export default function SalaryDetails() {
    return (
        <>
            <div style={{ backgroundColor: 'white' }}>


                <div style={{ backgroundColor: 'white', display: "flex", width: "100%", padding: "10px", fontFamily: 'poppins' }}>
                    <p style={{ flexGrow: 1, margin: 0, fontSize: '12px', fontWeight: 1000 }}>Salary revised details</p>
                    <span style={{ fontSize: '10px', marginTop: '5px' }}>Your current Income tax regime - &nbsp; </span> <button class='btn  btn-sm' style={{ float: "right", fontSize: '10px', background: "#C1A9BF" }}>Old Tax Regime</button>
                </div>
                <div className='row' >
                    <StepperComp />
                </div>
            </div>
        </>

    )
}
