// Classes






// Variables
const addExpenseForm = document.querySelector('#add-expense');


let budget, userBudget;




// Listeners

eventListeners();
function eventListeners() {

        // App Init
        document.addEventListener('DOMContentLoaded', function() {
           // Ask the weekly budget
            userBudget = prompt(' What\'s your budget for this week? ');
        });


        // When new expense is added
        addExpenseForm.eventListeners('submit', function(e) {
            e.preventDefault();
        });
}