interface IConstraint {
  required: boolean;
  minLength: number;
  maxLength: number;
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
  mobileeamilConstraints: { required: true, minLength: 7, maxLength: 25 },
  fullnameConstraints: { required: true, minLength: 2, maxLength: 25 },
  usernameConstraints: { required: true, minLength: 2, maxLength: 25 },
  passwordConstraints: { required: true, minLength: 4, maxLength: 25 },
};

export default info;
