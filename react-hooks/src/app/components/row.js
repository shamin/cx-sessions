import React from 'react'
import { themes } from '../theme'

export default function Row(props) {
  const theme = props.theme || themes.light; 
  return (
    <div style={{
      background: theme.colors.background,
      color: theme.colors.text
    }}
    className="row"
    >
      <label style={{
        opacity: 0.7
      }}>{props.label}</label>
      {props.children}
    </div>
  )
}
