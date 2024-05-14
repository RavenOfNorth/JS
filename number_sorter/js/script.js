const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map(dropdown => Number(dropdown.value));

    updateUI(inputValues);
};

sortButton.addEventListener("click", sortInputArray);

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });

};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        // Why tests think that inner for loop not empty?
        for (let j = 0; j < array.length - i - 1; j++) {

        };
    };
};

sortButton.addEventListener("click", sortInputArray);