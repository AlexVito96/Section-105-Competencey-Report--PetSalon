//object literal

const salon = {
    name:"The Fashion Pet", 
    phone: "3255-78493",
    address: {
        street:"Av. Mexico",
        number:"450"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}


console.log(salon);

let {name,phone,address:{street,number},workingHours:{days,open,close}}= salon;

//footer
document.querySelector('.info').innerHTML=`Contact Us ${phone}, ${number}, ${street} <br> It's open from ${open} to ${close}`;

//object constructor

var c=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,ownerContact){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerContact=ownerContact;
        this.hunger=10;
        this.happiness=5;
        this.id='pet'+c;
        c+=1;

    }
    ownerInfo = function(){
        console.log("Owner Name:" + this.ownerName + "\n" + "Contact Phone:" + this.ownerContact);
    }
    feed = function(){
        this.hunger-=5;
        this.happiness+=5;
        console.log("Feeding....");
    }
    status = function(){
        console.log("Hunger:"+ this.hunger + "\n" + "Happiness:" + this.happiness);
    }
}

const pet1 = new Pet("Shaggy",2,"male","boxer","Shower","Alex","6726338892");
const pet2 = new Pet("Jonis",3,"Female","Boxer","Haircut","Nicole","989892839293");
const pet3 = new Pet("Zazu",1,"Male","Bully", "Bath", "Mongo", "8734873843");

pet1.ownerInfo();
pet2.ownerInfo();
pet3.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet2.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname= document.getElementById('txtname');
var textage=document.getElementById('txtage');
var textgender= document.getElementById('txtgender');
var textbreed= document.getElementById('txtbreed');
var textservice= document.getElementById('txtservice');
var textowner= document.getElementById('txtOname');
var textcontact= document.getElementById('txtcontact');

function register(){
    const thePet = new Pet(textname.value, textage.value, textgender.value,textbreed.value, textservice.value, textowner.value, textcontact.value );
    salon.pets.push(thePet);
    alert("You registered a new pet.");
    clear();
    display(thePet);
}

function clear(){
    textname.value = "";
    textage.value = ""; 
    textgender.value = "";
    textbreed.value = "";
    textservice.value = "";
    textowner.value = ""; 
    textcontact.value = "";
}

function display(aPet){
    var tbody = document.getElementById('rowPet');

    var row = `<tr id='${aPet.id}'>
                    <td> ${aPet.name} </td>
                    <td> ${aPet.age}</td>
                    <td> ${aPet.gender}</td>
                    <td> ${aPet.breed}</td>
                    <td> ${aPet.service}</td>
                    <td> ${aPet.ownerName}</td>
                    <td> ${aPet.ownerContact}</td>
                    <td> <button class= "btn-change "onclick='deletePet("${aPet.id}")'> <img class="del" src="https://img.icons8.com/dotty/80/000000/delete-sign.png"> </button></td>
                </tr> `;

    tbody.innerHTML+=row;


}

display(pet1);
display(pet2);
display(pet3);

function deletePet(petId){
    var tr = document.getElementById(petId);
    var indexDelete;

    //search the pet using the id

    for(var i=0;i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }

    salon.pets.splice(indexDelete,1);
    tr.remove();
}

//display all the pets on the column and when register we are adding to array and add to the table as well

function Search(){
    var ss = document.getElementById('petSearch').value;

    var searchString = ss.toLowerCase();


    for(var j=0;j<salon.pets.length;j++){
        var searchPet = salon.pets[j];
        if(searchString==searchPet.name.toLowerCase() || searchString==searchPet.id){
            thePet=j;
            document.getElementById('pet' + j).setAttribute('class','selected');
        }
    }
    
}

//CR beautiful CSS code/JQuery solutions/hiding element and showing the element/search something inside table and result highlight maybe/change delete button



