import React, { Component } from "react";
import BasicMap from "./components/BasicMap";
import EduMap from "./components/EduMap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      basic: [],
      school: "",
      degree: "",
      gradyr: "",
      education: [],
      company: "",
      title: "",
      startyr: "",
      endyr: "",
      duties: "",
      job: [],
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  onBasicSubmit = (e) => {
    e.preventDefault();
    this.setState({
      basic: this.state.basic
        .concat(this.state.name)
        .concat(this.state.email)
        .concat(this.state.phone),
      name: "",
      email: "",
      phone: "",
    });
  };

  handleSchoolChange = (e) => {
    this.setState({
      school: e.target.value,
    });
  };
  handleDegreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };
  handleGradChange = (e) => {
    this.setState({
      gradyr: e.target.value,
    });
  };

  onEduSubmit = (e) => {
    e.preventDefault();
    this.setState({
      education: this.state.basic
        .concat(this.state.school)
        .concat(this.state.degree)
        .concat(this.state.gradyr),
      school: "",
      degree: "",
      gradyr: "",
    });
  };

  render() {
    const {
      name,
      email,
      phone,
      basic,
      school,
      degree,
      gradyr,
      education,
    } = this.state;

    return (
      <div className="col-6 mx-auto mt-5">
        <form onSubmit={this.onBasicSubmit}>
          <div className="form-group">
            <h1>Basic Info</h1>
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              onChange={this.handleNameChange}
              value={name}
              required
            ></input>
            <label htmlfor="emailInput">Email:</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              onChange={this.handleEmailChange}
              value={email}
              required
            ></input>
            <label htmlFor="phoneInput">Phone Number:</label>
            <input
              type="tel"
              class="form-control"
              id="phoneInput"
              onChange={this.handlePhoneChange}
              value={phone}
              required
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <form onEduSubmit={this.onSubmit}>
          <div className="form-group">
            <h1>Education</h1>
            <label htmlFor="schoolInput">School Name:</label>
            <input
              type="text"
              class="form-control"
              id="schoolInput"
              onChange={this.handleSchoolChange}
              value={school}
              required
            ></input>
            <label htmlFor="degreeInput">Degree:</label>
            <input
              type="text"
              class="form-control"
              id="degreeInput"
              onChange={this.handleDegreeChange}
              value={degree}
              required
            ></input>
            <label htmlFor="gradyrInput">Graduation Year:</label>
            <input
              type="text"
              class="form-control"
              id="gradyrInput"
              onChange={this.handleGradChange}
              value={gradyr}
              required
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <h1>Work History</h1>
            <label htmlFor="companyInput">Company Name:</label>
            <input type="text" class="form-control" id="companyInput"></input>
            <label htmlFor="titleInput">Job Title:</label>
            <input type="text" class="form-control" id="titleInput"></input>
            <label htmlFor="startyrInput">Start Date:</label>
            <input type="date" class="form-control" id="startyrInput"></input>
            <label htmlFor="endyrInput">End Date:</label>
            <input type="date" class="form-control" id="endyrInput"></input>
            <label htmlFor="dutiesInput">Job Responsibilities:</label>
            <textarea
              name="response"
              rows="6"
              class="form-control"
              id="dutiesInput"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div>
          <BasicMap basic={basic} />
          <EduMap education={education} />
        </div>
      </div>
    );
  }
}

export default App;
