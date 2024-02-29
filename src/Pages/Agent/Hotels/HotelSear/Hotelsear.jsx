import React, { useState, travellersArr } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Hotelsear.css";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
// import internetSecurity from '../assets/images/internet-security.png'
export default function Hotelsear() {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [travellersModelShow, setTravellersModelShow] = useState(false);
  const onChangeTravellersShow = () => {
    if (travellersModelShow) {
      setTravellersModelShow(false);
    } else {
      setTravellersModelShow(true);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="main-content p-0">
        <div className="container-fluid hotel-banner flex-column">
          <h4 className="text-center text-white">
            Book Hotels and explore the world with us.
          </h4>
          <div className="container hotel-box">
            <form action="">
              <div className="row">
                <div className="col-lg-2 col-md-3">
                  <div className="form-group field-label">
                    <InputLabel className="">Enter City name</InputLabel>
                    <input className="form-control p-3" type="text" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-3">
                  <div className="form-group field-label">
                    <InputLabel className="">Check-in</InputLabel>
                    <input className="form-control p-3" type="date" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-3">
                  <div className="form-group field-label">
                    <InputLabel className="">Check-out</InputLabel>
                    <input className="form-control p-3" type="date" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-3">
                  <div className="form-group field-label">
                    <InputLabel className="">Rooms & Guests</InputLabel>
                    <input
                      className="form-control p-3"
                      type="text"
                    />
                    
                  </div>
                </div>

                <div className="col-lg-2 col-md-3">
                  <div className="form-group field-label">
                    <InputLabel className="">Hotel Category</InputLabel>
                    <input className="form-control p-3" type="text" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-3">
                  <button className="hotel-searbtn">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white p-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <p className="mt-1">Home - Delhi,NCR, India Hotels (217)</p>
                </div>
            </div>
          </div>
        </div>
        <div className="container hotel-list mt-5">
          <form action="">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="card ">
                  <div className="border-top p-3 mt-3 hotelinput">
                    <p className="fw-bold"> Enter Hotel Name, Location</p>
                    <input type="text" placeholder="Enter Keyword"  class="form-control"/>
                  </div>

                  <div className="border-top p-3 mt-1">
                    <label htmlFor="" className="fw-bold d-flex">
                      Price Range
                    </label>
                    <div className="mt-2">
                    <input type="text" placeholder="" value="19908 - 266621"  class="form-control w-50"/>
                    </div>
                    <Box sx={{ width: 250 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        className="priceranngebox mt-2"
                      />
                    </Box>
                  </div>
                  <div className="border-top p-3 mt-2">
                    <label htmlFor="" className="fw-bold d-flex">
                      Star Rating
                    </label>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        2 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        3 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        4 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2 "
                        for="flexCheckChecked"
                      >
                        5 Star
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="cardhoteimg">
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <h5 className="hheading ">Radition Blue</h5>
                      <span className="gap-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <div className="d-flex">
                        <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger ">
                            View Room
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
