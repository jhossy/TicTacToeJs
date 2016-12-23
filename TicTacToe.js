//alert('test success');

function cl(message) {
    console.log(message);
}

function disableElm(elmId) {
    if(elmId != '' && elmId !== 'undefined') {
        //domElm.disabled = true;
        document.getElementById(elmId).setAttribute('disabled', true);
    }
}

function enableElm(elmId) {
    if(elmId != '' && elmId !== 'undefined') {
        //domElm.disabled = false;
        document.getElementById(elmId).setAttribute('disabled', true);
    }
}

function updateElm(domElm, value) {
    document.getElementById(domElm).setAttribute('value', value);
}

var board = (function(){
    var tiles = [3];

    return {
        tiles: tiles
    }
}());

var game = (function() {
    var players = [];
    var makers = ['x', 'o'];
    var currentPlayer = '';
    
    return {
        board: board,
        initialize : function() {
            
        },
        addPlayer : function(domElm, playerName, statusElm) {
            players.push(
                {
                    name: playerName
                }
            );

            updateElm(statusElm, '' + playerName + ' was added to the game');

            if(playerName != '' && playerName !== 'undefined') {
                disableElm(domElm);
            }
        },        
        getPlayers : function() {
            return players;
        },
        startGame : function(btnElm, statusElm) {
            if(players.length == 2){
                disableElm(btnElm);
                this.currentPlayer = players[0].name;
                cl(statusElm);
                updateElm(statusElm, 'Game started!');
            }
            else{
                updateElm(statusElm, 'Requires two players to start!');
            }        
        },
        placeMarker : function(x, y) {
            //check if available

            //place marker
            //lock tile
        }
    }
}());

