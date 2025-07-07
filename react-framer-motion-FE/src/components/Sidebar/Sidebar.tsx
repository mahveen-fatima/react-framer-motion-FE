import React from 'react'
import { AccountToggle } from './AccountToggle'
import { Search } from './Search'
import { RouteSelect } from './RouteSelect'
import { Plan } from './Plan'

export const Sidebar = () => {
  return (
    <div>

      <div className='overflow-auto sticky top-4 h-[calc(100vh-32px-48px)]'>
        {/* TODO: Main sidebar content */}
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      
        {/* TODO: Plan toggle */}
        <Plan />
      

    </div>
  )
}
