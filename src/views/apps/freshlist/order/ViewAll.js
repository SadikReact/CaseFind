import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function AddRoleNew() {
  const [email, setEmail] = useState("");
  const [SelectedFile, setSelectedFile] = useState({});
    const history = useHistory();

  useEffect(() => {
    console.log(history?.location?.data?.email)
    setEmail(history?.location?.data?.email)
  //  setSelectedFile(history?.location?.data?.pdfName)
  }, []);

 
  return (
  <>
  <Row className="">
  <Col xl={12}>
    <Card>
      <Row>
        <Col className="m-1">
          <h3 className="py-2">User Detail  </h3>
        </Col>
        <Col className="m-1">
          <Button
            className=" btn btn-danger float-right "
            onClick={() =>
              history.push("/app/CaseFinder/user/userlist")
            }
          >
            Back
          </Button>
        </Col>
      </Row>
      <div className="container" />
      <Form >
        <div className="container mt-2">
          <Row className="mb-3 container">
            
            <Col lg="6" md="6" sm="12">
              <Label>Email</Label>
              <Input
              type="email"
              disabled
              name="email"
              value={email}
                // onChange={(e) => handleFile(e)}
                className="form-control"
              />
            </Col>
          </Row>
        </div>
      
       </Form>
    </Card>
  </Col>
</Row>
  </>
  );
}
