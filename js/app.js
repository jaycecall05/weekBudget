// Classes

class Budget {
    constructor(budget) {
        this.budget = Number ( budget );
        this.budgetLeft = this.budget;
    }
}

// Everything related to HTML
class HTML {

    //Insert budget when is submited
    insertBudget(amount) {

        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
}

// Variables
const addExpenseForm = document.querySelector('#add-expense'),

    budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');



let budget, userBudget;

const html = new HTML();


// Listeners

eventListeners();
function eventListeners() {

        // App Init
        document.addEventListener('DOMContentLoaded', function() {
           // Ask the weekly budget
            userBudget = prompt(' What\'s your budget for this week? ');
            // validate budget
            if(userBudget === null || userBudget === '' || userBudget === '0') {
                    window.location.reload();
            } else {
                // Budget is valid than instanciate the budget class
                budget = new Budget(userBudget);

                // Instantiate html class
                html.insertBudget(budget.budget);
            }
        });


        // When new expense is added
        addExpenseForm.addEventListeners('submit', function(e) {
            e.preventDefault();
        });
}