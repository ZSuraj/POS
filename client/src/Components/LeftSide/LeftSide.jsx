import React from 'react'

import { useLocation } from 'react-router-dom'
import GridTables from '../Grid/GridTables'
import GridMenu from '../Grid/Gridmenu'
import './LeftSide.css'
import Starter from '../MenuItems/Starter'
import Soups from '../MenuItems/Soups'
import Desserts from '../MenuItems/Desserts'
import Pizza from '../MenuItems/Pizza'
import Rotis from '../MenuItems/Rotis'
import Gravy from '../MenuItems/Gravy'

const LeftSide = () => {

  const location = useLocation()

  return (
    <div className='leftside-container'>
        {
            (() => {
                switch(true) {
                        
                    case(location.pathname === '/menu/starter'): {
                            return (
                                <Starter />
                            )
                        }
                    break;
                        
                    case(location.pathname === '/menu/rotis'): {
                        return (
                            <Rotis />
                        )
                    }
                    break;

                    case(location.pathname === '/menu/gravies'): {
                        return (
                            <Gravy />
                        )
                    }
                    break;

                    case(location.pathname === '/menu/pizza'): {
                      return (
                          <Pizza />
                      )
                    }
                    break;
                    
                    case(location.pathname === '/menu/dessert'): {
                      return (
                          <Desserts />
                      )
                    }
                    break;

                    case(location.pathname === '/menu/soups'): {
                      return (
                          <Soups />
                      )
                    }
                    break;

                    default: {
                            return (
                                <GridTables />
                            )
                        }
                    break;
                    }
            })()  
        }  
    </div>
  )
}

export default LeftSide