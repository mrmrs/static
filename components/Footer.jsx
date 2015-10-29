import React from 'react'

/* classes are cool, but most of these can be
 * stateless function components
* */

const Footer = ({ links, someProp, ...props }) => {
  return (
    <footer>
      <p>This is a footer that has not very much content.</p>

      {/* If you wanna pass children in */}
      {props.children}

      {/*
        If you wanna loop through links
        You'd probably want a Link component for these
      */}
      {links.map((link, i) => (
        <a key={i} {...link} />
      ))}
    </footer>
  )
}

Footer.defaultProps = {
  links: []
}

export default Footer


