const calculation = document.getElementById("Sumbit");
const inputClass = document.querySelectorAll("input");

inputClass.forEach((input) =>{
    input.addEventListener("focus", () =>{
        calculation.classList.remove('disable');
        document.getElementById("name1Error").innerHTML="⚠Enter name without (spaces,specialCharacters and digits(0-9))";
        document.getElementById("name2Error").innerHTML="⚠Enter name without (spaces,specialCharacters and digits(0-9))";

    });
});

calculation.addEventListener("click", () => {
    
    calculation.classList.add('disable');

    let name1 = document.getElementById("YourName").value.toLowerCase();
    let name2 = document.getElementById("YourPartnerName").value.toLowerCase();

    let result = "";

    // Validate first name
    for (let i = 0; i < name1.length; i++) {
        if (name1.charAt(i) < 'a' || name1.charAt(i) > 'z' ) {
            result = "⚠Enter proper name";
            document.getElementById("name1Error").innerHTML = result;
            return;
        }
    }

    // Validate second name
    for (let i = 0; i < name2.length; i++) {
        if (name2.charAt(i) < 'a' || name2.charAt(i) > 'z') {
            result = "⚠Enter proper name";
            document.getElementById("name2Error").innerHTML = result;
            return;
        }
    }

    // Same names check
    if (name1 === name2) {
        result = "Can't make FLAMES, your names are same";
        document.getElementById("result").innerHTML = result;
        return;
    }

    // Convert strings into arrays
    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common characters
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);

                i--;
                break;
            }
        }
    }
    document.getElementById("details").innerHTML='<a href="#" class="NameDetails">details</a>'
    const NameDetails = document.querySelector(".NameDetails");

let RemainingLetters = "";
    for( let i = 0; i < arr1.length; i++){
         RemainingLetters += arr1[i];
    }

   let RemainingLettersPartner = ""
    for( let i = 0; i < arr2.length; i++){
        RemainingLettersPartner += arr2[i];
   }

NameDetails.addEventListener("click",() =>{
    
    alert(`Remaining Letters in Your Nmae : ${RemainingLetters}\nRemaining Letters in Partnner Nmae : ${RemainingLettersPartner}`);
});
    
    let count = arr1.length + arr2.length;

    // FLAMES logic
    let flames = ["F", "L", "A", "M", "E", "S"];

    let index = 0;

    while (flames.length > 1) {

        index = (index + count - 1) % flames.length;

        flames.splice(index, 1);
    }

    switch (flames[0]) {

        case 'F':
            result = " Flames : Friends";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/friends.png" class="result-image">';

            break;

        case 'L':
            result = " Flames : Lovers";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/lovers.png" class="result-image">';
            break;

        case 'A':
            result = " Flames : Attraction";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/attraction.png" class="result-image">';
            break;

        case 'M':
            result = " Flames : Marriage";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/marraige.png" class="result-image">';
            break;

        case 'E':
            result = " Flames : Enemies";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/enemies.png" class="result-image">';
            break;

        case 'S':
            result = " Flames : Siblings";
            document.getElementById("imageforresult").innerHTML='<img src="imagesFLAMES/siblings.png" class="result-image">';
            break;

        default:
            result = " Falmes : Error";
    }

    document.getElementById("result").innerHTML = result;

});

