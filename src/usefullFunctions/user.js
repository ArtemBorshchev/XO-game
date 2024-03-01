export const user = {
  name: '',
  isLogin: false,
  moves: [],
  gameStatus: 'in progress',
  winCount: 0,

  setIsLogin() {
    this.isLogin = !this.isLogin;
  },
  addMoves(cell) {
    this.moves.push(cell);
  },
  changeGameStatus(isWin) {
    this.gameStatus = "Win";
    this.winCount += 1;
  },
}

// export default user;