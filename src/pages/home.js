import React, { Component } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          _id: "",
          OPPORTUNITY_TITLE: "",
          AGENCY_NAME: "",
          AGENCY_CONTACT_EMAIL: "",
          POSTED_DATE: "",
        },
      ],
      pages: 0,
      selectedFile: null,
      isLoading: false,
      isLoading2: false,
    };
  }

  httpReq(url) {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data.message,
          pages: response.data.pages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeHandlerUpload = (event) => {
    const data = new FormData();
    if (event.target.files[0]) {
      this.setState({
        isLoading: true,
      });
      data.append("file", event.target.files[0]);
      axios
        .post("https://nodematic.herokuapp.com/api/uploadGrants", data, {})
        .then((res) => {
          this.setState({
            isLoading2: true,
          });
          console.log(res.statusText);
          axios
            .get(
              "https://nodematic.herokuapp.com/api/grantsPagination?pageNo=1&size=20"
            )
            .then((res) => {
              this.httpReq(
                "https://nodematic.herokuapp.com/api/grantsPagination?pageNo=1&size=20"
              );
              this.setState({
                isLoading: false,
                isLoading2: false,
              });
            });
        });
    }
  };

  onClickHandlerUpload = () => {};

  onChangePagination = (event, value) => {
    this.httpReq(
      "https://nodematic.herokuapp.com/api/grantsPagination?pageNo=" +
        value +
        "&size=20"
    );
  };

  componentDidMount() {
    this.httpReq(
      "https://nodematic.herokuapp.com/api/grantsPagination?pageNo=1&size=20"
    );
  }

  render() {
    const { data, pages, isLoading, isLoading2 } = this.state;
    return (
      <div>
        <div className="center-title">
          <h1>GRANTS</h1>
        </div>
        <div className="center-input">
          <label>
            Subir CSV disponible en{" "}
            <a href="https://www.grants.gov/web/grants/search-grants.html">
              grants.gov
            </a>{" "}
            para actualización manual
          </label>
          <br />
          <Button variant="contained" component="label" disabled={isLoading}>
            Upload File
            <input
              type="file"
              name="file"
              onChange={this.onChangeHandlerUpload}
              style={{ display: "none" }}
            />
          </Button>
          <br />
          <br />
          {isLoading && <CircularProgress />}
          <br />
          {isLoading2 && (
            <label>
              Archivo cargado a base de datos, esperando respuesta (puede tardar
              un poco)
            </label>
          )}
          <br />
        </div>
        <br />
        <div className="center-pagination">
          {!isLoading && (
            <Pagination
              data={{ npages: pages }}
              onChange={this.onChangePagination}
              page="1"
            />
          )}
        </div>
        <br />
        <div className="table-compact">
          <Table rows={data} />
        </div>
        <br />
      </div>
    );
  }
}

export default home;
