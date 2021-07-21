function toggle(){
    var form = document.getElementById('form')
    form.classList.toggle('form-hidden')

    var toggleBtn = document.getElementById('toggle-btn')
    toggleBtn.classList.toggle('toggle-btn-b')
}

function send(){
    var form = document.getElementById('form')
    var toggleBtn = document.getElementById('toggle-btn')
    form.classList.toggle('form-hidden')  
    toggleBtn.classList.toggle('toggle-btn-b')


    setTimeout(function(){
        window.location.replace(window.location.pathname + '#thanks')
    }, 100)

    
}
