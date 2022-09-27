import React, { useState, useRef } from "react"
import { useOnClickOutside } from '../../../hooks';
import Burger from '../burger/Burger.js'
import Menu from '../menu/index.js'
import { MobileMenuContainer } from './header.styles.js'


function MobileMenu() {

  const [open, setOpen] = useState(false);
  // hook that help to close the menu when user click outside of menu
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <MobileMenuContainer>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </MobileMenuContainer>
  )
}

export default MobileMenu