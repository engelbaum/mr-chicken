// --- Nav mobile ---
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => menu.classList.toggle('show'));
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('show'));
});

// Année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// --- Données produits ---
const PRODUCTS = [
  {id:1,cat:"Menus",name:"Menu Chicken Mixte",desc:"2 pièces de poulet + 3 wings + frites + boisson",price:"7,50",img:"images/MenuChickenMixte.png",tag:"menu"},
  {id:2,cat:"Menus",name:"Menu Gourmand",desc:"5 pièces +10 tenders + frites + boisson 1,5L",price:"27,90",img:"images/MenuGourmand2790.png",tag:"menu"},
  {id:3,cat:"Menus",name:"Menu Big Family (45 wings)",desc:"45 Hot Wings + frites + 1,5L",price:"23,90",img:"images/BigFamily45wings.png",tag:"family"},
  {id:4,cat:"Menus",name:"Menu Trio Box (30 wings)",desc:"30 Hot Wings + 1,5L",price:"18,90",img:"images/TrioBox30.png",tag:"box"},
  {id:5,cat:"Menus",name:"Menu Chicken Mixte (XL)",desc:"10 pièces poulet + 10 wings + frites + 1,5L",price:"22,90",img:"images/xl.png",tag:"menu"},
  {id:6,cat:"Menus",name:"Menu Big Family (15 pcs poulet)",desc:"15 pièces de poulet + frites + 1,5L",price:"22,90",img:"images/BigFamily15pcs.png",tag:"family"},
  {id:7,cat:"Menus",name:"Menu Trio Box (5 + 10 wings)",desc:"5 pièces + 15 wings + 1,5L",price:"18,90",img:"images/trioBox.png",tag:"box"},
  {id:8,cat:"Menus",name:"Menu Sweet Family",desc:"10 pièces de poulet + frites + 1,5L",price:"16,90",img:"images/MenuSweetFamily.png",tag:"family"},

  {id:9,cat:"Burgers",name:"Fisrh Burge (menu)",desc:"1 Fish Burger + frites + boisson",price:"7,00",img:"images/FisrhBurge.png",tag:"burger"},
  {id:10,cat:"Burgers",name:"Chicken Burger (menu)",desc:"1 chicken burger + frites + boisson",price:"6,50",img:"images/ChickenBurger.png",tag:"burger"},
  {id:11,cat:"Burgers",name:"Double Steack (menu)",desc:"Double steak + cheese + frites + boisson",price:"7,50",img:"images/Doublesteak.png",tag:"burger"},
  {id:12,cat:"Burgers",name:"Classic Steack (menu)",desc:"Cheese burger + frites + boisson",price:"6,50",img:"images/ClassicSteack.png",tag:"burger"},
  {id:13,cat:"Burgers",name:"Chicken Filet (menu)",desc:"Classic",price:"7,00",img:"images/ChickenFilet.png",tag:"burger"},
  {id:14,cat:"Burgers",name:"Double Filet (menu)",desc:"5 saveurs au choix",price:"8,00",img:"images/DoubleFilet .png",tag:"burger"},
{id:37,cat:"Burgers",name:"Burger (unité)",price:"2,00",img:"images/Burger.png",tag:"extra"},

  {id:15,cat:"Wings & Co",name:"Hot'n Spicy Wings x6",desc:"A - avec boisson",price:"6,50",img:"images/HotSpicyWings6.png",tag:"wings"},
  {id:16,cat:"Wings & Co",name:"Hot'n Spicy Wings x10",desc:"B - avec boisson",price:"7,50",img:"images/HotWings10.png",tag:"wings"},
  {id:17,cat:"Wings & Co",name:"Menu Tenders",desc:"5 tenders + frites + boisson",price:"7,50",img:"images/MenuTenders7.png",tag:"tenders"},
  {id:18,cat:"Wings & Co",name:"Menu Tenders XL",desc:"(famille)",price:"22,90",img:"images/MenuTenders.png",tag:"tenders"},
  {id:19,cat:"Wings & Co",name:"Nuggets x6 (menu)",desc:"6 nuggets + boisson",price:"6,50",img:"images/Nuggets6.png",tag:"nuggets"},

  {id:20,cat:"Wraps",name:"Chicken Wrap (menu)",desc:"Chicken wrap + boisson",price:"7,50",img:"images/tsenderswrap.png",tag:"wrap"},
  {id:21,cat:"Wraps",name:"Tenders Wrap (menu)",desc:"Nouveau",price:"8,00",img:"images/TendersWrap .png",tag:"wrap"},
  {id:22,cat:"Wraps",name:"Kefta Wrap (menu)",desc:"Kefta wrap + boisson",price:"7,50",img:"images/KeftaWrap .png",tag:"wrap"},
  {id:23,cat:"Wraps",name:"Chawarma Wrap (menu)",desc:"Poulet ou bœuf + boisson",price:"7,50",img:"images/TendersWrap.png",tag:"wrap"},

  {id:24,cat:"Enfant",name:"Menu Enfant",desc:"Avec surprise",price:"6,00",img:"images/MenuEnfant.png",tag:"kids"},

  {id:25,cat:"Nans",name:"Nan Simple",desc:"Pain nature",price:"1,50",img:"images/NanSimple.png",tag:"nan"},
  {id:26,cat:"Nans",name:"Nan Fromage",desc:"Généreux & fondant",price:"3,00",img:"images/nanfromage.png",tag:"nan"},
  {id:27,cat:"Nans",name:"Chicken Nan (menu)",desc:"Nan + crudités + sauces + frites + boisson",price:"8,50",img:"images/ChickenNan.png",tag:"nan"},
  {id:28,cat:"Nans",name:"Kefta Nan (menu)",desc:"Bœuf/kefta + crudités + frites + boisson",price:"8,50",img:"images/KeftaNan.png",tag:"nan"},
  {id:29,cat:"Nans",name:"Kebab Nan (menu)",desc:"Viande au choix + crudités + frites + boisson",price:"8,50",img:"images/KebabNan.png",tag:"nan"},
  {id:30,cat:"Nans",name:"Steak Nan (menu)",desc:"Steak + crudités + frites + boisson",price:"8,50",img:"images/SteakNan.png",tag:"nan"},
  {id:31,cat:"Nans",name:"Fish Nan Fromage (menu)",desc:"Fish + fromage + crudités + frites + boisson",price:"8,50",img:"images/FishNanFromage.png",tag:"nan"},
  {id:32,cat:"Nans",name:"Chicken Tandoori (menu)",desc:"Tandoori + crudités + frites + boisson",price:"8,50",img:"images/ChickenTandoori.png",tag:"nan"},

  {id:33,cat:"Accompagnements",name:"Piment au fromage (x5)",price:"4,00",img:"images/PimentFromage.png",tag:"side"},
  {id:34,cat:"Accompagnements",name:"Bâtonnets de mozzarella (x5)",price:"3,50",img:"images/Bâtonnets.png",tag:"side"},
  {id:35,cat:"Accompagnements",name:"Bouchées de camembert (x5)",price:"3,50",img:"images/Bouchéescamembert .png",tag:"side"},
  {id:36,cat:"Accompagnements",name:"Anneaux d’oignons (x6)",price:"3,50",img:"images/Anneaux.png",tag:"side"},
  
  {id:38,cat:"Accompagnements",name:"Wings (x5)",price:"4,50",img:"images/wings.png",tag:"extra"},
  {id:39,cat:"Accompagnements",name:"Tenders (x3)",price:"5,00",img:"images/Tenders.png",tag:"extra"},
  {id:40,cat:"Accompagnements",name:"Nugget’s (x6)",price:"3,00",img:"images/Nugget.png",tag:"extra"},
  {id:41,cat:"Accompagnements",name:"Épi de maïs",price:"2,00",img:"images/EpiMais.png",tag:"extra"},
  {id:42,cat:"Accompagnements",name:"Potatoes croustillantes",price:"3,00",img:"images/Potatoes.png",tag:"extra"},
];

