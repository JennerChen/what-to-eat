import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import MenuItem from './menu-item'
import useCartList from '../../hooks/useCartList'
import CartFooter from './cart-footer'

const Container = styled.div`
  display: flex;
`

const CategoryList = styled.div`
  width: 125px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f7f7f7;
`

const CategoryTab = styled.div`
  height: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  overflow: hidden;
  background-color: ${({ active }) => (active ? '#fff' : '#f7f7f7')};
`

const MenuList = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 50px;
`

export default function ({ menus, categories, members }) {
  const { carts, toggleCart, addCart } = useCartList()

  const [activeIndex, setIndex] = useState(0)

  const { menuCategory, sortedMenus } = useMemo(() => {
    let sortedMenus = []

    menus.forEach((menu) => {})

    console.log(members, categories, menus)
    return {
      menuCategory: categories,
      sortedMenus: menus,
    }
  }, [menus, categories, members])

  return (
    <Container>
      <CategoryList>
        {menuCategory.map((category, index) => (
          <CategoryTab
            onClick={() => {
              setIndex(index)
            }}
            active={activeIndex === index}
            key={category.id}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryList>

      <MenuList onScroll={ e => console.log(e) }>
        {sortedMenus.map((menu) => (
          <MenuItem
            key={menu.id}
            {...menu}
            carts={carts}
            toggleCart={toggleCart}
          />
        ))}
      </MenuList>

      <CartFooter carts={carts} />
    </Container>
  )
}
