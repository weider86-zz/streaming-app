import React from 'react'
import styled from 'styled-components'
import moon from '../../../assets/images/moon.svg'
import sun from '../../../assets/images/sun.svg'

const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  .theme-switch {
    display: inline-block;
    height: 28px;
    position: relative;
    width: 54px;
  }
  .theme-switch input {
    display: none;
  }
  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }
  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }
  input:checked + .slider {
    background-color: #268ee6;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`

const ThemeMode = ({ theme, changeTheme }) => {
  return (
    <>
      <ThemeSwitch>
        <div>
          <label className="theme-switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={theme === 'light'}
              onChange={changeTheme}
            />
            <div className="slider round"></div>
          </label>
        </div>
        <div>
          {theme === 'light' ? (
            <img src={sun} alt={theme} width={'30px'} />
          ) : (
            <img src={moon} alt={theme} width={'30px'} />
          )}
        </div>
      </ThemeSwitch>
    </>
  )
}

export { ThemeMode }
