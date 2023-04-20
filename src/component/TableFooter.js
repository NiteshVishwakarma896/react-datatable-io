import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice && slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <Pagination>
            <Pagination.Prev onClick={() => {
                if(page!==1){
                    setPage(page-1)
                }
            }} activeLabel='' />
            {range && range.map((el, index) => (
                <Pagination.Item key={index} onClick={() => setPage(el)} active={ page === el ? true : false} activeLabel='' >{el}</Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setPage(page+1)} activeLabel='' />
        </Pagination>
    );
};

export default TableFooter;
