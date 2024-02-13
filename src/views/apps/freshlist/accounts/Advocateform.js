import React from "react";
import { Link } from "react-router-dom";

import { Label, CustomInput, Col } from "reactstrap";
import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";

class Advocateform extends React.Component {
  static contextType = UserContext;

  state = {
    Court: [],
    list: [],
    selectedCategory: "",
    finalCategory: "",
    selectedSubCategory: "",
    subCategories: [],
    CourtName: "",
    name: [],
  };
  async componentDidMount() {
    await axiosConfig
      .get("/court/view-court")
      .then((response) => {
        console.log(response.data?.Court);
        this.setState({ list: response.data?.Court });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCourt = () => {
    if (this.state.CourtName.length > 0) {
      const payload = {
        name: this.state.CourtName,
      };
      axiosConfig
        .post("/court/save-court", payload)
        .then((response) => {
          console.log(response);
          swal("Successful!", "Court Add Successfully", "success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  changeHandler = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleCategory = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    const selectedName =
      e.target.options[e.target.selectedIndex].getAttribute("data-name");
    const [_id, name] = selectedValue.split(":");
    this.setState({ selectedCategory: name });
    this.setState({ finalCategory: selectedName });
    const selectedCategory = this.state.list.find((ele) => ele._id == _id);

    if (selectedCategory && selectedCategory.subCategory) {
      this.setState({ subCategories: selectedCategory.subCategory });
      this.setState({ selectedSubCategory: "" });
    } else {
      this.setState({ subCategories: [] });
      this.setState({ selectedSubCategory: "" });
    }
  };
  handleSubCategoryChange = (e) => {
    this.setState({ selectedSubCategory: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      mobileNo: this.state.phoneNo,
      email: this.state.email,
      services: this.state.services,
      enrollmentYear: this.state.enrollment,
      city: this.state.city,
      category: this.state.finalCategory,
      subCategoryName: this.state.selectedSubCategory,
    };

    axiosConfig
      .post("/advocate/save-advocate", payload)
      .then((response) => {
        console.log(response);
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/CaseFinder/account/AdvocateList");
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", "You did not submit form", "error");
      });
  };
  render() {
    return (
      <>
        <div>
          <div className="row">
            <div className="col-sm-10 col-md-10 col-xl-10 col-lg-10">
              <h1 className="mb-3">Advocate</h1>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Link to="/app/CaseFinder/account/AdvocateList">
                <button type="button" className="btn btn-danger ml-1">
                  Back
                </button>
              </Link>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="mb-1">
                  <label for="exampleInputEmail1" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="mb-1">
                  <label className="form-label">Phone No. *</label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    placeholder="Phone No."
                    name="phoneNo"
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="mb-1">
                  <label className="form-label">Email Id *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email Id"
                    onChange={this.changeHandler}
                    name="email"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-xl-6 col-lg-6">
                <label className="form-label">Services *</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Services"
                  name="services"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="mb-1">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xl-6 col-lg-6">
                  <label className="form-label">Enrollment Year *</label>
                  <input
                    type="number"
                    className="form-control "
                    required
                    placeholder="Enrollment Year"
                    id="exampleInputEmail1"
                    name="enrollment"
                    onChange={this.changeHandler}
                  />
                </div>

                <div className="col-sm-6 col-md-6 col-xl-6 col-lg-6">
                  <label className="form-label">City*</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="City"
                    name="city"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-sm-6 col-md-6 col-xl-6 col-lg-6  mt-1">
                  <Label>Category *</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Category"
                    required
                    name="category"
                    value={this.state.selectedCategory}
                    onChange={this.handleCategoryChange}>
                    <option value="">Select Category</option>
                    {this.state.list?.map((ele) => (
                      <option
                        key={ele._id}
                        value={ele._id}
                        data-name={ele.name}>
                        {ele.name}
                      </option>
                    ))}
                  </CustomInput>
                </div>
                <div className="col-sm-6 col-md-6 col-xl-6 col-lg-6 mt-1">
                  <Label>SubCategory *</Label>
                  <CustomInput
                    type="select"
                    required
                    placeholder="Select Category"
                    name="category"
                    value={this.state.selectedSubCategory}
                    onChange={this.handleSubCategoryChange}>
                    <option value="">Select SubCategoryName</option>
                    {this.state.subCategories?.map((ele) => (
                      <option key={ele._id} value={ele.subCategoryName}>
                        {ele.subCategoryName}
                      </option>
                    ))}
                  </CustomInput>
                </div>
              </div>
            </div>

            <div className=" mt-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Advocateform;
