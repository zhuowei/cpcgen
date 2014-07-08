function generateSentence() {
//character ::= <characterregular> | <characterregular> | <characterregular> | <characterregular>, forged from <characterregular> by <nameeastern>
function gen_character() {
var choice = Math.floor(Math.random() * 4);
switch(choice) {
case 0:
return '' + gen_characterregular() + '';
case 1:
return '' + gen_characterregular() + '';
case 2:
return '' + gen_characterregular() + '';
case 3:
return '' + gen_characterregular() + ', forged from ' + gen_characterregular() + ' by ' + gen_nameeastern() + '';
}
}
//characterregular ::= <name>, <relationship>
function gen_characterregular() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_name() + ', ' + gen_relationship() + '';
}
}
//relationship ::= <familyrel> of <name>
function gen_relationship() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_familyrel() + ' of ' + gen_name() + '';
}
}
//familyrel ::= cousin | <randomnumber> cousin | brother | sister | mother | father | son | daughter | husband | wife
function gen_familyrel() {
var choice = Math.floor(Math.random() * 10);
switch(choice) {
case 0:
return 'cousin';
case 1:
return '' + gen_randomnumber() + ' cousin';
case 2:
return 'brother';
case 3:
return 'sister';
case 4:
return 'mother';
case 5:
return 'father';
case 6:
return 'son';
case 7:
return 'daughter';
case 8:
return 'husband';
case 9:
return 'wife';
}
}
//randomnumber ::= first | second | third
function gen_randomnumber() {
var choice = Math.floor(Math.random() * 3);
switch(choice) {
case 0:
return 'first';
case 1:
return 'second';
case 2:
return 'third';
}
}
//name ::= <namewestern> | <nameeastern>
function gen_name() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_namewestern() + '';
case 1:
return '' + gen_nameeastern() + '';
}
}
//namewestern ::= <firstname> <lastname>
function gen_namewestern() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_firstname() + ' ' + gen_lastname() + '';
}
}
//firstname ::= <firstnamepart1><firstnamepart2>
function gen_firstname() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_firstnamepart1() + '' + gen_firstnamepart2() + '';
}
}
//firstnamepart1 ::= Ism | He | Brada | Eras | Luz | Rodo | Flu | Dia
function gen_firstnamepart1() {
var choice = Math.floor(Math.random() * 8);
switch(choice) {
case 0:
return 'Ism';
case 1:
return 'He';
case 2:
return 'Brada';
case 3:
return 'Eras';
case 4:
return 'Luz';
case 5:
return 'Rodo';
case 6:
return 'Flu';
case 7:
return 'Dia';
}
}
//firstnamepart2 ::= yrn | len | ment | min | crezo | mond | ens | dem
function gen_firstnamepart2() {
var choice = Math.floor(Math.random() * 8);
switch(choice) {
case 0:
return 'yrn';
case 1:
return 'len';
case 2:
return 'ment';
case 3:
return 'min';
case 4:
return 'crezo';
case 5:
return 'mond';
case 6:
return 'ens';
case 7:
return 'dem';
}
}
//lastname ::= <lastnamepart1><lastnamepart2>
function gen_lastname() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_lastnamepart1() + '' + gen_lastnamepart2() + '';
}
}
//lastnamepart1 ::= Gale | Vera | Gra | Arcoce | Core
function gen_lastnamepart1() {
var choice = Math.floor(Math.random() * 5);
switch(choice) {
case 0:
return 'Gale';
case 1:
return 'Vera';
case 2:
return 'Gra';
case 3:
return 'Arcoce';
case 4:
return 'Core';
}
}
//lastnamepart2 ::= tti | ldo | nito | lli | ll
function gen_lastnamepart2() {
var choice = Math.floor(Math.random() * 5);
switch(choice) {
case 0:
return 'tti';
case 1:
return 'ldo';
case 2:
return 'nito';
case 3:
return 'lli';
case 4:
return 'll';
}
}
//nameeastern ::= <easternfirst> of <place>
function gen_nameeastern() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_easternfirst() + ' of ' + gen_place() + '';
}
}
//place ::= <placepart1><placepart2>
function gen_place() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_placepart1() + '' + gen_placepart2() + '';
}
}
//placepart1 ::= Ant | Toh | Chal | Solo | Lyu | Zarra
function gen_placepart1() {
var choice = Math.floor(Math.random() * 6);
switch(choice) {
case 0:
return 'Ant';
case 1:
return 'Toh';
case 2:
return 'Chal';
case 3:
return 'Solo';
case 4:
return 'Lyu';
case 5:
return 'Zarra';
}
}
//placepart2 ::= aram | kar | d | ranin | kemo | nask
function gen_placepart2() {
var choice = Math.floor(Math.random() * 6);
switch(choice) {
case 0:
return 'aram';
case 1:
return 'kar';
case 2:
return 'd';
case 3:
return 'ranin';
case 4:
return 'kemo';
case 5:
return 'nask';
}
}
//easternfirst ::= <easternfirst1><easternfirst2>
function gen_easternfirst() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_easternfirst1() + '' + gen_easternfirst2() + '';
}
}
//easternfirst1 ::= Kata | Hou | Bars | Ha | Ara | Marz | Yas | Re | Ara
function gen_easternfirst1() {
var choice = Math.floor(Math.random() * 9);
switch(choice) {
case 0:
return 'Kata';
case 1:
return 'Hou';
case 2:
return 'Bars';
case 3:
return 'Ha';
case 4:
return 'Ara';
case 5:
return 'Marz';
case 6:
return 'Yas';
case 7:
return 'Re';
case 8:
return 'Ara';
}
}
//easternfirst2 ::= rosi | ri | amin | yr | maz | ban | min | han | kel
function gen_easternfirst2() {
var choice = Math.floor(Math.random() * 9);
switch(choice) {
case 0:
return 'rosi';
case 1:
return 'ri';
case 2:
return 'amin';
case 3:
return 'yr';
case 4:
return 'maz';
case 5:
return 'ban';
case 6:
return 'min';
case 7:
return 'han';
case 8:
return 'kel';
}
}
return gen_character();
}
