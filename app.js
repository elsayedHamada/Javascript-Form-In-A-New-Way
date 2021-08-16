const animate = ()=>{
    const arrows = document.querySelectorAll(".fa-arrow-circle-right")

    arrows.forEach(arrow=>{
        arrow.addEventListener("click", ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextElement = parent.nextElementSibling;
            if(input.type === "text" && validateName(input)){
                nextInput(parent, nextElement)
            }else if(input.type === "email" && validateEmail(input)){
                nextInput(parent, nextElement)
            }else if(input.type === "text" && validateMessage(input)){
                nextInput(parent, nextElement)
            }else{
                parent.style.animation = "shaking .5s ease"
            }

            parent.addEventListener("animationend", ()=>{
                parent.style.animation = ""
            })

        });        
    });
};

const validateName = (input) =>{
    if(input.value.length < 8){
        error()
        ErrorWarning("The Name Should Be 8 Character Long or more")
        setTimeout(() => {
            deleteWarning()
        }, 5000);
    }else{
        correct()
        return true
    }
}
const validateMessage = (input) =>{
    if(input.value.length < 5){
        error()
        ErrorWarning("The Message Should Be 5 Character Long or more")
        setTimeout(() => {
            deleteWarning()
        }, 5000);
    }else{
        correct()
        return true
    }
}
const validateEmail = (input)=>{
    validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(input.value)){
        correct()
        return true
    }else{
        error()
        ErrorWarning("Example(example.@gmail.com)")
        setTimeout(() => {
            deleteWarning()
        }, 5000);
    }
}

const nextInput = (parent, next)=>{
    parent.classList.add("inactive")
    parent.classList.remove("active")
    next.classList.add("active")
}

const error = ()=>{
    document.body.classList.add("error-color")
    setTimeout(() => {
        deleteColor()
    }, 5000);
}

const correct= ()=>{
    document.body.classList.add("correct-color")
    setTimeout(() => {
        deleteColor()
    }, 2000);
}

const deleteColor= ()=>{
    document.body.classList.remove("error-color")
    document.body.classList.remove("correct-color")
}

const ErrorWarning = (message)=>{
    const errorMessage = document.querySelector(".warning-message")
    errorMessage.innerHTML = message;
}
const deleteWarning = ()=>{
    const errorMessage = document.querySelector(".warning-message")
    errorMessage.innerHTML = "";
}

animate()