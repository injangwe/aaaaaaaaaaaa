class Boec {
  constructor(name, health, arrmor, damage, vinoslivost, lovkost, hitrost) {
    this.name = name;
    this.health = health;
    this.arrmor = arrmor;
    this.damage = damage;
    this.vinoslivost = vinoslivost;
    this.lovkost = lovkost;
    this.hitrost = hitrost;
  }

  ShowStatik(id) {
    switch (id) {
      case 1:
        let name = document.querySelector("#boec1");

        name.innerHTML = `
        <span>Имя:${this.name}</span>
        <span>Здоровье:${this.health}</span>
        <span>Броня:${this.arrmor}</span>
        <span>Урон:${this.damage}</span>
        <span>Выносливость:${this.vinoslivost}</span>
        <span>Ловкость:${this.lovkost}</span>
        <span>Хитрость:${this.hitrost}</span>
        <button class="viborButton">Выбрать бойца</button>`;
        break;
      case 2:
        let name2 = document.querySelector("#boec2");

        name2.innerHTML = `
        <span>Имя:${this.name}</span>
        <span>Здоровье:${this.health}</span>
        <span>Броня:${this.arrmor}</span>
        <span>Урон:${this.damage}</span>
        <span>Выносливость:${this.vinoslivost}</span>
        <span>Ловкость:${this.lovkost}</span>
        <span>Хитрость:${this.hitrost}</span>
        <button class="viborButton" >Выбрать бойца</button>`;
        break;
      case 3:
        let name3 = document.querySelector("#boec3");

        name3.innerHTML = `
        <span>Имя:${this.name}</span>
        <span>Здоровье:${this.health}</span>
        <span>Броня:${this.arrmor}</span>
        <span>Урон:${this.damage}</span>
        <span>Выносливость:${this.vinoslivost}</span>
        <span>Ловкость:${this.lovkost}</span>
        <span>Хитрость:${this.hitrost}</span>
        <button class="viborButton">Выбрать бойца</button>`;
        break;
      case 4:
        let name4 = document.querySelector("#boec4");

        name4.innerHTML = `
        <span>Имя:${this.name}</span>
        <span>Здоровье:${this.health}</span>
        <span>Броня:${this.arrmor}</span>
        <span>Урон:${this.damage}</span>
        <span>Выносливость:${this.vinoslivost}</span>
        <span>Ловкость:${this.lovkost}</span>
        <span>Хитрость:${this.hitrost}</span>
        <button class="viborButton">Выбрать бойца</button>`;
        break;
    }
  }

  TakeDamage(health, damage, arrmors, vinoslivost, lovkost, hitrost) {
    if (arrmors > 50) {
      damage = damage / 2;
      console.log("Урон снизился из-за брони! " + damage.toFixed());
    }
    if (arrmors <= 0) {
      arrmors = 0;
      console.log("У " + this.name + " сломалась броня!");
    }
    health = health + vinoslivost * 5;
    console.log(
      this.name + " увеличивает здоровье на " + health.toFixed() + "hp!"
    );
    damage = damage + lovkost * 3;
    damage = damage - arrmors * 0.015;
    arrmors = arrmors - hitrost * 0.25;

    let ostatokhealthe = health - damage;
    arrmors = arrmors - 3;
    this.arrmor = arrmors;
    this.health = ostatokhealthe;
    if (this.health > 0) {
      console.log("Получен урон: " + damage.toFixed());
      console.log(
        "У " + this.name + " осталось: " + this.health.toFixed() + "hp"
      );
    }
    if (this.health <= 0) {
      console.log(this.name + " проиграл сражение!");
    }
  }

  ShowHealth() {
    console.log(this.health);
  }
}

// Создание персонажей start
let BoecNames = ["Боец1", "Боец2", "Боец3", "Боец4"];

//Рандом
function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let massivBoeci = [
  (Boec1 = new Boec(
    BoecNames[0],
    (healthGeneration = Random(50, 60)),
    (arrmorGeneration = Random(20, 200)),
    (damageGeneration = Random(40, 60)),
    (vinoslivostGeneration = Random(2, 10)),
    (lovkostGeneration = Random(1, 10)),
    (hitrostGeneration = Random(1, 8))
  )),
  (Boec2 = new Boec(
    BoecNames[1],
    (healthGeneration = Random(50, 60)),
    (arrmorGeneration = Random(20, 200)),
    (damageGeneration = Random(40, 60)),
    (vinoslivostGeneration = Random(2, 10)),
    (lovkostGeneration = Random(1, 10)),
    (hitrostGeneration = Random(1, 8))
  )),
  (Boec3 = new Boec(
    BoecNames[2],
    (healthGeneration = Random(50, 60)),
    (arrmorGeneration = Random(20, 200)),
    (damageGeneration = Random(40, 60)),
    (vinoslivostGeneration = Random(2, 10)),
    (lovkostGeneration = Random(1, 10)),
    (hitrostGeneration = Random(1, 8))
  )),
  (Boec4 = new Boec(
    BoecNames[3],
    (healthGeneration = Random(50, 60)),
    (arrmorGeneration = Random(20, 200)),
    (damageGeneration = Random(40, 60)),
    (vinoslivostGeneration = Random(2, 10)),
    (lovkostGeneration = Random(1, 10)),
    (hitrostGeneration = Random(1, 8))
  )),
];
////.Создание персонажей end

