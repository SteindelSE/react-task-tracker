import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button>Add</button>
    </header>
  )
}

// // CSS in JS
// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header