import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between mb-10 pb-5 border-b-2 bg-amber-600 p-5'>
      <Link to='/'>
        <span className='font-semibold text-2xl text-white'>Users</span>
      </Link>
      <nav className='flex items-center gap-10'>
        <Link to='/' className='text-white hover:bg-amber-700 rounded px-3.5 py-1.5'>
          Home
        </Link>
        <Link to='/Formulaire' className='text-white bg-amber-700 rounded px-3.5 py-1.5 hover:bg-amber-800'>
          Formulaire
        </Link>
      </nav>
    </header>
  )
}

export default Header