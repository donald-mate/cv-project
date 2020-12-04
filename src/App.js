import React, { Component } from "react";
import BasicMap from "./components/BasicMap";
import EduMap from "./components/EduMap";
import JobMap from "./components/JobMap";

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
      education: this.state.education
        .concat(this.state.school)
        .concat(this.state.degree)
        .concat(this.state.gradyr),
      school: "",
      degree: "",
      gradyr: "",
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      company: e.target.value,
    });
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleStartChange = (e) => {
    this.setState({
      startyr: e.target.value,
    });
  };
  handleEndChange = (e) => {
    this.setState({
      endyr: e.target.value,
    });
  };
  handleDutiesChange = (e) => {
    this.setState({
      duties: e.target.value,
    });
  };

  onJobSubmit = (e) => {
    e.preventDefault();
    this.setState({
      job: this.state.job
        .concat(this.state.company)
        .concat(this.state.title)
        .concat(this.state.startyr)
        .concat(this.state.endyr)
        .concat(this.state.duties),
      company: "",
      title: "",
      startyr: "",
      endyr: "",
      duties: "",
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
      company,
      title,
      startyr,
      endyr,
      duties,
      job,
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
        <form onSubmit={this.onEduSubmit}>
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
        <form onSubmit={this.onJobSubmit}>
          <div className="form-group">
            <h1>Work History</h1>
            <label htmlFor="companyInput">Company Name:</label>
            <input
              type="text"
              class="form-control"
              id="companyInput"
              onChange={this.handleCompanyChange}
              value={company}
              required
            ></input>
            <label htmlFor="titleInput">Job Title:</label>
            <input
              type="text"
              class="form-control"
              id="titleInput"
              onChange={this.handleTitleChange}
              value={title}
              required
            ></input>
            <label htmlFor="startyrInput">Start Date:</label>
            <input
              type="date"
              class="form-control"
              id="startyrInput"
              onChange={this.handleStartChange}
              value={startyr}
              required
            ></input>
            <label htmlFor="endyrInput">End Date:</label>
            <input
              type="date"
              class="form-control"
              id="endyrInput"
              onChange={this.handleEndChange}
              value={endyr}
              required
            ></input>
            <label htmlFor="dutiesInput">Job Responsibilities:</label>
            <textarea
              name="response"
              rows="6"
              class="form-control"
              id="dutiesInput"
              onChange={this.handleDutiesChange}
              value={duties}
              required
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
          <JobMap job={job} />
        </div>
      </div>
    );
  }
}

export default App;
