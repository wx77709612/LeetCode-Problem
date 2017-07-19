/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var count = 0;
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j <board[i].length; j++){
            if(board[i][j] == '.') continue;
            if(i > 0 && board[i - 1][j].toLowerCase() === 'x') continue;
            if(j > 0 && board[i][j - 1].toLowerCase() === 'x') continue;

            count++;
        }

    }

    return count;
};