import React from "react";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  LOCATION_TAG_ADD,
  LOCATION_TAG_REMOVE,
  BIKE_TAG_ADD,
  BIKE_TAG_REMOVE,
  LOCATION_FILTER_DATA,
  RENTAL_DETAILS_ERROR,
  RENTAL_DETAILS_REQUEST,
  RENTAL_DETAILS_SUCCESS,
  SET_DURATION,
  FILTER_DATA,
  CHECKOUT_OBJECT,
} from "./actionType";

let initialData = {
  cityData: [],
  locationData: [
    "Indiranagar (Near metro station)",
    "Yeshwanthpur (BMTC Bus Station)",
    " Koramangala (Near Oneplus Service Centre)",
    "Hennur Lake (Next to Axis Bank)",
    "Whitefield - Tansi Honda (Hoodi Circle)",
    "Bellandur (Adarsh Palm Retreat)",
    "HSR(NIFT College) (NIFT College)",
    "Majestic (Opp to POTHYS)",
    "BTM Layout (Below Ambur Star Briyani)",
    "Bangalore RBx Hub",
    "Marathalli Bridge",
    "Electronic City",
  ],
  bikeModels: [
    "Activa 4G",
    "Hero Pleasure Plus",
    "Honda Dio",
    "Yamaha Ray ZR",
    "Bajaj Pulsar 150",
    "Yamaha MT-15",
    "TVS Jupiter 125",
    "Royal Enfield Classic",
    "Honda CB 350 RS",
    "Aprilia SR 160",
    "TVS N-Torq",
    "Yamaha R15 BS6",
    "Royal Enfield Meteor",
    "Gixxer 150 SF",
    "TVS APACHE RTR",
    "Honda Hornet 2.0",
    "Avenger Cruise",
    "Royal Enfield Interceptor",
    "Bajaj Pulsar 250F",
  ],
  isLoading: false,
  isError: false,
  locationTags: [],
  bikeTags: [],
  rentalDetails: {},
  duration: {},
  filterData: [],
  paramsObject: {},
};

export default function searchReducer(state = initialData, { type, payload }) {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cityData: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOCATION_TAG_ADD:
      return {
        ...state,
        locationTags: [...state.locationTags, payload],
      };
    case LOCATION_TAG_REMOVE:
      return {
        ...state,
        locationTags: state.locationTags.filter((ele) => ele !== payload),
      };
    case BIKE_TAG_ADD:
      return {
        ...state,
        bikeTags: [...state.bikeTags, payload],
      };
    case BIKE_TAG_REMOVE:
      return {
        ...state,
        bikeTags: state.bikeTags.filter((ele) => ele !== payload),
      };
    case LOCATION_FILTER_DATA:
      return {
        ...state,
        cityData: payload,
      };
    case RENTAL_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RENTAL_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rentalDetails: payload,
      };
    case RENTAL_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: payload,
      };
    case FILTER_DATA:
      return {
        ...state,
        filterData: payload,
      };
    case CHECKOUT_OBJECT:
      return {
        ...state,
        paramsObject: payload,
      };
    default:
      return state;
  }
}
