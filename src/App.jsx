import { useEffect, useState } from "react";
import "./App.css";
import { FiDivide, FiX, FiDelete, FiMinus, FiPlus } from "react-icons/fi";
import { FaEquals } from "react-icons/fa";
import { PiDotOutlineFill } from "react-icons/pi";
function App() {
  const [input, setInput] = useState("0");

  const handleInputValue = (e) => {
    e.preventDefault();
    let value = e.target.value;
    switch (value) {
      case "AC":
        setInput("0");
        break;
      case "=":
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      case "delete":
        setInput(input?.slice(0, input.length - 1));
        break;
      case "Error":
        setInput("0");
        break;
      default:
        setInput(input === "0" ? value : input + value);
    }
  };
  useEffect((value) => {
    switch (value) {
      case "Error":
        setInput("0");
        break;
      default:
        setInput(input === "0" || input === "Error" ? value : input + value);
    }
  }, []);
  return (
    <>
      <div className=" container-fluid w-screen h-screen flex justify-center">
        <div className="row w-full h-full flex justify-center items-center bg-gradient-to-t from-purple-400 to-pink-700">
          <div className=" col w-96 h-auto">
            <div className="card border bg-gray rounded-lg shadow-2xl p-4 w-full">
              <div className="card-header w-full bg-gray-400 rounded-lg">
                <h1 className="text-2xl text-center my-5 py-2 font-semibold text-white">
                  Calculator
                </h1>
              </div>
              <div className="card-body w-full">
                <form action="" className="w-full">
                  <div className=" w-full">
                    <input
                      name="input"
                      value={input}
                      type="text "
                      className="w-full font-bold text-2xl input my-2 h-8 focus:outline-none px-5 "
                    />
                    <div className="button-group gap-3 w-full flex flex-col my-5">
                      <div className="gorup1 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          value={"AC"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 hover:p-8 w-16"
                        >
                          AC
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"/"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FiDivide />
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"*"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FiX />
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"delete"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FiDelete />
                        </button>
                      </div>
                      <div className="gorup2 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          value={7}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          7
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={8}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          8
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={9}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          9
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"-"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FiMinus />
                        </button>
                      </div>
                      <div className="gorup3 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          value={4}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          4
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={5}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          5
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={6}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          6
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"+"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <div className="gorup4 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          value={1}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          1
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={2}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          2
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={3}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          3
                        </button>
                        <button className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"></button>
                      </div>
                      <div className="gorup5 flex justify-between">
                        <button
                          onClick={handleInputValue}
                          value={"."}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <PiDotOutlineFill />
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={1}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          1
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"%"}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          %
                        </button>
                        <button
                          onClick={handleInputValue}
                          value={"="}
                          className="text-white  rounded-xl transition delay-50 hover:Scale-105 hover:bg-white bg-purple-400 text-lg font-bold hover:text-black shadow-lg  p-5 w-16"
                        >
                          <FaEquals />
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
