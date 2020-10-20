import React from 'react'
import styled from 'styled-components'

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const CatalogCard = styled.div`
  background-color: ${({ theme }) => theme.hardColor};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 8px 12px;
  margin: 4px 8px;
  width: 374px;
  text-align: center;
  .catalog-card__image {
    width: 350px;
  }
  .catalog-card__title {
    display: block;
    min-height: 40px;
    text-align: left;
  }
  .catalog-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }
  .catalog-card__year {
    padding: 4px;
  }
  .catalog-card__type {
    border-radius: 3px;
    background-color: tomato;
    color: white;
    padding: 2px 4px;
    text-align: center;
  }
`

const Catalog = ({ prodution }) => {
  const poster =
    prodution.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : prodution.Poster
  return (
    <CatalogCard>
      <img
        className="catalog-card__image"
        alt={`The prodution titled: ${prodution.Title}`}
        src={poster}
      />
      <strong className="catalog-card__title">{prodution.Title}</strong>
      <div className="catalog-card__footer">
        <div className="catalog-card__year">{prodution.Year}</div>
        <div className="catalog-card__type">{prodution.Type}</div>
      </div>
    </CatalogCard>
  )
}

export { Catalog }
