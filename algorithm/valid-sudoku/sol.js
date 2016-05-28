/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var col = [], row = [], box = [];
    for (var t = 0; t < 9; ++t) {
        col[t] = {};
        row[t] = {};
        box[t] = {};
    }
    
    for (var x = 0; x < 9; ++x) 
        for (var y = 0; y < 9; ++y) 
            if (board[x][y] != '.') {
                if (col[x][board[x][y]]) return false;
                else col[x][board[x][y]] = 1;
                if (row[y][board[x][y]]) return false;
                else row[y][board[x][y]] = 1;
                if (box[~~(x / 3) * 3 + ~~(y / 3)][board[x][y]]) return false;
                else box[~~(x / 3) * 3 + ~~(y / 3)][board[x][y]] = 1;
            }
    return true;
};
