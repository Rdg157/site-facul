let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}
$("#select, #alvo span button").on("change click", function(e){
   
   
    if($(this).val() == "outro" && e.type == "change"){
 
       $(this)
       .attr("name", "")
       .hide()
       .next("span")
       .show()
       .find("input")
       .attr("name", "opcoes")
       .focus();
 
    }else if(e.target.id != "select" && e.type == "click"){
 
       $("#select")
       .attr("name", "opcoes")
       .show()
       .val('')
       .next("span")
       .hide()
       .find("input")
       .attr("name", "")
       .val('');
 
    }
    
 });