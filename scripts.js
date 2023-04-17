function getValue() {
    var Inputvalue=document.getElementById('myInput').value;
    if (Inputvalue.length === 0){ 
        alert("ошибка"); 
    }
    else {
        alert("отправлено"); 
    }
    myInput.reset()
}