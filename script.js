const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const checklist = document.getElementById("safetyChecklist");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("checkProgressBar");

function updateChecklistProgress() {
  if (!checklist) return;
  const boxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const completed = boxes.filter((box) => box.checked).length;
  const total = boxes.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  progressText.textContent = `${completed} of ${total} completed`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

if (checklist) {
  checklist.querySelectorAll('input[type="checkbox"]').forEach((box) => {
    box.addEventListener("change", updateChecklistProgress);
  });
  updateChecklistProgress();
}
