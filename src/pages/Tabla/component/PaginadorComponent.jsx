import React from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
const  PaginadorComponent =(props)=>{
const {pageCount, setCurrentPage}=props;
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
      };
    return(
        <Fragment>
        <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageClick}
           containerClassName={'pagination'}
           activeClassName={'active'}
      />
        </Fragment>
    )
}

export default PaginadorComponent;