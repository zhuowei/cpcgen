function generateSentence() {
//episode ::= <episodetitle>: <episodesynopsys>
function gen_episode() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_episodetitle() + ': ' + gen_episodesynopsys() + '';
}
}
//episodetitle ::= <character>'s <emotion> | What would <character> <actionshort>?
function gen_episodetitle() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_character() + '\'s ' + gen_emotion() + '';
case 1:
return 'What would ' + gen_character() + ' ' + gen_actionshort() + '?';
}
}
//actionshort ::= do | say | think
function gen_actionshort() {
var choice = Math.floor(Math.random() * 3);
switch(choice) {
case 0:
return 'do';
case 1:
return 'say';
case 2:
return 'think';
}
}
//character ::= <junior> | <senior>
function gen_character() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_junior() + '';
case 1:
return '' + gen_senior() + '';
}
}
//junior ::= Mispy | Cath | Demize
function gen_junior() {
var choice = Math.floor(Math.random() * 3);
switch(choice) {
case 0:
return 'Mispy';
case 1:
return 'Cath';
case 2:
return 'Demize';
}
}
//senior ::= Oh-Ex | Yuki | Rich
function gen_senior() {
var choice = Math.floor(Math.random() * 3);
switch(choice) {
case 0:
return 'Oh-Ex';
case 1:
return 'Yuki';
case 2:
return 'Rich';
}
}
//juniors ::= <junior> and <junior> | <junior>, <junior> and <junior>
function gen_juniors() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_junior() + ' and ' + gen_junior() + '';
case 1:
return '' + gen_junior() + ', ' + gen_junior() + ' and ' + gen_junior() + '';
}
}
//emotion ::= wrath | sadness | pain | confusion | anger
function gen_emotion() {
var choice = Math.floor(Math.random() * 5);
switch(choice) {
case 0:
return 'wrath';
case 1:
return 'sadness';
case 2:
return 'pain';
case 3:
return 'confusion';
case 4:
return 'anger';
}
}
//try ::= try | attempt
function gen_try() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return 'try';
case 1:
return 'attempt';
}
}
//nerdnoun ::= smartphone | computer | code | compiler | kernel | cellphone | hard drive | network | router | Wi-Fi | firmware
function gen_nerdnoun() {
var choice = Math.floor(Math.random() * 11);
switch(choice) {
case 0:
return 'smartphone';
case 1:
return 'computer';
case 2:
return 'code';
case 3:
return 'compiler';
case 4:
return 'kernel';
case 5:
return 'cellphone';
case 6:
return 'hard drive';
case 7:
return 'network';
case 8:
return 'router';
case 9:
return 'Wi-Fi';
case 10:
return 'firmware';
}
}
//action ::= install | format | hack | modify | reverse engineer | improve | learn about
function gen_action() {
var choice = Math.floor(Math.random() * 7);
switch(choice) {
case 0:
return 'install';
case 1:
return 'format';
case 2:
return 'hack';
case 3:
return 'modify';
case 4:
return 'reverse engineer';
case 5:
return 'improve';
case 6:
return 'learn about';
}
}
//adverb ::= quietly | quickly | angrily | repeatedly
function gen_adverb() {
var choice = Math.floor(Math.random() * 4);
switch(choice) {
case 0:
return 'quietly';
case 1:
return 'quickly';
case 2:
return 'angrily';
case 3:
return 'repeatedly';
}
}
//episodesynopsys ::= <juniors> <try> to <action> a <nerdnoun> while <character> <adverb> <action> a <nerdnoun>
function gen_episodesynopsys() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_juniors() + ' ' + gen_try() + ' to ' + gen_action() + ' a ' + gen_nerdnoun() + ' while ' + gen_character() + ' ' + gen_adverb() + ' ' + gen_action() + ' a ' + gen_nerdnoun() + '';
}
}
return gen_episode();
}
