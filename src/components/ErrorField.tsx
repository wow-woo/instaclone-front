import React from "react";
import styled from "styled-components";

const StyledErrorField = styled.div`
  color: ${(ele) => ele.theme.errColor};
`;

interface ErrorFieldProps {
  error: string | undefined;
}

export const ErrorField: React.FC<ErrorFieldProps> = ({ error }) => {
  return <StyledErrorField>{error}</StyledErrorField>;
};
