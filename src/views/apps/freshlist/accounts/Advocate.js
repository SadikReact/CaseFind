import React from "react";
import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
  Input,
  Label,
  Row,
  CustomInput,
  Col,
  Form,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";

class Advocate extends React.Component {
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
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 70,
        filter: true,
      },

      {
        headerName: "Actions",
        field: "transactions",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <BsTrash
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              />
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push({
                        pathname: `/app/CaseFinder/account/AdvocateListView/${params.data._id}`,
                        data: params.data

                      })}
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push({
                        pathname: `/app/CaseFinder/advocate/EditAdvocate/${params.data._id}`,
                        data: params.data

                      })}
                  />
                )}
              />
            </div>
          );
        },
      },
      {
        headerName: "Name",
        field: "Name",
        filter: true,
        resizable: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Phone No.",
        field: "phoneNo",
        filter: true,
        resizable: true,
        width: 130,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.mobileNo}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Services",
        field: "services",
        filter: true,
        resizable: true,
        width: 130,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.services}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Email Id.",
        field: "email",
        filter: true,
        resizable: true,
        width: 170,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.email}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "City.",
        field: "Name",
        filter: true,
        resizable: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.city}</span>
              </div>
            </div>
          );
        },
      },


      {
        headerName: "Enrollment",
        field: "Name",
        filter: true,
        resizable: true,
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.enrollmentYear}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Category",
        field: "category",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.category}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "SubCategory",
        field: "Subcategory",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.subCategoryName}</span>
              </div>
            </div>
          );
        },
      },


    ],
  };
  async componentDidMount() {
    await axiosConfig
      .get("/advocate/view-advocate")
      .then((response) => {
        this.setState({ rowData: response?.data?.Advocate });
      })
      .catch((error) => {
        console.log(error);
      });

  };



  runthisfunction(id) {
    let selectedData = this.gridApi.getSelectedRows();
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          this.gridApi.updateRowData({ remove: selectedData });
          axiosConfig.delete(`/advocate/delete-advocate/${id}`).then((response) => { });
          break;
        default:
      }
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


  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 className="float-left">Advocate List</h1>

              </Col>
              <div className="text-end ">

                <Link to="/app/CaseFinder/account/AdvocateListform"><button type="button" className="btn btn-primary">Add Advocate</button></Link>
              </div>



            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                            0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    {/* <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Hub Name"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Order Id"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Phone Number"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Enter Email"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div> */}
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Advocate;
