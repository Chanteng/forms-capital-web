import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Cooperate() {
  return (
    <Container>
      <div id="cooperate">
        <h1>COOPERATE BACKGROUND</h1>
        <p>
          Forms Capital Limited (FCL) is a specialist financial services company
          incorporated under the Companies Code 1963 (Act 179) and licensed by
          the Bank of Ghana to carry out the business of a finance house under
          the Non-Bank Financial Institution (NBFI) Act, 2008 and in accordance
          with the Banking Act 2004 (Act 673). <br /> <br /> FCL was formed
          following the acquisition of the defunct First National Leasing
          Company in 2009 and commenced operations as a finance house in April
          2012. FCL specializes in providing tailored financing solutions to
          businesses (SMEs and corporates), institutions and individuals. Our
          operational strategy focuses on delivering creative value-adding
          financial solutions to our clients with convenience, speed and
          responsiveness as our hall mark.
        </p>
      </div>

      <div id="operations">
        <Container>
          <Row>
            <Col md="6">
              <h1>Scope of Operations</h1>
              <hr />
              <p>
                FCL is permitted to operate as a non-deposit taking Finance
                House. Our operations cover the following service areas:
                <ul>
                  <li>
                    {" "}
                    <b>LENDING</b> - Loans and Advances to the general public.
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <b>LEASING</b> - Finance and Operating Lease.
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <b>INVESTMENTS</b> - Providing avenues for the general
                    public to place funds to earn a return.{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <b>CORPORATE FINANCE</b> - Fund Raising and Advisory
                    services{" "}
                  </li>
                </ul>
              </p>
            </Col>
            <Col md="6">
              <h1>Our Vision</h1>
              <hr />
              <p>
                <img
                  src="./images/amma.jpg"
                  alt="..."
                  style={{ width: "30%", height: "15vh" }}
                />
                To become a world class financial solutions provider of choice
                in our chosen market. This for us means becoming the go-to
                finance house and attaining a minimum of top five status in all
                aspects of financial services busines in Ghana - service
                delivery, corporate citizenship, governance and financial
                soundness.
              </p>
            </Col>
            <br /> 


            
            <Col md="6">
              <p style={{marginTop: "10rem"}}>
                Given the competitive environment and the anticipated regulatory
                changes, FCL has been positioned as a well-regulated Bank
                undertaking the business of a Finance House. This implies having
                a strong capital base and complying with all Bank of Ghana
                regulations while at the same time investing in processes and
                systems that allow it to be responsive and quickest in meeting
                the needs of customers in its chosen market space.
              </p>
            </Col>
            <Col md="6">
              <h1>Our Mission</h1>
              <hr />
              <p>
                <img
                  src="./images/amma.jpg"
                  alt="..."
                  style={{ width: "30%", height: "15vh" }}
                />
                To become a world class financial solutions provider of choice
                in our chosen market. This for us means becoming the go-to
                finance house and attaining a minimum of top five status in all
                aspects of financial services busines in Ghana - service
                delivery, corporate citizenship, governance and financial
                soundness.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Cooperate;
