import { useState } from 'react';
import { convertData } from '../../helper/convertData';


import styles from '../modules/Chart.module.css'
import ChartComponent from './ChartComponent';

function Chart({chart, setChart}) {
const[type, setType] = useState("prices")
console.log('converdata is:', convertData(chart, type));

  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={() => setChart(null)}>X</span>
        <div className={styles.chart}>
          <div className={styles.graph}>
            <ChartComponent type={type} data={convertData(chart, type)}/>
          </div>
        </div>
    </div>
  )
}

export default Chart