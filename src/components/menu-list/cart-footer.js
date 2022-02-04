import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 15;
`

const Inner = styled.div`
  height: 50px;
  background-color: #17181c;
  z-index: 10;
  font-size: 20px;
  padding: 0 30px;
  line-height: 50px;
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-between;
`

const ConfirmBtn = styled.button`
  height: 30px;
  background-color: #d93737;
  color: #fff;
  border: none;
  margin-top: 10px;
  border-radius: 999px;
  padding: 0 25px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

export default function ({ carts }) {
  const cartCount = carts.length

  if (cartCount === 0) return null

  return (
    <Container>
      <Inner>
        <span>🍲({cartCount}) </span>
        <ConfirmBtn>生成菜单</ConfirmBtn>
      </Inner>
    </Container>
  )
}
