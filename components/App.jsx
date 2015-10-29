
import React from 'react'

// Only import what you need
import Footer from './Footer'

export default class App extends React.Component {

  render() {
    const styles = {
      root: {
        padding: 32
      }
    }

    const data = {
      footer: {
        links: [
          { href: '#!', children: 'Link 1' },
          { href: '#!', children: 'Link 2' },
        ]
      }
    }

    return (
      <div style={styles.root}>
        <h1>static</h1>
        <Footer {...data.footer} />
      </div>
    )
  }
}

