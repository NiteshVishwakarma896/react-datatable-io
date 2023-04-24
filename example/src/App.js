import React from 'react'

import { ReactDataTableIO } from 'react-datatable-io'
import 'react-datatable-io/dist/index.css'

const App = () => {
  const data =[
    {"id":1,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":2,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":3,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":4,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":5,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":6,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":7,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":8,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":9,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":10,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":11,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":12,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":13,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
    {"id":14,"fname":'Mark',"lname":"Otto","username":'@mdo',"date":'21-04-2000',"time":'21-04-2000'},
  ]
  const header =[
    { label: "#", key:"id" ,value: true },
    { label: "First Name", key:"fname", value: true },
    { label: "Last Name", key:"lname", value: true },
    { label: "Username", key:"uname", value: true },
    { label: "Date", key:"date", value: true },
    { label: "Time", key:"time", value: true },
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
