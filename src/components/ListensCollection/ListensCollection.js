import React, { Component } from 'react';
import fetch from 'node-fetch';

import baseEndpoint from '../../utils/ProdUtils';
import styles from './ListensCollection.module.css';

import ListensItemFull from '../ListensItemFull';
import ListensItemMini from '../ListensItemMini';

const LISTENS_API_ENDPOINT = `${baseEndpoint()}/listens`;

/**
 * Method to get listens data
 *
 * @returns {Promise<JSON>} Listens data
 */
async function fetchData() {
  return fetch(LISTENS_API_ENDPOINT).then((response) => response.json());
}

/**
 * Internal class for rendering a header item
 */
class ListensCollection extends Component {
  /**
   * @class
   * @param {object} props Contains the desired output size of the result
   */
  constructor(props) {
    super();

    this.state = {
      data: null,
    };

    this.outputSize = props.outputSize;
  }

  /**
   * Fetches data after component creation
   */
  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        data,
      });
    });
  }

  /**
   * Renders the component
   *
   * @returns {React.Component} JSX for individual header link
   */
  render() {
    const collectionData = this.state.data
      ? this.state.data.map((item) => (this.outputSize === 'full' ? (
            <ListensItemFull
              albumLink={item.albumLink}
              albumName={item.albumName}
              thumbnail={item.thumbnail}
              playcount={item.playcount}
              artist={item.artist}
            />
      ) : (
            <ListensItemMini
              albumLink={item.albumLink}
              albumName={item.albumName}
              thumbnail={item.thumbnail}
            />
      )))
      : null;
    return (
      <div>
        <div className={styles.listensCollection}>{collectionData}</div>
      </div>
    );
  }
}

export default ListensCollection;
