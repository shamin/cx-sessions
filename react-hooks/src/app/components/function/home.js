import React, { useState, useEffect, useContext, useRef } from 'react'
import Row from '../row'
import { ThemeContext } from '../../theme'

export default function Home({ query }) {
  const name = useFormInput('Mary')
  const surname = useFormInput('Poppins')
  const width = useWindowWidth()

  const theme = useContext(ThemeContext);

  const element = useRef(null);

  useEffect(() => {
    document.title = name.value
    console.log(element.current)
  }, [name, surname])

  return (
    <div ref={element}>
      <Row label="Name" theme={theme}>
        <input type="text" {...name} />
      </Row>
      <Row label="Surname" theme={theme}>
        <input type="text" value={surname.value} onChange={surname.onChange} />
      </Row>
      <Row label="Width" theme={theme}>
        <p>{width}</p>
      </Row>
      <Row label="Theme" theme={theme}>
        <p>{theme.name}</p>
      </Row>
    </div>
  )
}

function useFormInput(intialValue) {
  const [value, setValue] = useState(intialValue)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}
