const rifles = require('./rifles.js')
const csgomarket = require('steam-market-pricing');


var awp_skins = Object.keys(rifles.awp);
// console.log(awp_skins.length);
// console.log(awp_skins);


const factory_new_names = [];
const minimal_wear_names = [];
const field_tested_names = [];
const well_worn_names = [];
const battle_scarred_names = [];

const stattrack_factory_new_names = [];
const stattrack_minimal_wear_names = [];
const stattrack_field_tested_names = [];
const stattrack_well_worn_names = [];
const stattrack_battle_scarred_names = [];

// csgomarket.getItemPrice(730, 'StatTrak™ Desert Eagle | Crimson Web (Minimal Wear)').then(item => console.log(item));




for (var i = 0; i < awp_skins.length; i ++) {

 factory_new_names.push(`AWP | ${awp_skins[i]} (Factory New)`);
 stattrack_factory_new_names.push(`StatTrak™ AWP | ${awp_skins[i]} (Factory New)`);

 minimal_wear_names.push(`AWP | ${awp_skins[i]} (Minimal Wear)`);
 stattrack_minimal_wear_names.push(`StatTrak™ AWP | ${awp_skins[i]} (Minimal Wear)`);

 field_tested_names.push(`AWP | ${awp_skins[i]} (Field-Tested)`);
 stattrack_field_tested_names.push(`StatTrak™ AWP | ${awp_skins[i]} (Field-Tested)`);

 well_worn_names.push(`AWP | ${awp_skins[i]} (Well-Worn)`);
 stattrack_well_worn_names.push(`StatTrak™ AWP | ${awp_skins[i]} (Well-Worn)`);

 battle_scarred_names.push(`AWP | ${awp_skins[i]} (Battle-Scarred)`);
 stattrack_battle_scarred_names.push(`StatTrak™ AWP | ${awp_skins[i]} (Battle-Scarred)`);



}


csgomarket.getItemsPrices(730, factory_new_names).then(items => factory_new_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, stattrack_factory_new_names).then(items => stattrack_factory_new_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, minimal_wear_names).then(items => minimal_wear_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, stattrack_minimal_wear_names).then(items => stattrack_minimal_wear_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, field_tested_names).then(items => field_tested_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, stattrack_field_tested_names).then(items => stattrack_field_tested_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, well_worn_names).then(items => well_worn_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, stattrack_well_worn_names).then(items => stattrack_well_worn_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, battle_scarred_names).then(items => battle_scarred_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));

csgomarket.getItemsPrices(730, stattrack_battle_scarred_names).then(items => stattrack_battle_scarred_names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));





// for (var i = 0; i < awp_skins.length; i ++) {

//   csgomarket.getItemPrice(730, `AWP | ${awp_skins[i]} (Minimal Wear)`).then(item => console.log(item));

// }

