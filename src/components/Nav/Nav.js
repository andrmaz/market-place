import React from 'react'
//import PropTypes from 'prop-types'
import {ReactComponent as User} from '../../assets/user.svg'
import {ReactComponent as Cart} from '../../assets/cart.svg'

const Nav = props => {
  return (
    <nav className='h-20 w-100 bg-gray-600 text-black-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img
                className='h-8 w-8'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                alt='Workflow'
              />
            </div>
            <div className='md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {/* Current: "bg-gray-900 text-black", Default: "text-gray-300 hover:bg-gray-700 hover:text-black" */}
                <a
                  href='/'
                  className='bg-white-300 text-black text-xl font-bold px-3 py-2 rounded-md'
                >
                  Dashboard
                </a>
                <label
                  htmlFor='search'
                  className='sr-only block text-sm font-medium text-gray-700'
                >
                  Search
                </label>
                <div className='mt-1 flex shadow-sm'>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-2 border-indigo-600 pl-2'
                    placeholder='Search'
                  />
                  <button className='bg-black  p-1 text-indigo-500'>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black'>
                <span className='sr-only'>
                  View notifications
                </span>
                {/* Heroicon name: outline/bell  */}
                <Cart className='h-6 w-6' />
              </button>

              {/* Profile dropdown */}
              <div className='ml-3 relative'>
                <div>
                  <button
                    className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black'
                    id='user-menu'
                    aria-haspopup='true'
                  >
                    <span className='sr-only'>
                      Open user menu
                    </span>
                    <User className='h-8 w-8 rounded-full bg-white' />
                  </button>
                </div>
                {/* 
                                    Profile dropdown panel, show/hide based on dropdown state.

                                    Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                    Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                                */}
                <div
                  className='hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='/'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Your Profile
                  </a>

                  <a
                    href='/'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </a>

                  <a
                    href='/'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

/* Nav.propTypes = {

} */

export default Nav
