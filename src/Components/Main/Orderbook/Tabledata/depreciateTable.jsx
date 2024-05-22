

import React from 'react'

const DepreciateTable = () => {

  return (
    <>
        <table class="table table--borderless">
        <thead class="table__header">
            <tr class="table__row">
                <th class="table__header-cell">Price</th>
                <th class="table__header-cell">Amounts</th>
                <th class="table__header-cell">Total</th>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__row">
                <td class="table__cell">36920,12</td>
                <td class="table__cell dep">0.758965</td>
                <td class="table__cell dep">28,020,98</td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">36920,12</td>
                <td class="table__cell">0.758965</td>
                <td class="table__cell">28,020,98</td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">36920,12</td>
                <td class="table__cell">0.758965</td>
                <td class="table__cell dep">28,020,98</td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">36920,12</td>
                <td class="table__cell dep">0.758965</td>
                <td class="table__cell dep">28,020,98</td>
            </tr>
            <tr class="table__row">
                <td class="table__cell">36920,12</td>
                <td class="table__cell">0.758965</td>
                <td class="table__cell">28,020,98</td>
            </tr>
        </tbody> 
        </table>
    </>
  )
}

export default DepreciateTable