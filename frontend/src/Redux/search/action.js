import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  RENTAL_DETAILS_ERROR,
  RENTAL_DETAILS_REQUEST,
  RENTAL_DETAILS_SUCCESS,
  SET_DURATION
} from "./actionType";
import axios from "axios";

const url = `${process.env.REACT_APP_BACKEND_URL}`;

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(`${url}/bike`)
    .then((res) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((e) => dispatch({ type: GET_DATA_FAILURE }));
};

//put request to change pickup and drop off time

export const rentalDateAndTimeFunction = (payload) => (dispatch) => {
  console.log("Inside Rental Data",payload);
  dispatch({ type: RENTAL_DETAILS_REQUEST });
  dispatch({
    type: RENTAL_DETAILS_SUCCESS,
    payload,
  });
};

//<<<<<<<<<<<<<<<<<<<<<<<<< duration function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const findingDfferenceFunction = (payload) => (dispatch) => {
  let pickDate = payload.pickupDate;
  let dropDate = payload.dropoffDate;
  let pickTime = payload.pickupTime;
  let dropTime = payload.dropoffTime;

  var pickDatetime = new Date(pickDate + " " + pickTime);
  var dropDatetime = new Date(dropDate + " " + dropTime);

  var time_difference_ms = dropDatetime.getTime() - pickDatetime.getTime();

  var days = Math.floor(time_difference_ms / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (time_difference_ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (time_difference_ms % (1000 * 60 * 60)) / (1000 * 60)
  );

  let durationDetails = {
    days,
    hours,
    minutes
  }
  console.log("inside finding difference",durationDetails)
  dispatch({type:SET_DURATION,payload:durationDetails})
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Filter by Bike model >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// export const filterbyBikeModel = (payload)=>(dispatch)=>{
//   axios.get(`${url}?${payload}`)
//   .then((res)=>console.log(res.data))
//   .catch((e)=>console.log(e))
// }