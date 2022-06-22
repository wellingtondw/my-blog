import { useState } from "react";
import Image from "next/image";

import { Menu as MenuIcon } from "@styled-icons/material";
import { Close as CloseIcon } from "@styled-icons/material";

import { MediaMatch } from "components/MediaMatch";
import { Container } from "components/Container";

import * as S from "./styles";

type HeaderProps = {
  onClickBuy?: () => void;
};

export const Header = ({ onClickBuy }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBuy = () => {
    !!onClickBuy && onClickBuy();
  };

  return (
    <S.Header>
      <Container>
        <S.Logo>
          Wo
          <span>.sk</span>
        </S.Logo>

        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon width={32} height={32} aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <S.MenuFull isOpen={isOpen}>
          <S.IconWrapper onClick={() => setIsOpen(false)}>
            <CloseIcon width={32} height={32} aria-label="Close Menu" />
          </S.IconWrapper>

          <S.Nav>
            <S.NavItem href="#">Home</S.NavItem>
            <S.NavItem href="#">Category</S.NavItem>
            <S.NavItem href="#">Blog</S.NavItem>

            <S.BuyButton onClick={handleClickBuy}>
              <S.ButtonImageWrapper>
                <Image
                  width={20}
                  height={20}
                  src="/images/coffee.svg"
                  alt="Coffee Icon"
                />
              </S.ButtonImageWrapper>
              Buy Me A Coffee
            </S.BuyButton>
          </S.Nav>
        </S.MenuFull>
      </Container>
    </S.Header>
  );
};
