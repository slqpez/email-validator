const mailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const messageInput = document.querySelector('#message')
const btn = document.querySelector('.send-btn')


btn.addEventListener('click', (e)=>{
    e.preventDefault();
})

mailInput.addEventListener('blur', isEmpty)
messageInput.addEventListener('blur', isEmpty)
subjectInput.addEventListener('blur', isEmpty)

function isEmpty(e){
    if(e.target.value===""){
        e.target.classList.remove('valid')
        e.target.classList.add('invalid')
        
    }else{
        e.target.classList.add('valid')
    }
    validateForm();
}



function validateForm(){
    if(mailInput.classList.contains('valid') && subjectInput.classList.contains('valid') && messageInput.classList.contains('valid')) {
        btn.disabled =false
    }else{
        btn.disabled =true

    }
}
