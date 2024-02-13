import React from "react";
import { Link } from "react-router-dom";

import {
  Form,
  Card,
  CardBody,
  Input,
  Row,
  Modal,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  ModalHeader,
  ModalBody,
  Label,
  FormGroup,
  CustomInput,
} from "reactstrap";
import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";

class SubCategoryList extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      CatList: [],
      EditOneUserView: "",
      SubCatList: [],
      allList: [],
      subTableCat: [],
      mainId: "",
      secondData: "",
      isOpen: false,
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
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="green"
                      onClick={() => this.toggleDropdown(params.data)}
                    />
                  )}
                />
              </div>
            );
          },
        },

        // {
        //   headerName: "Category",
        //   field: "category",
        //   filter: true,
        //   resizable: true,
        //   width: 150,
        //   cellRendererFramework: params => {
        //     return (
        //       <div className="d-flex align-items-center cursor-pointer">
        //         <div className="">
        //           <span>{params?.data?.category}</span>
        //         </div>
        //       </div>
        //     );
        //   },
        // },
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  AllCourtList = async () => {
    await axiosConfig
      .get("/court/view-court")
      .then((response) => {
        this.setState({ CatList: response?.data?.Court });
        this.setState({ allList: response?.data?.Court });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.AllCourtList();
  }
  toggleDropdown = (data) => {
    const { subCategoryName, _id } = data;
    this.setState({ EditOneUserView: subCategoryName });
    this.setState({ secondData: _id });
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  changeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  changeHandlerSubCatList = (e) => {
    const selectedValue = e.target.value;
    const selectedName =
      e.target.options[e.target.selectedIndex].getAttribute("data-name");
    const [_id] = selectedValue.split(":");

    const selectedCategory = this.state.allList.find((ele) => ele._id == _id);

    if (selectedCategory && selectedCategory.subCategory) {
      this.setState({ subTableCat: selectedCategory.subCategory });
      this.setState({ rowData: selectedCategory.subCategory });
      this.AllCourtList();
      this.setState({ mainId: _id });
    }
  };

  handleSubCategory = (e) => {
    this.setState({ EditOneUserView: e.target.value });
    this.AllCourtList();
  };

  handleModalSubCate = (e) => {
    e.preventDefault();
    const payload = {
      Court: this.state.mainId,
      subCategoryName: this.state.EditOneUserView,
    };
    axiosConfig
      .put(
        `/court/update-sub-category/${this.state.mainId}/${this.state.secondData}`,
        payload
      )
      .then((response) => {
        this.setState({ rowData: response?.data.court?.subCategory });
        this.setState({ subCategoryName: "" });
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
        this.setState({ rowData: selectedCategory.subCategory });
        swal("Successful!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.subcategory) {
      const payload = {
        court: this.state.category,
        subCategoryName: this.state.subcategory,
      };
      axiosConfig
        .post("/court/save-sub-category", payload)
        .then((response) => {
          swal("Successful!", "You clicked the button!", "success");
          this.setState((prevState) => ({
            subcategory: "",
            category: "",
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal("Please Fill Both Fields");
    }
  };

  LookupviewStart = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
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
          axiosConfig
            .delete(`/court/delete-sub-category/${this.state.mainId}/${id}`)
            .then((response) => {});
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
      <>
        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col className="">
                  <Label>Category *</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Category"
                    name="category"
                    required
                    value={this.state.category}
                    onChange={this.changeHandler}>
                    <option value="none">Select Category</option>
                    {this.state.CatList.map((val) => (
                      <option value={val._id}>{val.name}</option>
                    ))}
                  </CustomInput>
                </Col>
                <Col className="">
                  <Label>Sub Category *</Label>
                  <Input
                    type="text"
                    required
                    value={this.state.subcategory}
                    name="subcategory"
                    placeholder="SubCategory Name"
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col className="mt-1">
                  <Button
                    type="button"
                    onClick={this.handleSubmit}
                    color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <h2>SubCategory List</h2>
                </Col>
                <Col className="">
                  <Label>Category List*</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Category"
                    name="categoryList"
                    required
                    value={this.state.categoryList}
                    onChange={this.changeHandlerSubCatList}>
                    <option value="none">Select Category</option>
                    {this.state.allList.map((val, index) => {
                      return (
                        <option
                          key={val._id}
                          value={val._id}
                          data-name={val.name}>
                          {val.name}
                        </option>
                      );
                    })}
                  </CustomInput>
                </Col>
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
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}>
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}>
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}>
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}>
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
        <Modal isOpen={this.state.isOpen} toggle={this.toggleDropdown}>
          <ModalHeader toggle={this.toggleDropdown}>
            Edit SubCategory
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleModalSubCate}>
              <Row>
                <Col lg="9" md="9" sm="12">
                  <Label>SubCategory</Label>
                  <Input
                    required
                    type="text"
                    name="subCate"
                    value={this.state.EditOneUserView}
                    placeholder="subCategoryName"
                    onChange={this.handleSubCategory}
                  />
                </Col>
                <Col lg="2" md="2" sm="12">
                  <Button className="my-2" type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default SubCategoryList;
