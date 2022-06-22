import styled, { css } from "styled-components";

import { darken, lighten } from "polished";
import media from "styled-media-query";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;

    ${media.lessThan("large")`
      padding: 0 ${theme.spacings.xsmall};
    `}
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    box-shadow: 4px 6px 13px rgba(215, 215, 215, 0.25);

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};

    span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.primary};
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const Nav = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    flex-direction: column;
    margin: auto;
  `}
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: ${theme.colors.black};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} 0;
    position: relative;
    border-bottom: 1px dashed transparent;
    transition: border ${theme.transition.fast};
    font-weight: ${theme.font.bold};

    &:hover {
      border-color: ${theme.colors.primary};
      color: ${lighten(0.1, theme.colors.black)};
    }

    ${media.lessThan("medium")`
      margin-right: 0;
      margin-bottom: ${theme.spacings.small};
    `}
  `}
`;

export const BuyButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    outline: none;
    cursor: pointer;
    border: none;
    transition: background-color ${theme.transition.fast};
    border-radius: ${theme.border.radius};

    &:hover {
      background-color: ${darken(0.02, theme.colors.primary)};
    }
  `}
`;

export const ButtonImageWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    svg {
      display: none;
    }

    ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      opacity: ${isOpen ? 1 : 0};
      pointer-events: ${isOpen ? "all" : "none"};
      position: absolute;
      background-color: ${theme.colors.white};
      left: 0;
      top: 0;
      align-items: center;
      justify-content: center;
      transition: opacity ${theme.transition.fast};

      svg {
        display: block;
        position: absolute;
        right: ${theme.spacings.xxsmall};
        top: ${theme.spacings.xxsmall};
      }

      ${Nav} {
        transform: translateY(${isOpen ? 0 : "100px"});
        transition: transform ${theme.transition.fast};
      }
    `}
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
