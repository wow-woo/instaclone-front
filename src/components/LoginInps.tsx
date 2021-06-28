import { gql, useMutation, useReactiveVar } from "@apollo/client";
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
import { ErrorField } from "./ErrorField";

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
const invalidOnSubmit = (err: DeepMap<IFormInp, FieldError>) => {
  console.log("bad ", err);
};

interface LoginInpsProps {}

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

const onError = (e: any) => {
  console.log("eee ", e);
};
export const LoginInps: React.FC<LoginInpsProps> = ({}) => {
  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    setError,
  } = useForm<IFormInp>({
    mode: "onChange",
  });

  const onCompleted = (data: any) => {
    console.log("get a response", data);
    const {
      login: { ok, error, token },
    } = data;

    token && setLogin(token);
  };
  const [login, { loading: loginLoading, data }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
    onError,
  });

  const validOnSubmit = (inp: IFormInp) => {
    console.log("good ", inp);
    const { mobileEmail, password } = inp;

    login({
      variables: { userName: mobileEmail, password },
    }).catch((e) => console.log("ee ", e));

    // return setLogin(true);
  };

  return (
    <TopBoxDiv>
      <img
        id='logo'
        width='180px'
        src='https://lohacell.img10.kr/images/insta.png'
        alt='instagram logo'
        title='instagram logo'
      />
      <form onSubmit={handleSubmit(validOnSubmit)}>
        <Inp
          {...register(inputInfo.mobileemail, inputInfo.mobileeamilConstraints)}
          type='text'
          placeholder='Phone number, username, or email'
          hasError={!!errors[inputInfo.mobileemail]?.message}
        />
        {errors[inputInfo.mobileemail] && (
          <ErrorField
            error={errors && errors[inputInfo.mobileemail]?.message}
          />
        )}
        <Inp
          {...register(inputInfo.password, inputInfo.passwordConstraints)}
          type='password'
          placeholder='Password'
          hasError={!!errors[inputInfo.password]?.message}
        />
        {errors[inputInfo.password] && (
          <ErrorField error={errors && errors[inputInfo.password]?.message} />
        )}
        <InpSubmit
          type='submit'
          value={loginLoading ? "Loading..." : "Log in"}
          disabled={loginLoading}
        />
        {data?.login?.error && <ErrorField error={data?.login?.error} />}
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
