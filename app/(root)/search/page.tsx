import React from 'react'

const SearchPage = ({searchParams}: {searchParams: { [key: string]: string | undefined }}) => {
  
  console.log(searchParams);

  return (
    <div>search page</div>
  )
}

export default SearchPage;