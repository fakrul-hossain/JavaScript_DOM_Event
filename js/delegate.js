/* const items = document.getElementsByClassName('item')
for(const item of items){
    item.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
    });
}
 */
const listContainer = document.getElementById('list_container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
});





document.getElementById('btn_add_item').addEventListener('click', function(){
    const listContainer = document.getElementById('list_container');
    const li = document.createElement('li');
    li.innerText = 'Brand new li';
    li.classList.add('item')
    listContainer.appendChild(li);
});