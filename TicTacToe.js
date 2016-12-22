//alert('test success');

function cl(message) {
    console.log(message);
}

function disableElm(domElm) {
    if(domElm != '' && domElm !== 'undefined') {
        domElm.disabled = true;
    }
}

var board = (function(){
    var tiles = [3];

    return {
        tiles: tiles
    }
}());

var game = (function(){
    var players = [];

    return {
        board: board,
        addPlayer : function(domElm, playerName){
            players.push(
                {
                    name: playerName
                }
            );

            if(playerName != '' && playerName !== 'undefined') {
                disableElm(domElm);
            }
        },        
        getPlayers : function(){
            return players;
        }
    }
}());

