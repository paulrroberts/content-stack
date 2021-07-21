/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index.js";
import Layout from "../components/layout";
import FormsPage from "../templates/FormsPage";

class Forms extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("forms", "en-us");
      const header = await Stack.getEntry("header", "en-us");
      const footer = await Stack.getEntry("footer", "en-us");
      return {
        data: {
          result,
          header,
          footer,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const data = this.props.data.result[0][0];
    return (
      <Layout
        header={this.props.data.header[0][0]}
        footer={this.props.data.footer[0][0]}
        seo={this.props.data.result[0][0].seo}
      >
        <FormsPage page={data} />
      </Layout>
    );
  }
}

export default Forms;
