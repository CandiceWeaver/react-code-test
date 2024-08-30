import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark-mode')
      : document.documentElement.classList.remove('dark-mode')

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))

    // console.log(localStorage)
  }, [isDarkMode])

  useMemo(() => {
    const itemInLocalStorage = localStorage.getItem('isDarkMode')

    if (itemInLocalStorage) {
      const storedItem = JSON.parse(itemInLocalStorage)
      setIsDarkMode(storedItem)

      console.log(storedItem)
    }
  }, [])

  return (
    <div className='app'>
      <div className='app__header'>
        <h1 className='app__header--title'>Dark Mode Challenge</h1>

        {/* --The button that should toggle dark mode-- */}
        <button
          className='app__header--button'
          onClick={() => setIsDarkMode(!isDarkMode)}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>

      <div className='app__content'>
        <p>
          Lollipop powder powder. Cotton candy caramels chupa chups halvah
          muffin caramels apple pie topping cake. Topping chocolate bar pastry
          chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum.
          Chocolate bar lollipop candy canes. Biscuit croissant apple pie
          pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu
          chocolate bar carrot cake lemon drops halvah.
        </p>
        <p>
          Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart.
          Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan
          toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding
          sugar plum chocolate cake cake biscuit pastry pastry chocolate bar
          tart. Lemon drops dessert gummies icing.
        </p>
        <input className='input' type='text' placeholder='Name' />
        <input className='input' type='text' placeholder='Email' />
        <div className='app__content--buttons'>
          <button className='button is-primary'>Submit</button>
          <button className='button'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default App
