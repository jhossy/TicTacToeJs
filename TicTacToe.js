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

function updateElmValue(domElm, value) {
    document.getElementById(domElm).setAttribute('value', value);
}

function updateElmHtml(domElm, value) {
    document.getElementById(domElm).innerHTML = value;
}

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

            updateElmValue(statusElm, '' + playerName + ' was added to the game');

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
        getCurrentMarker : function() {
            if(players[0].name == currentPlayer) {
                return players[0].marker;
            }
            return players[1].marker;
        },
        getBoard : function() {
            return board;
        },      
        getPlayers : function() {
            return players;
        },
        initializeBoard: function() {
            board[0] = ['','',''];
            board[1] = ['','',''];
            board[2] = ['','',''];
        },
        startGame : function(btnElm, statusElm) {
            if(players.length == 2){
                disableElm(btnElm);
                currentPlayer = players[0].name;
                this.initializeBoard();
                updateElmValue(statusElm, 'Game started!');
            }
            else{
                updateElmValue(statusElm, 'Requires two players to start!');
            }        
        },
        placeMarker : function(x, y, statusElm, elmToUpdate) {
            //check if available
            if(board[x][y] !== '') {
                //write to status field
                updateElmValue(statusElm, 'Tile is occupied');
                return;
            }
            
            var markerToPlace = this.getCurrentMarker();
            board[x][y] = '' +  markerToPlace;

            //visually update the board
            updateElmHtml(elmToUpdate, markerToPlace);

            //switch player turn
            this.changeTurn();

            //update status element
            updateElmValue(statusElm, currentPlayer + '\'s turn');
        }
    }
}());

