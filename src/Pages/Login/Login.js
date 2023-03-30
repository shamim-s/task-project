import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../../context/Context";

const Login = () => {
    const navigate = useNavigate();
    const {email, password, setUserEmail} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const loginEmail = e.target.email.value;
        const lofinPassword = e.target.password.value;

        if (email === loginEmail && lofinPassword === password) {
            setUserEmail(loginEmail);
            navigate('/home');
        }
        else{
            window.alert('Invalid email password');
        }
    }
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#FFF] text-[#181818]">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handleLogin}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#FFF] text-[#181818]"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#FFF] text-[#181818]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="btn w-full bg-[#181818] text-[#FFF]"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-[#181818]"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
