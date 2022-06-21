import React from 'react'
import './PortalResultCard.css'

const PortalResultCard = ({ result }) => {

  return (
    <div className='result-table'>
      <table>
        <tr>
          <th className="test-date">{result.test_date.split('-')[1]}/{result.test_date.split('-')[2].split('T')[0]}/{result.test_date.split('-')[0]}:</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr className='table-header'>
          <th>Test</th>
          <th>Result</th>
          <th>Units</th>
          <th>Reference Interval</th>
        </tr>
        <tr className='row'>
          <td>White Blood Count</td>
          <td>{result.WBC}</td>
          <td>x 10^-3/mL</td>
          <td>4.0-10.5</td>
        </tr>
        <tr className='row'>
          <td>Red Blood Count</td>
          <td>{result.RBC}</td>
          <td>x 10^-6/mL</td>
          <td>4.70-6.10</td>
        </tr>
        <tr className='row'>
          <td>Hemoglobin</td>
          <td>{result.hemoglobin}</td>
          <td>g/dL</td>
          <td>14.0-18.0</td>
        </tr>
        <tr className='row'>
          <td>Hematocrit</td>
          <td>{result.hematocrit}</td>
          <td>%</td>
          <td>42.0-52.0</td>
        </tr>
        <tr className='row'>
          <td>Platelets</td>
          <td>{result.platelets}</td>
          <td>x 10^-3/mL</td>
          <td>140.0-415.0</td>
        </tr>
        <tr className='row'>
          <td>Sodium</td>
          <td>{result.sodium}</td>
          <td>mmol/L</td>
          <td>134.0-144.0</td>
        </tr>
        <tr className='row'>
          <td>Potassium</td>
          <td>{result.potassium}</td>
          <td>mmol/L</td>
          <td>3.5-5.2</td>
        </tr>
        <tr className='row'>
          <td>BUN/Creatinine ratio</td>
          <td>{result.bun}</td>
          <td> - </td>
          <td>9-20</td>
        </tr>
        <tr className='row'>
          <td>Calcium</td>
          <td>{result.calcium}</td>
          <td>mg/dL</td>
          <td>8.7-10.2</td>
        </tr>
        
      </table>
    </div>
  )
}

export default PortalResultCard