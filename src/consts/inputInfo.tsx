interface IConstraint {
  required: boolean;
  minLength: number | { value: number; message: string };
  maxLength: number | { value: number; message: string };
}

interface IInfo {
  mobileemail: "mobileEmail";
  fullname: "fullName";
  username: "userName";
  password: "password";
  mobileeamilConstraints: IConstraint;
  fullnameConstraints: IConstraint;
  usernameConstraints: IConstraint;
  passwordConstraints: IConstraint;
}

const info: IInfo = {
  mobileemail: "mobileEmail",
  fullname: "fullName",
  username: "userName",
  password: "password",
  mobileeamilConstraints: {
    required: true,
    minLength: { value: 5, message: "too short" },
    maxLength: { value: 25, message: "too long" },
  },
  fullnameConstraints: {
    required: true,
    minLength: { value: 3, message: "too short" },
    maxLength: { value: 25, message: "too long" },
  },
  usernameConstraints: {
    required: true,
    minLength: { value: 3, message: "too short" },
    maxLength: { value: 25, message: "too long" },
  },
  passwordConstraints: {
    required: true,
    minLength: { value: 3, message: "too short" },
    maxLength: { value: 25, message: "too long" },
  },
};

export default info;
