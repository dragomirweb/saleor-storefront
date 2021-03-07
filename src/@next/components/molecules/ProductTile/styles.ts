import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  /* margin: 0 0 0.5rem 0; */
  text-align: center;
`;

export const Wrapper = styled.div`
  /* background: ${props => props.theme.colors.light}; */
  /* padding: 2.5rem; */
  padding: 1rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  :hover {
    /* background-color: ${props => props.theme.colors.light}; */
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
  font-size: 0.9em;
  font-weight: 300;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 4px;
    transition: 0.3s all ease-in-out;

    &:hover {
      border-radius: 4px;
      transform: scale(1.1);
    }
  }
`;