const CATEGORIES = ["Tous","Menus","Burgers","Wraps","Wings & Co","Nans","Accompagnements","Enfant"];

// --- Menu interactif ---
const grid   = document.getElementById('grid');
const catbar = document.getElementById('catbar');
const search = document.getElementById('search');
const sort   = document.getElementById('sort');

let state = { cat:"Tous", q:"", sort:"default" };

CATEGORIES.forEach(c=>{
  const b=document.createElement('button');
  b.textContent=c;
  if(c==="Tous") b.classList.add('active');
  b.addEventListener('click', ()=>{
    [...catbar.children].forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    state.cat=c; render();
  });
  catbar.appendChild(b);
});

search.addEventListener('input', ()=>{ state.q=search.value.trim().toLowerCase(); render(); });
sort.addEventListener('change', ()=>{ state.sort=sort.value; render(); });

function euroToNumber(e){ return Number((e||"0").replace(",",".").replace(/[^\d.]/g,"")); }
function sortItems(list){
  switch(state.sort){
    case "price-asc":  return list.sort((a,b)=>euroToNumber(a.price)-euroToNumber(b.price));
    case "price-desc": return list.sort((a,b)=>euroToNumber(b.price)-euroToNumber(a.price));
    case "alpha":      return list.sort((a,b)=>a.name.localeCompare(b.name));
    default:           return list;
  }
}
function imgOrPlaceholder(x){
  return x.img
    ? `<img src="${x.img}" alt="${x.name}" loading="lazy">`
    : `<div class="placeholder">Mr Chicken</div>`;
}
function cardHTML(x){
  return `
    <article class="card">
      <div class="media">
        ${imgOrPlaceholder(x)}
        <span class="ribbon">${x.cat}</span>
      </div>
      <div class="content">
        <div class="title">
          <h3>${x.name}</h3>
          <div class="price">${x.price}€</div>
        </div>
        <p class="desc">${x.desc||""}</p>
        <div class="meta">
          ${x.tag?`<span class="pill">${x.tag}</span>`:""}
          <span class="pill">Mr Chicken</span>
        </div>
      </div>
    </article>`;
}
function render(){
  let items = PRODUCTS.slice();
  if(state.cat!=="Tous") items = items.filter(x=>x.cat===state.cat);
  if(state.q){
    const q = state.q;
    items = items.filter(x => (x.name + (x.desc||"") + x.cat).toLowerCase().includes(q));
  }
  items = sortItems(items);
  grid.innerHTML = items.length ? items.map(cardHTML).join('') : `<p>Aucun résultat.</p>`;
}
render();

// Slogan rotatif (optionnel)
(function(){
  const el = document.querySelector(".promo-sub");
  if(!el) return;
  const lines = [
    "Poulet croustillant, sauces maison, service rapide.",
    "Fraîcheur du jour, goût authentique.",
    "Des wings qui claquent, des wraps qui régalent."
  ];
  let i = 0;
  setInterval(()=>{
    i = (i+1)%lines.length;
    el.style.opacity = 0;
    setTimeout(()=>{ el.textContent = lines[i]; el.style.opacity = 1; }, 250);
  }, 3500);
})();
