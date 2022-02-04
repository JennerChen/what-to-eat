import React from 'react'

import styled from 'styled-components'
import KittySwitchButton from '../kitty-switch-button'

const Container = styled.div`
  display: flex;
  padding: 10px;
`

const Pic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`

const Content = styled.div`
  padding: 0 6px;
  flex: 1;
  min-width: 1px;
`
const MenuName = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const OwnerList = styled.div`
  margin-top: 5px;
  display: flex;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
  }
`

export default function ({ pics, name, owners, toggleCart, carts, id }) {
  let pic = pics && pics.length ? pics[0].file.url : ''

  return (
    <Container id={ id }>
      <Pic src={pic} />
      <Content>
        <MenuName>{name}</MenuName>
        <OwnerList>
          {owners.map((owner) => (
            <img src={owner.avatar.file.url} key={owner.id} />
          ))}
        </OwnerList>
        <div>
          <KittySwitchButton
            style={{ top: 5, left: 'calc(100% - 55px)' }}
            checked={carts.includes(id)}
            onChange={(e) => toggleCart(id)}
          />
        </div>
      </Content>
    </Container>
  )
}
