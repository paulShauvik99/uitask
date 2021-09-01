// const numberToWords = require("./numberToWords");

// Constants
const cus_btn = document.getElementById('cus_btn');
const main_btn = document.getElementById('main_btn');
const cus_text = document.getElementById('cus_text');

// const addBtn = document.getElementById('addBtn');
// const tabBody = document.getElementById('tabBody');

// Event Listeners


cus_btn.addEventListener('click', () =>{
    main_btn.click();
});

main_btn.addEventListener('change', ()=>{
    if(main_btn.value){
        cus_text.innerHTML = main_btn.value;
    }else{
        cus_text.innerHTML = "No Image Choosen";
    }
});


//Adding new Rows and Getting Total

$(document).ready(function(){
    $('#addBtn').click (function(){
        var addRow = `<tr id="items">`;
        addRow += `<td><input type="number" class="form-control"></td>`;
        addRow += `<td><input type="text" class="form-control"></td>`;
        addRow += `<td><input type="number" class="input form-control qty"></td>`;
        addRow += `<td><input type="number" class="input form-control rate"></td>`;
        addRow += `<td><input type="number" class="form-control amt"></td>`;
        addRow += `</tr>`;
    
        $('#tabBody').append(addRow);
        
    })     

    $('#getTot').click(function(){
        var amtArray = document.getElementsByClassName('amt');
        console.log(amtArray);
        console.log(amtArray.length);
        var subTot = 0;
        for(i = 0; i < amtArray.length; i++){
            subTot += amtArray[i].valueAsNumber;
            console.log(amtArray[i].valueAsNumber);
        }
        const tot = document.getElementById('subTot');
        tot.value = subTot;
        console.log(subTot);

    })

    $('#tax').on('input',function(){
        var finTot = document.getElementById('Tot');
        var subTot = parseFloat(document.getElementById('subTot').value);
        var tax = parseFloat(document.getElementById('tax').value);
        var inWords = document.getElementById('inWords');

        var grndTot = subTot + (tax/100)*subTot;
        finTot.value = grndTot;
        
        inWords.innerHTML = numberToWords.toWords(grndTot);

    })
    

 
})


