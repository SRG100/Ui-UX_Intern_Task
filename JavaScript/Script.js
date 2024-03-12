// For the fade up on scrool effect 

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal")

    for(var i=0; i<reveals.length; i++){
        
        var windowheight =window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =50;

        if(revealtop < windowheight- revealpoint){
            reveals[i].classList.add('active')
        }
        // else{
        //     reveals[i].classList.remove('active')
        // }
    }
}

// Review Board's next review function

function left_review(){
    var first_review= document.getElementById('first_review');
    var center_review = document.getElementById('center_review');
    var third_review = document.getElementById('third_review');

    if((first_review.classList.contains("hide")) && (center_review.classList.contains("hide"))){
        center_review.classList.remove("hide");
        third_review.classList.add("hide");
        
    }
    else if( (first_review.classList.contains("hide")) && (third_review.classList.contains("hide")) ){
        center_review.classList.add("hide");
        first_review.classList.remove("hide");

    }

}

function right_review(){
    var first_review= document.getElementById('first_review');
    var center_review = document.getElementById('center_review');
    var third_review = document.getElementById('third_review');

    if((third_review.classList.contains("hide")) && (center_review.classList.contains("hide"))){
        center_review.classList.remove("hide");
        first_review.classList.add("hide");
        
    }
    else if( (first_review.classList.contains("hide")) && (third_review.classList.contains("hide")) ){
        center_review.classList.add("hide");
        third_review.classList.remove("hide");

    }
    
}


