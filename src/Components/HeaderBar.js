import React from "react"
import {Link} from "react-router-dom"
import {Menu} from "semantic-ui-react"

const headerBar = () => {
return (
  <Menu >
    <Link to="/">
        <Menu.Item
          name='All Restaurants'
          >
          All Restaurants
        </Menu.Item>
          </Link>
          <Link to="/restaurants/yourcollection">
        <Menu.Item
          name='Your Collections'
          >Your Collections</Menu.Item>
          </Link>
        </Menu>
          )
        }
export default headerBar