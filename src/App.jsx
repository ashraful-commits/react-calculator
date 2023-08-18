import { useEffect, useState } from "react";
import "./App.css";
import { FiDivide, FiX, FiDelete, FiMinus, FiPlus } from "react-icons/fi";
import { FaEquals } from "react-icons/fa";
import { PiDotOutlineFill } from "react-icons/pi";
function App() {
  const [input, setInput] = useState("0");

  const handleInputValue = (e) => {
    e.preventDefault();

    const value = e.target.name;

    switch (value) {
      case "AC":
        setInput("0");
        break;
      case "undefined":
        setInput("");
        break;
      case "NaN":
        setInput("");
        break;
      case "delete":
        setInput((prevInput) => prevInput?.slice(0, prevInput.length - 1));
        break;
      case "=":
        try {
          setInput((prevInput) => eval(prevInput).toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      default:
        setInput((prevInput) =>
          prevInput === "0" ? value : prevInput + value
        );
    }
  };

  useEffect(() => {
    if (
      input === "NaN" ||
      input === "Error" ||
      input === "delete" ||
      input === "/" ||
      input === "*" ||
      input === "%" ||
      input === "-" ||
      input === "+" ||
      input === "="
    ) {
      setInput("0");
    }
  }, [input]);

  return (
    <>
      <div className=" container-fluid w-screen h-screen flex justify-center">
        <div className="row w-full h-full flex justify-center items-center bg-gradient-to-t from-purple-400 to-pink-700">
          <div className=" col w-96 h-auto">
            <div className="card border bg-gray rounded-lg shadow-2xl p-4 w-full">
              {/* <div className="card-header w-full bg-white rounded-lg">
                <h1 className="text-2xl text-center my-5 py-2 font-semibold text-black">
                  Calculator
                </h1>
              </div> */}
              <div className="card-body w-full">
                <form action="" className="w-full">
                  <div className=" w-full">
                    <input
                      name="input"
                      value={input}
                      type="text "
                      className="w-full font-bold text-2xl input my-2 h-14 rounded-md focus:outline-none px-5 "
                    />
                    <div className="button-group gap-3 w-full flex flex-col my-5">
                      <div className="gorup1 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          name="AC"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 hover:p-8 w-16"
                        >
                          AC
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="/"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FiDivide className="cursor-not-allowed" />
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="*"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FiX className="cursor-not-allowed" />
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="delete"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FiDelete className="cursor-not-allowed" />
                        </button>
                      </div>
                      <div className="gorup2 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          name="7"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          7
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="8"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          8
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="9"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          9
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="-"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FiMinus className="cursor-not-allowed" />
                        </button>
                      </div>
                      <div className="gorup3 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          name="4"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          4
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="5"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          5
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="6"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          6
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="+"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FiPlus className="cursor-not-allowed" />
                        </button>
                      </div>
                      <div className="gorup4 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          name="1"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          1
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="2"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          2
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="3"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          3
                        </button>
                        <button
                          onClick={handleInputValue}
                          name=""
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        ></button>
                      </div>
                      <div className="gorup5 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          name="."
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <PiDotOutlineFill className="cursor-not-allowed" />
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="0"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          0
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="%"
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          %
                        </button>
                        <button
                          onClick={handleInputValue}
                          name="="
                          className=" text-gray hover:text-white  rounded-xl transition delay-50 hover:scale-125 bg-gradient-to-t from-gray-500 to-gray-200 text-lg font-bold  shadow-lg hover:from-pink-500 hover:to-purple-500 p-5 w-16"
                        >
                          <FaEquals className="cursor-not-allowed" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
