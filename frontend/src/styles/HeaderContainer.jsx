import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 16px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px
`;

export { HeaderContainer, NavList, NavItem, NavLink, Button };