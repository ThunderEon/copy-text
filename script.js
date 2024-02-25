const COPY_BTN = document.querySelector(".container button");
const TEXT_AREA = document.querySelector(".container textarea");

COPY_BTN.addEventListener("click", () => {
  if (TEXT_AREA.value !== "") {
    TEXT_AREA.select();

    let text = TEXT_AREA.value;
    navigator.clipboard.writeText(text);

    COPY_BTN.style.backgroundColor = "#0C778A";
    COPY_BTN.style.color = "#D8EDE5";
    COPY_BTN.innerHTML = "کپی شد";

    setTimeout(() => {
      COPY_BTN.style.backgroundColor = "#f1f0f0";
      COPY_BTN.style.color = "#0f6496";
      COPY_BTN.innerHTML = "کپی کن";
      TEXT_AREA.value = "";
    }, 1500);
  }
});
