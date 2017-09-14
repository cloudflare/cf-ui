import React from 'react';
import { Box } from 'cf-component-box';
import { Header, NavList, NavItem, Hamburger } from 'cf-component-header';
import { Logo } from 'cf-component-logo';

const ViewComponent = () => (
  <Header>
    <Box display="flex">
      <Hamburger onClick={() => console.log('Yum! Hamburger')} />
      <a href="#">
        <Logo />
      </a>
    </Box>
    <NavList>
      <NavItem>One</NavItem>
      <NavItem>Two</NavItem>
      <NavItem>Three</NavItem>
    </NavList>
  </Header>
);

export default ViewComponent;
