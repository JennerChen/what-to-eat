import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import MobileLayout from '../components/mobile-layout'
import MenuList from '../components/menu-list'

class RootIndex extends React.Component {
  render() {
    const menus = get(this, 'props.data.allContentfulMenu.nodes') || [];
    const members = get(this, 'props.data.allContentfulMember.nodes') || [];
    const categories = get(this, 'props.data.allContentfulCategory.nodes') || [];

    return (
      <MobileLayout location={this.props.location}>
        <MenuList menus={ menus } members={ members } categories={ categories }/>
      </MobileLayout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
    query {
        allContentfulCategory {
            nodes {
                name
                id
            }
        }
        allContentfulMember {
            nodes {
                name
                nickname
                id
            }
        }
        allContentfulMenu{
            nodes {
                addDate(formatString: "YYYY-MM-DD HH:mm:ss")
                categories {
                    createdAt
                    id
                    name
                }
                id
                name
                pics {
                    id
                    title
                    file {
                        url
                    }
                    createdAt
                }
                owners {
                    name
                    nickname
                    id
                    avatar {
                        file {
                            url
                        }
                    }
                }
                description {
                    raw
                }
                createdAt
                node_locale
            }
        }
    }
`
