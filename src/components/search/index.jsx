import React, { useState } from 'react'
import { useFetch } from '../../shared/hooks/useFetch'
import { Catalog } from '../catalog'
import styled from 'styled-components'

const CatalogList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Field = styled.input`
  background: ${({ theme }) => theme.hardColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  padding: 8px;
  margin: 8px;
  border-radius: 3px;
  width: 300px;
`

const Button = styled.button`
  background: ${({ theme }) => theme.brandColor};
  color: ${({ theme }) => theme.textColor};
  border: 0;
  margin: 8px;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
`

const Search = () => {
  const [value, setValue] = useState('')
  const [movie, setMovie] = useState(value)

  const { error, loading, data } = useFetch(
    `http://www.omdbapi.com/?apikey=629c2d0a&s=${movie}`
  )

  const handleClick = (e) => {
    e.preventDefault()
    setMovie(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <SearchBar>
        <Field value={value} onChange={handleChange} type="text" />
        <Button onClick={handleClick} type="submit" disabled={!value}>
          Search
        </Button>
      </SearchBar>

      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <span> Loading...</span>
      ) : (
        <CatalogList>
          {data && data.Search ? (
            data.Search.map((prodution) => (
              <Catalog key={prodution.imdbID} prodution={prodution} />
            ))
          ) : (
            <span>No produtions found.</span>
          )}
        </CatalogList>
      )}
    </div>
  )
}

export { Search }
