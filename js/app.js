// Classes






// Variables
const addExpenseForm = document.querySelector('#add-expense');





// Listeners

eventListeners();
function eventListeners() {


        addExpenseForm.eventListeners('submit', function(e) {
            e.preventDefault();
        });
}