//Manuipulção dos objetos
const form = document.querySelector(".form");
const campos = document.querySelectorAll(".required");
const span_required = document.querySelectorAll(".span_required");

// evento para enviar os dados somente se todos os campos forem preenchidos;
form.addEventListener('submit',(e)=>{
   e.preventDefault();
     nameValidate();
     sobreNomeValidate();
     emailValidate();
     validarRadios();
   //   selectValidate();
     validarTextArea();
     checkboxValidate();
     limparDados()
} )
// Função para a validação dos campos
function nameValidate(){
   if(campos[0].value===''||campos[0].value.length <3){
     addError(0)
     return false;
   }else{
      removeError(0)
   }
}
function sobreNomeValidate(){
   if(campos[1].value===''||campos[1].value.length <3){
     addError(1)
     return false;
   }else {
      removeError(1)
   }
}
function emailValidate(){
   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// para validar o email
   const emailValido = emailRegex.test(campos[2].value);
    if(!emailValido){
       addError(2)
       return false;
   }else{
      removeError(2)
   }
}
// Função para exibir os erros de validações doscampos
function addError(index){
   campos[index].style.border = '2px solid #e63636';
   span_required[index].style.display = "block"
}
// Função para remover os erros
function removeError(index){
   campos[index].style.border = '';
   span_required[index].style.display = "none"
}
// Função para validação dos Input Radio
const span_Radio = document.querySelector(".span_Radio");
// const primeiro = document.getElementById ('primeiro');
// const segundo = document.getElementById ('segundo');
// const terceiro = document.getElementById ('terceiro');
function validarRadios(){
const inputRadios = document.getElementsByName('ano');// vai oegar todos on radios name = ano
   for (var i = 0; i < inputRadios.length; i++) {
      if (inputRadios[i].checked) {
       const radioSelecionado = inputRadios[i].value;
       console.log(`o radio seleciodado é ${radioSelecionado}`);
       span_Radio.style.display ='none'
      return;
      }else{
         span_Radio.style.display ='block'
      }
   }   
}
// função para validação do select
const span_Condicao = document.getElementById("span_Condicao");
const caixa = document.getElementById('boxSelect');
const boxSelect = document.getElementsByClassName('ano');
// em construção
function selectValidate(){
   if (caixa.value ==="comecar"||caixa.value ==="cursando"||caixa.value ==="lastAno"){
        console.log('selecionado')
      //   span_Condicao.style.display ='none'
      
      }else if(!caixa.value ==="comecar"||!caixa.value ==="cursando"||!caixa.value ==="lastAno"){
         span_Condicao.style.display ='block'
      }   
}
//Função para validar o textArea textArea
const textArea = document.getElementById('textArea');
const spanText = document.querySelector(".span_Text");

function validarTextArea(){
   if(textArea.value===''||textArea.value.length < 10){
      spanText.style.display = 'block'
      textArea.style.border = '2px solid #e63636';
      return false;
    }else if(!textArea.value===''||!textArea.value.length < 10){
      spanText.style.display = 'none'
      textArea.style.border = ''
       
    }
}
//Função para validar os checkbox
var checkboxes = document.getElementsByName('combina');//para seleção dos checkbos com name "combina".
const span_Box = document.querySelector(".span_Box");
function checkboxValidate(){
   for(var i = 0; i < checkboxes.length; i ++){
      if(checkboxes[i].checked){
         const checkboxSelecionado = checkboxes[i].value;
         span_Box.style.display = "none"
         console.log(checkboxSelecionado);
         return;
      }else{
         span_Box.style.display = "block"
      }
   }
}
//Função para limpar todos os campos depois do envio
function limparDados(){
   form.reset();// Reseta o formulário após o envio
}