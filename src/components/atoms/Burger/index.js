import React from 'react';
import PropTypes from 'prop-types';
import { Burger } from './styledComponents';

const Hamburger = ({ open, setOpen }) => (
  <Burger className={`burger ${open && 'opened'}`} open={open} onClick={() => setOpen(!open)} >
    <div />
    <div />
    <div />
  </Burger>
)

Hamburger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default Hamburger;
