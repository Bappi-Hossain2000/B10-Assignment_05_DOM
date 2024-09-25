
document.getElementById('donation_btn')
    .addEventListener('click', function () {

        // show button clicked
        document.getElementById('donation').classList.remove('hidden');
        document.getElementById('history').classList.add('hidden');



        document.getElementById('donation_btn').classList.add('btn-accent');
        document.getElementById('history_btn').classList.remove('btn-accent');



    });

document.getElementById('history_btn')
    .addEventListener('click', function () {

        // show button clicked
        document.getElementById('history').classList.remove('hidden');
        document.getElementById('donation').classList.add('hidden');

        document.getElementById('donation_btn').classList.remove('btn-accent');
        document.getElementById('history_btn').classList.add('btn-accent');

        // // hide the add money form

    });










document.getElementById('donate_now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // get money
        const addMoney = document.getElementById('input_add_money').value;
        const addMoneyNumber = parseFloat(addMoney);

        if(typeof addMoneyNumber === 'number' && addMoneyNumber > 0 && addMoneyNumber < 5501){

            // main_bdt
            const mainBdt = document.getElementById('main_bdt').innerText;
            const mainBdtNumber = parseFloat(mainBdt);
            // remainingBalance
            const remainingBalance = mainBdtNumber - addMoneyNumber;
            document.getElementById('main_bdt').innerText = remainingBalance;
    
            // new_bdt
            const newBdt = document.getElementById('new_bdt').innerText;
            const newBdtNumber = parseFloat(newBdt);
            // updateBalance
            const updateBalance = newBdtNumber + addMoneyNumber;
            document.getElementById('new_bdt').innerText = updateBalance;
    
    
    
            const historyContainer = document.getElementById('history')
            const donateTile = document.getElementById('donateTile1').innerText
            const titleName = document.createElement("div")
            titleName.className = "border p-5 rounded my-5"
    
            titleName.innerHTML = `
    
            <h4 class="mb-3 text-xl font-bold">${addMoneyNumber} Taka is Donated for ${donateTile}</h4>
            <p class="text-xs text-gray-500">Date: ${new Date()}</p>
            `;
            historyContainer.append(titleName)

            return alert('success')
        } return alert('invalid')


    });


document.getElementById('donate_now2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // get money 
        const addMoney = document.getElementById('input_add_money2').value;
        const addMoneyNumber = parseFloat(addMoney);


        if(typeof addMoneyNumber === 'number' && addMoneyNumber > 0 && addMoneyNumber < 5501){

        // main_bdt
        const mainBdt = document.getElementById('main_bdt').innerText;
        const mainBdtNumber = parseFloat(mainBdt);
        // remainingBalance
        const remainingBalance = mainBdtNumber - addMoneyNumber;
        document.getElementById('main_bdt').innerText = remainingBalance;

        // new_bdt
        const newBdt = document.getElementById('new_bdt2').innerText;
        const newBdtNumber = parseFloat(newBdt);
        // updateBalance
        const updateBalance = newBdtNumber + addMoneyNumber;
        document.getElementById('new_bdt2').innerText = updateBalance;


        const historyContainer = document.getElementById('history')
        const donateTile = document.getElementById('donateTile2').innerText
        const titleName = document.createElement("div")
        titleName.className = "border p-5 rounded my-5"

        titleName.innerHTML = `

        <h4 class="mb-3 text-xl font-bold">${addMoneyNumber} Taka is Donated for ${donateTile}</h4>
        <p class="text-xs text-gray-500">Date: ${new Date()}</p>
        `;
        historyContainer.append(titleName)


        return alert('success')
    } return alert('invalid')



    });


document.getElementById('donate_now3')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // get money 
        const addMoney = document.getElementById('input_add_money3').value;
        const addMoneyNumber = parseFloat(addMoney);

        if(typeof addMoneyNumber === 'number' && addMoneyNumber > 0 && addMoneyNumber < 5501){

        // main_bdt
        const mainBdt = document.getElementById('main_bdt').innerText;
        const mainBdtNumber = parseFloat(mainBdt);
        // remainingBalance
        const remainingBalance = mainBdtNumber - addMoneyNumber;
        document.getElementById('main_bdt').innerText = remainingBalance;

        // new_bdt
        const newBdt = document.getElementById('new_bdt3').innerText;
        const newBdtNumber = parseFloat(newBdt);
        // updateBalance
        const updateBalance = newBdtNumber + addMoneyNumber;
        document.getElementById('new_bdt3').innerText = updateBalance;



        const historyContainer = document.getElementById('history')

        const donateTile = document.getElementById('donateTile').innerText

        const titleName = document.createElement("div")
        titleName.className = "border p-5 rounded my-5"
        titleName.innerHTML = `

        <h4 class="mb-3 text-xl font-bold">${addMoneyNumber} Taka is Donated for ${donateTile}</h4>
        <p class="text-xs text-gray-500">Date: ${new Date()}</p>
        `;
        historyContainer.append(titleName)

      
        return alert('success')
    } return alert('invalid')

    });

