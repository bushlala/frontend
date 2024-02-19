import React from 'react'
import './invoice.css';

function Invoice() {
  return (
    <div className=''>
        <div className=''>
          <div className="invoice_container">

              <div id="view-content">
                <div class="header-bg bg-white p-1">
                  <div class="invoice_logo">
                    <img src="//static.tripjack.com/img/logo.png" class="agentlogo-invoice" alt=" Logo" />
                  </div>
                  <div class="top_details">
                    <p class="top_p right_txt">
                      <strong>Invoice Date : </strong>Feb 6, 2024
                    </p>
                  </div>
                </div>
                <div className="invoice_body">
                  <div className="agent_container">
                    <h2 className="center_txt invoicenumber">
                      <span className="tj-bookingId">No. : TJS108000847414</span><span>Invoice No. : TD-89322</span>
                    </h2>
                    <div className="agent_details">
                      <div className="agent_details-left">
                        <h3>From</h3>
                        <h4 className="captaize mb-0">Atlas Tours and Travels PVT LTD</h4>
                        <p>
                          <strong>Regd Office: </strong>53, Haji Mahal,Mohammed Ali
                          Road MumbaiMumbai,
                          Maharashtra,
                          400003
                        </p>
                        <p>
                          <strong>Email: </strong>
                          info@atlastravels.com
                        </p>
                        <p>
                          <strong>Phone: </strong>9250008101
                        </p>
                        <p>
                          <strong>State: </strong>Maharashtra
                        </p>
                        <p>
                          <strong>GSTIN: </strong>07AAGCT7826A1ZF
                        </p>
                      </div>
                      <div className="agent_details-right">
                        <h3>To,</h3>
                        <h4 className="captaize">Sirmedia Technologies</h4>
                        <p>
                          <strong>Address: </strong>C-1031 Siddhivinayak Business
                          Towers, Makarba, Ahmedabad, 380051,
                          Ahmedabad,
                          380051
                        </p>
                        <p>
                          <strong>Email: </strong>info@sirmedia.in
                        </p>
                        <p>
                          <strong>Phone: </strong>9033322233
                        </p>
                        <p>
                          <strong>State: </strong>Gujarat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ticket_details-container">
                    <table className="tkt_details-table invoice_table w-100">
                      <thead>
                        <tr>
                          <th>S No.</th>
                          <th>Ticket No.</th>
                          <th>PNR No.</th>
                          <th>Sectors</th>
                          <th>Flight</th>
                          <th>PAX Name</th>
                          <th>Travel Date</th>
                          <th>Base Fare</th>
                          <th>OT Tax</th>
                          <th>K3/GST</th>
                          <th>YQ Tax</th>
                          <th>Baggage Charges</th>
                          <th>Meal Charges</th>
                          <th>Seat Charges</th>
                          <th>Management Fee</th>
                          <th>Management Fee Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-title="S.NO">1</td>
                          <td data-title="Ticket No">NA</td>
                          <td data-title="Ticket No">NBN9WG</td>
                          <td data-title="Sectors">BLR-BOM-DEL</td>
                          <td data-title="Flight">SG-485,SG-8152</td>
                          <td data-title="PAX Name">
                            Ms.
                            demo
                            test
                            (A)
                          </td>
                          <td data-title="traveldate">Feb 7, Wed, 05:25</td>
                          <td data-title="Fare">8,130.00</td>
                          <td data-title="OT Tax">331.00</td>
                          <td data-title="K3/GST">482.00</td>
                          <td data-title="YQ Tax">1,400.00</td>
                          <td data-title="Bag Ch">0.00</td>
                          <td data-title="Bag Ch">0.00</td>
                          <td data-title="Bag Ch">0.00</td>
                          <td data-title="Service Charge">75.00</td>
                          <td data-title="Service Charge">13.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bill_container">
                    <div className="bill_details">
                      <div className="bill_info">
                        <h3>
                          GST Details :
                        </h3>
                        <table className="bill_table">
                          <tr>
                            <th>Description</th>
                            <td>CGST @9%</td>
                            <td>SGST @9%</td>
                            <td>IGST 18@%</td>
                          </tr>
                          <tr>
                            <th>Management Fee GST</th>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>13.50</td>
                          </tr>
                        </table>
                      </div>
                      <div className="bill_breakup">
                        <table className="bill_table invoice_table">
                          <thead>
                            <tr>
                              <th></th>
                              <th>
                                <strong>Gross:</strong>
                              </th>
                              <th className="right_txt"><strong>10,431.50</strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="italic_font"> Less : </td>
                              <td>Flight Commission Earned</td>
                              <td className="right_txt">0.00</td>
                            </tr>
                            <tr>
                              <td className="italic_font">
                                Add :
                              </td>
                              <td>Flight TDS Deducted</td>
                              <td className="right_txt">0.00</td>
                            </tr>
                          </tbody>
                          <tr className="botm_brdr_tr">
                            <td></td>
                            <td><strong>Net Amount</strong></td>
                            <td className="right_txt"><strong>₹10,431.50</strong></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="bill_container"><div className="bill_details"></div></div>
                  <div>
                    <div className="footer-terms">
                      <ul className="terms-conditions">
                        <h3 className="address-head">
                          Terms &amp; Conditions :
                        </h3>
                        <li>
                          <b>IMP </b> : All Cases &amp; Disputes are subject to Mumbai
                          Jurisdiction.
                        </li>
                        <li>
                          <b>IMP </b> : Refunds &amp; Cancellations are subject to Airlines
                          approval.
                        </li>
                        <li>
                          <b>CHEQUE </b> : Must be drawn in favour of Atlas Tours and Travels PVT
                          LTD.
                        </li>
                        <li>
                          <b>LATE PAYMENT </b> :
                          Interest @ 24% per annum will be charged on all
                          outstanding bills after due date.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Invoice
