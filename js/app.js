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

// Displays a message (correct or invalid)
printMessage(message, className) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('text-center', 'alert', className);
    messageWrapper.appendChild(document.createTextNode(message));

    // Insert into HTML
    document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

    // Clear error
    setTimeout(function() {
        document.querySelector('.primary .alert').remove();
        addExpenseForm.reset();
    }, 3000);
}
addExpenseToList(name, amount) {
    const expensesList = document.querySelector('#expenses ul');

    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    // Create template
    li.innerHTML = `
    ${name}
    <span class="badge badge-primary badge-pill">$ ${amount}</span>
    `;
    // insert into html
    expensesList.appendChild(li);
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
        addExpenseForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Read values from budget form
            const expenseName = document.querySelector('#expense').value;
            const amount = document.querySelector('#amount').value;

            if(expenseName === '' || amount === '') {
                    html.printMessage('There was error, all the fields are mandatory',
                    'alert-danger');
            } else {
                // Add expenses into list
                html.addExpenseToList(expenseName, amount);
            }
        });

    
}