import React from 'react';
import "./orders.css";
import Adduu from './sneakerhead.png';

function Products() {
  return (
    <div style={{marginLeft:'300px',height:'2000px'}}>
        <h3 className='dshh'>Products</h3>
      <table className='ordtbl'>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>36800001</td>
          <td>jordAN</td>
          <td>$499</td>
          <td>R</td>
        </tr>
        <tr>
          <td>36800001</td>
          <td>panda</td>
          <td>$499</td>
          <td>R</td>
        </tr>
      </table>
    </div>
  )
}

export default Products