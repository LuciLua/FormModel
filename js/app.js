function toggle(){ //toggle form
    var form = document.getElementById('form')
    form.classList.toggle('form-hidden') //esconde/aparece form

    var toggleBtn = document.getElementById('toggle-btn')
    toggleBtn.classList.toggle('toggle-btn-b') //vira/desvira bottao toggle
}

// perguntas com respostas obrigatorias
const req1 = document.querySelectorAll('.req1') //para tipo radio required
const req2 = document.querySelectorAll('.req2') //para tipo radio required
var req3 = document.querySelector('.req3') //para tipo texto required

function send(){

    var loading = document.getElementById('loading')
    var totalReq = 0 // quantas repostas obrigatorias tenho

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

    // console.log(totalReq)

    if (totalReq == 3){ // se todos req forem validos/estiverem preenchidos

        loading.style.display='flex' // loading começa carregar

        setTimeout(toggle, 100) // formulario é escondido
        
        setInterval(function(){
            document.getElementById('thanks').style.display='flex'
        }, 900) // thank é visivel
        
        setTimeout(function(){
            window.location.replace(window.location.pathname + '#thanks')
        }, 1000) //scroll ate o thanks

        setInterval(function(){
            loading.style.display='none'
        }, 2000) //loading para de carregar
    
        
        setTimeout(function(){ 
            var resps = document.querySelectorAll('.resposta')
            resps.forEach(e => {
                e.style.backgroundColor='rgba(222, 238, 224, 0.35)' //green
                e.style.pointerEvents='none' // não alteravel
                e.style.cursor='default' // não clicavel
            })
            var sendBtn = document.getElementById('sendBtn')
            sendBtn.style.backgroundColor='rgb(99, 99, 99)' //gray
            sendBtn.style.pointerEvents='none' // não manda denovo
            sendBtn.style.userSelect='none' //não clicavel
        }, 2100)

    } else {
        var erro = document.getElementById('erro')
        erro.style.display='flex' //mostra erro
    }
}

function fecharErro(){
    var erro = document.getElementById('erro')
    erro.style.display='none' //fechar o erro
}