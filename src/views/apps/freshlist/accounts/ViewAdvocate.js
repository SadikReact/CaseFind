import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function ViewAdvocate() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [services, setservices] = useState("");
  const [phone, setphone] = useState("");
  const [category, setcategory] = useState("");
  const [SubCategory, setSubCategory] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [city, setCity] = useState("");
  const history = useHistory();

  useEffect(() => {
    setEmail(history?.location?.data?.email);
    setName(history?.location?.data?.name);
    setservices(history?.location?.data?.services);
    setphone(history?.location?.data?.mobileNo);
    setcategory(history?.location?.data?.category);
    setSubCategory(history?.location?.data?.subCategoryName);
    setEnrollment(history?.location?.data?.enrollmentYear);
    setCity(history?.location?.data?.city);
  }, []);

  return (
    <>
      <Row className="">
        <Col xl={12}>
          <Card>
            <Row>
              <Col className="m-1">
                <h3 className="py-2">Advocate Detail </h3>
              </Col>
              <Col className="m-1">
                <Button
                  className=" btn btn-danger float-right "
                  onClick={() =>
                    history.push("/app/CaseFinder/account/AdvocateList")
                  }>
                  Back
                </Button>
              </Col>
            </Row>
            <div className="container" />
            <Form>
              <div className="container mt-2">
                <Row className="mb-3 container">
                  <Col lg="6" md="6" sm="12">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      disabled
                      name="name"
                      value={name}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>Phone No</Label>
                    <Input
                      type="number"
                      disabled
                      name="phone"
                      value={phone}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>Services</Label>
                    <Input
                      type="text"
                      disabled
                      name="services"
                      value={services}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      disabled
                      name="Email"
                      value={Email}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>City</Label>
                    <Input
                      type="text"
                      disabled
                      name="city"
                      value={city}
                      className="form-control"
                    />
                  </Col>

                  <Col lg="6" md="6" sm="12">
                    <Label>Enrollment</Label>
                    <Input
                      type="number"
                      disabled
                      name="enrollment"
                      value={enrollment}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>Category</Label>
                    <Input
                      type="text"
                      disabled
                      name="category"
                      value={category}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="6" md="6" sm="12">
                    <Label>SubCategory</Label>
                    <Input
                      type="text"
                      disabled
                      name="SubCategory"
                      value={SubCategory}
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
