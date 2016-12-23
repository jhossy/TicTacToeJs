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

// var board = (function(){
//     var tiles = [3];

//     return {
//         tiles: tiles
//     }
// }());

var game = (function() {
    var players = [];
    var currentPlayer = '';
    var board = [];

    return {
        addPlayer : function(domElm, playerName, statusElm) {
            players.push(
                {
                    name: playerName,
                    marker : domElm == 'btnAddPlayer1' ? 'X' : 'O'
                }
            );

            updateElm(statusElm, '' + playerName + ' was added to the game');

            if(playerName != '' && playerName !== 'undefined') {
                disableElm(domElm);
            }
        },
        changeTurn: function() {
            if(currentPlayer == players[0].name) {
                currentPlayer = players[1].name;
            } else {
                currentPlayer = players[0].name;
            }
        },
        getCurrentPlayer : function() {
            return currentPlayer;
        },  
        getBoard : function() {
            return board;
        },      
        getPlayers : function() {
            return players;
        },
        startGame : function(btnElm, statusElm) {
            if(players.length == 2){
                disableElm(btnElm);
                currentPlayer = players[0].name;
                updateElm(statusElm, 'Game started!');
            }
            else{
                updateElm(statusElm, 'Requires two players to start!');
            }        
        },
        placeMarker : function(x, y, statusElm) {
            //check if available
            // if(board.tiles[x][y] != '') {
            //     updateElm(statusElm, 'Tile is occupied');
            // }
            //if(board)
            //place marker
            //board.push({'x' : x, 'y': y, 'marker' : 'X'});

            //lock tile
        }
    }
}());

