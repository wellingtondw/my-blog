import Image from "next/image";

import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@styled-icons/material";

import { Header } from "components/Header";

import * as S from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <S.PresentationWrapper>
        <S.PresentationContainer>
          <S.Presentation>
            <h2>
              Hi, I’m Wellington Frontend <span>dev</span>
            </h2>
            <p>
              On this blog I share tips and tricks, frameworks, projects,
              tutorials, etc
              <br />
              Make sure you subscribe to get the latest updates
            </p>

            <S.SocialSection>
              <a href="#">
                <Image src="/images/instagram.svg" width={24} height={24} />
              </a>

              <a href="#">
                <Image src="/images/linkedin.svg" width={24} height={24} />
              </a>
            </S.SocialSection>
          </S.Presentation>

          <S.PresentationImage>
            <Image
              src="/images/me.jpg"
              width={500}
              height={500}
              layout="responsive"
              alt="It's Me"
            />
          </S.PresentationImage>

          <S.KeyboardArrowDownIcon
            as={KeyboardArrowDownIcon}
            width={48}
            height={48}
          />
        </S.PresentationContainer>
      </S.PresentationWrapper>
    </>
  );
};
