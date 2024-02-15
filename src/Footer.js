import React from 'react'
 const today = new Date();
const Footer = () => {
  return (
    <footer className='footer'><h4>Copyright &copy; {today.getFullYear()}</h4></footer>
  )
}

export default Footer