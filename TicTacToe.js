//alert('test success');

function cl(message) {
    console.log(message);
}

function disableElm(domElm) {
    if(domElm != '' && domElm !== 'undefined') {
        domElm.disabled = true;
    }
}

function enableElm(domElm) {
    if(domElm != '' && domElm !== 'undefined') {
        domElm.disabled = false;
    }
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
    var gameDataElm = '';

    return {
        board: board,
        initialize : function(dataElm) {
            gameDataElm = dataElm;
        },
        addPlayer : function(domElm, playerName) {
            players.push(
                {
                    name: playerName
                }
            );

            if(playerName != '' && playerName !== 'undefined') {
                disableElm(domElm);
            }

            if(players.length == 2) {
                this.startGame();
            }
        },        
        getPlayers : function() {
            return players;
        },
        startGame : function() {
            document.getElementById(gameDataElm).setAttribute('data-currentUser', players[0].name);            
        },
        placeMarker : function(x, y, marker) {
            //check if available

            //place marker
            //lock tile
        }
    }
}());

