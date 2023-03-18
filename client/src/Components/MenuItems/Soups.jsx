import React from 'react'
import { useSelector } from 'react-redux'

import Gridmenu from '../Grid/Gridmenu'
import '../Grid/GridMenu.css'
import FoodBox from './FoodBox'

const Soups = () => {

    const menuList = useSelector(state => state.menuReducer)

  return (
    <div>
        <Gridmenu />
        <div className='food-items-grid-box'>
            {
                menuList.data === null ?
                <p>Loading...</p> :
                <>
                    {
                        menuList.data.map((menu) => (
                            menu.itemType === "soup" && <FoodBox menu={menu} key={menu._id}/>
                        ))
                    }
                </>
            }
        </div>
    </div>
  )
}

export default Soups