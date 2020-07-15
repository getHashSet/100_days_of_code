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
Home.defaultProps = {
  title: "Home",
};

// ========== //
//   EXPORT   //
// ========== //
export default function Home(props: Props): ReactElement {
  // ========== //
  //   RETURN   //
  // ========== //
  return (
    <StyledRoot>
      <h1>{props.title}</h1>
    </StyledRoot>
  );
}

// ========================= //
//     STYLED COMPONENTS     //
// ========================= //
const StyledRoot = styled.main`
  h1 {
    color: ${(props) => props.theme.color.blue};
  }
`;
