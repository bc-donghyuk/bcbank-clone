export const redirectToLanding = () => {
  window.location.href = window.location.origin.replace(/webapp\./, "");
};
