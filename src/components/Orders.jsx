import React from 'react';
import "./orders.css";


function Orders() {
  return (
    <div style={{marginLeft:'500px',height:'2000px'}}>
      <h3 className='dshh'>Orders</h3>
      <input className='allinp' type='text' placeholder='Search'></input>
      <table className='ordtbl'>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Orders</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>36800001</td>
          <td>james</td>
          <td>jordans</td>
          <td>$499</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>00001</td>
          <td>Zyan</td>
          <td>pandas</td>
          <td>$399</td>
          <td>Paid</td>
        </tr>
      </table>
    </div>
  )
}

export default Orders