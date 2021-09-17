import React, { useState } from "react";
import Api from "./Api";
import styled from "styled-components";

const App = () => {
  const [userVal, setUserVal] = useState("not selected");
  const [posts, setPosts] = useState(null);
  const [final, setFinal] = useState(null);

  const selectedData = (e) => {
    let val = e.target.value;

    if (val === "all") {
      setUserVal(val);
      setFinal(posts.map((post) => post));
    } else if (val === "two") {
      setUserVal(val);
      setFinal(posts.filter((post) => post.id % 2 === 0));
    } else if (val === "five") {
      setUserVal(val);
      setFinal(posts.filter((post) => post.id % 5 === 0));
    } else {
      setUserVal(val);
      setFinal(null);
    }
  };

  return (
    <Container>
      <Selection onChange={selectedData}>
        <option>select Option</option>
        <option value="all">All </option>
        <option value="two">Two</option>
        <option value="five">Five</option>
      </Selection>
      <UserChoice>The user selected option is : {userVal}</UserChoice>
      <div className="all-id">
        {final ? (
          <div>
            <Heading>The data containing no of id's : {final.length}</Heading>
            {final.map((pos) => (
              <InnerData>
                <Id>
                  <b> Id </b> : {pos.id}
                </Id>
                <Id>
                  <b>user Id</b> : {pos.userId}{" "}
                </Id>
                <p>
                  <Span>Title : </Span>
                  {pos.title}
                </p>
                <p>
                  <Span>Body : </Span>
                  {pos.body}
                </p>
                {/* {pos.id} */}
              </InnerData>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <Api posts={posts} setPosts={setPosts} />
    </Container>
  );
};
const Heading = styled.p`
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
`;
const UserChoice = styled.p`
  font-size: 35px;
  text-transform: capitalize;
  color: crimson;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 20px;
  padding: 30px 10px;
  border: 1px solid #000;
`;
const Selection = styled.select`
  width: 40%;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 3px;
  height: 40px;
`;
const InnerData = styled.div`
  border: 1px solid #000;
  margin: 10px 0;
  padding: 20px 35px;
`;
const Id = styled.p`
  font-size: 15px;
  font-weight: 650;
  text-transform: capitalize;
`;
const Span = styled.span`
  color: darkslategrey;
  font-weight: 700;
  font-size: 20px;
`;
export default App;
