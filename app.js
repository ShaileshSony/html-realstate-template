let address = [
  "Prayagraj",
  "Kanpur",
  "Lucknow",
  "Agra",
  "Varansi",
  "Ballia",
  "New Delhi",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Surat",
  "Austin, TX"
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const rowBox = document.querySelector(".row-box");
const lenceBox = document.querySelector(".lence-box");
const icon = document.querySelector(".fa-magnifying-glass");

inputBox.onkeyup = function(){
    let result = []
    let inputValue = inputBox.value;
    if(inputValue.length){
        result = address.filter(item=>{
            return item.toLowerCase().includes(inputValue.toLowerCase())
        })
        console.log(result);
        displayList(result)
    }
    if(!result.length){
        resultBox.innerHTML = '';
    }
    
}

function displayList(result){
    const item_list = result.map(item=>{
        return "<li onClick=setInput(this)>" + item + "</li>"
    })
    resultBox.innerHTML = "<ul>" + item_list .join('') + "</ul>"
    console.log(resultBox)
}


function setInput(val){
    inputBox.value = val.innerHTML;
    resultBox.innerHTML = ''
    rowBox.style.borderColor = "#0B5AA5";
    lenceBox.style.backgroundColor = "#0B5AA5";
    icon.style.color = '#fff';
}

// toggle navbar function//
$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $(".menubar-box").toggleClass("active-toggle");
    });
  });