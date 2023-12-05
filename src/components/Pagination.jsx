import arrowleft from '../assets/arrowleft.svg'
import arrowright from '../assets/arrowright.svg'



const Pagination = ({ page,setPage, dataLength, rowsPerPage } ) => {  
    const handleChangePage = (newPage) => {
      setPage(newPage);
    }
  
    const handlePrevClick = () => {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  
    const handleNextClick = () => {
      if (page < Math.ceil(dataLength / rowsPerPage) - 1) {
        setPage(page + 1);
      }
    }
  return (
    <div className='flex flex-row gap-3 ml-auto  justify-between'>
      <button onClick={handlePrevClick} disabled={page === 0} className='items-center rounded-[8px] border border-[#D0D5DD] px-[12px] py-[8px] text-[#344054] text-[10px] md:text-[14px] font-[600] flex gap-2' style={{boxShadow: ' 0px 1px 2px 0px rgba(16, 24, 40, 0.05)'}}>
        <img src={arrowleft} alt="arrowleft" className=''/>
        Previous
      </button>

      <div>

      {Array.from({ length: Math.ceil(dataLength / rowsPerPage) }, (_, index) => (
        <button
          key={index}
          onClick={() => handleChangePage(index)}
          disabled={page === index}
          className={`${page === index ? '!bg-[#00000008]' : ''
            } p-[10px] rounded-[4px] w-[40px] text-[14px] text-[#000000] font-[500]`}
        >
          {index + 1}
        </button>
      )
    )}
    </div>

      <button
        onClick={handleNextClick}
        disabled={page >= Math.ceil(dataLength / rowsPerPage) - 1}
        className='text-[#344054] text-[10px] md:text-[14px] font-[600] border border-[#D0D5DD] px-[12px] py-[8px] flex items-center gap-2 rounded-[8px] ' style={{boxShadow : ' 0px 1px 2px 0px rgba(16, 24, 40, 0.05)'}}
      >
                <img src={arrowright} alt="arrow right"/>

        Next
      </button>
    </div>
  );

};

export default Pagination;
