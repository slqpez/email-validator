const mailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const messageInput = document.querySelector('#message')
const btn = document.querySelector('.send-btn')
const form = document.querySelector('.form')

const er =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
})

mailInput.addEventListener('blur', isEmpty)
subjectInput.addEventListener('blur', isEmpty)
messageInput.addEventListener('blur', isEmpty)

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
    validateMail()
    if(mailInput.classList.contains('valid') && subjectInput.classList.contains('valid') && messageInput.classList.contains('valid')) {
        
        btn.disabled =false
             
    }else{
        btn.disabled =true
        showMessage("Faltan campos por llenar.")

    }
}

function showMessage(message){
    if(!document.querySelector('.msg')){
        const p = document.createElement('p');
        p.textContent = `${message}`
        p.classList.add("msg")
        p.style.marginTop= "10px"
        form.appendChild(p)
    }
    

}

function validateMail(){
    if(er.test(mailInput.value)){
        btn.disabled =false
        mailInput.classList.remove("invalid")
        mailInput.classList.add('valid')
        const msg = document.querySelector('.msg')
        if(msg){
            msg.remove()
        }
    }else{
        btn.disabled =true
        showMessage("Correo inválido.")
        mailInput.classList.remove('valid')
        mailInput.classList.add("invalid")
        
    }
}