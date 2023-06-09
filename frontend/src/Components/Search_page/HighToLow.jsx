import React, { useEffect } from "react";
import { Grid, Stack, Text } from "@chakra-ui/react";
import CardComp from "./CardComp";
import { useSelector } from "react-redux";
import SkeletonComp from "./SkeletonComp";
import { useDispatch } from "react-redux";
import { sortHighFunction } from "../../Redux/newUpdate/action";

export default function HighToLow() {
  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  let highArray = useSelector((store) => store.searchReducer.cityData);
  const loading = useSelector((store) => store.searchReducer.isLoading);
  const duration = useSelector((store) => store.searchReducer.rentalDetails);
  const highFilterData = useSelector((store)=>store.sortNfilterReducer.sortedHighToLow)
  console.log("checking filtered high to low bikes",highFilterData)

  highArray = highArray.sort((a,b)=> b.price-a.price)

  useEffect(() => {
    dispatch(sortHighFunction("desc"));
  }, [dispatch]);

  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes Ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>s

  return (
    <Stack>
      {/* New Updates */}

      <Text textAlign={"center"} mb="1rem" fontFamily={"Mulish"}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={6}
      >
        {loading && <SkeletonComp />}
        {highFilterData.length>0 ? highFilterData.map((ele)=>{
          return <CardComp {...ele} key={ele.id} {...duration} />;
        }) : highArray.map((ele, idx) => {
          return <CardComp {...ele} key={ele.id} {...duration} />;
        })}
      </Grid>
    </Stack>
  );
}
