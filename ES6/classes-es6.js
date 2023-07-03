(() => {
  class Avenger {
    name;
    power;

    constructor(name = "name", power = 123) {
      this.name = name;
      this.power = power;
    }
  }

  class FlayingAvenger extends Avenger {
    flaying;
    constructor(name, power) {
      super(name, power);
      this.flaying = true;
    }
  }

  //   const hulk = new Avenger("Hulk", 9001);
  const starlord = new FlayingAvenger("Falcon", 312);
  console.log(hulk);
})();
