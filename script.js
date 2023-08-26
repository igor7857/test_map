const layerCheckboxes = document.querySelectorAll(".layer-checkbox");
const layers = document.querySelectorAll(".layer");

layerCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        layers[index].style.display = checkbox.checked ? "block" : "none";
    });

    // Добавляем проверку нажатых галочек при загрузке страницы
    layers[index].style.display = checkbox.checked ? "block" : "none";
});