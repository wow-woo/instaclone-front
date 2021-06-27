import React from "react";
import { setLogin, setMode } from "../apolloClient";
import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import {
  BtnFBLoginBg,
  BtnLogin,
  Divider,
  Inp,
  WhiteBoxDiv,
  Footer,
  AppdownDiv,
} from "../styledComponent/styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../consts/routes";
import { PageLayout } from "../pages/PageLayout";
import { SignupInps } from "../components/SignupInps";

const Select = styled.div`
  position: relative;

  span {
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: top;
    color: rgba(var(--f52, 142, 142, 142), 1);

    div {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 0 solid;
      flex-shrink: 0;
      margin: 0;
      vertical-align: baseline;
    }
    select {
      all: unset;
      cursor: pointer;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

const BottomBoxDiv = styled(WhiteBoxDiv)`
  border: 1px solid #ebe5e5;
  width: 350px;
  margin-top: 13px;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  margin: 0 auto;
`;

const Card = styled.section`
  margin-top: 50px;
  width: 350px;

  p {
    font-family: "Segoe UI, Roboto";
    text-align: center;
    padding: 20px 0;
    font-weight: 300;
  }
`;

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
  const currentMode = useReactiveVar(setMode);

  return (
    <PageLayout title='Sign up | Instagram'>
      <Container>
        <Main>
          <Card>
            <SignupInps />
            <BottomBoxDiv>
              <div>
                Have an account? <Link to={routes.login}>Log in</Link>
              </div>
            </BottomBoxDiv>

            <p>Get the app.</p>

            <AppdownDiv>
              <img
                width='140px'
                height='45px'
                src='data:image/png;base64,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'
                alt='Apple Store'
                title='Apple Store'
              />
              <img
                width='140px'
                height='45px'
                src='https://support.okex.co.kr/hc/article_attachments/360031108551/gp.png'
                alt='Google Play'
                title='Google Play'
              />
            </AppdownDiv>
          </Card>
        </Main>
        <Footer>
          <div>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Accounts</span>
            <span>Hashtags</span>
            <span>Locations</span>
          </div>
          <div>
            <Select>
              <span>
                <div>
                  <span>English</span>
                  <div>
                    <span>
                      <svg></svg>
                    </span>
                  </div>
                </div>
                <select>
                  <option value='english' defaultValue='english'>
                    English
                  </option>
                  <option value='korean'>Korean</option>
                  <option value='japanese'>Japanese</option>
                </select>
              </span>
            </Select>
            <span>&copy; 2021 Instagram from Facebook</span>
          </div>
        </Footer>
      </Container>
    </PageLayout>
  );
};
