import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: auto;
  display: inline;
  position: relative;

  .well {
    background: white;
    height: 14px;
    width: 45px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 10px;
    box-shadow: inset 0 2px 0 rgb(0 0 0 / 10%);
    border: 1px solid #a5d4e4;
    cursor: pointer;
  }

  input {
    opacity: 0;
    border: none;
    border-radius: 0;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    height: 14px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 100;
    color: transparent;
    
    ~ div.kitty:before {
      content: '\\01F431';
      position: absolute;
      right: 30px;
      top: -10px;
      font-size: 30px;
      z-index: 1;

      -moz-transition: all 0.25s ease-out;
      -webkit-transition: all 0.25s ease-out;
      -o-transition: all 0.25s ease-out;
      transition: all 0.25s ease-out;
    }

    &:checked {
      ~ div.kitty:before {
        content: '\\01F63A';
        right: -15px;
      }
    }
  }
`

export default function ({ className, style, checked, onChange }) {
  return (
    <Container className="kitty-switch" style={style}>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        tabIndex="1"
      />
      <div className="kitty"></div>
      <label htmlFor="toggle" className="well"></label>
    </Container>
  )
}
