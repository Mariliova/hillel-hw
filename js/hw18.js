let ladder = {
  step: 0,
  up: function () {
      this.step += 1;
      return this;
  },
  down: function () {
      this.step -= 1;
      return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    
  },
};

ladder.up().up().down().showStep(); // 1