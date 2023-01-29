import React, { Component } from "react";
import Froms from "../../components/Froms";
import axios from "axios";
import Inquire from '../../mock/Inquire'
// import labor from "../../api/labor";
export default class Labor extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
    
  }

  
  componentDidMount(){
    
    axios.get(`/labor`).then(res => {
      const  list  = res.data;
      
      this.setState({
        data: list
      })
    })
  }

  

  render() {
    return (
      <div>
        <h1>劳保类</h1>
        <Froms name={this.state.data}/>
      </div>
    );
  }
}
