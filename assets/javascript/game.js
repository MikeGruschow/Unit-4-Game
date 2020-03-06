$(document).ready(function() {
    function selectCharacter(characterHP, characterName, ap) {
        $('#kaladin','#shallan','#jasnah','#szeth').on("click", function(event) {
            //remove characters from the start div upon character selection
            $('#start').empty();

            //display selected character

            
        })
    }

})

//Start the Game 1)Display characters 2)Attack Defenders
function reset() {}
    var characterHP = {
        kaladin: 170,
        shallan: 140,
        jasnah: 160,
        szeth: 150
    };

    var characterName = {
        kaladin: 'Kaladin',
        shallan: 'Shallan',
        jasnah: 'Jasnah',
        szeth: 'Szeth'
    };

    var ap = {
        kaladin: 14,
        shallan: 11,
        jasnah: 17,
        szeth: 21
    };

   
