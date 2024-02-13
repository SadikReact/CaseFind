import React from "react";
import { Link } from "react-router-dom";

import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";

class Pdfform extends React.Component {
  static contextType = UserContext;

  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
      },
      {
        headerName: "Role Name",
        field: "Name",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* {this.state.Viewpermisson && (
                <BsEye
                  className="mr-50"
                  size="25px"
                  color="green"
                  onClick={() =>
                    history.push(
                      `/app/freshlist/account/updateexistingrole/${params.data.id}`
                    )
                  }
                />
              )} */}

              {this.state.Editpermisson && (
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push({
                          pathname: `/    app/CaseFinder/pdflist/editpdf/${params?.data}`,
                          data: params,
                        })
                      }
                    />
                  )}
                />
              )}
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Role List"
    );

    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
    this.setState({
      Createpermisson: newparmisson?.permission.includes("Create"),
    });
    this.setState({
      Editpermisson: newparmisson?.permission.includes("Edit"),
    });
    this.setState({
      Deletepermisson: newparmisson?.permission.includes("Delete"),
    });

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getrolelist", formdata)
      .then((response) => {
        const propertyNames = Object.values(response.data?.data);
        this.setState({ rowData: propertyNames });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("pdfName", this.state.PDFName);
    if (this.state.selectedFile !== null) {
      data.append("pdf", this.state.selectedFile);
    }

    axiosConfig
      .post("/pdf/upload-pdf", data)
      .then((response) => {
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/CaseFinder/account/PDFList");
      })
      .catch((error) => {
        swal("Error", "Something Went Wrong", "error");
      });
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <>
        <div>
          <div className="row">
            <div className="col-sm-10 col-md-10 col-xl-10 col-lg-10">
              <h1 className="mb-5">Add PDF</h1>
            </div>
            <div className="col-sm-2 col-md-2 col-xl-2 col-lg-2 ">
              <Link to="/app/CaseFinder/account/PDFList">
                <button type="button" className="btn  btn-danger  ">
                  Back
                </button>
              </Link>
            </div>
          </div>

          <form onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div class="mb-3">
                  <label className="form-label ">PDF Name</label>
                  <input
                    required
                    type="text"
                    className="form-control w-75"
                    name="PDFName"
                    placeholder="Pdf Name"
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div className="mb-3">
                  <label className="form-label">PDF Upload</label>
                  <input
                    type="file"
                    required
                    className="form-control w-75"
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <div className="mb-3 ">
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Pdfform;
