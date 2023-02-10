document.getElementById('item-2').addEventListener('click', function(event){
    console.log('this item 2');
    event.stopImmediatePropagation
});

document.getElementById('list_ul').addEventListener('click', function(event){
    console.log('ul');
});
document.getElementById('list_contianer').addEventListener('click', function(event){
    console.log('container');
});