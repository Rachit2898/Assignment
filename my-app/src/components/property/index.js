import React from "react";
import PropertyList from "../userlist/index";
import UniqueID from "react-html-id";
import { makeStyles } from "@material-ui/styles";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  ButtonGroup,
  Modal,
} from "react-bootstrap";

class Property extends React.Component {

  constructor(props) {
    super(props);
    UniqueID.enableUniqueIds(this);
    this.state = {
      id: this.nextUniqueId(),
      Name: "",
      Property: "",
      Size: "",

      Description: "",
      modalShow: false,
      showPropId: 0,
      data: [
        {
          id: this.nextUniqueId(),
          Name: "Rachit",
          Property: "Flat",
          Size: "4bhk",

          Description: "Good Flat",
        },
        {
          id: this.nextUniqueId(),
          Name: "Archit",
          Property: "Plot",
          Size: "4x7",

          Description: "Bad Plot",
        },
      ],
    };
    this.initialstate = {
      id: this.nextUniqueId(),
      Name: "",
      Property: "",
      Size: "",

      Description: "",
    };
    
    this.HandleEvents = this.HandleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleProperty = this.deleProperty.bind(this);
    this.setModalShow = this.setModalShow.bind(this);
    this.setModalHide = this.setModalHide.bind(this);
  }
  setModalShow(id) {
    this.setState({
      modalShow: true,
      showPropId: id,
      
    });
  }
  
  setModalHide() {
    this.setState({
      modalShow: false,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const dataList = {
      id: this.nextUniqueId(),
      Name: this.state.Name,
      Property: this.state.Property,
      Size: this.state.Size,

      Description: this.state.Description,
    };
    this.setState({
      data: [...this.state.data, dataList],
    });
  }

  HandleEvents(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }
  deleProperty(index, e) {
    const emp = Object.assign([], this.state.data);
    emp.splice(index, 1);
    this.setState({
      data: emp,
    });
  }
  
    
  render() {
    console.log(this.state.showPropId);
    const { showPropId } = this.state;
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        height: "800px",
        width: "800px",
        margin:"auto"
      };
      const form ={
        height: "300px",
        width: "600px",
        margin:"100px 0 auto 100px"
      };
      const table ={
        
        width: "600px",
        margin:"100px 0 auto 100px"
      };
      const heading ={
        
        width: "600px",
       
        margin:"auto",
        marginTop:"100px",
        fontSize:"50px",
        paddingLeft:"80px"
      };
      const input ={
        paddingLeft:"10px", width: "300px",height:"20px",fontSize:"20px", marginLeft:"100px",borderRadius:"10px"

      }

    

    return (
      <div className="App" style={{ marginTop: "40px", marginBottom: "40px" }}>
        {this.state.data.length ? (
          <Modal
            show={this.state.modalShow}
            onHide={this.setModalHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.state.data[showPropId].Name +
                  " " +
                  this.state.data[showPropId].Property}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={table}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th  >Name</th>
                    <th >Property</th>
                    <th >Size</th>

                    <th >Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >{this.state.data[showPropId].Name}</td>
                    <td >{this.state.data[showPropId].Property}</td>
                    <td >{this.state.data[showPropId].Size}</td>

                    <td >{this.state.data[showPropId].Description}</td>
                  </tr>
                </tbody>
              </Table>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
        <Container style={mystyle} >
          <Row>
            <Col lg={{ span: "8", offset: "2" }}>
              <PropertyList
                propertyData={this.state.data}
                deleProperty={this.deleProperty}
                viewProperty={this.setModalShow}
              />
            </Col>
            <Col style={{width: "400px",height: "600px"}} lg={{ span: "8", offset: "2" }}>
              <h3 style={heading}>Add Property</h3>
              <br />
              <Form style={form} onSubmit={this.handleSubmit}>
                <Form.Group style={{width: "100px", marginTop:"10px"}}>
                  <Form.Label style={{marginLeft:"100px"}}>Name</Form.Label>
                  <Form.Control style={input}
                    value={this.state.Name}
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label style={{marginLeft:"100px"}}>Property</Form.Label>
                  <Form.Control style={input}
                    type="text"
                    placeholder="Property Type"
                    name="Property"
                    value={this.state.Property}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label style={{marginLeft:"100px"}}>Size</Form.Label>
                  <Form.Control style={input}
                    value={this.state.Size}
                    type="text"
                    name="Size"
                    placeholder="size"
                    onChange={this.HandleEvents}
                  />
                </Form.Group>

                <Form.Group style={{width: "100px", marginTop:"10px"}} >
                  <Form.Label style={{marginLeft:"100px"}}>Description</Form.Label>
                  <Form.Control style={input}
                    type="text"
                    placeholder="About Property"
                    name="Description"
                    value={this.state.Description}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Button style={{width: "200px", marginTop:"10px",fontSize:"20px",marginRight:"100px",height:"30px",borderRadius:"10px"}} type="submit">Add Property</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Property