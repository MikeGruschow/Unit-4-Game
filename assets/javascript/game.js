$(document).ready(function() {

    var characters = {
        'kaladin': {
            name: 'Kaladin',
            health: 170,
            attack: 17,
            enemyAttack: 18,
            imageUrl: "/Users/mike/Unit-4-Game/assets/images/kaladin.jpg"

        },
        'shallan': {
            name: 'Shallan',
            health: 140,
            attack: 16,
            enemyAttack: 12,
            imageUrl: "/Users/mike/Unit-4-Game/assets/images/shallan.jpg"

        },
        'jasnah': {
            name: 'Jasnah',
            health: 160,
            attack: 21,
            enemyAttack: 18,
            imageUrl: "/Users/mike/Unit-4-Game/assets/images/jasnah.jpg"
        },
        'szeth': {
            name: 'Szeth',
            health: 150,
            attack: 19,
            enemyAttack: 16,
            imageUrl: "/Users/mike/Unit-4-Game/assets/images/szeth.jpg"
        }
    };

var selectedCharacter;
var defender;
var combatants = [];
var indexofSelChar;
var attackResult;
var turnCounter = 1;
var killCount = 0;

});

var renderOne = function(character, renderArea, makeChar) {
    //character appearance, renderArea: class/id, make character string
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<div class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(characterHealth);
    $(renderArea).append(charDiv);
    
    if (makeChar == 'enemy') {
        $(charDiv).addClass('enemy');
    } else if (makeChar == 'defender') {
        defender = character;
        $(charDiv).addClass('target-enemy');
    }
};