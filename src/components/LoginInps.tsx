import React from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import styled from "styled-components";
import { setLogin } from "../apolloClient";
import inputInfo from "../consts/inputInfo";
import {
  InpSubmit,
  WhiteBoxDiv,
  Inp,
  Divider,
  Btn,
} from "../styledComponent/styled";

const TopBoxDiv = styled(WhiteBoxDiv)`
  border: 1px solid #ebe5e5;
  padding: 0 35px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #logo {
    margin: 25px 0 30px;
  }

  form {
    width: 100%;
  }

  a {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #00376b;
    margin: 15px 0;
    cursor: pointer;
  }
`;

const BtnFBLogin = styled(Btn)`
  color: #385185;
  font-size: 14px;
  margin: 10px 0 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 10px;
  }
`;

const fbLoginClickHandler = () => {};

interface IFormInp {
  mobileEmail: string;
  password: string;
}

const validOnSubmit = (inp: IFormInp) => {
  console.log("good ", inp);
  return setLogin(true);
};

const invalidOnSubmit = (err: DeepMap<IFormInp, FieldError>) => {
  console.log("bad ", err);
};

interface LoginInpsProps {}

export const LoginInps: React.FC<LoginInpsProps> = ({}) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInp>();

  return (
    <TopBoxDiv>
      <img
        id='logo'
        width='180px'
        src='https://lohacell.img10.kr/images/insta.png'
        alt='instagram logo'
        title='instagram logo'
      />
      <form onSubmit={handleSubmit(validOnSubmit, invalidOnSubmit)}>
        <Inp
          {...register(inputInfo.mobileemail, inputInfo.mobileeamilConstraints)}
          type='email'
          placeholder='Phone number, username, or email'
        />
        <Inp
          {...register(inputInfo.password, inputInfo.passwordConstraints)}
          type='password'
          placeholder='Password'
        />
        <InpSubmit type='submit' value='Log in' />
        <Divider>
          <div></div>
          <span>OR</span>
          <div></div>
        </Divider>
        <BtnFBLogin onClick={fbLoginClickHandler}>
          <img
            width='16px'
            src='https://image.flaticon.com/icons/png/512/124/124010.png'
            alt='facebook logo'
            title='facebook logo'
          />
          Log in with Facebook
        </BtnFBLogin>
        <a>Forgot password?</a>
      </form>
    </TopBoxDiv>
  );
};
