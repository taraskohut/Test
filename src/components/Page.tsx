import { useState } from "react";

import Svg from "../components/Svg.jsx";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmTogglePasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|gmail\.com)$/;

    const [day, month, year] = date.split("/").map(Number);
    const selectedDate = new Date(year, month - 1, day);

    const currentDate = new Date();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return (
      username.trim().length > 3 &&
      date.trim() !== "" &&
      selectedDate <= currentDate &&
      email.trim() !== "" &&
      emailRegex.test(email.trim()) &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword &&
      passwordRegex.test(password.trim()) &&
      agreed
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      const formData = {
        username,
        date,
        email,
        password,
        confirmPassword,
        agreed,
      };
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col  items-start p-10 w-screen ">
        <div className="w-86 h-18">
          <h1 className="font-semibold text-3xl leading-relaxed text-black">
            Let’s get you started
          </h1>
          <div className="flex flex-row space-x-4">
            <p className="font-normal text-base leading-6 text-gray-700">
              Already have account?
            </p>
            <a
              href="/login"
              className="font-medium text-base leading-6 text-blue-500"
            >
              Login
            </a>
          </div>
        </div>
        <div>
          <div className="w-86 h-20 ">
            <h1 className="font-normal text-base leading-6 text-black">
              Username
            </h1>
            <div className="border-2 border-solid border-gray-300 rounded-lg p-3 w-86 h-12 bg-white">
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="w-86 h-20 ">
            <h1 className="font-normal text-base leading-6 text-black">
              Date of birth
            </h1>
            <div className="border-2 border-solid border-gray-300 rounded-lg p-3 w-86 h-12 bg-white">
              <input
                type="text"
                placeholder="DD / MM / YYYY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="w-86 h-20  ">
            <h1 className="font-normal text-base leading-6 text-black">
              Email address
            </h1>
            <div className="border-2 border-solid border-gray-300 rounded-lg p-3 w-86 h-12 bg-white">
              <input
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-86 h-32 ">
            <h1 className="font-normal text-base leading-6 text-black">
              Password
            </h1>
            <div className="flex flex-row items-center justify-between border-2 border-solid border-gray-300 rounded-lg p-3 w-86 h-12 bg-white">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleTogglePasswordVisibility}>
                <Svg />
              </button>
            </div>
            <p className="font-normal  text-sm leading-snug text-gray-700 mt-3">
              Password should contain at least 8 characters, 1 special symbol
              character, 1 number, 1 uppercase letter
            </p>
          </div>

          <div className="w-86 h-20 mt-10">
            <h1 className="font-normal text-base leading-6 text-black">
              Confirm password
            </h1>
            <div className="flex flex-row items-center justify-between border-2 border-solid border-gray-300 rounded-lg p-3 w-86 h-12 bg-white">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={handleConfirmTogglePasswordVisibility}>
                <Svg />
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row  items-center gap-4 mt-6">
              <input
                type="checkbox"
                className="border border-gray-300 rounded-md w-10 h-6 "
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span className="flex flex-row  font-normal text-base leading-6 text-black ">
                <p>
                  I agree to the&nbsp;
                  <a
                    href="/toc"
                    className="underline antialiased text-blue-500 "
                  >
                    Terms and Conditions
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="/privacy-policy"
                    className="underline antialiased text-blue-500"
                  >
                    Privacy Policy
                  </a>
                  &nbsp;of this app.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`rounded-md px-5 py-2 w-64 h-12 ${
          isFormValid() ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700"
        }`}
        disabled={!isFormValid()}
        onClick={handleSubmit}
      >
        Create Account
      </button>
    </div>
  );
};

export default Page;
