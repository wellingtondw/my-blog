import { Container } from "components/Container";
import styled, { css, keyframes } from "styled-components";
import media from "styled-media-query";

const Bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-15px);} 
  60% {transform: translateY(-10px);} 
`;

const ToTop = keyframes`
  0% { opacity: 0; transform: translateY(30px);}
  100% {opacity: 1; transform: translateY(0px);} 
`;

const ToLeft = keyframes`
  0% { opacity: 0; transform: translateX(30px);}
  100% {opacity: 1; transform: translateX(0px);} 
`;

export const PresentationWrapper = styled.div`
  background-image: url("/images/ellipse.svg");
`;

export const PresentationContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 72px);
  min-height: 900px;
  position: relative;

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Presentation = styled.div`
  ${({ theme }) => css`
    order: 1;
    margin-right: ${theme.spacings.xxsmall};
    max-width: 660px;
    padding: 0 ${theme.spacings.xxsmall};
    animation: ${ToTop};
    animation-duration: 2s;

    > h2 {
      font-size: ${theme.font.sizes.xxxhuge};
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.xsmall};

      > span {
        color: ${theme.colors.primary};
      }
    }

    > p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.grey};
      border-left: 3px solid ${theme.colors.black};
      padding-left: ${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.small};
    }

    ${media.lessThan("medium")`
      order: 2;


      > h2 {
        font-size: ${theme.font.sizes.huge};
      }
    `}
  `}
`;

export const SocialSection = styled.div`
  ${({ theme }) => css`
    > a {
      margin-right: ${theme.spacings.small};
    }
  `}
`;

export const PresentationImage = styled.div`
  ${({ theme }) => css`
    max-width: 500px;
    width: 100%;
    order: 2;
    animation: ${ToLeft};
    animation-duration: 1s;

    ${media.lessThan("medium")`
      order: 1;
      margin-bottom: ${theme.spacings.medium};
      max-width: 380px;
      max-height: 380px;
    `}
  `}
`;

export const KeyboardArrowDownIcon = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
    cursor: pointer;
    color: ${theme.colors.black};
    left: 45%;

    &:hover {
      animation-name: ${Bounce};
      animation-duration: 1.2s;
    }

    ${media.lessThan("medium")`
      left: auto;
    `}
  `}
`;
