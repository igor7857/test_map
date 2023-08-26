document.addEventListener("DOMContentLoaded", function () {
    const subgroupContents = document.querySelectorAll(".subgroup-content");

    const clearCheckboxBtns = document.querySelectorAll(".disable-all-btn");
    const showCheckboxBtns = document.querySelectorAll(".enable-all-btn");

    clearCheckboxBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const checkboxes = subgroupContents[index].querySelectorAll(".layer-checkbox");
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.dispatchEvent(new Event("change"));
            });
        });
    });

    showCheckboxBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const checkboxes = subgroupContents[index].querySelectorAll(".layer-checkbox");
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event("change"));
            });
        });
    });

    const subgroupTitles = document.querySelectorAll(".subgroup-title");
    const toggleSubgroupBtns = document.querySelectorAll(".toggle-subgroup-btn");

    toggleSubgroupBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            subgroupContents[index].classList.toggle("hidden");
        });
    });

    subgroupTitles.forEach((title, index) => {
        title.addEventListener("click", () => {
            subgroupContents[index].classList.toggle("hidden");
        });
    });

    const layerCheckboxes = document.querySelectorAll(".layer-checkbox");
    const layers = document.querySelectorAll(".layer");

    layerCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            layers[index].style.display = checkbox.checked ? "block" : "none";
        });

        layers[index].style.display = checkbox.checked ? "block" : "none";
    });
});

// Стили и другая часть вашего кода...
