import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import {
  FcNews,
  FcSalesPerformance,
  FcRules,
  FcCancel,
  FcShop,
  FcOk,
  FcShipped,
  FcBusinessman,
  FcFinePrint
} from "react-icons/fc";
import { FaUsers } from "react-icons/fa";

import { FaFileAlt  } from "react-icons/fa";
import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

import MainDash from "./MainDash";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      allUsers:null,
      allAdvocate:null,
      AllPDF:null,
      Viewpermisson: null,
      Editpermisson: null,
      Createpermisson: null,
      Deletepermisson: null,
      customer: {},
      store: {},
      seller: {},
      order: {},
      banner: {},
      brand: {},
      total_sub: {},
      Coupon: {},
    };
  }

  componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // console.log(pageparmission.role);
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Dashboard"
    );
 
    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
   
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    axiosConfig
      .post("/dashboard", data)
      .then((response) => {
      
        const Product = [];
        for (const [key, value] of Object.entries(
          response?.data?.data?.Dashboard
        )) {
          Product.push(`${key}: ${value}`);
          // console.log(`${key}: ${value}`);
        }
        let uniqueChars = [...new Set(Product)];

        console.log(uniqueChars);

        this.setState({ product: uniqueChars });
      })
      .catch((error) => {
        console.log(error);
      });


    
      axiosConfig.get("/user/view-user")
        .then((response) => {
          // console.log("AllUser",response.data.AllUser)
          this.setState({allUsers:response.data.AllUser})
        })
        .catch((error) => {
          console.log(error);
        });
       axiosConfig
        .get("/advocate/view-advocate")
        .then((response) => {
          // allAdvocate
          this.setState({allAdvocate:response?.data?.Advocate.length})
          console.log("All Advocate",response?.data?.Advocate.length);
         
        })
        .catch((error) => {
          console.log(error);
        });
         axiosConfig
        .get("/pdf/view-pdf")
        .then((response) => {
          console.log("All PDF",response?.data?.PDF.length)
          this.setState({AllPDF:response?.data?.PDF.length})
        })
        .catch((error) => {
          console.log(error);
        });

    // axios
    //   .get("http://3.6.37.16:8000/admin/product_list")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ customer: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios
    //   .get("http://35.154.86.59/api/user/totalcustomer")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ customer: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/totalstore")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ store: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/totalsale")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ sale: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/totalorder")
    //   .then((response) => {
    //     console.log(response.data);
    //     console.log(response.data.data);
    //     this.setState({ order: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/totalbrand")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ brand: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/totalbanner")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ banner: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/gettotalcoupon")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ Coupon: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axiosConfig
    //   .get("/total_sub")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ total_sub: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  render() {
    // console.log(this.state.product);
    return (
      <React.Fragment>
        
        
      
       
      <div style={{ backgroundColor: 'white' }}>
          
          <Row> 
         <Col lg="4"  >
         
              <Card className="bg-secondary h-100" body inverse style={{background: "linear-gradient(to right,rgb(114, 189, 212), rgb(9, 93, 119)" , border:'none'}}>
              <Row>
              <Col lg='8'>
              <CardTitle className="mt-2 " style={{ color: "black" }}>
                 <h3 className="font-weight-bold white">PDF List</h3>
                </CardTitle>
                <CardText tag="h3" style={{ color: "black" }}>
                <h3 className="font-weight-bold white">{this.state.AllPDF}</h3>
              </CardText> 
              </Col>
              <Col lg='4'>
              
              <div className="mt-2">
                   <FcFinePrint className="h-100 w-100"/>
                   </div>
                   </Col>
              </Row>
              
                
              
        </Card> 
         </Col>  
         <Col lg="4"  >
         
              <Card className="bg-secondary h-100" body inverse  style={{background: "linear-gradient(to right, #98b9fe , rgb(93, 84, 170))", border:'none'}}>
              <Row>
              <Col lg='8'>
              <CardTitle className="mt-2 " style={{ color: "black" }}>
                 <h3 className="font-weight-bold white">Advocate List</h3>
                </CardTitle>
                <CardText tag="h3" style={{ color: "black" }}>
                <h3 className="font-weight-bold white">{this.state.allAdvocate}</h3>
              </CardText> 
              </Col>
              <Col lg='4'>
              
              <div className="mt-2">
                   <FaUsers className="h-100 w-100"/>
                   </div>
                   </Col>
              </Row>
              
                
              
        </Card> 
         </Col> 
         <Col lg="4"  >
         
              <Card className="bg-secondary h-100" body inverse style={{background: "linear-gradient(to right,  #edbfa5 ,rgb(168, 118, 77))", border:'none'}}>
              <Row>
              <Col lg='8'>
              <CardTitle className="mt-2 " style={{ color: "black" }}>
                 <h3 className="font-weight-bold white">User List</h3>
                </CardTitle>
                <CardText tag="h3" style={{ color: "black" }}>
                <h3 className="font-weight-bold white">{this.state.allUsers} </h3>
              </CardText> 
              </Col>
              <Col lg='4'>
              
              <div className="mt-2">
                   <LuUsers className="h-100 w-100"/>
                   </div>
                   </Col>
              </Row>
              
                
              
        </Card> 
         </Col>   
       
         
        </Row>
        </div>
        
      </React.Fragment>
    );
  }
}
export default AnalyticsDashboard;
