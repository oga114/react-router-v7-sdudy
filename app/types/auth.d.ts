export interface LoginForm {
  username?: string;
  password?: string;
}

export type RequiredLoginForm = Required<LoginForm>;

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export type RequiredRegisterForm = Required<RegisterForm>;
