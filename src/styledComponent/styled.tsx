import styled, { DefaultTheme, StyledComponent } from "styled-components";

export const InpSubmit = styled.input`
  all: unset;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 3px;
  filter: ${(props) => (props.disabled ? "saturate(0)" : "saturate(50%)")};
  background-color: #b2dffc;
  color: #fff;
  padding: 7px 0;
  border-radius: 3px;
  margin-top: 5px;
  cursor: ${(props) => (props.disabled ? "none" : "pointer")};

  &:first-of-type:hover {
    background-color: #9cccec;
  }
`;

interface IInp {
  hasError?: boolean;
}

export const Inp = styled.input<IInp>`
  all: unset;
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  padding: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
  border-width: ${(props) => (props.hasError ? "2px" : "1px")};
  border-style: solid;
  border-color: ${(props) => (props.hasError ? "tomato" : "#ebe5e5")};
  border-radius: 3px;
  background-color: #fafafa;
`;

export const Btn = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 3px;
`;

export const BtnFBLoginBg = styled(Btn)`
  font-size: 14px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 9px 0;
  font-size: 14px;

  img {
    margin: 0 10px;
  }
`;

export const AppdownDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;

  img {
    display: block;
  }
`;

export const BtnLogin = styled(Btn)`
  background-color: #b2dffc;
  color: #fff;
  padding: 10px 0;
  margin-top: 5px;
  cursor: pointer;

  &:first-of-type:hover {
    background-color: #9cccec;
  }
`;

export const WhiteBoxDiv = styled.div`
  background-color: #fff;
  color: #1b1919;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  font-size: 13px;
  color: #777;

  div {
    height: 1px;
    width: 113px;
    background-color: #777;
    border-radius: 5%;
  }
`;

export const Footer = styled.footer`
  margin-top: 70px;
  padding-bottom: 50px;
  font-family: "Segoe UI, Roboto";
  font-size: 12px;
  color: #828282;

  div:first-of-type {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    span {
      margin: 5px 15px;
    }
  }

  div:nth-of-type(2) {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
`;
