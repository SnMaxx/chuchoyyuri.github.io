var p = new Peel('#book');
p.setMode('book');
p.handleDrag(function(evt, x, y) {
  this.setPeelPosition(x, y);
});
