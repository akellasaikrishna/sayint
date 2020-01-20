import React from "react";
import "./App.css";
import Comment from "./Comment";
import {
  Card,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Input
} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5&inc=name", {
      method: "GET"
    })
      .then(d => d.json())
      .then(d => {
        this.setState({ data: d.results });
      });
  }
  render() {
    return (
      <div className="App">
        <Card className="container">
          <div
            style={{
              margin: "20px",
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "left"
            }}
          >
            Comments
          </div>
          {this.state.data.map((user, i) => {
            return (
              <div
                style={{
                  border: "1px solid rgb(200, 200, 200)",
                  margin: "15px 15px"
                }}
              >
                <div style={{ display: "flex", marginBottom: "-15px" }}>
                  <div style={{ width: "60%", float: "left" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Team Comment
                      </InputLabel>
                      <Select
                        native
                        inputProps={{
                          id: "outlined-age-native-simple"
                        }}
                      >
                        <MenuItem>Team Comment</MenuItem>
                        <MenuItem>Public Comment</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <Comment
                  name={`${user.name.first} ${user.name.last}`}
                  key={i}
                />
                <div style={{ display: "flex", marginTop: "-15px" }}>
                  <div style={{ width: "60%", float: "left" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Assign to someone
                      </InputLabel>
                      <Select
                        native
                        inputProps={{
                          name: "age",
                          id: "outlined-age-native-simple"
                        }}
                      >
                        <MenuItem></MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div
                    style={{ width: "40%", float: "right", marginTop: "5px" }}
                  >
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      style={{ color: "green" }}
                      label="Resolve"
                      labelPlacement="end"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    );
  }
}

export default App;
