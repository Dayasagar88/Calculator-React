const Inputs = ({ setValue, clearValues, removeValue, setResult, setHistory }) => {
  
  const inputs = [
    "AC",
    <i className=" -ml-1 fa-solid fa-delete-left"></i>,
    "%",
    "÷",
    "1",
    "2",
    "3",
    "×",
    "4",
    "5",
    "6",
    "−",
    "7",
    "8",
    "9",
    "+",
    ".",
    "0",
    ".",
    "=",
  ];

  const handleButtonClick = (input) => {
    if (typeof input === "string") {
      switch (input) {
        case "AC":
          handleClear();
          break;
        default:
          handleInput(input);
          break;
      }
    }
  };

  const handleClear = () => {
    clearValues("");
    setHistory("")
  };

  const handleInput = (input) => {
    setValue(input);
  };



  return (
    <div className="grid h-[70%] grid-cols-4 items-center  p-2 grid-rows-5 font-semibold text-3xl py-4 px-2 gap-2 bg-black">
      {inputs.map((input, index) =>
        index === inputs.length - 1 ? (
          <button
            onClick={setResult}
            key={index}
            className="bg-red-600 aspect-square rounded-full transition-bg duration-150 active:bg-red-500"
          >
            {input}
          </button>
        ) : (
          <button
            onClick={() => {
              index === 1 ? removeValue() : handleButtonClick(input);
            }}
            key={index}
            className="bg-gray-600 aspect-square rounded-full transition-bg duration-150 active:bg-slate-500"
          >
            {input}
          </button>
        )
      )}
    </div>
  );
};

export default Inputs;
