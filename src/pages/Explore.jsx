import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

const Explore = () => {
  return (
    <div className='explore'>
      <header className=''>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        {/* slider */}

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='p exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Rentals</p>
          </Link>
          <Link to='/category/sell'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Sales</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
