import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import TableFooter from './component/TableFooter';
import exportFromJSON from 'export-from-json'  
import Card from 'react-bootstrap/Card';

export const ReactDataTableIO = (props) => {
  let fileName = new Date().toLocaleString();
  const [searchVal, setSearchVal] = useState("");
  const [initalData,setInitalData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setrRowsPerPage] = useState(5);
  const [tableRange, setTableRange] = useState([]);
  const [dataLength,setDataLength] = useState(0);
  const [slice, setSlice] = useState([]);
  const [tableBodyData,setTableBodyData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [toggleTableView,setToggleTableView] = useState(false);

  useEffect(()=>{
    setInitalData(props.tableData);
    setSelected(props.tableHeader)
  },[])
  const toTitleCase = (str)=>{
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  const calculateRange = (data, rowsPerPage) => {
      const range = [];
      const num = Math.ceil(data.length / rowsPerPage);
      let i = 1;
      for (let i = 1; i <= num; i++) {
        range.push(i);
      }
      return range;
  };
  const sliceData = (data, page, rowsPerPage) => {
      return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };
  const exportToExcel = ()=>{
    exportFromJSON({ data:initalData, fileName:fileName, exportType:exportFromJSON.types.xls })  
  }
  const exportToCSV = ()=>{
    exportFromJSON({ data:initalData, fileName:fileName, exportType:exportFromJSON.types.csv })  
  }
  const exportToJSON = ()=>{
    exportFromJSON({ data:initalData, fileName:fileName, exportType:exportFromJSON.types.json })  
  }
  useEffect(() => {
    const range = calculateRange(initalData, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(initalData, page, rowsPerPage);
    setSlice([...slice]);

    setDataLength(initalData.length);
  }, [initalData, setTableRange, page, setSlice, rowsPerPage]);
  

  useEffect(()=>{
    setTableBodyData(slice);
  },[slice])

  useEffect(()=>{
    if (searchVal === "") { setTableBodyData(slice); return; }
    const filterBySearch = props.tableData.filter((item) => {
        if (Object.values(item).toString().toLowerCase().includes(searchVal.toLowerCase())) { 
            return item;
         }
    })
    setTableBodyData(filterBySearch);
  },[searchVal])

  const renderTableBody = (searchVal)=>(
    searchVal === ""?(
      Array.from(tableBodyData).map((e,i)=>(
        <tr key={i}>
          {
            Object.keys(e).map(function(keyValue) {
              return <td id={keyValue}>{e[keyValue]}</td>
            })
          }
        </tr>
      ))
    ):(
      Array.from(tableBodyData).map((e,i)=>(
        <tr key={i}>
          {
            Object.keys(e).map(function(keyValue) {
              return <td id={keyValue}>{e[keyValue]}</td>
            })
          }
        </tr>
      ))
    )
  )

  const renderTableList = (searchVal)=>(
    searchVal === ""?(
      Array.from(tableBodyData).map((e,i)=>(
        <Card className={`p-4 mb-2 shadow-sm`} key={i}>
          {
            Object.keys(e).map(function(keyValue) {
              return (
                <React.Fragment>
                  <div className={styles.desktopRowList}>
                    <h6 id={keyValue}><b>{toTitleCase(keyValue)}</b></h6>
                    <h6 id={keyValue}>{e[keyValue]}</h6>
                  </div>
                </React.Fragment>
              )
            })
          }
        </Card>
      ))
    ):(
      Array.from(tableBodyData).map((e,i)=>(
        <Card className='p-4 mb-2 shadow-sm' key={i}>
          {
            Object.keys(e).map(function(keyValue) {
              return (
                <React.Fragment>
                  <div className={styles.desktopRowList}>
                    <h6 id={keyValue}><b>{toTitleCase(keyValue)}</b></h6>
                    <h6 id={keyValue}>{e[keyValue]}</h6>
                  </div>
                </React.Fragment>
              )
            })
          }
        </Card>
      ))
    )
  )

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
     const sorted = [...tableBodyData].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
       a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
        numeric: true,
       }) * (sortOrder === "asc" ? 1 : -1)
      );
     });
     setTableBodyData(sorted);
    }
  };

  return (
    <Container fluid>
      <div className={styles.tableSearch}>
        {
          props.isSearchEnabled?(
            <input type='text' onChange={(e)=>setSearchVal(e.target.value)} className={styles.searchbarInput} placeholder='Search for items...'  />
          ):null
        }
        <div className={styles.desktopRow}>
          {
            props.isTableToggle?(
              <button onClick={()=>setToggleTableView(!toggleTableView)} className='btn btn-secondary mr-2'>
                {
                  (toggleTableView)?(
                    <i class="bi bi-list-ul"></i>
                  ):(
                    <i class="bi bi-table"></i>
                  )
                }
              </button>
            ):(null)
          }
          
          {
            props.isExport?(
              <React.Fragment>
                <Dropdown drop='down-centered' className={`${styles.mobileHide}`}>
                        <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                          <i className="bi bi-file-earmark-spreadsheet"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={exportToExcel}>Export to Excel</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={exportToJSON}>Export to JSON</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={exportToCSV}>Export to CSV</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
                <Dropdown drop='down-centered' className={`${styles.desktopHide}`}>
                        <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                          <i className="bi bi-file-earmark-spreadsheet"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={exportToExcel}>Export to Excel</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={exportToJSON}>Export to JSON</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={exportToCSV}>Export to CSV</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
              </React.Fragment>
            ):null
          }
        </div>
        
      </div>
      {
        (toggleTableView)?(
          renderTableList(searchVal)
        ):(
          <Table striped={props.tableStriped} bordered={props.tableBordered} hover={props.tableHover} responsive={props.tableResponsive} bsPrefix='table'>
              <thead style={props.tableHeaderStyle}>
                <tr>
                  {
                    Array.from(selected).map((e,i)=>(
                      e.value?<th key={e.key} className={e.sortable ? sortField === e.key && order === "asc" ? styles.tableSortUp : sortField === e.key && order === "desc" ? styles.tableSortDown : styles.tableSortDefault : ""}  onClick={e.sortable ? () => handleSortingChange(e.key) : null}>{e.label}</th>:null
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  renderTableBody(searchVal)
                }
              </tbody>
          </Table>
        )
      }
      <Row className='mt-2 mt-md-2 mt-lg-2 mt-xl-2'>
        <Col sm={12} xl={2}>
          {
            searchVal === ""?(
              <div style={{width:"100%",display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Form.Group>
                  <Form.Control onChange={(e)=>setrRowsPerPage(e.target.value)} size="sm" as="select">
                    <option selected={rowsPerPage==5?true:false} value={5}>5</option>
                    <option selected={rowsPerPage==10?true:false} value={10}>10</option>
                    <option selected={rowsPerPage==20?true:false} value={20}>20</option>
                    <option selected={rowsPerPage==50?true:false} value={50}>50</option>
                    <option selected={rowsPerPage==100?true:false} value={100}>100</option>
                  </Form.Control>
                </Form.Group>
                <span className='ml-2'>Showing {slice?slice.length:0} of {dataLength?dataLength:0} entries</span>
              </div>
            ):null
          }
        </Col>
        <Col sm={12} xl={6}>
        </Col>
        <Col sm={12} xl={4} className='mt-4 mt-lg-0 mt-md-0 mt-xl-0'  style={{width:"100%",display:'flex',justifyContent:'right'}}>
          {
            searchVal === ""?(<TableFooter range={tableRange.length?tableRange:0} slice={slice.length?slice:0} setPage={setPage} page={page} />):null
          }
        </Col>
      </Row>
    </Container>
  );
}
