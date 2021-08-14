// /start problem number-1 seerToMon

function seerToMon(seer){
    // this condition will convart seer to mon
    if(typeof seer != "number"){
        return "please give a type of number";
    }
    if( seer < 0){
        return "please give a positive number"
    }
    let mon = seer / 40;
    return mon;
}
//call
let seer = 120;
console.log(seerToMon(seer));

//end problem number-1 seerToMon



//start problem number -2 totalSales

function totalSales(shartQuantity, pantQuantity, shoesQuantity){
    //this condition will convart total sale
    if(typeof shartQuantity && pantQuantity && shoesQuantity <= 0){
        return "there is no sales today";
    }
    const perShart = 100;
    const perpant = 200;
    const pershoes = 500;
    const perShartQuantity = shartQuantity * perShart;
    const perpantQuantity = pantQuantity * perpant;
    const perShoesQuantity = shoesQuantity * pershoes;

    const totalCart = perShartQuantity + perpantQuantity + perShoesQuantity;
    return totalCart;
}
const friestOption = totalSales(10, 5, 5);
console.log(friestOption);

// end problem number-2 totalSales


// start problem number -3 deliveryCost

function deliveryCost(product){
    const frist100shirst = 100;
    const Second100shirst = 80;
    const restOfTheshirst = 50;

    //this Condition will not accept Nagitive Value;

    if(product < 0 || typeof product != 'number'){
        return "Please Enter a Valid Number";
    } else if(product <= 100){
        //Frist 100 items cost
        const frist100shirtsTotal = frist100shirst * product;
        return frist100shirtsTotal;
    }else if(product <= 200){
        //second 100 itmes Cost 
        const first100DeliveryCost= 100 * frist100shirst;
        const restOfShirts = product-100;
        const Second100DeliveryCost = restOfShirts *Second100shirst;
        const second100Total=first100DeliveryCost+Second100DeliveryCost;
        return second100Total;
    }else{
        //Rest Of The Shirts Delivery Cost

        const first100DeliveryCost= 100 * frist100shirst;
        const Second100DeliveryCost = 100 *Second100shirst;
        const restOfShirts=product-200;
        const restOfShirtDeliveryCost= restOfShirts * restOfTheshirst;
        const inTotalDeliveryCost = first100DeliveryCost + Second100DeliveryCost + restOfShirtDeliveryCost;
        return inTotalDeliveryCost;
    }
}
let grandTotal=deliveryCost(5);
console.log(grandTotal);
//end problem number -3 deliveryCost


//start problem number -4 perfectFriend

let names = ['sawon hasan', 'imtiaj amed', 'sakib', 'rakib ahamed', 'iasawon', 'shrob'];
function perfectFriend(names){
    //this condition will not accept a string type object
    let number = names.every(e => typeof(e) === 'string');
    if(number){
        for(let i = 0; i < names.length; i++){
            if(names[i].length == 5){
                return names[i];
            }
        }
    }else{
        return "array element of not a number";
    }
}
console.log(perfectFriend(names));
//end problem number -4 perfectFriend 