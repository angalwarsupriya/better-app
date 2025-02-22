import React from 'react';
import './index.css'
function PropertyTaxTable() {
  const data = [
    { state: 'AL', medianTaxRate: '0.41%', meanTaxRate: '0.40%', homeValue: '$157,100', taxesPaid: '$646' },
    { state: 'AK', medianTaxRate: '1.23%', meanTaxRate: '1.04%', homeValue: '$282,800', taxesPaid: '$3,464' },
    { state: 'AZ', medianTaxRate: '0.62%', meanTaxRate: '0.63%', homeValue: '$265,600', taxesPaid: '$1,648' },
    { state: 'AR', medianTaxRate: '0.62%', meanTaxRate: '0.64%', homeValue: '$142,100', taxesPaid: '$878' },
  ];

  return (
    <div className="property-tax-table">
        <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Median Effective Property Tax Rate</th>
            <th>Mean Effective Property Tax Rate</th>
            <th>Median Home Value</th>
            <th>Median Property Taxes Paid</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.state}</td>
              <td>{row.medianTaxRate}</td>
              <td>{row.meanTaxRate}</td>
              <td>{row.homeValue}</td>
              <td>{row.taxesPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTaxTable;
