const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName("values-dropdown")].map(dropdown => dropdown.value);
    console.log(inputValues); // TODO: DELETE IT LATER!
};

sortButton.addEventListener("click", sortInputArray);