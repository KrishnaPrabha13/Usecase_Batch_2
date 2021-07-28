import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import { withStyles, Slider, Typography, Table, TableCell, TableRow } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';
import TableDetails from './TableDetails';
import SlideMarks from './SlideMarks';


const PrettoSlider = withStyles({
    root: { color: "MediumvioletRed", height: 10 },
    thumb: { height: 25, width: 25, backgroundColor: "white", border: "3px solid black", marginTop: -9, marginLeft: -9 },
    track: { height: 10, borderRadius: 4 },
    rail: { height: 10, borderRadius: 4 },
})(Slider);

function Gold() {
    const [pAmount, setPAmount] = useState(2755000);
    const [interest, setInterest] = useState(7);
    const [duration, setDuration] = useState(147);
    const maxValue = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;

    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);


    return (
        <div className="goldstyle">
            <NavBar />
            <h2 style={{ color: "#ed872d",paddingTop:"60px" }}>Gold Loan: Get Loan Against Gold Jewellery</h2>
            <h1></h1>
            <h4 style={{ fontSize: "20px" }}>Life is full of opportunities. Do not allow the opportunities to pass just because of financial constraint. Get instant gold loan by bringing your gold jewellery at any branch of SM Bank. Your gold stays safe while you can go ahead and take advantage of every opportunity."</h4>
            <Link to="goldreq" className="btn btn-primary">APPLY FOR GOLD LOAN</Link> {'   '}
            <br></br>

            <h2 style={{ color: "Blue", fontSize: "25px", textAlign: "left" }}>Gold Loan Interest Rates</h2>
            <h4 style={{ fontSize: "20px", textAlign: "justify", padding: "10px" }}>The interest rates on gold loan, availed by pledging gold, are relatively lower than other types of loans and range between 7.35% to 29% p.a. Banks and other financial institutions in India offer gold loans, the loan amount for which ranges from Rs.1500 to Rs.1 crore. The repayment tenure of these gold loans ranges between 7 days to 240 months.</h4>
            <br></br>
            <h2 style={{ color: "Blue", fontSize: "25px", textAlign: "left" }}>Gold Loan Details</h2>
            <br></br>
            <table id="rate">
                <thead>
                    <tbody>
                        <tr>
                            <th>Interest Rate</th>
                            <td>7.35%p.a.onwards</td>
                        </tr>
                        <tr>
                            <th>Loan Amount</th>
                            <td>Up to Rs.1 crore</td>
                        </tr>
                        <tr>
                            <th>Loan Tenure</th>
                            <td>Up to 20 years</td>
                        </tr>
                        <tr>
                            <th>Processing Fee</th>
                            <td>0.5% the loan amount + GST onwards </td>
                        </tr>
                    </tbody>
                </thead>
            </table>
            <br></br>

            <div className="CApp">
                <h1 style={{ color: "Blue", fontSize: "25px", textAlign: "left", paddingLeft:"10px"}}>Gold Loan Calculator</h1>
                <h4 style={{ fontSize: "20px", textAlign: "justify", padding: "10px" }}>Fulfill your dreams by taking a loan against Gold!
                    Get a loan at attractive rates with minimum documentation. Use this SBF Bank Gold Loan Calculator, to work out your EMIs and tenure.</h4>
                <div className="CalApp">
                    <h2 className="CalHeading"><u>EMI Calculator</u></h2>
                    <div>
                        <Typography gutterBotton style={{ textAlign: "justify", padding: "10px" }}><strong>Loan Amount</strong></Typography>
                        <PrettoSlider value={pAmount} marks={SlideMarks.marksAmt} onChange={(event, vAmt) => (setPAmount(vAmt))} defaultValue={pAmount} max={maxValue} />
                    </div>

                    <div>
                        <Typography gutterBotton style={{ textAlign: "justify", padding: "10px" }}><strong>Interest Rate %</strong></Typography>
                        <PrettoSlider value={interest} marks={SlideMarks.marksInt} onChange={(event, vInt) => (setInterest(vInt))} defaultValue={interest} max={intMax} />
                    </div>

                    <div>
                        <Typography gutterBotton style={{ textAlign: "justify", padding: "10px" }}><strong>Tenure (Months)</strong></Typography>
                        <PrettoSlider value={duration} marks={SlideMarks.marksTenure} onChange={(event, vDur) => (setDuration(vDur))} defaultValue={duration} max={maxDuration} />
                    </div>

                    <Table>
                        <TableRow>
                            <TableCell>
                                <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} />
                            </TableCell>
                        </TableRow>
                    </Table>
                </div>
            </div>

        </div>
    )
}

export default Gold
