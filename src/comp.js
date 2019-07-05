import React, { Component } from 'react';
import './App.css';
import Date from './date'

class comps extends Component {
   
    state = {
        m: ''
      };
    
      handleChange = m => {
        this.setState({ m });
      };

    render(){
        return(
            <div className="container">
 <div className="row">
   <div className="col-md-4"></div>
   
   <div className="col-md-4">
   <h1 className ='Head'>Query Form</h1>
   <br />
   <form>
        <div className="form-group">
          <label htmlFor="Names">Name</label>
          <input type="text" className="form-control" id="Names" placeholder="Enter Name" />
        </div>

        <div className="form-group">
          <label htmlFor="NumberOfGuests">Number of guests</label>
          <input type="text" className="form-control" id="NumberOfGuests" placeholder="Number of guests" />
        </div>

        <div className = 'form-group'>
          <label htmlFor='Check-in/out'>Check-in/Check-out</label>
          <Date />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input type="text" className="form-control" id="budget" placeholder="Enter budget" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" className="form-control" id="location" placeholder="Enter your location" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Agent</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter the agent name" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Guest Mobile</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Guest No." />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Guest Email</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Email Id" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>

   </div>
   
   <div className="col-md-4"></div>
   </div>
      
    </div>
        )
    }
}

export default comps;