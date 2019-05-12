import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";


const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="" />
        <Content>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{ color: '#B6890D', fontSize: '7em', textAlign: 'center', marginBottom: '.5em' }}>404</h1>
              <span style={{ fontSize: '3em', textAlign: 'center' }}>How did you get here?</span>
            </div>
            <div style={{ fontSize: '1em', textAlign: 'center', marginTop: '1em' }}>
              <a href="/">Return Home</a>
            </div>
          </div>
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
