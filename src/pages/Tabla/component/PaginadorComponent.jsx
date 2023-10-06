import { Icon } from "@iconify/react";
import React from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
import style from '../../../scss/Paginador.module.scss';
const  PaginadorComponent =(props)=>{
const {pageCount, setCurrentPage}=props;
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
      };
    return(
        <Fragment>
            <div className={style.pagnador}>
                <ReactPaginate
            previousLabel={<Icon icon='mdi:chevron-left'/>}
            nextLabel={<Icon icon='mdi:chevron-right'/>}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageClick}
           containerClassName={'pagination'}
           pageLinkClassName={style.btn_number}
           activeClassName={style.active}
          breakLinkClassName={style.break}
          previousLinkClassName={style.btn_pre}
          nextLinkClassName={style.btn_next}
          
           
      />
            </div>
        
        </Fragment>
    )
}

export default PaginadorComponent;