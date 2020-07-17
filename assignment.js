/*__________________Problem One__________________*/

function feetToMile(feet){
    var mile = 5280;  //1 mile = 5280 feets;
    if(feet <= 0){
        return "invalid value";
    }else{
        var cal = feet / mile;
        var result = cal.toFixed(4);
    }
    return result+" mile";
}
var result = feetToMile(10580);
console.log(result);
/*___________________________________________ */

/*__________________Problem two__________________*/

function woodCalculator(chair, table, bed){
    var forChair = 1; //1 qubicfeet wood is needed for a chair.
    var fortable = 3; //3 qubicfeet wood is needed for a table.
    var forBed   = 5; //5 qubicfeet wood is needed for a bed. 

    if (chair && table && bed <= 0) {
        return "Invalid";
    }else{
        var farnichar1 = chair * forChair;
        var farnichar2 = table * fortable;
        var farnichar3 = bed   * forBed;

        var result = farnichar1 + farnichar2 + farnichar3;
        return result+" qubicfeet wood is needed";
    }
}

var totalfarnichar = woodCalculator(4, 5, 6);
console.log(totalfarnichar);
/*_____________________________________________*/

/*__________________Problem Three__________________*/

function brickCalculator(storey){
    var brick = 1000; // 1000 bricks are needed every feet.
    var feet = 0;
    if(storey >= 1 && storey <= 10){
        feet = 15;
        var calculate = storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey >= 11 && storey <= 20){
        feet = 12;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
    else if(storey > 20){
        feet = 10;
        var calculate =  storey * feet * brick;
        return calculate+" brick is needed";
    }
}
var floor = brickCalculator(11);
console.log(floor);
/*_____________________________________________*/


/*__________________Last Problem__________________*/

function tinyFriend(friends){
    var small = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i]
        if(  element.length < small.length){
            var small = element;
        }
    }
    return small;
}

var friendName = ["Tanvir", "Hasan", "Ashik", "Emon"];
console.log(tinyFriend(friendName));