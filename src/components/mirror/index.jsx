import React from 'react'
import { useCount } from '../../shared/context/Count'

export const Mirror = () => {
  const { count } = useCount()

  return (
    <div>
      <span>
        <b>Mirror: </b>
        {count}
      </span>
    </div>
  )
}
