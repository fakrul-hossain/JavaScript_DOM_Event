

document.getElementById('delete_confirm').addEventListener('keyup', function(event){
    const text = event.target.value
    const deleteButton = document.getElementById('btn_delete')
    if (text === 'delete') {
    deleteButton.removeAttribute('disabled')
    }else{
        deleteButton.setAttribute('disabled', true)
    }
});

document.getElementById('btn_delete').addEventListener('click', function(){
    const secret = document.getElementById('secret_info');
    secret.style.display = 'none'
    
});