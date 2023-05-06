import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Checkout from "../Components/Checkout";
import Summary from "../Components/Summary";

function Check() {
  const [total, setTotal] = useState();

  const [state, setState] = useState([]);

  const checkData = useSelector((store) => {
    return store.searchReducer.paramsObject;
  });
  
console.log("checking state",state)
  const rentalData = useSelector((store) => {
    return store.searchReducer.rentalDetails;
  });
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/bike/${checkData.id}`)
      .then((res) => setState(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [checkData]);
  return (
    <div className="App">
      <Container>
        <Flex bg={"#fed250"}></Flex>
        <Summary
          {...state[0]}
          location={checkData.location}
          total={total}
          setTotal={setTotal}
          rentalData={rentalData}
        />
        <Checkout total={total} />
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default Check;
