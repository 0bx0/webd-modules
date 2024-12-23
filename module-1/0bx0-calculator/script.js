function addContent(element){
    const textarea = document.getElementById("display");
    if(textarea.value === "0") {
        textarea.value = element.toString();
    } 
    else if(textarea.value === "undefined" || textarea.value === "Infinity") {
        textarea.value = element.toString();
    }
    else {
        textarea.value += element.toString();
    }
}

function deleteContent() {
    const textarea = document.getElementById("display");
    if(textarea.value.substring(0,textarea.value.length-1) === '') {
        clearContent()
    }
    
    else if(textarea.value === "undefined" || textarea.value === "Infinity") {
        clearContent()
    }

    else {
        textarea.value = textarea.value.substring(0,textarea.value.length -1)    
    }
}

function clearContent() {
    const textarea = document.getElementById("display");
    textarea.value = '0'
}

function evaluateContent() {
    const textarea = document.getElementById("display")
        textarea.value = eval(textarea.value)
}