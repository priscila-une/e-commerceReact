export default function Pagination({ nPages, currentPage, setCurrentPage }){
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const goToNextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    const goToPreviousPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return(
        <div className="flex rounded-lg items-center justify-center m-10">
            <ul className="flex text-gray-600 items-center cursor-pointer bg-white border border-gray-600 rounded-lg">
                <li href="#" className="border border-gray-600 p-1" onClick={goToPreviousPage}>Previous</li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} className={`${currentPage == pgNumber ? "bg-slate-900 text-white" : "" } border border-gray-600 p-1 w-8 text-center`}>
                        <a href="#" onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</a>
                    </li>
                )) }
                
                <li href="#" className="border border-gray-600 p-1" onClick={goToNextPage}>Next</li>
            </ul>
        </div>
    )
}