import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const NavbarSection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;
export const Logo = styled.div`
  width: 50%;
  float: left;
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`display: inline-block;`;

export const Anchor = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;

// @media (min-width : 992px) {
//     .navbar label {
//         display: none
//     }
// }

// @media (max-width : 991px) {
//     .navbar .logo {
//         width: 100%;
//         float: none;
//     }

//     .navbar .ul-list {
//         width: 100%;
//         float:  none;
//         margin-top: 20px;
//         display: none
//     }

//     .navbar .ul-list .list-item {
//         display: block;
//         text-align: center;
//     }
// }
