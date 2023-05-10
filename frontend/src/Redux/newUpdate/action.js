import axios from "axios";
import { HIGHT_TO_LOW, LOW_TO_HIGH } from "./actionType";
// const url = `${process.env.REACT_APP_BACKEND_URL}/bike`;

export const sortFunction = (payload) => (dispatch) => {
  
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/bike/${payload}`)
    .then((res) => {
      console.log("checking for sorting method",res.data.data)
      dispatch({ type: LOW_TO_HIGH, payload: res.data.data });
    })
    .catch((e) => console.log(e));
};

export const sortHighFunction = (payload) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/bike/${payload}`)
    .then((res) => dispatch({ type: HIGHT_TO_LOW, payload: res.data.data }))
    .catch((e) => console.log(e));
};

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Bike Search Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const bikeFilterFunction = (bikeFilter, dataArrayCity) => (dispatch) => {
  const result = dataArrayCity.filter((ele) => {
    return bikeFilter.includes(ele);
  });
};

//<<<<<<<<<<<<<<<<<<<< Sort Low to high >>>>>>>>>>>>>>>>>>>>>>>>>>
export function sortLowToHigh(a, b) {
  return a.price - b.price;
}

export function sortHighToLow(a, b) {
  return b.price - a.price;
}
