let index = 0;
let attempts = 0;

function appStart() {
  const handleEnterKey = () => {};

  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );
    if (e.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
