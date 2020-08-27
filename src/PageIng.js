import React from 'react'
import './Pageing.css'

function PageIng({prevPage, currentPage, nextPage, page}) {
    let nextFlag = true;
    let prevUrl,nextUrl;

if(prevPage){
    prevUrl = `/search/${prevPage[0].searchTerms}/${prevPage[0].startIndex}`;
}
if(nextPage && (nextPage[0].coumt <= 10)){
    nextFlag = false;
}
nextUrl = `/search/${nextPage[0].searchTerms}/${nextPage[0].startIndex}`;


    return (
        <div className="paging">
            <span className="paging__leftArr"> {prevPage && (<a href={prevUrl?prevUrl:'/'}>&nbsp;</a>)} </span>
            <span className="paging__currnt"></span>
            <span className="paging__righttArr">{nextFlag && (<a href={nextUrl?nextUrl:''}>&nbsp;</a>)}</span>
        </div>
    )
}

export default PageIng
