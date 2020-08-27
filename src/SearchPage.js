import React from 'react'
import {useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
//import Responce from './responce'
import { Link,useParams } from 'react-router-dom'
import './SerchPage.css'
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PageIng from './PageIng'

function SearchPage() {
    let { slug,page } = useParams();
    const [{term} ] = useStateValue();
    const { data } = useGoogleSearch(term ? term : slug, page) // LIVE API CALL
  
    //const data = Responce;
//console.log('ssss',data);
    return (
        <div className="searchPage">
           <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons={true} query={slug}/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option search-item-active">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shoping">Shoping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           {data && (
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                About 
                {data?data.searchInformation.formattedTotalResults : ''} 
                results (
                    {data ? data.searchInformation.formattedSearchTime:''} seconds
                )
                </p>
                {data && data?data.items.map(item => (
                    
                    <div className="searchPage__result" key={item.link}>
                        <a className="searchPage__resultLink" href={item.link}>
                        {/*console.log(item.pagemap.cse_image)*/}
                            {item.pagemap?.cse_image && item.pagemap?.cse_image[0]?.src && (
                               <img 
                               className="searchPage__resultImage"
                               src={item.pagemap.cse_image && item.pagemap.cse_image[0].src}
                               alt=""
                               /> 
                            )}
                            {item.displayLink} 
                        </a>
                        &#9662;
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage__resultSnippet">
                            {item.snippet}
                        </p>
                    </div>
                )):''}
            </div>
           )}
           {data && (
            <PageIng 
            prevPage={(data?.queries.previousPage?data.queries.previousPage:'')} 
            currentPage={(data?.queries.request?data.queries.request:'')} 
            nextPage={(data?.queries.nextPage?data.queries.nextPage:'')}
            page={page}
            />
           )}
           
          
        </div>
    )
}

export default SearchPage