let startButton = document.querySelector("#StartPlay");

startButton.addEventListener("click", function () {
  let menu = document.querySelector(".menu");
  document.body.innerHTML = `
  <div class="Header">
  <p id="MainNadpic"> Street Fights</p>
  </div>
  <div class='main'>
  <div class='Boeci'>
    <p id='boec1' class='fighter-stats'>
      <span>Имя:Боец1</span>
      <span>Здоровье:???</span>
      <span>Броня:???</span>
      <span>Урон:???</span>
      <span>Выносливость:???</span>
      <span>Ловкость:???</span>
      <span>Хитрость:???</span>
      <button class='viborButton' disabled>Выбрать бойца</button>
      </p>
      
    <p id='boec2' class='fighter-stats'>
      <span>Имя:Боец2</span>
      <span>Здоровье:???</span>
      <span>Броня:???</span>
      <span>Урон:???</span>
      <span>Выносливость:???</span>
      <span>Ловкость:???</span>
      <span>Хитрость:???</span>
      <button class='viborButton' disabled>Выбрать бойца</button>
      </p>

      <p id='boec3' class='fighter-stats'>
      <span>Имя:Бое3</span>
      <span>Здоровье:???</span>
      <span>Броня:???</span>
      <span>Урон:???</span>
      <span>Выносливость:???</span>
      <span>Ловкость:???</span>
      <span>Хитрость:???</span>
      <button class='viborButton' disabled>Выбрать бойца</button>
      </p>

      <p id='boec4' class='fighter-stats'>
      <span>Имя:Боец4</span>
      <span>Здоровье:???</span>
      <span>Броня:???</span>
      <span>Урон:???</span>
      <span>Выносливость:???</span>
      <span>Ловкость:???</span>
      <span>Хитрость:???</span>
      <button class='viborButton' disabled>Выбрать бойца</button>
      </p>
  </div>
  <div class='buttonsss'>
    <button id='Start'> Начать! </button>
  </div>
 </div>`;
});

let Start = document.querySelector("#Start");
Start.addEventListener("click", StartInterfec);
function StartInterfec() {
  Boec1.ShowStatik(1);
  Boec2.ShowStatik(2);
  Boec3.ShowStatik(3);
  Boec4.ShowStatik(4);
  Start.remove();
}

///Выбор бойцов start
var vibarBoeci = [];
var maxVibar = 2;

function selectBoeci(idBoeca) {
  if (vibarBoeci.length < maxVibar) {
    vibarBoeci.push(idBoeca);
  }

  if (vibarBoeci.length === maxVibar) {
    while (vibarBoeci[0].health >= 0) {
      vibarBoeci[0].TakeDamage(
        vibarBoeci[0].health,
        vibarBoeci[1].damage,
        vibarBoeci[0].arrmor,
        vibarBoeci[0].vinoslivost,
        vibarBoeci[1].lovkost,
        vibarBoeci[1].hitrost
      );
      if (vibarBoeci[0].health <= 0) {
        console.log("Победил " + vibarBoeci[1].name);
        clearInterval();
        return;
      }
      if (vibarBoeci[0].health > 300) {
        alert("Неизвествная ошибка!");
        console.error("Неизвестная ошибка!");

        return;
      }

      vibarBoeci[1].TakeDamage(
        vibarBoeci[1].health,
        vibarBoeci[0].damage,
        vibarBoeci[1].arrmor,
        vibarBoeci[1].vinoslivost,
        vibarBoeci[0].lovkost,
        vibarBoeci[0].hitrost
      );
      if (vibarBoeci[1].health <= 0) {
        console.log("Победил " + vibarBoeci[0].name);
        clearInterval();
        return;
      }
      if (vibarBoeci[1].health > 300) {
        alert("Неизвествная ошибка!");
        console.error("Неизвестная ошибка!");
        clearInterval();
        return;
      }
    }
  }
}

var button1 = document.querySelector("#boec1");
button1.addEventListener("click", function () {
  button1.style.background = "gold";
  selectBoeci(Boec1);
});

var button2 = document.querySelector("#boec2");
button2.addEventListener("click", function () {
  button2.style.background = "gold";
  selectBoeci(Boec2);
});

var button3 = document.querySelector("#boec3");
button3.addEventListener("click", function () {
  button3.style.background = "gold";
  selectBoeci(Boec3);
});

var button4 = document.querySelector("#boec4");
button4.addEventListener("click", function () {
  button4.style.background = "gold";
  selectBoeci(Boec4);
});
////////выбор бойцов  end
