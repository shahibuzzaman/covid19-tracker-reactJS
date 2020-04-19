import React from 'react';
import { Table } from 'reactstrap';
import '../App.css';

const Example = (props) => {
  return (
    <div
      style={{
        maxHeight: '200px',
        overflowY: 'auto',
      }}
    >
      <Table
        size='sm'
        style={{
          textAlign: 'left',
          position: 'relative',
          borderCollapse: 'collapse',
        }}
      >
        <thead style={{ position: 'sticky' }}>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark fdtrg</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Example;
