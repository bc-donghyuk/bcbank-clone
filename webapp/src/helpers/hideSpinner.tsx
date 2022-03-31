const hideSpinner = () => {
  let spinner = document.getElementById("spinner-container");
  if (spinner) {
    spinner.classList.add("fade-out");
    setTimeout(() => {
      spinner = document.getElementById("spinner-container");
      if (spinner) {
        const parent = spinner.parentNode;
        parent.removeChild(spinner);
      }
    }, 1000);
  }
};

export default hideSpinner;
