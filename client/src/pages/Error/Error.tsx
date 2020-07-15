// ========== //
//   IMPORT   //
// ========== //
import React, { ReactElement } from "react";
import styled from "styled-components";

// ============== //
//   INTERFACES   //
// ============== //
interface Props {
  title: string;
}

// ===================== //
//     DEFAULT PROPS     //
// ===================== //
Error.defaultProps = {
  title: "Error",
};

// ========== //
//   EXPORT   //
// ========== //
export default function Error(props: Props): ReactElement {
  // ========== //
  //   RETURN   //
  // ========== //
  return (
    <StyledRoot color={"red"}>
      <h1>{props.title}</h1>
    </StyledRoot>
  );
}

// ========================= //
//     STYLED COMPONENTS     //
// ========================= //
const StyledRoot = styled.main<{ color: string }>`
  h1 {
    color: ${(props) => props.theme.color[props.color]};
  }
`;
