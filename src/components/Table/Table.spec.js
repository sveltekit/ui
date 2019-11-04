import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Table from './Table.svelte';
import Basic from './examples/Basic.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Table.name;

test(`${componentName}: renders correctly`, async (t) => {
  const table = new Table({
    target: testTarget,
    props: {
      hasBorder: true,
      columns: [
        {
          title: 'First Name',
          cell: 'FirstName'
        },
        {
          title: 'Last Name',
          cell: 'LastName'
        },
        {
          title: 'Total Bookings',
          cell: 'Score'
        }
      ],
      data: [
        {
          FirstName: 'Xavier',
          LastName: 'Xu',
          Score: 106
        },
        {
          FirstName: 'Bobby',
          LastName: 'Bilbosh',
          Score: 71
        }
      ]
    }
  });  
  

  table.$destroy();
});
