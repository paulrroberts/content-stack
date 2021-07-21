/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from "react";
import Layout from "../components/layout";

function displayRichText(content) {
  return { __html: content };
}

class FormsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wrapper" style={{ marginTop: 80 }}>
          <div>
            <div id="">
              <div className="portfolio clearfix">
                <div className="container clearfix formsPage">
                  <h1 className="heading-1">{this.props.page.title}</h1>
                  <div
                    className="formDescription"
                    dangerouslySetInnerHTML={{
                      __html: this.props.page.form_description,
                    }}
                  />
                  <form>
                    <fieldset>
                      <legend>
                        {this.props.page.personal_info_fieldset_label}
                      </legend>
                      <label>First Name</label>
                      <input
                        type="text"
                        name="primary_name_default_given"
                        size="25"
                        maxLength="35"
                        required
                      />
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="primary_name_default_family"
                        size="25"
                        maxLength="30"
                        required
                      />
                      <label>Date of Birth</label>
                      <input type="date" name="primary_birth_date" required />
                    </fieldset>
                    <fieldset>
                      <legend>{this.props.page.address_fieldset_label}</legend>
                      <strong>
                        <em>&lt; Address form would be loaded here. &gt;</em>
                      </strong>
                    </fieldset>
                    <fieldset>
                      <legend>
                        {this.props.page.contact_info_fieldset_label}
                      </legend>
                      <label>Mobile Phone</label>
                      <input
                        type="tel"
                        name="primary_phone_mobile"
                        maxLength="25"
                        size="25"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <legend>
                        {this.props.page.account_info_fieldset_label}
                      </legend>
                      <label>
                        CUIT (Clave Única de Identificación Tributaria)
                      </label>
                      <input type="text" name="primary_legal_ids_0" required />
                      <label>DNI: (12345678)</label>
                      <input
                        type="text"
                        name="primary_legal_ids_1_value"
                        minLength="8"
                        maxLength="8"
                        size="15"
                        pattern="/^[0-9]{8}$/"
                        required
                      />
                      <label>Email Address (This will be your Username)</label>
                      <input
                        type="email"
                        name="primary_email"
                        maxLength="100"
                        size="50"
                        required
                      />
                      <label>Create Password</label>
                      <input type="password" name="primary_password" required />
                    </fieldset>
                    <fieldset className="submitButton">
                      <input
                        type="submit"
                        className="primary-hit fluid"
                        value="Create Account"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default FormsPage;
