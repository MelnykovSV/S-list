const main_div = document.getElementById("main-div");
const champinput = document.getElementById("new-champ-input");
const addbutton = document.getElementById("new-champ-button");
const champ_num = document.getElementById("champ_num");
// const list1 =
//   "aatrox,ahri,akali,akshan,alistar,amumu,anivia,annie,aphelios,ashe,aurelionsol,azir,bard,belveth,blitzcrank,brand,braum,caitlyn,camille,cassiopeia,chogath,corki,darius,diana,draven,drmundo,ekko,elise,evelynn,ezreal,fiddlesticks,fiora,fizz,galio,gangplank,garen,gnar,gragas,graves,gwen,hecarim,heimerdinger,illaoi,irelia,ivern,janna,jarvaniv,jax,jayce,jhin,jinx,kaisa,kalista,karma,karthus,kassadin,katarina,kayle,kayn,kennen,khazix,kindred,kled,kogmaw,leblanc,leesin,leona,lillia,lissandra,lucian,lulu,lux,malphite,malzahar,maokai,masteryi,missfortune,monkeyking,mordekaiser,morgana,nami,nasus,nautilus,neeko,nidalee,nilah,nocturne,nunu,olaf,orianna,ornn,pantheon,poppy,pyke,qiyana,quinn,rakan,rammus,reksai,rell,renata,renekton,rengar,riven,rumble,ryze,samira,sejuani,senna,seraphine,sett,shaco,shen,shyvana,singed,sion,sivir,skarner,sona,soraka,swain,sylas,syndra,tahmkench,taliyah,talon,taric,teemo,thresh,tristana,trundle,tryndamere,twistedfate,twitch,udyr,urgot,varus,vayne,veigar,velkoz,vex,vi,viego,viktor,vladimir,volibear,warwick,xayah,xerath,xinzhao,yasuo,yone,yorick,yuumi,zac,zed,zeri,ziggs,zilean,zoe,zyra";

const list = document.getElementById("main-div");
const champ_list = localStorage.champions.toLowerCase();
// const champ_list = list1;
// "Aatrox,Ahri,Akali,Alistar,Amumu,Anivia,Annie,Aphelios,Ashe,AurelionSol,Azir,Bard,Blitzcrank,Brand,Braum,Caitlyn,Camille,Cassiopeia,ChoGath,Corki,Darius,Diana,DrMundo,Draven,Ekko,Elise,Evelynn,Ezreal,Fiddlesticks,Fiora,Fizz,Galio,Gangplank,Garen,Gnar,Gragas,Graves,Hecarim,Heimerdinger,Illaoi,Irelia,Ivern,Janna,JarvanIV,Jax,Jayce,Jhin,Jinx,KaiSa,Kalista,Karma,Karthus,Kassadin,Katarina,Kayle,Kayn,Kennen,KhaZix,Kindred,Kled,KogMaw,LeBlanc,LeeSin,Leona,Lillia,Lissandra,Lucian,Lulu,Lux,Malphite,Malzahar,Maokai,MasterYi,MissFortune,Mordekaiser,Morgana,Nami,Nasus,Nautilus,Neeko,Nidalee,Nocturne,Nunu,Olaf,Orianna,Ornn,Pantheon,Poppy,Pyke,Qiyana,Quinn,Rakan,Rammus,RekSai,Rell,Renekton,Rengar,Riven,Rumble,Ryze,Samira,Sejuani,Senna,Seraphine,Sett,Shaco,Shen,Shyvana,Singed,Sion,Sivir,Skarner,Sona,Soraka,Swain,Sylas,Syndra,TahmKench,Taliyah,Talon,Taric,Teemo,Thresh,Tristana,Trundle,Tryndamere,TwistedFate,Twitch,Udyr,Urgot,Varus,Vayne,Veigar,VelKoz,Vi,Viktor,Vladimir,Volibear,Warwick,MonkeyKing,Xayah,Xerath,XinZhao,Yasuo,Yone,Yorick,Yuumi,Zac,Zed,Ziggs,Zilean,Zoe,Zyra";
// belveth, renata, zeri
const champ_arr = champ_list.split(",");
console.log(champ_arr);
console.log(champ_arr.join(","));
champ_num.innerText = `Number of champions: ${champ_arr.length}`;
// function str_list_to_obj(list) {
//   const arr = list.split(",");
//   const obj = new Object();
//   //const obj1 = new Object();
//   for (i = 0; i < arr.length; i++) {
//     var obj1 = {
//       name: arr[i],
//       done: false,
//     };
//     const a = arr[i];
//     obj[a] = obj1;
//   }
//   console.log(obj);
//   return obj;
// }

