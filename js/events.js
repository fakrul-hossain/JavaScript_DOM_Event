function handleOnClick() {
  const handlerStatus = document.getElementById("handler");
  handlerStatus.innerText = "Fakrul Hossain";
}

// option 2
document.getElementById("event_listener").addEventListener("click", function(){
    const handlerStatus = document.getElementById('handler');
    handlerStatus.innerText = 'This is option 2'
});

// option 2
document.getElementById('btn_update').addEventListener('click', function(){
    const inputFiled = document.getElementById('input_filed');
    const inputText = inputFiled.value;
     const p = document.getElementById('input_text_display');
     p.innerText = inputText;
     inputFiled.value = '';
})


// option 2 recap
// step1
document.getElementById('btn_post').addEventListener('click', function(){
    // step 2 comment
    const inputMessage = document.getElementById('new_comment');
    const inputMessageArea = inputMessage.value;
    // step 3
    const comment = document.getElementById('comment_container');
    const p = document.createElement('p');
    p.innerText = inputMessageArea;
    comment.appendChild(p)
    inputMessage.value = '';
});

// more events js

document.getElementById('text_field').addEventListener('focus', function(){
    console.log('bangladesh');
});
document.getElementById('text_field').addEventListener('blur', function(){
    console.log('India');
});
document.getElementById('text_field').addEventListener('keypress', function(event){
    console.log(event.target.value);
});


document.getElementById('btn_more').addEventListener('mousemove', function(){
    console.log('Event Triggered');
});