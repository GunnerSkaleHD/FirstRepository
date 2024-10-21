import { PButton } from "@porsche-design-system/components-react";
import {
  headingLargeStyle,
  displayMediumStyle,
  textMediumStyle,
  getHoverStyle,
  getFocusStyle,
  themeLightPrimary,
} from "@porsche-design-system/components-react/styles";
import styled from "styled-components";
import React from "react";

export const Site = styled.div`
  background-color: white;
  text-align: center;
`;
export const Image = styled.img`
  padding: 10px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;
export const StyledPHeading = styled.h2({
  ...displayMediumStyle,
  margin: 20,
});

export const StyledCharacterName = styled.h2({
  ...headingLargeStyle,
});
export const StyledLink = styled.a({
  ...textMediumStyle,
  ...getHoverStyle(),
  color: themeLightPrimary,
});

export const StyledButton = styled(PButton)`
  margin: 10;
`;
