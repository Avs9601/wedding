function seeWhatIType() {
    let nameVal = document.getElementById("nameTxt").value;
    //console.log(nameVal);
}

const myInput = document.getElementById('nameTxt'),
    myOutput = document.getElementById("n1");

myInput.onkeyup = function () {
    myOutput.innerHTML = myInput.value;
}

function seeWhatIType2() {
    let nameVal = document.getElementById("gName2").value;
    console.log(nameVal);
    }

const myInput2 = document.getElementById('gName2'),
    myOutput2 = document.getElementById("n2");

myInput2.onkeyup = function () {
    myOutput2.innerHTML = myInput2.value;
}

function seeWhatIType3() {
    let nameVal = document.getElementById("surname").value;
    console.log(nameVal);
    }

const myInput3 = document.getElementById('surname'),
    myOutput3 = document.getElementById("sn");

myInput3.onkeyup = function () {
    myOutput3.innerHTML = myInput3.value;
}

function seeWhatIType4() {
    let nameVal = document.getElementById("date").value;
    console.log(nameVal);
    }

const myInput4 = document.getElementById('date'),
    myOutput4 = document.getElementById("date2");

myInput4.onkeyup = function () {
    myOutput4.innerHTML = myInput4.value;
}

function seeWhatIType5() {
    let nameVal = document.getElementById("location").value;
    console.log(nameVal);
    }

const myInput5 = document.getElementById('location'),
    myOutput5 = document.getElementById("Loc2");

myInput5.onkeyup = function () {
    myOutput5.innerHTML = myInput5.value;
}

function ChangeStyles() {
    const paraArray = document.getElementsByTagName('main');

    for (let i = 0; i <paraArray.length; i++) {
        paraArray.item(i).style.backgroundImage = "url(Images/b1Colourful.JPG)";
    }
}

function ChangeStyles2() {
    const paraArray = document.getElementsByTagName('main');

    for (let i = 0; i <paraArray.length; i++) {
        paraArray.item(i).style.backgroundImage = "url(Images/b2Light.JPG)";
    }
}

function ChangeStyles3() {
    const paraArray = document.getElementsByTagName('main');

    for (let i = 0; i <paraArray.length; i++) {
        paraArray.item(i).style.backgroundImage = "url(Images/b3Dark.JPG)";
    }
}


