import React, { useState, useCallback } from 'react'

export default function () {
  const [carts, setCarts] = useState([])

  const addCart = useCallback(
    (id) => {
      setCarts((carts) => {
        if (carts.includes(id)) {
          return carts
        }
        return [...carts, id]
      })
    },
    [setCarts]
  )

  const toggleCart = useCallback(
    (id) => {
      setCarts((carts) => {
        if (carts.includes(id)) {
          return carts.filter((cId) => cId !== id)
        } else {
          return [...carts, id]
        }
      })
    },
    [setCarts]
  )

  return {
    carts,
    toggleCart,
    addCart,
  }
}
