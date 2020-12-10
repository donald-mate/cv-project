import React, { Component } from "react";
import BasicMap from "./components/BasicMap";
import EduMap from "./components/EduMap";
import JobMap from "./components/JobMap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      nameEdit: "",
      email: "",
      emailEdit: "",
      phone: "",
      phoneEdit: "",
      basic: [],
      school: "",
      schoolEdit: "",
      degree: "",
      degreeEdit: "",
      gradyr: "",
      gradyrEdit: "",
      education: [],
      company: "",
      companyEdit: "",
      title: "",
      titleEdit: "",
      startyr: "",
      startyrEdit: "",
      endyr: "",
      endyrEdit: "",
      duties: "",
      dutiesEdit: "",
      job: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, name) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onBasicSubmit = (e) => {
    e.preventDefault();
    this.setState({
      nameEdit: this.state.name,
      emailEdit: this.state.email,
      phoneEdit: this.state.phone,
      basic: this.state.basic
        .concat(this.state.name)
        .concat(this.state.email)
        .concat(this.state.phone),
      name: "",
      email: "",
      phone: "",
    });
  };

  onBasicEdit = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.nameEdit,
      email: this.state.emailEdit,
      phone: this.state.phoneEdit,
      basic: [],
    });
  };

  onEduSubmit = (e) => {
    e.preventDefault();
    this.setState({
      schoolEdit: this.state.school,
      degreeEdit: this.state.degree,
      gradyrEdit: this.state.gradyr,
      education: this.state.education
        .concat(this.state.school)
        .concat(this.state.degree)
        .concat(this.state.gradyr),
      school: "",
      degree: "",
      gradyr: "",
    });
  };

  onEduEdit = (e) => {
    e.preventDefault();
    this.setState({
      school: this.state.schoolEdit,
      degree: this.state.degreeEdit,
      gradyr: this.state.gradyrEdit,
      education: [],
    });
  };

  onJobSubmit = (e) => {
    e.preventDefault();
    this.setState({
      companyEdit: this.state.company,
      titleEdit: this.state.title,
      startyrEdit: this.state.startyr,
      endyrEdit: this.state.endyr,
      dutiesEdit: this.state.duties,
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

  onJobEdit = (e) => {
    e.preventDefault();
    this.setState({
      company: this.state.companyEdit,
      title: this.state.titleEdit,
      startyr: this.state.startyrEdit,
      endyr: this.state.endyrEdit,
      duties: this.state.dutiesEdit,
      job: [],
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
              onChange={this.handleChange}
              name="name"
              value={name}
              required
            ></input>
            <label htmlfor="emailInput">Email:</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              onChange={this.handleChange}
              name="email"
              value={email}
              required
            ></input>
            <label htmlFor="phoneInput">Phone Number:</label>
            <input
              type="tel"
              class="form-control"
              id="phoneInput"
              onChange={this.handleChange}
              name="phone"
              value={phone}
              required
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-secondary" onClick={this.onBasicEdit}>
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
              onChange={this.handleChange}
              name="school"
              value={school}
              required
            ></input>
            <label htmlFor="degreeInput">Degree:</label>
            <input
              type="text"
              class="form-control"
              id="degreeInput"
              onChange={this.handleChange}
              name="degree"
              value={degree}
              required
            ></input>
            <label htmlFor="gradyrInput">Graduation Year:</label>
            <input
              type="text"
              class="form-control"
              id="gradyrInput"
              onChange={this.handleChange}
              name="gradyr"
              value={gradyr}
              required
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-secondary" onClick={this.onEduEdit}>
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
              onChange={this.handleChange}
              name="company"
              value={company}
              required
            ></input>
            <label htmlFor="titleInput">Job Title:</label>
            <input
              type="text"
              class="form-control"
              id="titleInput"
              onChange={this.handleChange}
              name="title"
              value={title}
              required
            ></input>
            <label htmlFor="startyrInput">Start Date:</label>
            <input
              type="date"
              class="form-control"
              id="startyrInput"
              onChange={this.handleChange}
              name="startyr"
              value={startyr}
              required
            ></input>
            <label htmlFor="endyrInput">End Date:</label>
            <input
              type="date"
              class="form-control"
              id="endyrInput"
              onChange={this.handleChange}
              name="endyr"
              value={endyr}
              required
            ></input>
            <label htmlFor="dutiesInput">Job Responsibilities:</label>
            <textarea
              rows="6"
              class="form-control"
              id="dutiesInput"
              onChange={this.handleChange}
              name="duties"
              value={duties}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-secondary" onClick={this.onJobEdit}>
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
