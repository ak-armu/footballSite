document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerCostField = document.getElementById('player-cost');
    const playerCostString = playerCostField.value;
    const playerCost = parseFloat(playerCostString);

    const playerExpense = document.getElementById('player-total-cost');
    const playerTotalCost = playerExpense.innerText;
    playerExpense.innerText = playerCost;
})




// Total Calculation part

document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const managerCostField = document.getElementById('manager-cost');
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);

    const coachCostField = document.getElementById('coach-cost')
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);

    const playerExpense = document.getElementById('player-total-cost');
    const playerTotalCostString = playerExpense.innerText;
    const playerCost = parseFloat(playerTotalCostString);

    const managerAndCoachCost = managerCost + coachCost + playerCost;

    const totalCalculation = document.getElementById('total-cost');
    const totalCost = totalCalculation.innerText;
    totalCalculation.innerText = managerAndCoachCost;

})