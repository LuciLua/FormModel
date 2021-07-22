function toggle(){
    var form = document.getElementById('form')
    form.classList.toggle('form-hidden')

    var toggleBtn = document.getElementById('toggle-btn')
    toggleBtn.classList.toggle('toggle-btn-b')
}

function send(){
    var form = document.getElementById('form')
    var toggleBtn = document.getElementById('toggle-btn')
    var loading = document.getElementById('loading')

    loading.style.display='flex'

    setInterval(function(){
        loading.style.display='none'
    }, 2000)

    setInterval(function(){
        document.getElementById('thanks').style.display='flex'
    }, 900)
    
    
    setTimeout(function(){
        form.classList.toggle('form-hidden')  
        toggleBtn.classList.toggle('toggle-btn-b')
    },100)

    setTimeout(function(){
        window.location.replace(window.location.pathname + '#thanks')
    }, 1000)

    
}
