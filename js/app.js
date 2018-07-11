// Classes






// Variables
const addExpeenseForm = document.querySelector('#add-expense');





// Listeners

eventListeners();
function eventListeners() {


        addExpeenseForm.eventListeners('submit', function(e) {
            e.preventDefault();
        });
}