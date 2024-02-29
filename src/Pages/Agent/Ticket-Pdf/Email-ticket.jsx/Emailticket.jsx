import React from "react";
import logo from "../../../../assets/images/indigo.png";

export default function Emailticket() {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2, padding: "10px" }}>
            <h5 style={{ fontWeight: "bold" , textAlign: 'center' }}>Logo</h5>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h6 style={{ fontWeight: "bold" }}>Sirmedia Technologies</h6>
            <h6>
              <span style={{ fontWeight: "bold" }}>Contact :</span>9856230147
            </h6>
            <h6>
              <span style={{ fontWeight: "bold" }}>Address :</span>Indore
            </h6>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h6 style={{ fontWeight: "bold" }}>Booking ID</h6>
            <h6>TJS106900849829</h6>
            <h6 style={{ fontWeight: "bold" }}>Booking Time</h6>
            <h6>11:11, Friday 23-Feb</h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#dfdfdf",
          }}
        >
          <div style={{ flex: 1, padding: "0px" }}>
            <div style={{ display: "flex", marginTop: "5px" ,marginLeft: "10px" }}>
              <h6 style={{ marginRight: "10px" }}>Bengaluru</h6>
              <h6 style={{ marginRight: "10px" }}>-</h6>
              <h6 style={{ marginRight: "10px" }}>Delhi</h6>
              <h6> on 23/02/2024 </h6>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "5px" }}
        >
          <div style={{ flex: 1, padding: "10px" }}>
            <div style={{ display: "flex" }}>
              <img src={logo} style={{ width: "80px", height: "70px" }} />
              <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <h6>indigo</h6>
                <p>IG-587</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 3, padding: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 2, padding: "10px" }}>
                <h6>16:00, Fri 23-Feb</h6>
                <p style={{ marginTop: "-8px"}}>Bengaluru, India</p>
                <p style={{ marginTop: "-15px"}}>Terminal 2</p>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                <h6 style={{ marginTop: "25px" }}>
                  <span>0</span> (stops)
                </h6>
              </div>
              <div style={{ flex: 2, padding: "10px" }}>
                <h6>17:10, Fri 23-Feb</h6>
                <p style={{ marginTop: "-8px"}}>Chennai, India</p>
                <p style={{ marginTop: "-15px"}}>Terminal 2</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <div style={{ marginTop: "20px" }} >
                <h6>01h 10m</h6>
                <p style={{ marginTop: "-8px"}}>Economy</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ backgroundColor: "#dfdfdf", padding: "2px", margin: "auto", width: '22%', textAlign: 'center'}}>
                    <h6>Layover Time - 03h 25m</h6>
            </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <div style={{ flex: 1, padding: "10px" }}>
            <div style={{ display: "flex" }}>
              <img src={logo} style={{ width: "80px", height: "70px" }} />
              <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <h6>indigo</h6>
                <p>IG-587</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 3, padding: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 2, padding: "10px" }}>
                <h6>16:00, Fri 23-Feb</h6>
                <p style={{ marginTop: "-8px"}}>Bengaluru, India</p>
                <p style={{ marginTop: "-15px"}}>Terminal 2</p>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                <h6 style={{ marginTop: "25px" }}>
                  <span>0</span> (stops)
                </h6>
              </div>
              <div style={{ flex: 2, padding: "10px" }}>
                <h6>17:10, Fri 23-Feb</h6>
                <p style={{ marginTop: "-8px"}}>Chennai, India</p>
                <p style={{ marginTop: "-15px"}}>Terminal 2</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <div style={{ marginTop: "20px" }} >
                <h6>01h 10m</h6>
                <p style={{ marginTop: "-8px"}}>Economy</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{marginLeft: "10px"}}>Passenger Details (1)</h6>
            </div>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead style={{ borderBottom: '1px solid #dddddd' }}>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{  textAlign: 'center', padding: '8px' }}>Name</th>
                <th style={{  textAlign: 'center', padding: '8px' }}>PNR & Ticket No.</th>
                </tr>
            </thead>
            <tbody style={{ borderBottom: '1px solid #dddddd' }}>
                <tr style={{ }}>
                <td style={{  textAlign: 'center', padding: '8px' }}>Ms. demo1 tap </td>
                <td style={{  textAlign: 'center', padding: '8px' }}>TESTPNR / 1111111111111 </td>
                </tr>
            </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{marginLeft: "10px"}}>Payment Details</h6>
            </div>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>Base Fare </td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹ 8527.00</td>
                </tr>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>Taxes and fees</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹ 8527.00</td>
                </tr>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>SSR Fees</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹ 8527.00 </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dddddd' }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>Total</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹ 10077.00</td>
                </tr>
                <tr>
                    <td style={{  textAlign: 'left', padding: '8px', fontWeight: "bold" }}>Amount Paid</td>
                    <td style={{  textAlign: 'right', padding: '8px', fontWeight: "bold" }}>₹ 10077.00</td>
                </tr>
            </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", marginTop: "5px"  }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{marginLeft: "10px"}}>GST Details</h6>
            </div>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>GST Name </td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹</td>
                </tr>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>GST No</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹</td>
                </tr>
                <tr style={{ }}>
                    <td style={{  textAlign: 'left', padding: '8px' }}>GST Address</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹</td>
                </tr>
                <tr>
                    <td style={{  textAlign: 'left', padding: '8px' }}>GST email</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹</td>
                </tr>
                <tr>
                    <td style={{  textAlign: 'left', padding: '8px' }}>GST Phone</td>
                    <td style={{  textAlign: 'right', padding: '8px' }}>₹</td>
                </tr>
            </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "black", color: "white" }} >
          <div style={{ flex: 1 }}>
            <div style={{ marginTop: "5px" }}>
              <h5 style={{marginLeft: "10px"}}>Policies and Cancellation Rules</h5>
                <div style={{ padding: '5px', marginLeft: "40px"}}>
                    <ul style={{ listStyleType: 'dot'}}>
                        <li style={{  marginBottom: '5px'}}>You should carry a print-out of your booking and present for check-in.</li>
                        <li style={{  marginBottom: '5px'}}>Date & Time is calculated based on the local time of city/destination.</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
