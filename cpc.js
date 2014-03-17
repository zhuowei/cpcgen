function generateSentence() {
//episode ::= <episodetitle>: <episodesynopsys>
function gen_episode() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_episodetitle() + ': ' + gen_episodesynopsys() + '';
}
}
//episodetitle ::= <character>'s <emotion> | What would <character> <actionshort>? | <characterortitle> <noticed> my <nerdnoun>! | The <emotion> of <character>| <holiday> Special
function gen_episodetitle() {
var choice = Math.floor(Math.random() * 5);
switch(choice) {
case 0:
return '' + gen_character() + '\'s ' + gen_emotion() + '';
case 1:
return 'What would ' + gen_character() + ' ' + gen_actionshort() + '?';
case 2:
return '' + gen_characterortitle() + ' ' + gen_noticed() + ' my ' + gen_nerdnoun() + '!';
case 3:
return 'The ' + gen_emotion() + ' of ' + gen_character() + '';
case 4:
return '' + gen_holiday() + ' Special';
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
//junior ::= Mispy | Cath | Demize | Shuffles | Ael | Emi
function gen_junior() {
var choice = Math.floor(Math.random() * 6);
switch(choice) {
case 0:
return 'Mispy';
case 1:
return 'Cath';
case 2:
return 'Demize';
case 3:
return 'Shuffles';
case 4:
return 'Ael';
case 5:
return 'Emi';
}
}
//senior ::= Oh-Ex | Yuki | Rich | Bob | Foxadon
function gen_senior() {
var choice = Math.floor(Math.random() * 5);
switch(choice) {
case 0:
return 'Oh-Ex';
case 1:
return 'Yuki';
case 2:
return 'Rich';
case 3:
return 'Bob';
case 4:
return 'Foxadon';
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
//episodesynopsys ::= <episodedoing> | <timeblurb>, <episodedoing>
function gen_episodesynopsys() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_episodedoing() + '';
case 1:
return '' + gen_timeblurb() + ', ' + gen_episodedoing() + '';
}
}
//episodedoing ::= <juniors> <try> to <action> a <nerdnoun> while <character> <adverb> <action>s a <nerdnoun>
function gen_episodedoing() {
var choice = Math.floor(Math.random() * 1);
switch(choice) {
case 0:
return '' + gen_juniors() + ' ' + gen_try() + ' to ' + gen_action() + ' a ' + gen_nerdnoun() + ' while ' + gen_character() + ' ' + gen_adverb() + ' ' + gen_action() + 's a ' + gen_nerdnoun() + '';
}
}
//holiday ::= Easter | Christmas | Festivus | Pi day | Tau day | New year | Thanksgiving | <junior>'s birthday | Winter-een-mas
function gen_holiday() {
var choice = Math.floor(Math.random() * 9);
switch(choice) {
case 0:
return 'Easter';
case 1:
return 'Christmas';
case 2:
return 'Festivus';
case 3:
return 'Pi day';
case 4:
return 'Tau day';
case 5:
return 'New year';
case 6:
return 'Thanksgiving';
case 7:
return '' + gen_junior() + '\'s birthday';
case 8:
return 'Winter-een-mas';
}
}
//timeblurb ::= With <times> <looming> | Now that <times> is on the horizon | Since <time> is coming up
function gen_timeblurb() {
var choice = Math.floor(Math.random() * 3);
switch(choice) {
case 0:
return 'With ' + gen_times() + ' ' + gen_looming() + '';
case 1:
return 'Now that ' + gen_times() + ' is on the horizon';
case 2:
return 'Since ' + gen_time() + ' is coming up';
}
}
//looming ::= looming | approaching
function gen_looming() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return 'looming';
case 1:
return 'approaching';
}
}
//times ::= <time> | <time> and <time>
function gen_times() {
var choice = Math.floor(Math.random() * 2);
switch(choice) {
case 0:
return '' + gen_time() + '';
case 1:
return '' + gen_time() + ' and ' + gen_time() + '';
}
}
//time ::= summer | winter | spring | fall | exams | midterms | <holiday>
function gen_time() {
var choice = Math.floor(Math.random() * 7);
switch(choice) {
case 0:
return 'summer';
case 1:
return 'winter';
case 2:
return 'spring';
case 3:
return 'fall';
case 4:
return 'exams';
case 5:
return 'midterms';
case 6:
return '' + gen_holiday() + '';
}
}
return gen_episode();
}
