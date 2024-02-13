import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";

import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import swal from "sweetalert";


export class EditProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: "",
      fullname: "",
      GSTIN: "",
      B_City: "",
      checkbox: "",
      selectedStatelist: [],
      SelectedState: "",
      StateList: [],
      SelectedSupplierCity: [],
      SelectedSCity: [],
      CityList: [],
      CityList1: [],

      S_City: "",
      Mobile_no: "",
      B_Country: "",
      S_Country: "",
      Phone_no: "",
      Place_of_Supply: "",
      B_State: "",
      S_State: "",
      B_Street: "",
      S_Street: "",
      B_PinCode: "",
      S_PinCode: "",
      setuserList: false,
      password: "",
      email: "",
      status: "",
      AssignRole: "",
      CompanyName: "",
      Companytype: "",
      Selectuser: "",
      UserName: "",
      UserId: "",
      City: "",
      Role: "",
      viewData: [],
      selectedcities: [],
      rolesList: [],
    };
  }
 
 

  

 
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
  const payload ={
    status:this.state.status
  }

  axiosConfig
      .post(`/user/update-status${this.props.match.params.id}`, payload)
      .then((response) => {
        console.log(response.data);
      
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push(
        //   "/app/freshlist/attribute/productAttributeList"
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  };





  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit User Status
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/CaseFinder/house/userlist")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>

          <Card>
            

            <CardBody>
              <Form className="m-1" onSubmit={this.submitHandler}>
               <Row>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label className="mb-1 py-2">
                      <h4>Status</h4>
                    </Label>
                    <div
                      className="form-label-group"
                      onChange={this.changeHandler1}
                    >
                      <input
                        checked={this.state.status === "Active" ? true : false}
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        checked={
                          this.state.status === "Deactive" ? true : false
                        }
                        name="status"
                        value="Deactive"
                      />
                      <span style={{ marginRight: "3px" }}>Deactive</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mt-2 mx-2"
                  >
                    Submit
                  </Button.Ripple>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Card>
      </div>
    );
  }
}
export default EditProductType;
