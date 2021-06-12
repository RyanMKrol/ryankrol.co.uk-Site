import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

import styles from './RatingsGraph.module.css';

/**
 * Component to display ratings data
 */
class RatingsGraph extends Component {
  /**
   * @class
   * @param {object} props data, and labels for the ratings component
   */
  constructor(props) {
    super();

    if (typeof props.data === 'undefined' || typeof props.labels === 'undefined') {
      throw new Error('Could not create RatingsGraph');
    }

    this.colour1 = Math.random() * 255;
    this.colour2 = Math.random() * 255;
    this.colour3 = Math.random() * 255;

    this.data = props.data;
    this.labels = props.labels;
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX MovieRatingsItem component
   */
  render() {
    return (
      <div className={styles.container}>
        <Radar
          data={{
            labels: this.labels,
            datasets: [
              {
                data: this.data,
                backgroundColor: `rgba(${this.colour1}, ${this.colour2}, ${this.colour3}, 0.2)`,
                borderColor: `rgb(${this.colour1}, ${this.colour2}, ${this.colour3})`,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              r: {
                ticks: {
                  display: false,
                  count: 5,
                },
                backgroundColor: '#fff',
                angleLines: {
                  display: true,
                },
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default RatingsGraph;
