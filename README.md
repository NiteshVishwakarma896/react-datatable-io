# react-datatable-io

> React-Datatable IO is a component which provide ability to create multifunctional table using single component like jQuery Datatable

[![NPM](https://img.shields.io/npm/v/react-datatable-io.svg)](https://www.npmjs.com/package/react-datatable-io) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
<b>Demo Link</b>: https://niteshvishwakarma896.github.io/react-datatable-io/

<img src="https://github.com/NiteshVishwakarma896/react-datatable-io/assets/45270353/2bc830cc-b015-440b-a3cb-e82c0f50fa1a">
<br/>
<img src="https://github.com/NiteshVishwakarma896/react-datatable-io/assets/45270353/e3c2e562-38a0-4c09-a30e-77a2a4454530">

<table>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/45270353/238587075-7b35e6bf-aa6c-4afc-b3bb-498ed1924852.png" width=270 height=550></td>
    <td><img src="https://github.com/NiteshVishwakarma896/react-datatable-io/assets/45270353/21ed25ff-1286-43bd-a34a-a457825397c0" width=270 height=550></td>
  </tr>
 </table>

## Install

```bash
npm install --save react-datatable-io
```
## DataTable Props

<b>tableHeader</b>: These will be headers that will be avaliable in the table header.<br/>
<b>tableData</b>: It will be an array of json data.<br/>
<b>isSearchEnabled</b>: To enable search functionality in the table.<br/>
<b>isExport</b>: To enable table data to be exported to excel,csv,json format file.<br/>
<b>isTableToggle</b>: To toggle table view to list or table.<br/>
<b>tableStriped</b>: Set table rows to be stripped as bootstrap table.<br/>
<b>tableBordered</b>: Set table rows to have a border as bootstrap table.<br/>
<b>tableHover</b>: Set table rows to hover when mouse is over.<br/>
<b>tableResponsive</b>: To make table responsive for the other devices.<br/>
<b>tableHeaderStyle</b>: Style your table header as you want, by passing the JSX styles.<br/>
<br/>
<br/>
To see more about it checkout below example. 

## Usage

```jsx
import React from 'react'

import { ReactDataTableIO } from 'react-datatable-io'
import 'react-datatable-io/dist/index.css'

const App = () => {
  const data =[
    {"id":1,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Success"},
    {"id":2,"fname":'Nitesh',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Success"},
    {"id":3,"fname":'Akash',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Success"},
    {"id":4,"fname":'Smith',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Success"},
    {"id":5,"fname":'Zolo',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Success"},
    {"id":6,"fname":'Olo',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":7,"fname":'Oark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":8,"fname":'Smark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":9,"fname":'Akark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":10,"fname":'Lark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":11,"fname":'Sneha',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":12,"fname":'Neha',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":13,"fname":'Manish',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
    {"id":14,"fname":'Naman',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000',status:"Failed"},
  ]
  const header =[
    { label: "#", key:"id" ,value: true, sortable: true  },
    { label: "First Name", key:"fname", value: true, sortable: true },
    { label: "Last Name", key:"lname", value: true, sortable: true },
    { label: "Username", key:"uname", value: true, sortable: true },
    { label: "Date", key:"date", value: true, sortable: true },
    { label: "Time", key:"time", value: true, sortable: true },
    { label: "Status", key:"status", value: true, sortable: true },
  ]
  return <ReactDataTableIO 
            tableData={data}
            tableHeader={header}
            isSearchEnabled={true}
            isExport={true}
            isTableToggle={true}
            tableStriped={false}
            tableBordered={false}
            tableHover={true}
            tableResponsive={true}
            tableHeaderStyle={{
              backgroundColor:"#232323",
              color:"#fff",
            }}
          />
}

export default App

```

## License

MIT © [NiteshVishwakarma896](https://github.com/NiteshVishwakarma896)
