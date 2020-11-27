import React from 'react'




class Search extends React.Component {


  render() {
    return (
      <>

        <div className="search-box-div">
          <form className="search-box" action="./">
            <input className='search' type="text" placeholder="Search.." name="search" />

            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>

      </>
    )
  }
}



export default Search
