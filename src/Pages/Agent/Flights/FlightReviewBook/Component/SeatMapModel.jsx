import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
import FlightDetailModel from '../../Component/FlightDetailModel';
//import Moment from 'moment';
export default function SeatMapModel({showModal, handleClose, bookingId, flightMapInfo, flightMapIndex, passangerInfo}) {
    //console.log('showModal',showModal);
    //console.log('bookingId',bookingId);
    //console.log('flightMapInfo',flightMapInfo);
    //console.log('passangerInfo',passangerInfo);
    const [passangerInfoModel, setPassangerInfoModel] = React.useState(passangerInfo);
    const [selectPassanger,setSelectPassanger] = React.useState(0);
    const [bookingSeatMap, setBookingSeatMap] = React.useState();
    const [customSeatMap,setCustomSeatMap] = React.useState();
    const [prices,setPrices] = React.useState([]);
    
    
    React.useEffect(() => {
        if(bookingId){
            getBookingSeatMap(bookingId);
        }
    }, [bookingId])

    
    const getBookingSeatMap = async (bookingId) => {
        var requestData = {
            bookingId : bookingId
        }
        FlightSearchService.BookingSeatMap(requestData).then(async (response) => {
            if(response.data.status){
                const result =  response.data.data[flightMapIndex];
                const sInfo = result.sInfo;
                setPrices(result.prices)
                //console.log("bookingSeatMapResult",result);
                //console.log("result.sInfo.prices",result.prices);
                var customSeatMap = [];

                for (var row=1; row <= result.sData.row; row++) {
                    var tmp = {column: []}
                    for (var column=1; column <= result.sData.column; column++) {
                        const isSeatFound = sInfo.find(seat => {
                            return (seat.seatPosition.column === column && seat.seatPosition.row === row)
                        });
                        if(isSeatFound){
                            var tmp1 = {
                                seatStatus :'full' ,
                                seat : isSeatFound
                            }
                            tmp.column.push(tmp1);
                        }else{
                            var tmp1 = {
                                seatStatus :'empty' ,
                                seat : {}
                            }
                            tmp.column.push(tmp1);
                        }
                    }
                    customSeatMap.push(tmp);
                }
                //console.log("customSeatMapCount",customSeatMap.length);
                //console.log("customSeatMap",customSeatMap);
                setCustomSeatMap(customSeatMap)
            }else{
              toast.error('Something went wrong');
            }
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
        });
    };

    const handleClickSetPassanger = (selectPassangerKey, seatInfo, seatStatus) => {
        if(seatStatus){
            //passangerInfo[selectPassangerKey];
            if(seatInfo.seatStatus === 'full'){
                const passangerInfoModel =  passangerInfoModel[selectPassangerKey];
                passangerInfoModel[selectPassangerKey].seat = seatInfo.seat.seatNo;
                passangerInfoModel[selectPassangerKey].fee = seatInfo.seat.amount;
                setPassangerInfoModel(passangerInfoModel);
                //passangerInfo[selectPassangerKey] = passanger;
                //setPassangerInfoModel(passangerInfoModel);
                //setPassangerInfoModel(passangerInfoModel => passangerInfoModel[selectPassangerKey])
                //setPassangerInfoModel(prevMovies => ([...prevMovies, ...passangerInfoModelCheck]));
                //console.log("passangerInfoModel",passangerInfoModel);
            }
        }
        //console.log('selectPassangerKey', selectPassangerKey);
        //console.log('seatInfo', seatInfo);
        //console.log('seatStatus', seatStatus);
        setSelectPassanger(selectPassangerKey);
    };
    return (
        <>
            <Modal size="xl" show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Select Seats</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-3 border p-2 ' >
                        <div className='d-flex'>
                            <img className='flight-flag' src={flightMapInfo.flightLogo} alt=''/>
                            <div className=''>
                                <div className="flightname" id="">{`${flightMapInfo.flightName} ${flightMapInfo.from} - ${flightMapInfo.to}`}</div>
                                <div className="flightnumber" id="">{`${flightMapInfo.flightCode} - ${flightMapInfo.flightNumber}`}</div>
                            </div>
                        </div> 
                        <hr></hr>
                        <div className="table-responsive">
                            <table className="table text-nowrap w-100">
                                <thead>
                                    <tr>
                                        <th>Passanger</th>
                                        <th>Seat</th>
                                        <th>Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        
                                        passangerInfoModel && passangerInfoModel.length > 0 && passangerInfoModel.map((passanger, passangerKey) => (
                                            
                                            <tr onClick={()=>handleClickSetPassanger(passangerKey,null,false)}>
                                                <td>{passanger.passangerTypeName}</td>
                                                <td>{passanger.seat}</td>
                                                <td>{passanger.fee}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td>Total</td>
                                        <td>--</td>
                                        <td>0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-dark w-100'>Proceed</button>
                        <h6 className='fw-bold flightname mt-4'>Proceed Without Seats </h6>
                        <p className='flightnumber'>* Conditions apply. We will try our best to accomodate your seat preferences, however due to operational considerations we can't guarantee this selection. The seat map shown may not be the exact replica of flight layout, we shall not responsible for losses arising from the same. Thank you for your understanding</p>
                    </div>
                    <div className='col-7'>

                    <div className='cabin fuselage'>
                        {
                            customSeatMap && customSeatMap.length > 0 && customSeatMap.map((columns, rowKey) => (
                                <div className='seats' key={rowKey}>
                                    {
                                        columns.column && columns.column.length > 0 && columns.column.map((column, columnKey) => (
                                            <div className='seat' key={columnKey} onClick={()=>handleClickSetPassanger(selectPassanger,column,true)}>
                                                <input type="radio" class="" name="options-outlined" id={`${rowKey}-${columnKey}`}  />

                                                <label className={column.seatStatus === 'empty' ? 'empty' : ''  } for={`${rowKey}-${columnKey}`}  style={ column.seatStatus !== 'empty' ? {backgroundColor:column?.seat?.color} : {} } >{column?.seat?.seatNo}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>  
                    </div>
                    <div className='col-2 border'>
                        <h6 className='fs-13 text-center mt-3'>Flight Orientation</h6>
                        <div className='text-center mt-2'>
                            <img className='flight-flag' src={flightMapInfo.flightLogo} alt=''/>
                        </div>
                        <hr></hr>
                        <div className=''>
                            <h6 className='text-center'>Seat Status</h6>
                            <span><i class="fa-solid fa-square-check me-1" style={{color:"#4aa301"}}></i> - Selected</span>
                            <p><i class="fa-solid fa-circle-xmark me-1" style={{color:"#a4b4c1"}}></i> - Booked</p>
                            <hr></hr>
                            <h6 className=''>Seat Fees</h6>
                        </div>
                            <div>
                                {
                                    prices && prices.length > 0 && prices.map((priceInfo, priceKey) => (
                                        <p className='mb-1' key={priceKey}>
                                            <span className='seat-color-box me-2' style={priceInfo.color ? {backgroundColor:priceInfo?.color} : {}}></span>
                                            <span><i class="fa-solid fa-indian-rupee-sign me-1 fa-sm"></i>{priceInfo.price}</span>
                                        </p>
                                    ))
                                }
                            </div> 
                        
                    </div>
                </div>
            </Modal.Body>
            </Modal> 
        </>
    )
}