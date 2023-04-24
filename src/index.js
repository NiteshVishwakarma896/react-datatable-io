import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Button, Col, Container, Form, Pagination, Row, Table } from 'react-bootstrap';
import  MultiSelectReact  from 'multi-select-react';
import TableFooter from './component/TableFooter';
import exportFromJSON from 'export-from-json'  

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

  useEffect(()=>{
    setInitalData(props.tableData);
    setSelected(props.tableHeader)
  },[])

  const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8"
  };
  const optionsListStyles = {
      backgroundColor: "#dff0d8",
      fontWeight:'400',
      color: "#000"
  };
  const optionClicked = (optionsList) =>{
    setSelected(optionsList);
  }
  const selectedBadgeClicked = (optionsList) => {
    setSelected(optionsList);
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
    exportFromJSON({ data:initalData, fileName:fileName, exportType:exportFromJSON.types.csv })  
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
    let selectedVal = selected.filter((e)=>{return e.value ===false})
  },[selected])

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
            Object.keys(e).map(function(key) {
              return <td>{e[key]}</td>
            })
          }
        </tr>
      ))
    ):(
      Array.from(tableBodyData).map((e,i)=>(
        <tr key={i}>
          {
            Object.keys(e).map(function(key) {
              return <td>{e[key]}</td>
            })
          }
        </tr>
      ))
    )
  )

  return (
    <Container fluid>
      <div className={styles.tableSearch}>
        {
          props.isSearchEnabled?(
            <input type='text' onChange={(e)=>setSearchVal(e.target.value)} className={styles.searchbarInput} placeholder='Search for items...'  />
          ):null
        }
        {
          props.isExportToExcel?(
            <div>
            <button className={`btn btn-success ${styles.mobileHide}`} onClick={exportToExcel} >
              <i className="bi bi-file-earmark-spreadsheet"></i>
              {" "}
              Export to Excel
            </button>
            <button className={`btn btn-success ${styles.desktopHide}`} onClick={exportToExcel} >
              <i className="bi bi-file-earmark-spreadsheet"></i>
            </button>
            </div>
          ):null
        }
      </div>
      <Table striped bordered hover responsive bsPrefix='table' {...props}>
          <thead>
            <tr>
              {
                Array.from(selected).map((e,i)=>(
                  e.value?<th key={i}>{e.label}</th>:null
                ))
              }
            </tr>
          </thead>
          <tbody>
            {renderTableBody(searchVal)}
          </tbody>
      </Table>
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
