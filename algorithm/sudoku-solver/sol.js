/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var f = [];
    var col = [], row = [], box = [];
    for (var t = 0; t < 9; ++t) {
        col[t] = {};
        row[t] = {};
        box[t] = {};
        f[t] = [];
    }
    
    for (var x = 0; x < 9; ++x) 
        for (var y = 0; y < 9; ++y) 
            if (board[x][y] != '.') {
                col[x][+board[x][y]] = 1;
                row[y][+board[x][y]] = 1;
                box[~~(x / 3) * 3 + ~~(y / 3)][+board[x][y]] = 1;
            }
        
    
    var search = function (x, y) {
        if (y == 9) return search(x + 1, 0);
        if (x == 9) {
            for (var i = 0; i < 9; ++i)
                for (var j = 0; j < 9; ++j)
                    if (board[i][j] == '.') board[i][j] = '' + f[i][j];
            return;
        }
        if (board[x][y] != '.') return search(x, y + 1);
        var bi = ~~(x / 3) * 3 + ~~(y / 3);
        for (var i = 1; i <= 9; ++i) {
            if (!col[x][i] && !row[y][i] && !box[bi][i]) {
                col[x][i] = 1;
                row[y][i] = 1;
                box[bi][i] = 1;
                f[x][y] = i;
                search(x, y + 1);
                col[x][i] = 0;
                row[y][i] = 0;
                box[bi][i] = 0;
            }
        }
    }
    
    search(0, 0);
};
