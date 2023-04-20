import React from 'react'

import { ReactDataTableIO } from 'react-datatable-io'
import 'react-datatable-io/dist/index.css'

const App = () => {
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
  return <ReactDataTableIO 
            tableData={data}
            tableHeader={header}
            isSearchEnabled={true}
            isExportToExcel={true}
            isExportToCSV={true}
          />
}

export default App
