// function kali(a,b) {
//     return a*b;
// }
// var hasil=kali(7,3);
// console.log (hasil);

// const tambah = (x,y) => x+y;
// console.log(tambah(7,3))

// function string(a,b){
//     return a + ' ' + b;
// };
// let jadi =string('halo', 'kyungsoo');
// console.log(jadi);

// function greet(name){
//     console.log('halo, ' + name + '!');
// };
// greet('dino');

// let person={
//     fullName : function(){
//     return this.firstName + ' ' + this.lastName;
//     }
// }
// let person1={
//     firstName:"Hansa",
//     lastName:"Qudsia"
// }
// let fullName = person.fullName.call(person1);
// console.log(fullName);

// let person = {
//     fullName : function(Kota, Negara) {
//         return this.firstName + ' ' + this.lastName + ' sedang di ' + Kota + ' , ' + Negara + '.';
//     }
// }
// let person1={
//     firstName:"Hansa",
//     lastName:"Qudsia"
// }
// let fullName=person.fullName.apply(person1, ['Hokaido','Jepang']);
// console.log(fullName);

// let person={
//     name : ' Hansa ',
//     city : ' Gangnam ',
//     greet :function() {
//         return 'Halo' + this.name + ',' + 'selamat datang di' + this.city + '!';
//     }
// };
// let greetHansa = person.greet.bind(person);
// console.log(greetHansa());