main_div.style.width = "1600px";
console.log(localStorage.champ_obj_str);
const main_obj = JSON.parse(localStorage.champ_obj_str);

// localStorage.setItem("champ_obj_str", JSON.stringify(str_list_to_obj(list)));

function calc_width() {
  main_div.style.width = `${
    Math.floor((window.innerWidth * 0.7) / 100) * 100
  }px`;
}

function add_champ() {
  const name = document.getElementById("new-champ-input").value.toLowerCase();

  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const img = document.createElement("img");
  div.appendChild(img);
  img.setAttribute(
    "src",
    `https://opgg-static.akamaized.net/images/lol/champion/${name}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1664158120766`
  );
  img.onload = () => {
    console.log("success");
    main_div.appendChild(div);

    if (
      champ_arr.includes(
        document.getElementById("new-champ-input").value.toLowerCase()
      ) === true
    ) {
      console.log("This champion is already in list");
    }

    if (
      champ_arr.includes(
        document.getElementById("new-champ-input").value.toLowerCase()
      ) === false
    ) {
      champ_arr.push(
        document.getElementById("new-champ-input").value.toLowerCase()
      );
    }
    champ_arr.sort();
    localStorage.setItem("champions", champ_arr.join(","));
    location.reload();
  };
  img.onerror = () => {
    console.log("error");
  };
}

function check() {
  console.log(this.childElementCount);
  if (this.childElementCount === 1) {
    const img1 = document.createElement("img");
    img1.setAttribute("src", `checkmark.png`);
    img1.setAttribute("class", `check_img`);
    this.appendChild(img1);
    //console.log("name " + this.getAttribute("name"));
    const a = this.getAttribute("name");
    set_status_true(main_obj, this.getAttribute("name"));
    get_status(main_obj, a);

    console.log(this + "clicked");
    return;
  }
  if (this.childElementCount === 2) {
    //console.log("name " + this.getAttribute("name"));
    console.log("nothing");
    return;
  }
}

function get_name(object, key1) {
  console.log(object[key1].name);
}

function get_status(object, key1) {
  console.log("status:  " + object[key1].done);
  return object[key1].done;
}

function set_status_true(object, key1) {
  object[key1].done = true;
  localStorage.setItem("champ_obj_str", JSON.stringify(object));
  console.log("status:  " + object[key1].done);
}

function save_data(object) {
  console.log("STR_OBJ" + JSON.stringify(object));
  localStorage.setItem("champ_obj_str", JSON.stringify(object));
}

addbutton.addEventListener("click", add_champ);

window.addEventListener("resize", calc_width);

for (i = 0; i < Object.keys(main_obj).length; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  div.setAttribute("name", `${Object.keys(main_obj)[i]}`);
  const img = document.createElement("img");
  console.log(Object.keys(main_obj)[i]);
  img.setAttribute(
    "src",
    `https://opgg-static.akamaized.net/images/lol/champion/${
      Object.keys(main_obj)[i]
    }.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1664158120766`
  );
  div.addEventListener("click", check);
  div.appendChild(img);
  main_div.appendChild(div);
  get_status(main_obj, div.getAttribute("name"));
  if (get_status(main_obj, div.getAttribute("name")) === true) {
    console.log("im here");
    const img1 = document.createElement("img");
    img1.setAttribute("src", `checkmark.png`);
    img1.setAttribute("class", `check_img`);
    div.appendChild(img1);
  }
}

// localStorage.setItem("champions", champ_arr.join(","));
//localStorage.setItem("champions", champ_arr.join(","));
localStorage.setItem("champ_obj_str", JSON.stringify(main_obj));

console.log("RESULT: " + localStorage.champ_obj_str);

console.log(main_obj.ahri);
