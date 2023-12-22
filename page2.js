let itemList=[]

function main(){
    addItem()
    updateTable()
}
function addItem()
{
    var item=document.getElementById("itemField").value;

    //push into array
    itemList.push(item);

    //getting the values to null
    document.getElementById("itemField").value="";
    
    console.log(itemList);
}
function removeitem(index)
{
itemList.splice(index,1);
updateTable();
}
function updateTable(){
    var table=document.getElementById("dataTable")
    table.innerHTML= 
    `<thead> 
    <th>Sl no.</th>
    <th>Item</th>
    <th>Action</th>
    </thead>`
    itemList.forEach((item,index) =>
    {
    var row=table.insertRow(-1);
    var col1=row.insertCell(0);
    var col2=row.insertCell(1);
    var col3=row.insertCell(2);

    col1.innerHTML=index+1;
    col2.innerHTML=item;
    col3.innerHTML=`<button onClick="removeitem(${index})" >Delete</button>`;
});

document.getElementById('listlength').innerHTML=itemList.length;
console.log('list length',itemList.length)
}

