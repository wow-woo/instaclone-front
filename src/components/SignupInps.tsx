// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import styled from "styled-components";
import { setLogin } from "../apolloClient";
import inputInfo from "../consts/inputInfo";
import {
  InpSubmit,
  WhiteBoxDiv,
  BtnFBLoginBg,
  Divider,
  Inp,
  BtnLogin,
} from "../styledComponent/styled";

const TopBoxDiv = styled(WhiteBoxDiv)`
  border: 1px solid #ebe5e5;
  padding: 0 35px 38px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #logo {
    margin-top: 25px;
    margin-bottom: -8px;
  }

  p {
    font-size: 17px;
    font-weight: 700;
    color: #8e8e8e;
  }

  form {
    width: 100%;
  }
`;

interface IFormInp {
  mobileEmail: string;
  fullName: string;
  userName: string;
  password: string;
}
const validOnSubmit = (inp: IFormInp) => {
  console.log("good ", inp);
  return setLogin(true);
};
const invalidOnSubmit = (error: DeepMap<IFormInp, FieldError>) => {
  console.log("bad ", error);
};

interface SignupInpsProps {}

export const SignupInps: React.FC<SignupInpsProps> = ({}) => {
  const { register, watch, handleSubmit } = useForm<IFormInp>();
  console.log("w ", watch());

  return (
    <TopBoxDiv>
      <img
        id='logo'
        width='180px'
        src='https://lohacell.img10.kr/images/insta.png'
        alt='instagram logo'
        title='instagram logo'
      />
      <p>
        Sign up to see photos and videos <br />
        from your friends.
      </p>
      <form onSubmit={handleSubmit(validOnSubmit, invalidOnSubmit)}>
        <BtnFBLoginBg>
          {/* <FontAwesomeIcon icon='facebook' color='#fff' size='3x' /> */}
          Log in with Facebook
        </BtnFBLoginBg>
        <Divider>
          <div></div>
          <span>OR</span>
          <div></div>
        </Divider>
        <Inp
          {...register(inputInfo.mobileemail, inputInfo.mobileeamilConstraints)}
          placeholder='Mobile Number or Email'
        />
        <Inp
          {...register(inputInfo.fullname, inputInfo.fullnameConstraints)}
          placeholder='Full Name'
        />
        <Inp
          {...register(inputInfo.username, inputInfo.usernameConstraints)}
          placeholder='Username'
        />
        <Inp
          {...register(inputInfo.password, inputInfo.passwordConstraints)}
          placeholder='Password'
        />
        <InpSubmit type='submit' value='Sign up' />
      </form>
    </TopBoxDiv>
  );
};
