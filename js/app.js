function toggle(){
    var form = document.getElementById('form')
    form.classList.toggle('form-hidden')

    var toggleBtn = document.getElementById('toggle-btn')
    toggleBtn.classList.toggle('toggle-btn-b')
}

const req1 = document.querySelectorAll('.req1')
const req2 = document.querySelectorAll('.req2')
var req3 = document.querySelector('.req3')





function send(){
    var form = document.getElementById('form')
    var toggleBtn = document.getElementById('toggle-btn')
    var loading = document.getElementById('loading')

    var totalReq = 0


    for(let i = 0; i < req1.length; i++){
        if( req1[i].checked == true){
            // console.log(req1[i].value,'esta checado')
            totalReq++
        }
    }
    for(let i = 0; i < req2.length; i++){
        if( req2[i].checked == true){
            // console.log(req2[i].value,'esta checado')
            totalReq++
        }
    }

    if( req3.value.length != 0){
        // console.log(req3.value,'esta checado')
        totalReq++
    }

        console.log(totalReq)

    if (totalReq == 3){ // se todos req forem validos
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


        setTimeout(function(){
            var resps = document.querySelectorAll('.resposta')
            resps.forEach(e => {
                e.style.backgroundColor='rgba(222, 238, 224, 0.35)'
            })
            var sendBtn = document.getElementById('sendBtn')
            sendBtn.style.backgroundColor='rgb(99, 99, 99)'
            sendBtn.style.pointerEvents='none'
            sendBtn.style.userSelect='none'
        })

    } else {
        alert('Opa, você se esqueceu de algo!')
    }



}
