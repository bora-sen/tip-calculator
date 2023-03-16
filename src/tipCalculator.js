export function calculateTipPerPerson(Bill,tipPercent,numOfPeople){
    let totalTip = Bill * (tipPercent / 100);
    let tipPerPerson = totalTip / numOfPeople;

    if(tipPerPerson > 0 && tipPerPerson < 10000) {
        return `$${tipPerPerson.toFixed(2)}`
    }
    else{
        return "$0"
    }
}

export function calculateTotalPerPerson(Bill,numOfPeople){
    let totalPerPerson = Bill / numOfPeople;

    if(totalPerPerson > 0 && totalPerPerson < 10000){
        return `$${totalPerPerson.toFixed(2)}`
    }
    else{
        return "$0"
    }
}