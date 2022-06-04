document.addEventListener("DOMContentLoaded", function () {
  const parallax = document.querySelectorAll(".parallax");
  const tabs = document.querySelectorAll(".tabs");

  M.Parallax.init(parallax);
  M.Tabs.init(tabs);
});
