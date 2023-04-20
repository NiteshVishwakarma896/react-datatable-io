# react-datatable-io

> React-Datatable IO is a component which provide ability to create multifunctional table using single component like jQuery Datatable

[![NPM](https://img.shields.io/npm/v/react-datatable-io.svg)](https://www.npmjs.com/package/react-datatable-io) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-datatable-io
```
## DataTable Props

<b>tableHeader</b>: These will be headers that will be avaliable in the table header.<br/>
<b>tableData</b>: It will be an array of json data.<br/>
<b>isSearchEnabled</b>: To enable search functionality in the table.<br/>
<b>isExportToExcel</b>: To enable table data to be exported to an excel file.<br/>
<br/>
<br/>
To see more about it checkout below example. 

## Usage

```jsx
import React, { Component } from 'react'

import { ReactDataTableIO } from 'react-datatable-io'
import 'react-datatable-io/dist/index.css'

export default Example = () = >{
  const data =[
      {"id":1,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":2,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":3,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":4,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":5,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":6,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":7,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":8,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":9,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":10,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":11,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":12,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":13,"fname":'Mark',"lname":"Otto","username":'@mdo'},
      {"id":14,"fname":'Mark',"lname":"Otto","username":'@mdo'},
  ]
  const header =[
    { label: "#", key:"id" ,value: true },
    { label: "First Name", key:"fname", value: true },
    { label: "Last Name", key:"lname", value: true },
    { label: "Username", key:"uname", value: true },
  ]
  return() {
    return(
      <ReactDataTableIO tableData={data} tableHeader={header} isSearchEnabled={true} isExportToExcel={true} />
    )
  }
}
```

## License

MIT © [NiteshVishwakarma896](https://github.com/NiteshVishwakarma896)
