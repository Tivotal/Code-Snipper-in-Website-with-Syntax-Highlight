/* Created by Tivotal */

hljs.highlightAll();

let copyBtn = document.querySelector(".copy-btn");
let codeWrapper = document.querySelector(".code-wrapper");

copyBtn.addEventListener("click", () => {
  let codeText = codeWrapper.textContent;

  navigator.clipboard.writeText(codeText).then(
    () => {
      copyBtn.textContent = "Copied!";
      copyBtn.style.color = "green";

      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.style.color = "#4070f4";
      }, 1000);
    },
    () => {
      alert("Error in copying the code");
    }
  );
});
