import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "../../publicAPI/covid19";
import styles from "./CovidApp.module.scss";

import image from "../../asset/image/image.png";

class CovidApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data: data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default CovidApp;
