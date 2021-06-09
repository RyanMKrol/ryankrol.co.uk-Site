import React, { Component } from 'react';
import fetch from 'node-fetch';

import styles from './DataCollection.module.css';

/**
 * Generic class allowing me to render different collections based on input
 */
class DataCollection extends Component {
  /**
   * @class
   * @param {object} props data the collection needs to render
   */
  constructor(props) {
    super();

    this.state = {
      data: null,
    };

    this.outputSize = props.outputSize;
    this.endpoint = props.endpoint;
    this.miniCollectionItem = props.miniCollectionItem;
    this.fullCollectionItem = props.fullCollectionItem;
  }

  /**
   * Fetches the data associated with this collection
   *
   * @returns {Promise<JSON>} The data from the API
   */
  fetchData() {
    return fetch(this.endpoint).then((response) => response.json());
  }

  /**
   * Fetches data after component creation
   */
  componentDidMount() {
    this.fetchData().then((data) => {
      this.setState({
        data,
      });
    });
  }

  /**
   * Renders the component
   *
   * @returns {React.Component} JSX DataCollection component
   */
  render() {
    const FullItem = this.fullCollectionItem;
    const MiniItem = this.miniCollectionItem;

    const collectionData = this.state.data
      ? this.state.data.map((item) => (this.outputSize === 'full' ? <FullItem {...item} /> : <MiniItem {...item} />))
      : null;

    console.log(this.state.data);
    console.log(collectionData);
    return (
      <div>
        <div className={styles.collection}>{collectionData}</div>
      </div>
    );
  }
}

export default DataCollection;
