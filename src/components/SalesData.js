import React from 'react'

const SalesData = ({statsData}) => {
  return (
    <div>
        <ul className='sales-list'>
            <li>Total Sale: <strong>{statsData.totalSale}</strong></li>
            <li>Total Sold Items: <strong>{statsData.totalSold}</strong></li>
            <li>Total Unsold Items: <strong>{statsData.totalUnsold}</strong></li>
        </ul>
    </div>
  )
}

export default SalesData