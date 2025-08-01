"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    Abra: {
        types: ['Psychic'],
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        weightkg: 19.5,
        nfe: true
    },
    Aerodactyl: {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 105, df: 65, sp: 130, sl: 60 },
        weightkg: 59
    },
    Alakazam: {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 45, sp: 120, sl: 135 },
        weightkg: 48
    },
    Arbok: { types: ['Poison'], bs: { hp: 60, at: 85, df: 69, sp: 80, sl: 65 }, weightkg: 65 },
    Arcanine: {
        types: ['Fire'],
        bs: { hp: 90, at: 110, df: 80, sp: 95, sl: 80 },
        weightkg: 155
    },
    Articuno: {
        types: ['Ice', 'Flying'],
        bs: { hp: 90, at: 85, df: 100, sp: 85, sl: 125 },
        weightkg: 55.4
    },
    Beedrill: {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 80, df: 40, sp: 75, sl: 45 },
        weightkg: 29.5
    },
    Bellsprout: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 75, df: 35, sp: 40, sl: 70 },
        weightkg: 4,
        nfe: true
    },
    Blastoise: {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sp: 78, sl: 85 },
        weightkg: 85.5
    },
    Bulbasaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 49, df: 49, sp: 45, sl: 65 },
        weightkg: 6.9,
        nfe: true
    },
    Butterfree: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sp: 70, sl: 80 },
        weightkg: 32
    },
    Caterpie: {
        types: ['Bug'],
        bs: { hp: 45, at: 30, df: 35, sp: 45, sl: 20 },
        weightkg: 2.9,
        nfe: true
    },
    Chansey: {
        types: ['Normal'],
        bs: { hp: 250, at: 5, df: 5, sp: 50, sl: 105 },
        weightkg: 34.6
    },
    Charizard: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sp: 100, sl: 85 },
        weightkg: 90.5
    },
    Charmander: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sp: 65, sl: 50 },
        weightkg: 8.5,
        nfe: true
    },
    Charmeleon: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sp: 80, sl: 65 },
        weightkg: 19,
        nfe: true
    },
    Clefable: { types: ['Normal'], bs: { hp: 95, at: 70, df: 73, sp: 60, sl: 85 }, weightkg: 40 },
    Clefairy: {
        types: ['Normal'],
        bs: { hp: 70, at: 45, df: 48, sp: 35, sl: 60 },
        weightkg: 7.5,
        nfe: true
    },
    Cloyster: {
        types: ['Water', 'Ice'],
        bs: { hp: 50, at: 95, df: 180, sp: 70, sl: 85 },
        weightkg: 132.5
    },
    Cubone: {
        types: ['Ground'],
        bs: { hp: 50, at: 50, df: 95, sp: 35, sl: 40 },
        weightkg: 6.5,
        nfe: true
    },
    Dewgong: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 70, df: 80, sp: 70, sl: 95 },
        weightkg: 120
    },
    Diglett: {
        types: ['Ground'],
        bs: { hp: 10, at: 55, df: 25, sp: 95, sl: 45 },
        weightkg: 0.8,
        nfe: true
    },
    Ditto: { types: ['Normal'], bs: { hp: 48, at: 48, df: 48, sp: 48, sl: 48 }, weightkg: 4 },
    Dodrio: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 110, df: 70, sp: 100, sl: 60 },
        weightkg: 85.2
    },
    Doduo: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 85, df: 45, sp: 75, sl: 35 },
        weightkg: 39.2,
        nfe: true
    },
    Dragonair: {
        types: ['Dragon'],
        bs: { hp: 61, at: 84, df: 65, sp: 70, sl: 70 },
        weightkg: 16.5,
        nfe: true
    },
    Dragonite: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 91, at: 134, df: 95, sp: 80, sl: 100 },
        weightkg: 210
    },
    Dratini: {
        types: ['Dragon'],
        bs: { hp: 41, at: 64, df: 45, sp: 50, sl: 50 },
        weightkg: 3.3,
        nfe: true
    },
    Drowzee: {
        types: ['Psychic'],
        bs: { hp: 60, at: 48, df: 45, sp: 42, sl: 90 },
        weightkg: 32.4,
        nfe: true
    },
    Dugtrio: {
        types: ['Ground'],
        bs: { hp: 35, at: 80, df: 50, sp: 120, sl: 70 },
        weightkg: 33.3
    },
    Eevee: {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sp: 55, sl: 65 },
        weightkg: 6.5,
        nfe: true
    },
    Ekans: {
        types: ['Poison'],
        bs: { hp: 35, at: 60, df: 44, sp: 55, sl: 40 },
        weightkg: 6.9,
        nfe: true
    },
    Electabuzz: {
        types: ['Electric'],
        bs: { hp: 65, at: 83, df: 57, sp: 105, sl: 85 },
        weightkg: 30
    },
    Electrode: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 70, sp: 140, sl: 80 },
        weightkg: 66.6
    },
    Exeggcute: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 60, at: 40, df: 80, sp: 40, sl: 60 },
        weightkg: 2.5,
        nfe: true
    },
    Exeggutor: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 95, at: 95, df: 85, sp: 55, sl: 125 },
        weightkg: 120
    },
    'Farfetch\u2019d': {
        types: ['Normal', 'Flying'],
        bs: { hp: 52, at: 65, df: 55, sp: 60, sl: 58 },
        weightkg: 15
    },
    Fearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 65, at: 90, df: 65, sp: 100, sl: 61 },
        weightkg: 38
    },
    Flareon: { types: ['Fire'], bs: { hp: 65, at: 130, df: 60, sp: 65, sl: 110 }, weightkg: 25 },
    Gastly: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 30, at: 35, df: 30, sp: 80, sl: 100 },
        weightkg: 0.1,
        nfe: true
    },
    Gengar: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sp: 110, sl: 130 },
        weightkg: 40.5
    },
    Geodude: {
        types: ['Rock', 'Ground'],
        bs: { hp: 40, at: 80, df: 100, sp: 20, sl: 30 },
        weightkg: 20,
        nfe: true
    },
    Gloom: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 65, df: 70, sp: 40, sl: 85 },
        weightkg: 8.6,
        nfe: true
    },
    Golbat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 75, at: 80, df: 70, sp: 90, sl: 75 },
        weightkg: 55
    },
    Goldeen: {
        types: ['Water'],
        bs: { hp: 45, at: 67, df: 60, sp: 63, sl: 50 },
        weightkg: 15,
        nfe: true
    },
    Golduck: { types: ['Water'], bs: { hp: 80, at: 82, df: 78, sp: 85, sl: 80 }, weightkg: 76.6 },
    Golem: {
        types: ['Rock', 'Ground'],
        bs: { hp: 80, at: 110, df: 130, sp: 45, sl: 55 },
        weightkg: 300
    },
    Graveler: {
        types: ['Rock', 'Ground'],
        bs: { hp: 55, at: 95, df: 115, sp: 35, sl: 45 },
        weightkg: 105,
        nfe: true
    },
    Grimer: {
        types: ['Poison'],
        bs: { hp: 80, at: 80, df: 50, sp: 25, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Growlithe: {
        types: ['Fire'],
        bs: { hp: 55, at: 70, df: 45, sp: 60, sl: 50 },
        weightkg: 19,
        nfe: true
    },
    Gyarados: {
        types: ['Water', 'Flying'],
        bs: { hp: 95, at: 125, df: 79, sp: 81, sl: 100 },
        weightkg: 235
    },
    Haunter: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 45, at: 50, df: 45, sp: 95, sl: 115 },
        weightkg: 0.1,
        nfe: true
    },
    Hitmonchan: {
        types: ['Fighting'],
        bs: { hp: 50, at: 105, df: 79, sp: 76, sl: 35 },
        weightkg: 50.2
    },
    Hitmonlee: {
        types: ['Fighting'],
        bs: { hp: 50, at: 120, df: 53, sp: 87, sl: 35 },
        weightkg: 49.8
    },
    Horsea: {
        types: ['Water'],
        bs: { hp: 30, at: 40, df: 70, sp: 60, sl: 70 },
        weightkg: 8,
        nfe: true
    },
    Hypno: {
        types: ['Psychic'],
        bs: { hp: 85, at: 73, df: 70, sp: 67, sl: 115 },
        weightkg: 75.6
    },
    Ivysaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 62, df: 63, sp: 60, sl: 80 },
        weightkg: 13,
        nfe: true
    },
    Jigglypuff: {
        types: ['Normal'],
        bs: { hp: 115, at: 45, df: 20, sp: 20, sl: 25 },
        weightkg: 5.5,
        nfe: true
    },
    Jolteon: {
        types: ['Electric'],
        bs: { hp: 65, at: 65, df: 60, sp: 130, sl: 110 },
        weightkg: 24.5
    },
    Jynx: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 65, at: 50, df: 35, sp: 95, sl: 95 },
        weightkg: 40.6
    },
    Kabuto: {
        types: ['Rock', 'Water'],
        bs: { hp: 30, at: 80, df: 90, sp: 55, sl: 45 },
        weightkg: 11.5,
        nfe: true
    },
    Kabutops: {
        types: ['Rock', 'Water'],
        bs: { hp: 60, at: 115, df: 105, sp: 80, sl: 70 },
        weightkg: 40.5
    },
    Kadabra: {
        types: ['Psychic'],
        bs: { hp: 40, at: 35, df: 30, sp: 105, sl: 120 },
        weightkg: 56.5,
        nfe: true
    },
    Kakuna: {
        types: ['Bug', 'Poison'],
        bs: { hp: 45, at: 25, df: 50, sp: 35, sl: 25 },
        weightkg: 10,
        nfe: true
    },
    Kangaskhan: {
        types: ['Normal'],
        bs: { hp: 105, at: 95, df: 80, sp: 90, sl: 40 },
        weightkg: 80
    },
    Kingler: { types: ['Water'], bs: { hp: 55, at: 130, df: 115, sp: 75, sl: 50 }, weightkg: 60 },
    Koffing: {
        types: ['Poison'],
        bs: { hp: 40, at: 65, df: 95, sp: 35, sl: 60 },
        weightkg: 1,
        nfe: true
    },
    Krabby: {
        types: ['Water'],
        bs: { hp: 30, at: 105, df: 90, sp: 50, sl: 25 },
        weightkg: 6.5,
        nfe: true
    },
    Lapras: {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sp: 60, sl: 95 },
        weightkg: 220
    },
    Lickitung: {
        types: ['Normal'],
        bs: { hp: 90, at: 55, df: 75, sp: 30, sl: 60 },
        weightkg: 65.5
    },
    Machamp: {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sp: 55, sl: 65 },
        weightkg: 130
    },
    Machoke: {
        types: ['Fighting'],
        bs: { hp: 80, at: 100, df: 70, sp: 45, sl: 50 },
        weightkg: 70.5,
        nfe: true
    },
    Machop: {
        types: ['Fighting'],
        bs: { hp: 70, at: 80, df: 50, sp: 35, sl: 35 },
        weightkg: 19.5,
        nfe: true
    },
    Magikarp: {
        types: ['Water'],
        bs: { hp: 20, at: 10, df: 55, sp: 80, sl: 20 },
        weightkg: 10,
        nfe: true
    },
    Magmar: {
        types: ['Fire'],
        bs: { hp: 65, at: 95, df: 57, sp: 93, sl: 85 },
        weightkg: 44.5
    },
    Magnemite: {
        types: ['Electric'],
        bs: { hp: 25, at: 35, df: 70, sp: 45, sl: 95 },
        weightkg: 6,
        nfe: true
    },
    Magneton: {
        types: ['Electric'],
        bs: { hp: 50, at: 60, df: 95, sp: 70, sl: 120 },
        weightkg: 60
    },
    Mankey: {
        types: ['Fighting'],
        bs: { hp: 40, at: 80, df: 35, sp: 70, sl: 35 },
        weightkg: 28,
        nfe: true
    },
    Marowak: { types: ['Ground'], bs: { hp: 60, at: 80, df: 110, sp: 45, sl: 50 }, weightkg: 45 },
    Meowth: {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sp: 90, sl: 40 },
        weightkg: 4.2,
        nfe: true
    },
    Metapod: {
        types: ['Bug'],
        bs: { hp: 50, at: 20, df: 55, sp: 30, sl: 25 },
        weightkg: 9.9,
        nfe: true
    },
    Mew: {
        types: ['Psychic'],
        bs: { hp: 100, at: 100, df: 100, sp: 100, sl: 100 },
        weightkg: 4
    },
    Mewtwo: {
        types: ['Psychic'],
        bs: { hp: 106, at: 110, df: 90, sp: 130, sl: 154 },
        weightkg: 122
    },
    Moltres: {
        types: ['Fire', 'Flying'],
        bs: { hp: 90, at: 100, df: 90, sp: 90, sl: 125 },
        weightkg: 60
    },
    'Mr. Mime': {
        types: ['Psychic'],
        bs: { hp: 40, at: 45, df: 65, sp: 90, sl: 100 },
        weightkg: 54.5
    },
    Muk: { types: ['Poison'], bs: { hp: 105, at: 105, df: 75, sp: 50, sl: 65 }, weightkg: 30 },
    Nidoking: {
        types: ['Poison', 'Ground'],
        bs: { hp: 81, at: 92, df: 77, sp: 85, sl: 75 },
        weightkg: 62
    },
    Nidoqueen: {
        types: ['Poison', 'Ground'],
        bs: { hp: 90, at: 82, df: 87, sp: 76, sl: 75 },
        weightkg: 60
    },
    'Nidoran-F': {
        types: ['Poison'],
        bs: { hp: 55, at: 47, df: 52, sp: 41, sl: 40 },
        weightkg: 7,
        nfe: true
    },
    'Nidoran-M': {
        types: ['Poison'],
        bs: { hp: 46, at: 57, df: 40, sp: 50, sl: 40 },
        weightkg: 9,
        nfe: true
    },
    Nidorina: {
        types: ['Poison'],
        bs: { hp: 70, at: 62, df: 67, sp: 56, sl: 55 },
        weightkg: 20,
        nfe: true
    },
    Nidorino: {
        types: ['Poison'],
        bs: { hp: 61, at: 72, df: 57, sp: 65, sl: 55 },
        weightkg: 19.5,
        nfe: true
    },
    Ninetales: {
        types: ['Fire'],
        bs: { hp: 73, at: 76, df: 75, sp: 100, sl: 100 },
        weightkg: 19.9
    },
    Oddish: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 50, df: 55, sp: 30, sl: 75 },
        weightkg: 5.4,
        nfe: true
    },
    Omanyte: {
        types: ['Rock', 'Water'],
        bs: { hp: 35, at: 40, df: 100, sp: 35, sl: 90 },
        weightkg: 7.5,
        nfe: true
    },
    Omastar: {
        types: ['Rock', 'Water'],
        bs: { hp: 70, at: 60, df: 125, sp: 55, sl: 115 },
        weightkg: 35
    },
    Onix: {
        types: ['Rock', 'Ground'],
        bs: { hp: 35, at: 45, df: 160, sp: 70, sl: 30 },
        weightkg: 210
    },
    Paras: {
        types: ['Bug', 'Grass'],
        bs: { hp: 35, at: 70, df: 55, sp: 25, sl: 55 },
        weightkg: 5.4,
        nfe: true
    },
    Parasect: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 95, df: 80, sp: 30, sl: 80 },
        weightkg: 29.5
    },
    Persian: { types: ['Normal'], bs: { hp: 65, at: 70, df: 60, sp: 115, sl: 65 }, weightkg: 32 },
    Pidgeot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 75, sp: 91, sl: 70 },
        weightkg: 39.5
    },
    Pidgeotto: {
        types: ['Normal', 'Flying'],
        bs: { hp: 63, at: 60, df: 55, sp: 71, sl: 50 },
        weightkg: 30,
        nfe: true
    },
    Pidgey: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 45, df: 40, sp: 56, sl: 35 },
        weightkg: 1.8,
        nfe: true
    },
    Pikachu: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        weightkg: 6,
        nfe: true
    },
    Pinsir: { types: ['Bug'], bs: { hp: 65, at: 125, df: 100, sp: 85, sl: 55 }, weightkg: 55 },
    Poliwag: {
        types: ['Water'],
        bs: { hp: 40, at: 50, df: 40, sp: 90, sl: 40 },
        weightkg: 12.4,
        nfe: true
    },
    Poliwhirl: {
        types: ['Water'],
        bs: { hp: 65, at: 65, df: 65, sp: 90, sl: 50 },
        weightkg: 20,
        nfe: true
    },
    Poliwrath: {
        types: ['Water', 'Fighting'],
        bs: { hp: 90, at: 85, df: 95, sp: 70, sl: 70 },
        weightkg: 54
    },
    Ponyta: {
        types: ['Fire'],
        bs: { hp: 50, at: 85, df: 55, sp: 90, sl: 65 },
        weightkg: 30,
        nfe: true
    },
    Porygon: {
        types: ['Normal'],
        bs: { hp: 65, at: 60, df: 70, sp: 40, sl: 75 },
        weightkg: 36.5
    },
    Primeape: {
        types: ['Fighting'],
        bs: { hp: 65, at: 105, df: 60, sp: 95, sl: 60 },
        weightkg: 32
    },
    Psyduck: {
        types: ['Water'],
        bs: { hp: 50, at: 52, df: 48, sp: 55, sl: 50 },
        weightkg: 19.6,
        nfe: true
    },
    Raichu: {
        types: ['Electric'],
        bs: { hp: 60, at: 90, df: 55, sp: 100, sl: 90 },
        weightkg: 30
    },
    Rapidash: { types: ['Fire'], bs: { hp: 65, at: 100, df: 70, sp: 105, sl: 80 }, weightkg: 95 },
    Raticate: {
        types: ['Normal'],
        bs: { hp: 55, at: 81, df: 60, sp: 97, sl: 50 },
        weightkg: 18.5
    },
    Rattata: {
        types: ['Normal'],
        bs: { hp: 30, at: 56, df: 35, sp: 72, sl: 25 },
        weightkg: 3.5,
        nfe: true
    },
    Rhydon: {
        types: ['Ground', 'Rock'],
        bs: { hp: 105, at: 130, df: 120, sp: 40, sl: 45 },
        weightkg: 120
    },
    Rhyhorn: {
        types: ['Ground', 'Rock'],
        bs: { hp: 80, at: 85, df: 95, sp: 25, sl: 30 },
        weightkg: 115,
        nfe: true
    },
    Sandshrew: {
        types: ['Ground'],
        bs: { hp: 50, at: 75, df: 85, sp: 40, sl: 30 },
        weightkg: 12,
        nfe: true
    },
    Sandslash: {
        types: ['Ground'],
        bs: { hp: 75, at: 100, df: 110, sp: 65, sl: 55 },
        weightkg: 29.5
    },
    Scyther: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 110, df: 80, sp: 105, sl: 55 },
        weightkg: 56
    },
    Seadra: { types: ['Water'], bs: { hp: 55, at: 65, df: 95, sp: 85, sl: 95 }, weightkg: 25 },
    Seaking: { types: ['Water'], bs: { hp: 80, at: 92, df: 65, sp: 68, sl: 80 }, weightkg: 39 },
    Seel: {
        types: ['Water'],
        bs: { hp: 65, at: 45, df: 55, sp: 45, sl: 70 },
        weightkg: 90,
        nfe: true
    },
    Shellder: {
        types: ['Water'],
        bs: { hp: 30, at: 65, df: 100, sp: 40, sl: 45 },
        weightkg: 4,
        nfe: true
    },
    Slowbro: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 110, sp: 30, sl: 80 },
        weightkg: 78.5
    },
    Slowpoke: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 65, df: 65, sp: 15, sl: 40 },
        weightkg: 36,
        nfe: true
    },
    Snorlax: {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sp: 30, sl: 65 },
        weightkg: 460
    },
    Spearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 60, df: 30, sp: 70, sl: 31 },
        weightkg: 2,
        nfe: true
    },
    Squirtle: {
        types: ['Water'],
        bs: { hp: 44, at: 48, df: 65, sp: 43, sl: 50 },
        weightkg: 9,
        nfe: true
    },
    Starmie: {
        types: ['Water', 'Psychic'],
        bs: { hp: 60, at: 75, df: 85, sp: 115, sl: 100 },
        weightkg: 80
    },
    Staryu: {
        types: ['Water'],
        bs: { hp: 30, at: 45, df: 55, sp: 85, sl: 70 },
        weightkg: 34.5,
        nfe: true
    },
    Tangela: {
        types: ['Grass'],
        bs: { hp: 65, at: 55, df: 115, sp: 60, sl: 100 },
        weightkg: 35
    },
    Tauros: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 95, sp: 110, sl: 70 },
        weightkg: 88.4
    },
    Tentacool: {
        types: ['Water', 'Poison'],
        bs: { hp: 40, at: 40, df: 35, sp: 70, sl: 100 },
        weightkg: 45.5,
        nfe: true
    },
    Tentacruel: {
        types: ['Water', 'Poison'],
        bs: { hp: 80, at: 70, df: 65, sp: 100, sl: 120 },
        weightkg: 55
    },
    Vaporeon: {
        types: ['Water'],
        bs: { hp: 130, at: 65, df: 60, sp: 65, sl: 110 },
        weightkg: 29
    },
    Venomoth: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 65, df: 60, sp: 90, sl: 90 },
        weightkg: 12.5
    },
    Venonat: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 55, df: 50, sp: 45, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Venusaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sp: 80, sl: 100 },
        weightkg: 100
    },
    Victreebel: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 105, df: 65, sp: 70, sl: 100 },
        weightkg: 15.5
    },
    Vileplume: {
        types: ['Grass', 'Poison'],
        bs: { hp: 75, at: 80, df: 85, sp: 50, sl: 100 },
        weightkg: 18.6
    },
    Voltorb: {
        types: ['Electric'],
        bs: { hp: 40, at: 30, df: 50, sp: 100, sl: 55 },
        weightkg: 10.4,
        nfe: true
    },
    Vulpix: {
        types: ['Fire'],
        bs: { hp: 38, at: 41, df: 40, sp: 65, sl: 65 },
        weightkg: 9.9,
        nfe: true
    },
    Wartortle: {
        types: ['Water'],
        bs: { hp: 59, at: 63, df: 80, sp: 58, sl: 65 },
        weightkg: 22.5,
        nfe: true
    },
    Weedle: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 35, df: 30, sp: 50, sl: 20 },
        weightkg: 3.2,
        nfe: true
    },
    Weepinbell: {
        types: ['Grass', 'Poison'],
        bs: { hp: 65, at: 90, df: 50, sp: 55, sl: 85 },
        weightkg: 6.4,
        nfe: true
    },
    Weezing: {
        types: ['Poison'],
        bs: { hp: 65, at: 90, df: 120, sp: 60, sl: 85 },
        weightkg: 9.5
    },
    Wigglytuff: {
        types: ['Normal'],
        bs: { hp: 140, at: 70, df: 45, sp: 45, sl: 50 },
        weightkg: 12
    },
    Zapdos: {
        types: ['Electric', 'Flying'],
        bs: { hp: 90, at: 90, df: 85, sp: 100, sl: 125 },
        weightkg: 52.6
    },
    Zubat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 40, at: 45, df: 35, sp: 55, sl: 40 },
        weightkg: 7.5,
        nfe: true
    }
};
var GSC_PATCH = {
    Abra: { bs: { sa: 105, sd: 55 } },
    Aerodactyl: { bs: { sa: 60, sd: 75 } },
    Alakazam: { bs: { sa: 135, sd: 85 } },
    Arbok: { bs: { sa: 65, sd: 79 } },
    Arcanine: { bs: { sa: 100, sd: 80 } },
    Articuno: { bs: { sa: 95, sd: 125 }, gender: 'N' },
    Beedrill: { bs: { sa: 45, sd: 80 } },
    Bellsprout: { bs: { sa: 70, sd: 30 } },
    Blastoise: { bs: { sa: 85, sd: 105 } },
    Bulbasaur: { bs: { sa: 65, sd: 65 } },
    Butterfree: { bs: { sa: 80, sd: 80 } },
    Caterpie: { bs: { sa: 20, sd: 20 } },
    Chansey: { bs: { sa: 35, sd: 105 }, nfe: true },
    Charizard: { bs: { sa: 109, sd: 85 } },
    Charmander: { bs: { sa: 60, sd: 50 } },
    Charmeleon: { bs: { sa: 80, sd: 65 } },
    Clefable: { bs: { sa: 85, sd: 90 } },
    Clefairy: { bs: { sa: 60, sd: 65 } },
    Cloyster: { bs: { sa: 85, sd: 45 } },
    Cubone: { bs: { sa: 40, sd: 50 } },
    Dewgong: { bs: { sa: 70, sd: 95 } },
    Diglett: { bs: { sa: 35, sd: 45 } },
    Ditto: { bs: { sa: 48, sd: 48 }, gender: 'N' },
    Dodrio: { bs: { sa: 60, sd: 60 } },
    Doduo: { bs: { sa: 35, sd: 35 } },
    Dragonair: { bs: { sa: 70, sd: 70 } },
    Dragonite: { bs: { sa: 100, sd: 100 } },
    Dratini: { bs: { sa: 50, sd: 50 } },
    Drowzee: { bs: { sa: 43, sd: 90 } },
    Dugtrio: { bs: { sa: 50, sd: 70 } },
    Eevee: { bs: { sa: 45, sd: 65 } },
    Ekans: { bs: { sa: 40, sd: 54 } },
    Electabuzz: { bs: { sa: 95, sd: 85 } },
    Electrode: { bs: { sa: 80, sd: 80 }, gender: 'N' },
    Exeggcute: { bs: { sa: 60, sd: 45 } },
    Exeggutor: { bs: { sa: 125, sd: 65 } },
    'Farfetch\u2019d': { bs: { sa: 58, sd: 62 } },
    Fearow: { bs: { sa: 61, sd: 61 } },
    Flareon: { bs: { sa: 95, sd: 110 } },
    Gastly: { bs: { sa: 100, sd: 35 } },
    Gengar: { bs: { sa: 130, sd: 75 } },
    Geodude: { bs: { sa: 30, sd: 30 } },
    Gloom: { bs: { sa: 85, sd: 75 } },
    Golbat: { bs: { sa: 65, sd: 75 }, nfe: true },
    Goldeen: { bs: { sa: 35, sd: 50 } },
    Golduck: { bs: { sa: 95, sd: 80 } },
    Golem: { bs: { sa: 55, sd: 65 } },
    Graveler: { bs: { sa: 45, sd: 45 } },
    Grimer: { bs: { sa: 40, sd: 50 } },
    Growlithe: { bs: { sa: 70, sd: 50 } },
    Gyarados: { bs: { sa: 60, sd: 100 } },
    Haunter: { bs: { sa: 115, sd: 55 } },
    Hitmonchan: { bs: { sa: 35, sd: 110 } },
    Hitmonlee: { bs: { sa: 35, sd: 110 } },
    Horsea: { bs: { sa: 70, sd: 25 } },
    Hypno: { bs: { sa: 73, sd: 115 } },
    Ivysaur: { bs: { sa: 80, sd: 80 } },
    Jigglypuff: { bs: { sa: 45, sd: 25 } },
    Jolteon: { bs: { sa: 110, sd: 95 } },
    Jynx: { bs: { sa: 115, sd: 95 } },
    Kabuto: { bs: { sa: 55, sd: 45 } },
    Kabutops: { bs: { sa: 65, sd: 70 } },
    Kadabra: { bs: { sa: 120, sd: 70 } },
    Kakuna: { bs: { sa: 25, sd: 25 } },
    Kangaskhan: { bs: { sa: 40, sd: 80 } },
    Kingler: { bs: { sa: 50, sd: 50 } },
    Koffing: { bs: { sa: 60, sd: 45 } },
    Krabby: { bs: { sa: 25, sd: 25 } },
    Lapras: { bs: { sa: 85, sd: 95 } },
    Lickitung: { bs: { sa: 60, sd: 75 } },
    Machamp: { bs: { sa: 65, sd: 85 } },
    Machoke: { bs: { sa: 50, sd: 60 } },
    Machop: { bs: { sa: 35, sd: 35 } },
    Magikarp: { bs: { sa: 15, sd: 20 } },
    Magmar: { bs: { sa: 100, sd: 85 } },
    Magnemite: { types: ['Electric', 'Steel'], bs: { sa: 95, sd: 55 }, gender: 'N' },
    Magneton: { types: ['Electric', 'Steel'], bs: { sa: 120, sd: 70 }, gender: 'N' },
    Mankey: { bs: { sa: 35, sd: 45 } },
    Marowak: { bs: { sa: 50, sd: 80 } },
    Meowth: { bs: { sa: 40, sd: 40 } },
    Metapod: { bs: { sa: 25, sd: 25 } },
    Mew: { bs: { sa: 100, sd: 100 }, gender: 'N' },
    Mewtwo: { bs: { sa: 154, sd: 90 }, gender: 'N' },
    Moltres: { bs: { sa: 125, sd: 85 }, gender: 'N' },
    'Mr. Mime': { bs: { sa: 100, sd: 120 } },
    Muk: { bs: { sa: 65, sd: 100 } },
    Nidoking: { bs: { sa: 85, sd: 75 } },
    Nidoqueen: { bs: { sa: 75, sd: 85 } },
    'Nidoran-F': { bs: { sa: 40, sd: 40 } },
    'Nidoran-M': { bs: { sa: 40, sd: 40 } },
    Nidorina: { bs: { sa: 55, sd: 55 } },
    Nidorino: { bs: { sa: 55, sd: 55 } },
    Ninetales: { bs: { sa: 81, sd: 100 } },
    Oddish: { bs: { sa: 75, sd: 65 } },
    Omanyte: { bs: { sa: 90, sd: 55 } },
    Omastar: { bs: { sa: 115, sd: 70 } },
    Onix: { bs: { sa: 30, sd: 45 }, nfe: true },
    Paras: { bs: { sa: 45, sd: 55 } },
    Parasect: { bs: { sa: 60, sd: 80 } },
    Persian: { bs: { sa: 65, sd: 65 } },
    Pidgeot: { bs: { sa: 70, sd: 70 } },
    Pidgeotto: { bs: { sa: 50, sd: 50 } },
    Pidgey: { bs: { sa: 35, sd: 35 } },
    Pikachu: { bs: { sa: 50, sd: 40 } },
    Pinsir: { bs: { sa: 55, sd: 70 } },
    Poliwag: { bs: { sa: 40, sd: 40 } },
    Poliwhirl: { bs: { sa: 50, sd: 50 } },
    Poliwrath: { bs: { sa: 70, sd: 90 } },
    Ponyta: { bs: { sa: 65, sd: 65 } },
    Porygon: { bs: { sa: 85, sd: 75 }, nfe: true, gender: 'N' },
    Primeape: { bs: { sa: 60, sd: 70 } },
    Psyduck: { bs: { sa: 65, sd: 50 } },
    Raichu: { bs: { sa: 90, sd: 80 } },
    Rapidash: { bs: { sa: 80, sd: 80 } },
    Raticate: { bs: { sa: 50, sd: 70 } },
    Rattata: { bs: { sa: 25, sd: 35 } },
    Rhydon: { bs: { sa: 45, sd: 45 } },
    Rhyhorn: { bs: { sa: 30, sd: 30 } },
    Sandshrew: { bs: { sa: 20, sd: 30 } },
    Sandslash: { bs: { sa: 45, sd: 55 } },
    Scyther: { bs: { sa: 55, sd: 80 }, nfe: true },
    Seadra: { bs: { sa: 95, sd: 45 }, nfe: true },
    Seaking: { bs: { sa: 65, sd: 80 } },
    Seel: { bs: { sa: 45, sd: 70 } },
    Shellder: { bs: { sa: 45, sd: 25 } },
    Slowbro: { bs: { sa: 100, sd: 80 } },
    Slowpoke: { bs: { sa: 40, sd: 40 } },
    Snorlax: { bs: { sa: 65, sd: 110 } },
    Spearow: { bs: { sa: 31, sd: 31 } },
    Squirtle: { bs: { sa: 50, sd: 64 } },
    Starmie: { bs: { sa: 100, sd: 85 }, gender: 'N' },
    Staryu: { bs: { sa: 70, sd: 55 }, gender: 'N' },
    Tangela: { bs: { sa: 100, sd: 40 } },
    Tauros: { bs: { sa: 40, sd: 70 } },
    Tentacool: { bs: { sa: 50, sd: 100 } },
    Tentacruel: { bs: { sa: 80, sd: 120 } },
    Vaporeon: { bs: { sa: 110, sd: 95 } },
    Venomoth: { bs: { sa: 90, sd: 75 } },
    Venonat: { bs: { sa: 40, sd: 55 } },
    Venusaur: { bs: { sa: 100, sd: 100 } },
    Victreebel: { bs: { sa: 100, sd: 60 } },
    Vileplume: { bs: { sa: 100, sd: 90 } },
    Voltorb: { bs: { sa: 55, sd: 55 }, gender: 'N' },
    Vulpix: { bs: { sa: 50, sd: 65 } },
    Wartortle: { bs: { sa: 65, sd: 80 } },
    Weedle: { bs: { sa: 20, sd: 20 } },
    Weepinbell: { bs: { sa: 85, sd: 45 } },
    Weezing: { bs: { sa: 85, sd: 70 } },
    Wigglytuff: { bs: { sa: 75, sd: 50 } },
    Zapdos: { bs: { sa: 125, sd: 90 }, gender: 'N' },
    Zubat: { bs: { sa: 30, sd: 40 } },
    Aipom: { types: ['Normal'], bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 }, weightkg: 11.5 },
    Ampharos: {
        types: ['Electric'],
        bs: { hp: 90, at: 75, df: 75, sa: 115, sd: 90, sp: 55 },
        weightkg: 61.5
    },
    Ariados: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 40 },
        weightkg: 33.5
    },
    Azumarill: {
        types: ['Water'],
        bs: { hp: 100, at: 50, df: 80, sa: 50, sd: 80, sp: 50 },
        weightkg: 28.5
    },
    Bayleef: {
        types: ['Grass'],
        bs: { hp: 60, at: 62, df: 80, sa: 63, sd: 80, sp: 60 },
        weightkg: 15.8,
        nfe: true
    },
    Bellossom: {
        types: ['Grass'],
        bs: { hp: 75, at: 80, df: 85, sa: 90, sd: 100, sp: 50 },
        weightkg: 5.8
    },
    Blissey: {
        types: ['Normal'],
        bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 135, sp: 55 },
        weightkg: 46.8
    },
    Celebi: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 5,
        gender: 'N'
    },
    Chikorita: {
        types: ['Grass'],
        bs: { hp: 45, at: 49, df: 65, sa: 49, sd: 65, sp: 45 },
        weightkg: 6.4,
        nfe: true
    },
    Chinchou: {
        types: ['Water', 'Electric'],
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        weightkg: 12,
        nfe: true
    },
    Cleffa: {
        types: ['Normal'],
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        weightkg: 3,
        nfe: true
    },
    Corsola: {
        types: ['Water', 'Rock'],
        bs: { hp: 55, at: 55, df: 85, sa: 65, sd: 85, sp: 35 },
        weightkg: 5
    },
    Crobat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 90, df: 80, sa: 70, sd: 80, sp: 130 },
        weightkg: 75
    },
    Croconaw: {
        types: ['Water'],
        bs: { hp: 65, at: 80, df: 80, sa: 59, sd: 63, sp: 58 },
        weightkg: 25,
        nfe: true
    },
    Cyndaquil: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        weightkg: 7.9,
        nfe: true
    },
    Delibird: {
        types: ['Ice', 'Flying'],
        bs: { hp: 45, at: 55, df: 45, sa: 65, sd: 45, sp: 75 },
        weightkg: 16
    },
    Donphan: {
        types: ['Ground'],
        bs: { hp: 90, at: 120, df: 120, sa: 60, sd: 60, sp: 50 },
        weightkg: 120
    },
    Dunsparce: {
        types: ['Normal'],
        bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 },
        weightkg: 14
    },
    Elekid: {
        types: ['Electric'],
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        weightkg: 23.5,
        nfe: true
    },
    Entei: {
        types: ['Fire'],
        bs: { hp: 115, at: 115, df: 85, sa: 90, sd: 75, sp: 100 },
        weightkg: 198,
        gender: 'N'
    },
    Espeon: {
        types: ['Psychic'],
        bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 },
        weightkg: 26.5
    },
    Feraligatr: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 78 },
        weightkg: 88.8
    },
    Flaaffy: {
        types: ['Electric'],
        bs: { hp: 70, at: 55, df: 55, sa: 80, sd: 60, sp: 45 },
        weightkg: 13.3,
        nfe: true
    },
    Forretress: {
        types: ['Bug', 'Steel'],
        bs: { hp: 75, at: 90, df: 140, sa: 60, sd: 60, sp: 40 },
        weightkg: 125.8
    },
    Furret: { types: ['Normal'], bs: { hp: 85, at: 76, df: 64, sa: 45, sd: 55, sp: 90 }, weightkg: 32.5 },
    Girafarig: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        weightkg: 41.5
    },
    Gligar: {
        types: ['Ground', 'Flying'],
        bs: { hp: 65, at: 75, df: 105, sa: 35, sd: 65, sp: 85 },
        weightkg: 64.8
    },
    Granbull: {
        types: ['Normal'],
        bs: { hp: 90, at: 120, df: 75, sa: 60, sd: 60, sp: 45 },
        weightkg: 48.7
    },
    Heracross: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 125, df: 75, sa: 40, sd: 95, sp: 85 },
        weightkg: 54
    },
    Hitmontop: {
        types: ['Fighting'],
        bs: { hp: 50, at: 95, df: 95, sa: 35, sd: 110, sp: 70 },
        weightkg: 48
    },
    'Ho-Oh': {
        types: ['Fire', 'Flying'],
        bs: { hp: 106, at: 130, df: 90, sa: 110, sd: 154, sp: 90 },
        weightkg: 199,
        gender: 'N'
    },
    Hoothoot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        weightkg: 21.2,
        nfe: true
    },
    Hoppip: {
        types: ['Grass', 'Flying'],
        bs: { hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50 },
        weightkg: 0.5,
        nfe: true
    },
    Houndoom: {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 95 },
        weightkg: 35
    },
    Houndour: {
        types: ['Dark', 'Fire'],
        bs: { hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65 },
        weightkg: 10.8,
        nfe: true
    },
    Igglybuff: {
        types: ['Normal'],
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        weightkg: 1,
        nfe: true
    },
    Jumpluff: {
        types: ['Grass', 'Flying'],
        bs: { hp: 75, at: 55, df: 70, sa: 55, sd: 85, sp: 110 },
        weightkg: 3
    },
    Kingdra: {
        types: ['Water', 'Dragon'],
        bs: { hp: 75, at: 95, df: 95, sa: 95, sd: 95, sp: 85 },
        weightkg: 152
    },
    Lanturn: {
        types: ['Water', 'Electric'],
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        weightkg: 22.5
    },
    Larvitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 50, at: 64, df: 50, sa: 45, sd: 50, sp: 41 },
        weightkg: 72,
        nfe: true
    },
    Ledian: {
        types: ['Bug', 'Flying'],
        bs: { hp: 55, at: 35, df: 50, sa: 55, sd: 110, sp: 85 },
        weightkg: 35.6
    },
    Ledyba: {
        types: ['Bug', 'Flying'],
        bs: { hp: 40, at: 20, df: 30, sa: 40, sd: 80, sp: 55 },
        weightkg: 10.8,
        nfe: true
    },
    Lugia: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 106, at: 90, df: 130, sa: 90, sd: 154, sp: 110 },
        weightkg: 216,
        gender: 'N'
    },
    Magby: {
        types: ['Fire'],
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        weightkg: 21.4,
        nfe: true
    },
    Magcargo: {
        types: ['Fire', 'Rock'],
        bs: { hp: 50, at: 50, df: 120, sa: 80, sd: 80, sp: 30 },
        weightkg: 55
    },
    Mantine: {
        types: ['Water', 'Flying'],
        bs: { hp: 65, at: 40, df: 70, sa: 80, sd: 140, sp: 70 },
        weightkg: 220
    },
    Mareep: {
        types: ['Electric'],
        bs: { hp: 55, at: 40, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 7.8,
        nfe: true
    },
    Marill: {
        types: ['Water'],
        bs: { hp: 70, at: 20, df: 50, sa: 20, sd: 50, sp: 40 },
        weightkg: 8.5,
        nfe: true
    },
    Meganium: {
        types: ['Grass'],
        bs: { hp: 80, at: 82, df: 100, sa: 83, sd: 100, sp: 80 },
        weightkg: 100.5
    },
    Miltank: {
        types: ['Normal'],
        bs: { hp: 95, at: 80, df: 105, sa: 40, sd: 70, sp: 100 },
        weightkg: 75.5
    },
    Misdreavus: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        weightkg: 1
    },
    Murkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 91 },
        weightkg: 2.1
    },
    Natu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 40, at: 50, df: 45, sa: 70, sd: 45, sp: 70 },
        weightkg: 2,
        nfe: true
    },
    Noctowl: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        weightkg: 40.8
    },
    Octillery: {
        types: ['Water'],
        bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 },
        weightkg: 28.5
    },
    Phanpy: {
        types: ['Ground'],
        bs: { hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40 },
        weightkg: 33.5,
        nfe: true
    },
    Pichu: {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        nfe: true
    },
    Piloswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        weightkg: 55.8
    },
    Pineco: {
        types: ['Bug'],
        bs: { hp: 50, at: 65, df: 90, sa: 35, sd: 35, sp: 15 },
        weightkg: 7.2,
        nfe: true
    },
    Politoed: {
        types: ['Water'],
        bs: { hp: 90, at: 75, df: 75, sa: 90, sd: 100, sp: 70 },
        weightkg: 33.9
    },
    Porygon2: {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 90, sa: 105, sd: 95, sp: 60 },
        weightkg: 32.5,
        gender: 'N'
    },
    Pupitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 70, at: 84, df: 70, sa: 65, sd: 70, sp: 51 },
        weightkg: 152,
        nfe: true
    },
    Quagsire: {
        types: ['Water', 'Ground'],
        bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
        weightkg: 75
    },
    Quilava: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        weightkg: 19,
        nfe: true
    },
    Qwilfish: {
        types: ['Water', 'Poison'],
        bs: { hp: 65, at: 95, df: 75, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9
    },
    Raikou: {
        types: ['Electric'],
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 115 },
        weightkg: 178,
        gender: 'N'
    },
    Remoraid: {
        types: ['Water'],
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        weightkg: 12,
        nfe: true
    },
    Scizor: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        weightkg: 118
    },
    Sentret: {
        types: ['Normal'],
        bs: { hp: 35, at: 46, df: 34, sa: 35, sd: 45, sp: 20 },
        weightkg: 6,
        nfe: true
    },
    Shuckle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        weightkg: 20.5
    },
    Skarmory: {
        types: ['Steel', 'Flying'],
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        weightkg: 50.5
    },
    Skiploom: {
        types: ['Grass', 'Flying'],
        bs: { hp: 55, at: 45, df: 50, sa: 45, sd: 65, sp: 80 },
        weightkg: 1,
        nfe: true
    },
    Slowking: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        weightkg: 79.5
    },
    Slugma: {
        types: ['Fire'],
        bs: { hp: 40, at: 40, df: 40, sa: 70, sd: 40, sp: 20 },
        weightkg: 35,
        nfe: true
    },
    Smeargle: { types: ['Normal'], bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 }, weightkg: 58 },
    Smoochum: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        weightkg: 6,
        nfe: true
    },
    Sneasel: {
        types: ['Dark', 'Ice'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 28
    },
    Snubbull: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 40, sd: 40, sp: 30 },
        weightkg: 7.8,
        nfe: true
    },
    Spinarak: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        weightkg: 8.5,
        nfe: true
    },
    Stantler: {
        types: ['Normal'],
        bs: { hp: 73, at: 95, df: 62, sa: 85, sd: 65, sp: 85 },
        weightkg: 71.2
    },
    Steelix: {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 85, df: 200, sa: 55, sd: 65, sp: 30 },
        weightkg: 400
    },
    Sudowoodo: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 30, sd: 65, sp: 30 },
        weightkg: 38
    },
    Suicune: {
        types: ['Water'],
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 115, sp: 85 },
        weightkg: 187,
        gender: 'N'
    },
    Sunflora: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 },
        weightkg: 8.5
    },
    Sunkern: {
        types: ['Grass'],
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        weightkg: 1.8,
        nfe: true
    },
    Swinub: {
        types: ['Ice', 'Ground'],
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        weightkg: 6.5,
        nfe: true
    },
    Teddiursa: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 8.8,
        nfe: true
    },
    Togepi: {
        types: ['Normal'],
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        weightkg: 1.5,
        nfe: true
    },
    Togetic: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 40, df: 85, sa: 80, sd: 105, sp: 40 },
        weightkg: 3.2
    },
    Totodile: {
        types: ['Water'],
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        weightkg: 9.5,
        nfe: true
    },
    Typhlosion: {
        types: ['Fire'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 79.5
    },
    Tyranitar: {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 134, df: 110, sa: 95, sd: 100, sp: 61 },
        weightkg: 202
    },
    Tyrogue: {
        types: ['Fighting'],
        bs: { hp: 35, at: 35, df: 35, sa: 35, sd: 35, sp: 35 },
        weightkg: 21,
        nfe: true
    },
    Umbreon: { types: ['Dark'], bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 }, weightkg: 27 },
    Unown: {
        types: ['Psychic'],
        bs: { hp: 48, at: 72, df: 48, sa: 72, sd: 48, sp: 48 },
        weightkg: 5,
        gender: 'N'
    },
    Ursaring: {
        types: ['Normal'],
        bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 55 },
        weightkg: 125.8
    },
    Wobbuffet: {
        types: ['Psychic'],
        bs: { hp: 190, at: 33, df: 58, sa: 33, sd: 58, sp: 33 },
        weightkg: 28.5
    },
    Wooper: {
        types: ['Water', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        nfe: true
    },
    Xatu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 65, at: 75, df: 70, sa: 95, sd: 70, sp: 95 },
        weightkg: 15
    },
    Yanma: {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 },
        weightkg: 38
    }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Abra: { abilities: { 0: 'Synchronize' } },
    Aerodactyl: { abilities: { 0: 'Rock Head' } },
    Alakazam: { abilities: { 0: 'Synchronize' } },
    Arbok: { abilities: { 0: 'Intimidate' } },
    Arcanine: { abilities: { 0: 'Intimidate' } },
    Articuno: { abilities: { 0: 'Pressure' } },
    Beedrill: { abilities: { 0: 'Swarm' } },
    Bellsprout: { abilities: { 0: 'Chlorophyll' } },
    Blastoise: { abilities: { 0: 'Torrent' } },
    Bulbasaur: { abilities: { 0: 'Overgrow' } },
    Butterfree: { abilities: { 0: 'Compound Eyes' } },
    Caterpie: { abilities: { 0: 'Shield Dust' } },
    Chansey: { abilities: { 0: 'Natural Cure' } },
    Charizard: { abilities: { 0: 'Blaze' } },
    Charmander: { abilities: { 0: 'Blaze' } },
    Charmeleon: { abilities: { 0: 'Blaze' } },
    Clefable: { abilities: { 0: 'Cute Charm' } },
    Clefairy: { abilities: { 0: 'Cute Charm' } },
    Cloyster: { abilities: { 0: 'Shell Armor' } },
    Cubone: { abilities: { 0: 'Rock Head' } },
    Dewgong: { abilities: { 0: 'Thick Fat' } },
    Diglett: { abilities: { 0: 'Sand Veil' } },
    Ditto: { abilities: { 0: 'Limber' } },
    Dodrio: { abilities: { 0: 'Run Away' } },
    Doduo: { abilities: { 0: 'Run Away' } },
    Dragonair: { abilities: { 0: 'Shed Skin' } },
    Dragonite: { abilities: { 0: 'Inner Focus' } },
    Dratini: { abilities: { 0: 'Shed Skin' } },
    Drowzee: { abilities: { 0: 'Insomnia' } },
    Dugtrio: { abilities: { 0: 'Sand Veil' } },
    Eevee: { abilities: { 0: 'Run Away' } },
    Ekans: { abilities: { 0: 'Intimidate' } },
    Electabuzz: { abilities: { 0: 'Static' } },
    Electrode: { abilities: { 0: 'Soundproof' } },
    Exeggcute: { abilities: { 0: 'Chlorophyll' } },
    Exeggutor: { abilities: { 0: 'Chlorophyll' } },
    'Farfetch\u2019d': { abilities: { 0: 'Keen Eye' } },
    Fearow: { abilities: { 0: 'Keen Eye' } },
    Flareon: { abilities: { 0: 'Flash Fire' } },
    Gastly: { abilities: { 0: 'Levitate' } },
    Gengar: { abilities: { 0: 'Levitate' } },
    Geodude: { abilities: { 0: 'Rock Head' } },
    Gloom: { abilities: { 0: 'Chlorophyll' } },
    Golbat: { abilities: { 0: 'Inner Focus' } },
    Goldeen: { abilities: { 0: 'Swift Swim' } },
    Golduck: { abilities: { 0: 'Damp' } },
    Golem: { abilities: { 0: 'Rock Head' } },
    Graveler: { abilities: { 0: 'Rock Head' } },
    Grimer: { abilities: { 0: 'Stench' } },
    Growlithe: { abilities: { 0: 'Intimidate' } },
    Gyarados: { abilities: { 0: 'Intimidate' } },
    Haunter: { abilities: { 0: 'Levitate' } },
    Hitmonchan: { abilities: { 0: 'Keen Eye' } },
    Hitmonlee: { abilities: { 0: 'Limber' } },
    Horsea: { abilities: { 0: 'Swift Swim' } },
    Hypno: { abilities: { 0: 'Insomnia' } },
    Ivysaur: { abilities: { 0: 'Overgrow' } },
    Jigglypuff: { abilities: { 0: 'Cute Charm' } },
    Jolteon: { abilities: { 0: 'Volt Absorb' } },
    Jynx: { abilities: { 0: 'Oblivious' } },
    Kabuto: { abilities: { 0: 'Swift Swim' } },
    Kabutops: { abilities: { 0: 'Swift Swim' } },
    Kadabra: { abilities: { 0: 'Synchronize' } },
    Kakuna: { abilities: { 0: 'Shed Skin' } },
    Kangaskhan: { abilities: { 0: 'Early Bird' } },
    Kingler: { abilities: { 0: 'Hyper Cutter' } },
    Koffing: { abilities: { 0: 'Levitate' } },
    Krabby: { abilities: { 0: 'Hyper Cutter' } },
    Lapras: { abilities: { 0: 'Water Absorb' } },
    Lickitung: { abilities: { 0: 'Own Tempo' } },
    Machamp: { abilities: { 0: 'Guts' } },
    Machoke: { abilities: { 0: 'Guts' } },
    Machop: { abilities: { 0: 'Guts' } },
    Magikarp: { abilities: { 0: 'Swift Swim' } },
    Magmar: { abilities: { 0: 'Flame Body' } },
    Magnemite: { abilities: { 0: 'Magnet Pull' } },
    Magneton: { abilities: { 0: 'Magnet Pull' } },
    Mankey: { abilities: { 0: 'Vital Spirit' } },
    Marowak: { abilities: { 0: 'Rock Head' } },
    Meowth: { abilities: { 0: 'Pickup' } },
    Metapod: { abilities: { 0: 'Shed Skin' } },
    Mew: { abilities: { 0: 'Synchronize' } },
    Mewtwo: { abilities: { 0: 'Pressure' } },
    Moltres: { abilities: { 0: 'Pressure' } },
    'Mr. Mime': { abilities: { 0: 'Soundproof' } },
    Muk: { abilities: { 0: 'Stench' } },
    Nidoking: { abilities: { 0: 'Poison Point' } },
    Nidoqueen: { abilities: { 0: 'Poison Point' } },
    'Nidoran-F': { abilities: { 0: 'Poison Point' } },
    'Nidoran-M': { abilities: { 0: 'Poison Point' } },
    Nidorina: { abilities: { 0: 'Poison Point' } },
    Nidorino: { abilities: { 0: 'Poison Point' } },
    Ninetales: { abilities: { 0: 'Flash Fire' } },
    Oddish: { abilities: { 0: 'Chlorophyll' } },
    Omanyte: { abilities: { 0: 'Swift Swim' } },
    Omastar: { abilities: { 0: 'Swift Swim' } },
    Onix: { abilities: { 0: 'Rock Head' } },
    Paras: { abilities: { 0: 'Effect Spore' } },
    Parasect: { abilities: { 0: 'Effect Spore' } },
    Persian: { abilities: { 0: 'Limber' } },
    Pidgeot: { abilities: { 0: 'Keen Eye' } },
    Pidgeotto: { abilities: { 0: 'Keen Eye' } },
    Pidgey: { abilities: { 0: 'Keen Eye' } },
    Pikachu: { abilities: { 0: 'Static' } },
    Pinsir: { abilities: { 0: 'Hyper Cutter' } },
    Poliwag: { abilities: { 0: 'Water Absorb' } },
    Poliwhirl: { abilities: { 0: 'Water Absorb' } },
    Poliwrath: { abilities: { 0: 'Water Absorb' } },
    Ponyta: { abilities: { 0: 'Run Away' } },
    Porygon: { abilities: { 0: 'Trace' } },
    Primeape: { abilities: { 0: 'Vital Spirit' } },
    Psyduck: { abilities: { 0: 'Damp' } },
    Raichu: { abilities: { 0: 'Static' } },
    Rapidash: { abilities: { 0: 'Run Away' } },
    Raticate: { abilities: { 0: 'Run Away' } },
    Rattata: { abilities: { 0: 'Run Away' } },
    Rhydon: { abilities: { 0: 'Lightning Rod' } },
    Rhyhorn: { abilities: { 0: 'Lightning Rod' } },
    Sandshrew: { abilities: { 0: 'Sand Veil' } },
    Sandslash: { abilities: { 0: 'Sand Veil' } },
    Scyther: { abilities: { 0: 'Swarm' } },
    Seadra: { abilities: { 0: 'Poison Point' } },
    Seaking: { abilities: { 0: 'Swift Swim' } },
    Seel: { abilities: { 0: 'Thick Fat' } },
    Shellder: { abilities: { 0: 'Shell Armor' } },
    Slowbro: { abilities: { 0: 'Oblivious' } },
    Slowpoke: { abilities: { 0: 'Oblivious' } },
    Snorlax: { abilities: { 0: 'Immunity' } },
    Spearow: { abilities: { 0: 'Keen Eye' } },
    Squirtle: { abilities: { 0: 'Torrent' } },
    Starmie: { abilities: { 0: 'Illuminate' } },
    Staryu: { abilities: { 0: 'Illuminate' } },
    Tangela: { abilities: { 0: 'Chlorophyll' } },
    Tauros: { abilities: { 0: 'Intimidate' } },
    Tentacool: { abilities: { 0: 'Clear Body' } },
    Tentacruel: { abilities: { 0: 'Clear Body' } },
    Vaporeon: { abilities: { 0: 'Water Absorb' } },
    Venomoth: { abilities: { 0: 'Shield Dust' } },
    Venonat: { abilities: { 0: 'Compound Eyes' } },
    Venusaur: { abilities: { 0: 'Overgrow' } },
    Victreebel: { abilities: { 0: 'Chlorophyll' } },
    Vileplume: { abilities: { 0: 'Chlorophyll' } },
    Voltorb: { abilities: { 0: 'Soundproof' } },
    Vulpix: { abilities: { 0: 'Flash Fire' } },
    Wartortle: { abilities: { 0: 'Torrent' } },
    Weedle: { abilities: { 0: 'Shield Dust' } },
    Weepinbell: { abilities: { 0: 'Chlorophyll' } },
    Weezing: { abilities: { 0: 'Levitate' } },
    Wigglytuff: { abilities: { 0: 'Cute Charm' } },
    Zapdos: { abilities: { 0: 'Pressure' } },
    Zubat: { abilities: { 0: 'Inner Focus' } },
    Aipom: { abilities: { 0: 'Run Away' } },
    Ampharos: { abilities: { 0: 'Static' } },
    Ariados: { abilities: { 0: 'Swarm' } },
    Azumarill: { abilities: { 0: 'Thick Fat' } },
    Bayleef: { abilities: { 0: 'Overgrow' } },
    Bellossom: { abilities: { 0: 'Chlorophyll' } },
    Blissey: { abilities: { 0: 'Natural Cure' } },
    Celebi: { abilities: { 0: 'Natural Cure' } },
    Chikorita: { abilities: { 0: 'Overgrow' } },
    Chinchou: { abilities: { 0: 'Volt Absorb' } },
    Cleffa: { abilities: { 0: 'Cute Charm' } },
    Corsola: { abilities: { 0: 'Hustle' } },
    Crobat: { abilities: { 0: 'Inner Focus' } },
    Croconaw: { abilities: { 0: 'Torrent' } },
    Cyndaquil: { abilities: { 0: 'Blaze' } },
    Delibird: { abilities: { 0: 'Vital Spirit' } },
    Donphan: { abilities: { 0: 'Sturdy' } },
    Dunsparce: { abilities: { 0: 'Serene Grace' } },
    Elekid: { abilities: { 0: 'Static' } },
    Entei: { abilities: { 0: 'Pressure' } },
    Espeon: { abilities: { 0: 'Synchronize' } },
    Feraligatr: { abilities: { 0: 'Torrent' } },
    Flaaffy: { abilities: { 0: 'Static' } },
    Forretress: { abilities: { 0: 'Sturdy' } },
    Furret: { abilities: { 0: 'Run Away' } },
    Girafarig: { abilities: { 0: 'Inner Focus' } },
    Gligar: { abilities: { 0: 'Hyper Cutter' } },
    Granbull: { abilities: { 0: 'Intimidate' } },
    Heracross: { abilities: { 0: 'Swarm' } },
    Hitmontop: { abilities: { 0: 'Intimidate' } },
    'Ho-Oh': { abilities: { 0: 'Pressure' } },
    Hoothoot: { abilities: { 0: 'Insomnia' } },
    Hoppip: { abilities: { 0: 'Chlorophyll' } },
    Houndoom: { abilities: { 0: 'Early Bird' } },
    Houndour: { abilities: { 0: 'Early Bird' } },
    Igglybuff: { abilities: { 0: 'Cute Charm' } },
    Jumpluff: { abilities: { 0: 'Chlorophyll' } },
    Kingdra: { abilities: { 0: 'Swift Swim' } },
    Lanturn: { abilities: { 0: 'Volt Absorb' } },
    Larvitar: { abilities: { 0: 'Guts' } },
    Ledian: { abilities: { 0: 'Swarm' } },
    Ledyba: { abilities: { 0: 'Swarm' } },
    Lugia: { abilities: { 0: 'Pressure' } },
    Magby: { abilities: { 0: 'Flame Body' } },
    Magcargo: { abilities: { 0: 'Magma Armor' } },
    Mantine: { abilities: { 0: 'Swift Swim' } },
    Mareep: { abilities: { 0: 'Static' } },
    Marill: { abilities: { 0: 'Thick Fat' } },
    Meganium: { abilities: { 0: 'Overgrow' } },
    Miltank: { abilities: { 0: 'Thick Fat' } },
    Misdreavus: { abilities: { 0: 'Levitate' } },
    Murkrow: { abilities: { 0: 'Insomnia' } },
    Natu: { abilities: { 0: 'Synchronize' } },
    Noctowl: { abilities: { 0: 'Insomnia' } },
    Octillery: { abilities: { 0: 'Suction Cups' } },
    Phanpy: { abilities: { 0: 'Pickup' } },
    Pichu: { abilities: { 0: 'Static' } },
    Piloswine: { abilities: { 0: 'Oblivious' } },
    Pineco: { abilities: { 0: 'Sturdy' } },
    Politoed: { abilities: { 0: 'Water Absorb' } },
    Porygon2: { abilities: { 0: 'Trace' } },
    Pupitar: { abilities: { 0: 'Shed Skin' } },
    Quagsire: { abilities: { 0: 'Damp' } },
    Quilava: { abilities: { 0: 'Blaze' } },
    Qwilfish: { abilities: { 0: 'Poison Point' } },
    Raikou: { abilities: { 0: 'Pressure' } },
    Remoraid: { abilities: { 0: 'Hustle' } },
    Scizor: { abilities: { 0: 'Swarm' } },
    Sentret: { abilities: { 0: 'Run Away' } },
    Shuckle: { abilities: { 0: 'Sturdy' } },
    Skarmory: { abilities: { 0: 'Keen Eye' } },
    Skiploom: { abilities: { 0: 'Chlorophyll' } },
    Slowking: { abilities: { 0: 'Oblivious' } },
    Slugma: { abilities: { 0: 'Magma Armor' } },
    Smeargle: { abilities: { 0: 'Own Tempo' } },
    Smoochum: { abilities: { 0: 'Oblivious' } },
    Sneasel: { abilities: { 0: 'Inner Focus' } },
    Snubbull: { abilities: { 0: 'Intimidate' } },
    Spinarak: { abilities: { 0: 'Swarm' } },
    Stantler: { abilities: { 0: 'Intimidate' } },
    Steelix: { abilities: { 0: 'Rock Head' } },
    Sudowoodo: { abilities: { 0: 'Sturdy' } },
    Suicune: { abilities: { 0: 'Pressure' } },
    Sunflora: { abilities: { 0: 'Chlorophyll' } },
    Sunkern: { abilities: { 0: 'Chlorophyll' } },
    Swinub: { abilities: { 0: 'Oblivious' } },
    Teddiursa: { abilities: { 0: 'Pickup' } },
    Togepi: { abilities: { 0: 'Hustle' } },
    Togetic: { abilities: { 0: 'Hustle' } },
    Totodile: { abilities: { 0: 'Torrent' } },
    Typhlosion: { abilities: { 0: 'Blaze' } },
    Tyranitar: { abilities: { 0: 'Sand Stream' } },
    Tyrogue: { abilities: { 0: 'Guts' } },
    Umbreon: { abilities: { 0: 'Synchronize' } },
    Unown: { abilities: { 0: 'Levitate' } },
    Ursaring: { abilities: { 0: 'Guts' } },
    Wobbuffet: { abilities: { 0: 'Shadow Tag' } },
    Wooper: { abilities: { 0: 'Damp' } },
    Xatu: { abilities: { 0: 'Synchronize' } },
    Yanma: { abilities: { 0: 'Speed Boost' } },
    Absol: {
        types: ['Dark'],
        bs: { hp: 65, at: 130, df: 60, sa: 75, sd: 60, sp: 75 },
        weightkg: 47,
        abilities: { 0: 'Pressure' }
    },
    Aggron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        weightkg: 360,
        abilities: { 0: 'Sturdy' }
    },
    Altaria: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 75, at: 70, df: 90, sa: 70, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Natural Cure' }
    },
    Anorith: {
        types: ['Rock', 'Bug'],
        bs: { hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Armaldo: {
        types: ['Rock', 'Bug'],
        bs: { hp: 75, at: 125, df: 100, sa: 70, sd: 80, sp: 45 },
        weightkg: 68.2,
        abilities: { 0: 'Battle Armor' }
    },
    Aron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        weightkg: 60,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Azurill: {
        types: ['Normal'],
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Bagon: {
        types: ['Dragon'],
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        weightkg: 42.1,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Baltoy: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 40, at: 40, df: 55, sa: 40, sd: 70, sp: 55 },
        weightkg: 21.5,
        abilities: { 0: 'Levitate' },
        nfe: true,
        gender: 'N'
    },
    Banette: {
        types: ['Ghost'],
        bs: { hp: 64, at: 115, df: 65, sa: 83, sd: 63, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Insomnia' }
    },
    Barboach: {
        types: ['Water', 'Ground'],
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Beautifly: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 70, df: 50, sa: 90, sd: 50, sp: 65 },
        weightkg: 28.4,
        abilities: { 0: 'Swarm' }
    },
    Beldum: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        weightkg: 95.2,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Blaziken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Blaze' }
    },
    Breloom: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        weightkg: 39.2,
        abilities: { 0: 'Effect Spore' }
    },
    Cacnea: {
        types: ['Grass'],
        bs: { hp: 50, at: 85, df: 40, sa: 85, sd: 40, sp: 35 },
        weightkg: 51.3,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Cacturne: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 55 },
        weightkg: 77.4,
        abilities: { 0: 'Sand Veil' }
    },
    Camerupt: {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        weightkg: 220,
        abilities: { 0: 'Magma Armor' }
    },
    Carvanha: {
        types: ['Water', 'Dark'],
        bs: { hp: 45, at: 90, df: 20, sa: 65, sd: 20, sp: 65 },
        weightkg: 20.8,
        nfe: true,
        abilities: { 0: 'Rough Skin' }
    },
    Cascoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 11.5,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Castform: {
        types: ['Normal'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        otherFormes: ['Castform-Rainy', 'Castform-Snowy', 'Castform-Sunny']
    },
    'Castform-Rainy': {
        types: ['Water'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Snowy': {
        types: ['Ice'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Sunny': {
        types: ['Fire'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    Chimecho: {
        types: ['Psychic'],
        bs: { hp: 65, at: 50, df: 70, sa: 95, sd: 80, sp: 65 },
        weightkg: 1,
        abilities: { 0: 'Levitate' }
    },
    Clamperl: {
        types: ['Water'],
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        weightkg: 52.5,
        nfe: true,
        abilities: { 0: 'Shell Armor' }
    },
    Claydol: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 60, at: 70, df: 105, sa: 70, sd: 120, sp: 75 },
        weightkg: 108,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Combusken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Corphish: {
        types: ['Water'],
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Cradily: {
        types: ['Rock', 'Grass'],
        bs: { hp: 86, at: 81, df: 97, sa: 81, sd: 107, sp: 43 },
        weightkg: 60.4,
        abilities: { 0: 'Suction Cups' }
    },
    Crawdaunt: {
        types: ['Water', 'Dark'],
        bs: { hp: 63, at: 120, df: 85, sa: 90, sd: 55, sp: 55 },
        weightkg: 32.8,
        abilities: { 0: 'Hyper Cutter' }
    },
    Delcatty: {
        types: ['Normal'],
        bs: { hp: 70, at: 65, df: 65, sa: 55, sd: 55, sp: 70 },
        weightkg: 32.6,
        abilities: { 0: 'Cute Charm' }
    },
    Deoxys: {
        types: ['Psychic'],
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Deoxys-Attack': {
        types: ['Psychic'],
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Defense': {
        types: ['Psychic'],
        bs: { hp: 50, at: 70, df: 160, sa: 70, sd: 160, sp: 90 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Speed': {
        types: ['Psychic'],
        bs: { hp: 50, at: 95, df: 90, sa: 95, sd: 90, sp: 180 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    Dusclops: {
        types: ['Ghost'],
        bs: { hp: 40, at: 70, df: 130, sa: 60, sd: 130, sp: 25 },
        weightkg: 30.6,
        abilities: { 0: 'Pressure' }
    },
    Duskull: {
        types: ['Ghost'],
        bs: { hp: 20, at: 40, df: 90, sa: 30, sd: 90, sp: 25 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Levitate' }
    },
    Dustox: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 50, df: 70, sa: 50, sd: 90, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Shield Dust' }
    },
    Electrike: {
        types: ['Electric'],
        bs: { hp: 40, at: 45, df: 40, sa: 65, sd: 40, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Static' }
    },
    Exploud: {
        types: ['Normal'],
        bs: { hp: 104, at: 91, df: 63, sa: 91, sd: 63, sp: 68 },
        weightkg: 84,
        abilities: { 0: 'Soundproof' }
    },
    Feebas: {
        types: ['Water'],
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        weightkg: 7.4,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flygon: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 80, at: 100, df: 80, sa: 80, sd: 80, sp: 100 },
        weightkg: 82,
        abilities: { 0: 'Levitate' }
    },
    Gardevoir: {
        types: ['Psychic'],
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        weightkg: 48.4,
        abilities: { 0: 'Synchronize' }
    },
    Glalie: {
        types: ['Ice'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 256.5,
        abilities: { 0: 'Inner Focus' }
    },
    Gorebyss: {
        types: ['Water'],
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        weightkg: 22.6,
        abilities: { 0: 'Swift Swim' }
    },
    Groudon: {
        types: ['Ground'],
        bs: { hp: 100, at: 150, df: 140, sa: 100, sd: 90, sp: 90 },
        weightkg: 950,
        abilities: { 0: 'Drought' },
        gender: 'N'
    },
    Grovyle: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        weightkg: 21.6,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Grumpig: {
        types: ['Psychic'],
        bs: { hp: 80, at: 45, df: 65, sa: 90, sd: 110, sp: 80 },
        weightkg: 71.5,
        abilities: { 0: 'Thick Fat' }
    },
    Gulpin: {
        types: ['Poison'],
        bs: { hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40 },
        weightkg: 10.3,
        nfe: true,
        abilities: { 0: 'Liquid Ooze' }
    },
    Hariyama: {
        types: ['Fighting'],
        bs: { hp: 144, at: 120, df: 60, sa: 40, sd: 60, sp: 50 },
        weightkg: 253.8,
        abilities: { 0: 'Thick Fat' }
    },
    Huntail: {
        types: ['Water'],
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        weightkg: 27,
        abilities: { 0: 'Swift Swim' }
    },
    Illumise: {
        types: ['Bug'],
        bs: { hp: 65, at: 47, df: 55, sa: 73, sd: 75, sp: 85 },
        abilities: { 0: 'Oblivious' },
        weightkg: 17.7
    },
    Jirachi: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.1,
        abilities: { 0: 'Serene Grace' },
        gender: 'N'
    },
    Kecleon: {
        types: ['Normal'],
        bs: { hp: 60, at: 90, df: 70, sa: 60, sd: 120, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Color Change' }
    },
    Kirlia: {
        types: ['Psychic'],
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Kyogre: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 90, sa: 150, sd: 140, sp: 90 },
        weightkg: 352,
        abilities: { 0: 'Drizzle' },
        gender: 'N'
    },
    Lairon: {
        types: ['Steel', 'Rock'],
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        weightkg: 120,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Latias: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        weightkg: 40,
        abilities: { 0: 'Levitate' }
    },
    Latios: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        weightkg: 60,
        abilities: { 0: 'Levitate' }
    },
    Lileep: {
        types: ['Rock', 'Grass'],
        bs: { hp: 66, at: 41, df: 77, sa: 61, sd: 87, sp: 23 },
        weightkg: 23.8,
        nfe: true,
        abilities: { 0: 'Suction Cups' }
    },
    Linoone: {
        types: ['Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' }
    },
    Lombre: {
        types: ['Water', 'Grass'],
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        weightkg: 32.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Lotad: {
        types: ['Water', 'Grass'],
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        weightkg: 2.6,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Loudred: {
        types: ['Normal'],
        bs: { hp: 84, at: 71, df: 43, sa: 71, sd: 43, sp: 48 },
        weightkg: 40.5,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Ludicolo: {
        types: ['Water', 'Grass'],
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        weightkg: 55,
        abilities: { 0: 'Swift Swim' }
    },
    Lunatone: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 85, sp: 70 },
        weightkg: 168,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Luvdisc: {
        types: ['Water'],
        bs: { hp: 43, at: 30, df: 55, sa: 40, sd: 65, sp: 97 },
        weightkg: 8.7,
        abilities: { 0: 'Swift Swim' }
    },
    Makuhita: {
        types: ['Fighting'],
        bs: { hp: 72, at: 60, df: 30, sa: 20, sd: 30, sp: 25 },
        weightkg: 86.4,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Manectric: {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 60, sa: 105, sd: 60, sp: 105 },
        weightkg: 40.2,
        abilities: { 0: 'Static' }
    },
    Marshtomp: {
        types: ['Water', 'Ground'],
        bs: { hp: 70, at: 85, df: 70, sa: 60, sd: 70, sp: 50 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Masquerain: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 60, df: 62, sa: 80, sd: 82, sp: 60 },
        weightkg: 3.6,
        abilities: { 0: 'Intimidate' }
    },
    Mawile: {
        types: ['Steel'],
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        weightkg: 11.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Medicham: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' }
    },
    Meditite: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        weightkg: 11.2,
        nfe: true,
        abilities: { 0: 'Pure Power' }
    },
    Metagross: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        weightkg: 550,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Metang: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        weightkg: 202.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Mightyena: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 70 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Milotic: {
        types: ['Water'],
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        weightkg: 162,
        abilities: { 0: 'Marvel Scale' }
    },
    Minun: {
        types: ['Electric'],
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Minus' }
    },
    Mudkip: {
        types: ['Water'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 7.6,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Nincada: {
        types: ['Bug', 'Ground'],
        bs: { hp: 31, at: 45, df: 90, sa: 30, sd: 30, sp: 40 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Ninjask: {
        types: ['Bug', 'Flying'],
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 160 },
        weightkg: 12,
        abilities: { 0: 'Speed Boost' }
    },
    Nosepass: {
        types: ['Rock'],
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30 },
        weightkg: 97,
        abilities: { 0: 'Sturdy' }
    },
    Numel: {
        types: ['Fire', 'Ground'],
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 24,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Nuzleaf: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pelipper: {
        types: ['Water', 'Flying'],
        bs: { hp: 60, at: 50, df: 100, sa: 85, sd: 70, sp: 65 },
        weightkg: 28,
        abilities: { 0: 'Keen Eye' }
    },
    Plusle: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Plus' }
    },
    Poochyena: {
        types: ['Dark'],
        bs: { hp: 35, at: 55, df: 35, sa: 30, sd: 30, sp: 35 },
        weightkg: 13.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Ralts: {
        types: ['Psychic'],
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Rayquaza: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 150, df: 90, sa: 150, sd: 90, sp: 95 },
        weightkg: 206.5,
        abilities: { 0: 'Air Lock' },
        gender: 'N'
    },
    Regice: {
        types: ['Ice'],
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        weightkg: 175,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Regirock: {
        types: ['Rock'],
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        weightkg: 230,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Registeel: {
        types: ['Steel'],
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        weightkg: 205,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Relicanth: {
        types: ['Water', 'Rock'],
        bs: { hp: 100, at: 90, df: 130, sa: 45, sd: 65, sp: 55 },
        weightkg: 23.4,
        abilities: { 0: 'Swift Swim' }
    },
    Roselia: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        weightkg: 2,
        abilities: { 0: 'Natural Cure' }
    },
    Sableye: {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        weightkg: 11,
        abilities: { 0: 'Keen Eye' }
    },
    Salamence: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 135, df: 80, sa: 110, sd: 80, sp: 100 },
        weightkg: 102.6,
        abilities: { 0: 'Intimidate' }
    },
    Sceptile: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        weightkg: 52.2,
        abilities: { 0: 'Overgrow' }
    },
    Sealeo: {
        types: ['Ice', 'Water'],
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        weightkg: 87.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Seedot: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Seviper: {
        types: ['Poison'],
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 65 },
        weightkg: 52.5,
        abilities: { 0: 'Shed Skin' }
    },
    Sharpedo: {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 120, df: 40, sa: 95, sd: 40, sp: 95 },
        weightkg: 88.8,
        abilities: { 0: 'Rough Skin' }
    },
    Shedinja: {
        types: ['Bug', 'Ghost'],
        bs: { hp: 1, at: 90, df: 45, sa: 30, sd: 30, sp: 40 },
        weightkg: 1.2,
        abilities: { 0: 'Wonder Guard' },
        gender: 'N'
    },
    Shelgon: {
        types: ['Dragon'],
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        weightkg: 110.5,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Shiftry: {
        types: ['Grass', 'Dark'],
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        weightkg: 59.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Shroomish: {
        types: ['Grass'],
        bs: { hp: 60, at: 40, df: 60, sa: 40, sd: 60, sp: 35 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Shuppet: {
        types: ['Ghost'],
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 45 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Insomnia' }
    },
    Silcoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 10,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Skitty: {
        types: ['Normal'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 35, sp: 50 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Slaking: {
        types: ['Normal'],
        bs: { hp: 150, at: 160, df: 100, sa: 95, sd: 65, sp: 100 },
        weightkg: 130.5,
        abilities: { 0: 'Truant' }
    },
    Slakoth: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        weightkg: 24,
        abilities: { 0: 'Truant' },
        nfe: true
    },
    Snorunt: {
        types: ['Ice'],
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        weightkg: 16.8,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Solrock: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 95, df: 85, sa: 55, sd: 65, sp: 70 },
        weightkg: 154,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Spheal: {
        types: ['Ice', 'Water'],
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        weightkg: 39.5,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Spinda: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 60, sd: 60, sp: 60 },
        weightkg: 5,
        abilities: { 0: 'Own Tempo' }
    },
    Spoink: {
        types: ['Psychic'],
        bs: { hp: 60, at: 25, df: 35, sa: 70, sd: 80, sp: 60 },
        weightkg: 30.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Surskit: {
        types: ['Bug', 'Water'],
        bs: { hp: 40, at: 30, df: 32, sa: 50, sd: 52, sp: 65 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Swablu: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Swalot: {
        types: ['Poison'],
        bs: { hp: 100, at: 73, df: 83, sa: 73, sd: 83, sp: 55 },
        weightkg: 80,
        abilities: { 0: 'Liquid Ooze' }
    },
    Swampert: {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60 },
        weightkg: 81.9,
        abilities: { 0: 'Torrent' }
    },
    Swellow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 85, df: 60, sa: 50, sd: 50, sp: 125 },
        weightkg: 19.8,
        abilities: { 0: 'Guts' }
    },
    Taillow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Torchic: {
        types: ['Fire'],
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Torkoal: {
        types: ['Fire'],
        bs: { hp: 70, at: 85, df: 140, sa: 85, sd: 70, sp: 20 },
        weightkg: 80.4,
        abilities: { 0: 'White Smoke' }
    },
    Trapinch: {
        types: ['Ground'],
        bs: { hp: 45, at: 100, df: 45, sa: 45, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Treecko: {
        types: ['Grass'],
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Tropius: {
        types: ['Grass', 'Flying'],
        bs: { hp: 99, at: 68, df: 83, sa: 72, sd: 87, sp: 51 },
        weightkg: 100,
        abilities: { 0: 'Chlorophyll' }
    },
    Vibrava: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 70 },
        weightkg: 15.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Vigoroth: {
        types: ['Normal'],
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        weightkg: 46.5,
        abilities: { 0: 'Vital Spirit' },
        nfe: true
    },
    Volbeat: {
        types: ['Bug'],
        bs: { hp: 65, at: 73, df: 55, sa: 47, sd: 75, sp: 85 },
        weightkg: 17.7,
        abilities: { 0: 'Illuminate' }
    },
    Wailmer: {
        types: ['Water'],
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        weightkg: 130,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Wailord: {
        types: ['Water'],
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        weightkg: 398,
        abilities: { 0: 'Water Veil' }
    },
    Walrein: {
        types: ['Ice', 'Water'],
        bs: { hp: 110, at: 80, df: 90, sa: 95, sd: 90, sp: 65 },
        weightkg: 150.6,
        abilities: { 0: 'Thick Fat' }
    },
    Whiscash: {
        types: ['Water', 'Ground'],
        bs: { hp: 110, at: 78, df: 73, sa: 76, sd: 71, sp: 60 },
        weightkg: 23.6,
        abilities: { 0: 'Oblivious' }
    },
    Whismur: {
        types: ['Normal'],
        bs: { hp: 64, at: 51, df: 23, sa: 51, sd: 23, sp: 28 },
        weightkg: 16.3,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Wingull: {
        types: ['Water', 'Flying'],
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Wurmple: {
        types: ['Bug'],
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        weightkg: 3.6,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Wynaut: {
        types: ['Psychic'],
        bs: { hp: 95, at: 23, df: 48, sa: 23, sd: 48, sp: 23 },
        weightkg: 14,
        nfe: true,
        abilities: { 0: 'Shadow Tag' }
    },
    Zangoose: {
        types: ['Normal'],
        bs: { hp: 73, at: 115, df: 60, sa: 60, sd: 60, sp: 90 },
        weightkg: 40.3,
        abilities: { 0: 'Immunity' }
    },
    Zigzagoon: {
        types: ['Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Aipom: { nfe: true },
    Dusclops: { nfe: true },
    Electabuzz: { nfe: true },
    Gligar: { nfe: true },
    Lickitung: { nfe: true },
    Magmar: { nfe: true },
    Magneton: { nfe: true },
    Misdreavus: { nfe: true },
    Murkrow: { nfe: true },
    Nosepass: { nfe: true },
    Piloswine: { nfe: true },
    Pichu: { otherFormes: ['Pichu-Spiky-eared'] },
    Porygon2: { nfe: true },
    Rhydon: { nfe: true },
    Roselia: { nfe: true },
    Sneasel: { nfe: true },
    Tangela: { nfe: true },
    Togetic: { nfe: true },
    Yanma: { nfe: true },
    Abomasnow: {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 92, df: 75, sa: 92, sd: 85, sp: 60 },
        weightkg: 135.5,
        abilities: { 0: 'Snow Warning' }
    },
    Ambipom: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        weightkg: 20.3,
        abilities: { 0: 'Technician' }
    },
    Arceus: {
        types: ['Normal'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        otherFormes: [
            'Arceus-Bug',
            'Arceus-Dark',
            'Arceus-Dragon',
            'Arceus-Electric',
            'Arceus-Fighting',
            'Arceus-Fire',
            'Arceus-Flying',
            'Arceus-Ghost',
            'Arceus-Grass',
            'Arceus-Ground',
            'Arceus-Ice',
            'Arceus-Poison',
            'Arceus-Psychic',
            'Arceus-Rock',
            'Arceus-Steel',
            'Arceus-Water',
        ]
    },
    'Arceus-Bug': {
        types: ['Bug'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dark': {
        types: ['Dark'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dragon': {
        types: ['Dragon'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Electric': {
        types: ['Electric'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fighting': {
        types: ['Fighting'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fire': {
        types: ['Fire'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Flying': {
        types: ['Flying'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ghost': {
        types: ['Ghost'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Grass': {
        types: ['Grass'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ground': {
        types: ['Ground'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ice': {
        types: ['Ice'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Poison': {
        types: ['Poison'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Psychic': {
        types: ['Psychic'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Rock': {
        types: ['Rock'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Steel': {
        types: ['Steel'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Water': {
        types: ['Water'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    Arghonaut: {
        types: ['Water', 'Fighting'],
        bs: { hp: 105, at: 110, df: 95, sa: 70, sd: 100, sp: 75 },
        weightkg: 151,
        abilities: { 0: 'Unaware' }
    },
    Azelf: {
        types: ['Psychic'],
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Bastiodon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 52, df: 168, sa: 47, sd: 138, sp: 30 },
        weightkg: 149.5,
        abilities: { 0: 'Sturdy' }
    },
    Bibarel: {
        types: ['Normal', 'Water'],
        bs: { hp: 79, at: 85, df: 60, sa: 55, sd: 60, sp: 71 },
        weightkg: 31.5,
        abilities: { 0: 'Simple' }
    },
    Bidoof: {
        types: ['Normal'],
        bs: { hp: 59, at: 45, df: 40, sa: 35, sd: 40, sp: 31 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Simple' }
    },
    Bonsly: {
        types: ['Rock'],
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Breezi: {
        types: ['Poison', 'Flying'],
        bs: { hp: 50, at: 46, df: 69, sa: 60, sd: 50, sp: 75 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Unburden' }
    },
    Bronzong: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 67, at: 89, df: 116, sa: 79, sd: 116, sp: 33 },
        weightkg: 187,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Bronzor: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23 },
        weightkg: 60.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Budew: {
        types: ['Grass', 'Poison'],
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Buizel: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 35, sa: 60, sd: 30, sp: 85 },
        weightkg: 29.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Buneary: {
        types: ['Normal'],
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Burmy: {
        types: ['Bug'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 },
        weightkg: 3.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Carnivine: {
        types: ['Grass'],
        bs: { hp: 74, at: 100, df: 72, sa: 90, sd: 72, sp: 46 },
        weightkg: 27,
        abilities: { 0: 'Levitate' }
    },
    Chatot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 76, at: 65, df: 45, sa: 92, sd: 42, sp: 91 },
        weightkg: 1.9,
        abilities: { 0: 'Keen Eye' }
    },
    Cherrim: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        otherFormes: ['Cherrim-Sunshine']
    },
    'Cherrim-Sunshine': {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        baseSpecies: 'Cherrim'
    },
    Cherubi: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 45, sa: 62, sd: 53, sp: 35 },
        weightkg: 3.3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Chimchar: {
        types: ['Fire'],
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        weightkg: 6.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Chingling: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 65, sd: 50, sp: 45 },
        weightkg: 0.6,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Colossoil: {
        types: ['Ground', 'Dark'],
        bs: { hp: 133, at: 122, df: 72, sa: 71, sd: 72, sp: 95 },
        weightkg: 683.6,
        abilities: { 0: 'Rebound' }
    },
    Combee: {
        types: ['Bug', 'Flying'],
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Cranidos: {
        types: ['Rock'],
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        weightkg: 31.5,
        nfe: true,
        abilities: { 0: 'Mold Breaker' }
    },
    Cresselia: {
        types: ['Psychic'],
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 },
        weightkg: 85.6,
        abilities: { 0: 'Levitate' }
    },
    Croagunk: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Cyclohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 108, at: 60, df: 118, sa: 112, sd: 70, sp: 80 },
        weightkg: 59,
        abilities: { 0: 'Shield Dust' }
    },
    Darkrai: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        weightkg: 50.5,
        abilities: { 0: 'Bad Dreams' },
        gender: 'N'
    },
    Dialga: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 120, df: 120, sa: 150, sd: 100, sp: 90 },
        weightkg: 683,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Dorsoil: {
        types: ['Ground'],
        bs: { hp: 103, at: 72, df: 52, sa: 61, sd: 52, sp: 65 },
        weightkg: 145,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Drapion: {
        types: ['Poison', 'Dark'],
        bs: { hp: 70, at: 90, df: 110, sa: 60, sd: 75, sp: 95 },
        weightkg: 61.5,
        abilities: { 0: 'Battle Armor' }
    },
    Drifblim: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        weightkg: 15,
        abilities: { 0: 'Aftermath' }
    },
    Drifloon: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Aftermath' }
    },
    Duohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 88, at: 40, df: 103, sa: 77, sd: 60, sp: 60 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Dusknoir: {
        types: ['Ghost'],
        bs: { hp: 45, at: 100, df: 135, sa: 65, sd: 135, sp: 45 },
        weightkg: 106.6,
        abilities: { 0: 'Pressure' }
    },
    Electivire: {
        types: ['Electric'],
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        weightkg: 138.6,
        abilities: { 0: 'Motor Drive' }
    },
    Embirch: {
        types: ['Fire', 'Grass'],
        bs: { hp: 60, at: 40, df: 55, sa: 65, sd: 40, sp: 60 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Reckless' }
    },
    Empoleon: {
        types: ['Water', 'Steel'],
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        weightkg: 84.5,
        abilities: { 0: 'Torrent' }
    },
    Fidgit: {
        types: ['Poison', 'Ground'],
        bs: { hp: 95, at: 76, df: 109, sa: 90, sd: 80, sp: 105 },
        weightkg: 53,
        abilities: { 0: 'Persistent' }
    },
    Finneon: {
        types: ['Water'],
        bs: { hp: 49, at: 49, df: 56, sa: 49, sd: 61, sp: 66 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flarelm: {
        types: ['Fire', 'Grass'],
        bs: { hp: 90, at: 50, df: 95, sa: 75, sd: 70, sp: 40 },
        weightkg: 73,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Floatzel: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 55, sa: 85, sd: 50, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Swift Swim' }
    },
    Froslass: {
        types: ['Ice', 'Ghost'],
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        weightkg: 26.6,
        abilities: { 0: 'Snow Cloak' }
    },
    Gabite: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 68, at: 90, df: 65, sa: 50, sd: 55, sp: 82 },
        weightkg: 56,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Gallade: {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Steadfast' }
    },
    Garchomp: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102 },
        weightkg: 95,
        abilities: { 0: 'Sand Veil' }
    },
    Gastrodon: {
        types: ['Water', 'Ground'],
        bs: { hp: 111, at: 83, df: 68, sa: 92, sd: 82, sp: 39 },
        weightkg: 29.9,
        abilities: { 0: 'Sticky Hold' }
    },
    Gible: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42 },
        weightkg: 20.5,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Giratina: {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 100, df: 120, sa: 100, sd: 120, sp: 90 },
        weightkg: 750,
        gender: 'N',
        otherFormes: ['Giratina-Origin'],
        abilities: { 0: 'Pressure' }
    },
    'Giratina-Origin': {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 120, df: 100, sa: 120, sd: 100, sp: 90 },
        weightkg: 650,
        gender: 'N',
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Giratina'
    },
    Glaceon: {
        types: ['Ice'],
        bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
        weightkg: 25.9,
        abilities: { 0: 'Snow Cloak' }
    },
    Glameow: {
        types: ['Normal'],
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        weightkg: 3.9,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Gliscor: {
        types: ['Ground', 'Flying'],
        bs: { hp: 75, at: 95, df: 125, sa: 45, sd: 75, sp: 95 },
        weightkg: 42.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Grotle: {
        types: ['Grass'],
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        weightkg: 97,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Happiny: {
        types: ['Normal'],
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        weightkg: 24.4,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Heatran: {
        types: ['Fire', 'Steel'],
        bs: { hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77 },
        weightkg: 430,
        abilities: { 0: 'Flash Fire' }
    },
    Hippopotas: {
        types: ['Ground'],
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        weightkg: 49.5,
        nfe: true,
        abilities: { 0: 'Sand Stream' }
    },
    Hippowdon: {
        types: ['Ground'],
        bs: { hp: 108, at: 112, df: 118, sa: 68, sd: 72, sp: 47 },
        weightkg: 300,
        abilities: { 0: 'Sand Stream' }
    },
    Honchkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 100, at: 125, df: 52, sa: 105, sd: 52, sp: 71 },
        weightkg: 27.3,
        abilities: { 0: 'Insomnia' }
    },
    Infernape: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        weightkg: 55,
        abilities: { 0: 'Blaze' }
    },
    Kitsunoh: {
        types: ['Ghost', 'Steel'],
        bs: { hp: 80, at: 103, df: 85, sa: 55, sd: 80, sp: 110 },
        weightkg: 51,
        abilities: { 0: 'Frisk' }
    },
    Kricketot: {
        types: ['Bug'],
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        weightkg: 2.2,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Kricketune: {
        types: ['Bug'],
        bs: { hp: 77, at: 85, df: 51, sa: 55, sd: 51, sp: 65 },
        weightkg: 25.5,
        abilities: { 0: 'Swarm' }
    },
    Krilowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 151, at: 84, df: 73, sa: 83, sd: 74, sp: 105 },
        weightkg: 10.6,
        abilities: { 0: 'Trace' }
    },
    Leafeon: {
        types: ['Grass'],
        bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
        weightkg: 25.5,
        abilities: { 0: 'Leaf Guard' }
    },
    Lickilicky: {
        types: ['Normal'],
        bs: { hp: 110, at: 85, df: 95, sa: 80, sd: 95, sp: 50 },
        weightkg: 140,
        abilities: { 0: 'Own Tempo' }
    },
    Lopunny: {
        types: ['Normal'],
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        weightkg: 33.3,
        abilities: { 0: 'Cute Charm' }
    },
    Lucario: {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        weightkg: 54,
        abilities: { 0: 'Steadfast' }
    },
    Lumineon: {
        types: ['Water'],
        bs: { hp: 69, at: 69, df: 76, sa: 69, sd: 86, sp: 91 },
        weightkg: 24,
        abilities: { 0: 'Swift Swim' }
    },
    Luxio: {
        types: ['Electric'],
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        weightkg: 30.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Luxray: {
        types: ['Electric'],
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        weightkg: 42,
        abilities: { 0: 'Rivalry' }
    },
    Magmortar: {
        types: ['Fire'],
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        weightkg: 68,
        abilities: { 0: 'Flame Body' }
    },
    Magnezone: {
        types: ['Electric', 'Steel'],
        bs: { hp: 70, at: 70, df: 115, sa: 130, sd: 90, sp: 60 },
        weightkg: 180,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    Mamoswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 110, at: 130, df: 80, sa: 70, sd: 60, sp: 80 },
        weightkg: 291,
        abilities: { 0: 'Oblivious' }
    },
    Manaphy: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.4,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    Mantyke: {
        types: ['Water', 'Flying'],
        bs: { hp: 45, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        weightkg: 65,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Mesprit: {
        types: ['Psychic'],
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    'Mime Jr.': {
        types: ['Psychic'],
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Mismagius: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
        weightkg: 4.4,
        abilities: { 0: 'Levitate' }
    },
    Monferno: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        weightkg: 22,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Monohm: {
        types: ['Electric'],
        bs: { hp: 53, at: 40, df: 58, sa: 67, sd: 55, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Mothim: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 94, df: 50, sa: 94, sd: 50, sp: 66 },
        weightkg: 23.3,
        abilities: { 0: 'Swarm' }
    },
    Munchlax: {
        types: ['Normal'],
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        weightkg: 105,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Nohface: {
        types: ['Ghost'],
        bs: { hp: 50, at: 73, df: 50, sa: 30, sd: 50, sp: 80 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Pachirisu: {
        types: ['Electric'],
        bs: { hp: 60, at: 45, df: 70, sa: 45, sd: 90, sp: 95 },
        weightkg: 3.9,
        abilities: { 0: 'Run Away' }
    },
    Palkia: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 120, df: 100, sa: 150, sd: 120, sp: 100 },
        weightkg: 336,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Phione: {
        types: ['Water'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 3.1,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    'Pichu-Spiky-eared': {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pichu'
    },
    Piplup: {
        types: ['Water'],
        bs: { hp: 53, at: 51, df: 53, sa: 61, sd: 56, sp: 40 },
        weightkg: 5.2,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Porygon-Z': {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 70, sa: 135, sd: 75, sp: 90 },
        weightkg: 34,
        gender: 'N',
        abilities: { 0: 'Adaptability' }
    },
    Prinplup: {
        types: ['Water'],
        bs: { hp: 64, at: 66, df: 68, sa: 81, sd: 76, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Privatyke: {
        types: ['Water', 'Fighting'],
        bs: { hp: 65, at: 75, df: 65, sa: 40, sd: 60, sp: 45 },
        weightkg: 35,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Probopass: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        weightkg: 340,
        abilities: { 0: 'Sturdy' }
    },
    Protowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 51, at: 44, df: 33, sa: 43, sd: 34, sp: 65 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Purugly: {
        types: ['Normal'],
        bs: { hp: 71, at: 82, df: 64, sa: 64, sd: 59, sp: 112 },
        weightkg: 43.8,
        abilities: { 0: 'Thick Fat' }
    },
    Pyroak: {
        types: ['Fire', 'Grass'],
        bs: { hp: 120, at: 70, df: 105, sa: 95, sd: 90, sp: 60 },
        weightkg: 168,
        abilities: { 0: 'Rock Head' }
    },
    Rampardos: {
        types: ['Rock'],
        bs: { hp: 97, at: 165, df: 60, sa: 65, sd: 50, sp: 58 },
        weightkg: 102.5,
        abilities: { 0: 'Mold Breaker' }
    },
    Rebble: {
        types: ['Rock'],
        bs: { hp: 45, at: 25, df: 65, sa: 75, sd: 55, sp: 80 },
        weightkg: 7,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Regigigas: {
        types: ['Normal'],
        bs: { hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100 },
        weightkg: 420,
        abilities: { 0: 'Slow Start' },
        gender: 'N'
    },
    Revenankh: {
        types: ['Ghost', 'Fighting'],
        bs: { hp: 90, at: 105, df: 90, sa: 65, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Air Lock' }
    },
    Rhyperior: {
        types: ['Ground', 'Rock'],
        bs: { hp: 115, at: 140, df: 130, sa: 55, sd: 55, sp: 40 },
        weightkg: 282.8,
        abilities: { 0: 'Lightning Rod' }
    },
    Riolu: {
        types: ['Fighting'],
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Steadfast' }
    },
    Roserade: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        weightkg: 14.5,
        abilities: { 0: 'Natural Cure' }
    },
    Rotom: {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 77, sp: 91 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        otherFormes: ['Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash']
    },
    'Rotom-Mow': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Frost': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Heat': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Fan': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Wash': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    Shaymin: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 2.1,
        abilities: { 0: 'Natural Cure' },
        gender: 'N',
        otherFormes: ['Shaymin-Sky']
    },
    'Shaymin-Sky': {
        types: ['Grass', 'Flying'],
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        weightkg: 5.2,
        abilities: { 0: 'Serene Grace' },
        gender: 'N',
        baseSpecies: 'Shaymin'
    },
    Shellos: {
        types: ['Water'],
        bs: { hp: 76, at: 48, df: 48, sa: 57, sd: 62, sp: 34 },
        weightkg: 6.3,
        nfe: true,
        abilities: { 0: 'Sticky Hold' }
    },
    Shieldon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 30, at: 42, df: 118, sa: 42, sd: 88, sp: 30 },
        weightkg: 57,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Shinx: {
        types: ['Electric'],
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Skorupi: {
        types: ['Poison', 'Bug'],
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Skuntank: {
        types: ['Poison', 'Dark'],
        bs: { hp: 103, at: 93, df: 67, sa: 71, sd: 61, sp: 84 },
        weightkg: 38,
        abilities: { 0: 'Stench' }
    },
    Snover: {
        types: ['Grass', 'Ice'],
        bs: { hp: 60, at: 62, df: 50, sa: 62, sd: 60, sp: 40 },
        weightkg: 50.5,
        nfe: true,
        abilities: { 0: 'Snow Warning' }
    },
    Spiritomb: {
        types: ['Ghost', 'Dark'],
        bs: { hp: 50, at: 92, df: 108, sa: 92, sd: 108, sp: 35 },
        weightkg: 108,
        abilities: { 0: 'Pressure' }
    },
    Staraptor: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 120, df: 70, sa: 50, sd: 50, sp: 100 },
        weightkg: 24.9,
        abilities: { 0: 'Intimidate' }
    },
    Staravia: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 75, df: 50, sa: 40, sd: 40, sp: 80 },
        weightkg: 15.5,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Starly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 60 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Stunky: {
        types: ['Poison', 'Dark'],
        bs: { hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Syclant: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 116, df: 70, sa: 114, sd: 64, sp: 121 },
        weightkg: 52,
        abilities: { 0: 'Compound Eyes' }
    },
    Syclar: {
        types: ['Ice', 'Bug'],
        bs: { hp: 40, at: 76, df: 45, sa: 74, sd: 39, sp: 91 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Tactite: {
        types: ['Rock'],
        bs: { hp: 70, at: 40, df: 65, sa: 100, sd: 65, sp: 95 },
        weightkg: 16,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Tangrowth: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        weightkg: 128.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Togekiss: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 50, df: 95, sa: 120, sd: 115, sp: 80 },
        weightkg: 38,
        abilities: { 0: 'Hustle' }
    },
    Torterra: {
        types: ['Grass', 'Ground'],
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        weightkg: 310,
        abilities: { 0: 'Overgrow' }
    },
    Toxicroak: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        weightkg: 44.4,
        abilities: { 0: 'Anticipation' }
    },
    Turtwig: {
        types: ['Grass'],
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Uxie: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Vespiquen: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        weightkg: 38.5,
        abilities: { 0: 'Pressure' }
    },
    Voodoll: {
        types: ['Normal', 'Dark'],
        bs: { hp: 55, at: 40, df: 55, sa: 75, sd: 50, sp: 70 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Volt Absorb' }
    },
    Voodoom: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 90, at: 85, df: 80, sa: 105, sd: 80, sp: 110 },
        weightkg: 75.5,
        abilities: { 0: 'Volt Absorb' }
    },
    Weavile: {
        types: ['Dark', 'Ice'],
        bs: { hp: 70, at: 120, df: 65, sa: 45, sd: 85, sp: 125 },
        weightkg: 34,
        abilities: { 0: 'Pressure' }
    },
    Wormadam: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 59, df: 85, sa: 79, sd: 105, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        otherFormes: ['Wormadam-Sandy', 'Wormadam-Trash']
    },
    'Wormadam-Sandy': {
        types: ['Bug', 'Ground'],
        bs: { hp: 60, at: 79, df: 105, sa: 59, sd: 85, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    'Wormadam-Trash': {
        types: ['Bug', 'Steel'],
        bs: { hp: 60, at: 69, df: 95, sa: 69, sd: 95, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    Yanmega: {
        types: ['Bug', 'Flying'],
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
        weightkg: 51.5,
        abilities: { 0: 'Speed Boost' }
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Rotom-Fan': { types: ['Electric', 'Flying'] },
    'Rotom-Frost': { types: ['Electric', 'Ice'] },
    'Rotom-Heat': { types: ['Electric', 'Fire'] },
    'Rotom-Mow': { types: ['Electric', 'Grass'] },
    'Rotom-Wash': { types: ['Electric', 'Water'] },
    Accelgor: {
        types: ['Bug'],
        bs: { hp: 80, at: 70, df: 40, sa: 100, sd: 60, sp: 145 },
        weightkg: 25.3,
        abilities: { 0: 'Hydration' }
    },
    Alomomola: {
        types: ['Water'],
        bs: { hp: 165, at: 75, df: 80, sa: 40, sd: 45, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Healer' }
    },
    Amoonguss: {
        types: ['Grass', 'Poison'],
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        weightkg: 10.5,
        abilities: { 0: 'Effect Spore' }
    },
    Archen: {
        types: ['Rock', 'Flying'],
        bs: { hp: 55, at: 112, df: 45, sa: 74, sd: 45, sp: 70 },
        weightkg: 9.5,
        abilities: { 0: 'Defeatist' },
        nfe: true
    },
    Archeops: {
        types: ['Rock', 'Flying'],
        bs: { hp: 75, at: 140, df: 65, sa: 112, sd: 65, sp: 110 },
        weightkg: 32,
        abilities: { 0: 'Defeatist' }
    },
    Argalis: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 90, df: 89, sa: 87, sd: 40, sp: 54 },
        weightkg: 341.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Audino: {
        types: ['Normal'],
        bs: { hp: 103, at: 60, df: 86, sa: 60, sd: 86, sp: 50 },
        weightkg: 31,
        abilities: { 0: 'Healer' }
    },
    Aurumoth: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 110, at: 120, df: 99, sa: 117, sd: 60, sp: 94 },
        weightkg: 193,
        abilities: { 0: 'Weak Armor' }
    },
    Axew: {
        types: ['Dragon'],
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Basculin: {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Reckless' },
        otherFormes: ['Basculin-Blue-Striped']
    },
    'Basculin-Blue-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Basculin'
    },
    Beartic: {
        types: ['Ice'],
        bs: { hp: 95, at: 110, df: 80, sa: 70, sd: 80, sp: 50 },
        weightkg: 260,
        abilities: { 0: 'Snow Cloak' }
    },
    Beheeyem: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 75, sa: 125, sd: 95, sp: 40 },
        weightkg: 34.5,
        abilities: { 0: 'Telepathy' }
    },
    Bisharp: {
        types: ['Dark', 'Steel'],
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        weightkg: 70,
        abilities: { 0: 'Defiant' }
    },
    Blitzle: {
        types: ['Electric'],
        bs: { hp: 45, at: 60, df: 32, sa: 50, sd: 32, sp: 76 },
        weightkg: 29.8,
        nfe: true,
        abilities: { 0: 'Lightning Rod' }
    },
    Boldore: {
        types: ['Rock'],
        bs: { hp: 70, at: 105, df: 105, sa: 50, sd: 40, sp: 20 },
        weightkg: 102,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Bouffalant: {
        types: ['Normal'],
        bs: { hp: 95, at: 110, df: 95, sa: 40, sd: 95, sp: 55 },
        weightkg: 94.6,
        abilities: { 0: 'Reckless' }
    },
    Brattler: {
        types: ['Dark', 'Grass'],
        bs: { hp: 80, at: 70, df: 40, sa: 20, sd: 90, sp: 30 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Harvest' }
    },
    Braviary: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 123, df: 75, sa: 57, sd: 75, sp: 80 },
        weightkg: 41,
        abilities: { 0: 'Keen Eye' }
    },
    Carracosta: {
        types: ['Water', 'Rock'],
        bs: { hp: 74, at: 108, df: 133, sa: 83, sd: 65, sp: 32 },
        weightkg: 81,
        abilities: { 0: 'Solid Rock' }
    },
    Cawdet: {
        types: ['Steel', 'Flying'],
        bs: { hp: 35, at: 72, df: 85, sa: 40, sd: 55, sp: 88 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Cawmodore: {
        types: ['Steel', 'Flying'],
        bs: { hp: 50, at: 92, df: 130, sa: 65, sd: 75, sp: 118 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Chandelure: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        weightkg: 34.3,
        abilities: { 0: 'Flash Fire' }
    },
    Cinccino: {
        types: ['Normal'],
        bs: { hp: 75, at: 95, df: 60, sa: 65, sd: 60, sp: 115 },
        weightkg: 7.5,
        abilities: { 0: 'Cute Charm' }
    },
    Cobalion: {
        types: ['Steel', 'Fighting'],
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        weightkg: 250,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Cofagrigus: {
        types: ['Ghost'],
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        weightkg: 76.5,
        abilities: { 0: 'Mummy' }
    },
    Conkeldurr: {
        types: ['Fighting'],
        bs: { hp: 105, at: 140, df: 95, sa: 55, sd: 65, sp: 45 },
        weightkg: 87,
        abilities: { 0: 'Guts' }
    },
    Cottonee: {
        types: ['Grass'],
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Prankster' }
    },
    Crustle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        weightkg: 200,
        abilities: { 0: 'Sturdy' }
    },
    Cryogonal: {
        types: ['Ice'],
        bs: { hp: 70, at: 50, df: 30, sa: 95, sd: 135, sp: 105 },
        weightkg: 148,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Cubchoo: {
        types: ['Ice'],
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Cupra: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 60, df: 49, sa: 67, sd: 30, sp: 44 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Darmanitan: {
        types: ['Fire'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 92.9,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Darmanitan-Zen']
    },
    'Darmanitan-Zen': {
        types: ['Fire', 'Psychic'],
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 },
        weightkg: 92.9,
        baseSpecies: 'Darmanitan',
        abilities: { 0: 'Zen Mode' }
    },
    Darumaka: {
        types: ['Fire'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 37.5,
        nfe: true,
        abilities: { 0: 'Hustle' }
    },
    Deerling: {
        types: ['Normal', 'Grass'],
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Deino: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        weightkg: 17.3,
        abilities: { 0: 'Hustle' },
        nfe: true
    },
    Dewott: {
        types: ['Water'],
        bs: { hp: 75, at: 75, df: 60, sa: 83, sd: 60, sp: 60 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Drilbur: {
        types: ['Ground'],
        bs: { hp: 60, at: 85, df: 40, sa: 30, sd: 45, sp: 68 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Sand Rush' }
    },
    Druddigon: {
        types: ['Dragon'],
        bs: { hp: 77, at: 120, df: 90, sa: 60, sd: 90, sp: 48 },
        weightkg: 139,
        abilities: { 0: 'Rough Skin' }
    },
    Ducklett: {
        types: ['Water', 'Flying'],
        bs: { hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Duosion: {
        types: ['Psychic'],
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Durant: {
        types: ['Bug', 'Steel'],
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 109 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Dwebble: {
        types: ['Bug', 'Rock'],
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Eelektrik: {
        types: ['Electric'],
        bs: { hp: 65, at: 85, df: 70, sa: 75, sd: 70, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Eelektross: {
        types: ['Electric'],
        bs: { hp: 85, at: 115, df: 80, sa: 105, sd: 80, sp: 50 },
        weightkg: 80.5,
        abilities: { 0: 'Levitate' }
    },
    Elgyem: {
        types: ['Psychic'],
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Telepathy' }
    },
    Emboar: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 110, at: 123, df: 65, sa: 100, sd: 65, sp: 65 },
        weightkg: 150,
        abilities: { 0: 'Blaze' }
    },
    Emolga: {
        types: ['Electric', 'Flying'],
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        weightkg: 5,
        abilities: { 0: 'Static' }
    },
    Escavalier: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Excadrill: {
        types: ['Ground', 'Steel'],
        bs: { hp: 110, at: 135, df: 60, sa: 50, sd: 65, sp: 88 },
        weightkg: 40.4,
        abilities: { 0: 'Sand Rush' }
    },
    Ferroseed: {
        types: ['Grass', 'Steel'],
        bs: { hp: 44, at: 50, df: 91, sa: 24, sd: 86, sp: 10 },
        weightkg: 18.8,
        nfe: true,
        abilities: { 0: 'Iron Barbs' }
    },
    Ferrothorn: {
        types: ['Grass', 'Steel'],
        bs: { hp: 74, at: 94, df: 131, sa: 54, sd: 116, sp: 20 },
        weightkg: 110,
        abilities: { 0: 'Iron Barbs' }
    },
    Foongus: {
        types: ['Grass', 'Poison'],
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Fraxure: {
        types: ['Dragon'],
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Frillish: {
        types: ['Water', 'Ghost'],
        bs: { hp: 55, at: 40, df: 50, sa: 65, sd: 85, sp: 40 },
        weightkg: 33,
        nfe: true,
        abilities: { 0: 'Water Absorb' }
    },
    Galvantula: {
        types: ['Bug', 'Electric'],
        bs: { hp: 70, at: 77, df: 60, sa: 97, sd: 60, sp: 108 },
        weightkg: 14.3,
        abilities: { 0: 'Compound Eyes' }
    },
    Garbodor: {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 107.3,
        abilities: { 0: 'Stench' }
    },
    Genesect: {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        otherFormes: ['Genesect-Burn', 'Genesect-Chill', 'Genesect-Douse', 'Genesect-Shock']
    },
    'Genesect-Burn': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Chill': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Douse': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Shock': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    Gigalith: {
        types: ['Rock'],
        bs: { hp: 85, at: 135, df: 130, sa: 60, sd: 70, sp: 25 },
        weightkg: 260,
        abilities: { 0: 'Sturdy' }
    },
    Golett: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        weightkg: 92,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Golurk: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        weightkg: 330,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Gothita: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gothitelle: {
        types: ['Psychic'],
        bs: { hp: 70, at: 55, df: 95, sa: 95, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Frisk' }
    },
    Gothorita: {
        types: ['Psychic'],
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gurdurr: {
        types: ['Fighting'],
        bs: { hp: 85, at: 105, df: 85, sa: 40, sd: 50, sp: 40 },
        weightkg: 40,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Haxorus: {
        types: ['Dragon'],
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        weightkg: 105.5,
        abilities: { 0: 'Rivalry' }
    },
    Heatmor: {
        types: ['Fire'],
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        weightkg: 58,
        abilities: { 0: 'Gluttony' }
    },
    Herdier: {
        types: ['Normal'],
        bs: { hp: 65, at: 80, df: 65, sa: 35, sd: 65, sp: 60 },
        weightkg: 14.7,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Hydreigon: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        weightkg: 160,
        abilities: { 0: 'Levitate' }
    },
    Jellicent: {
        types: ['Water', 'Ghost'],
        bs: { hp: 100, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        weightkg: 135,
        abilities: { 0: 'Water Absorb' }
    },
    Joltik: {
        types: ['Bug', 'Electric'],
        bs: { hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Karrablast: {
        types: ['Bug'],
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Keldeo: {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        otherFormes: ['Keldeo-Resolute']
    },
    'Keldeo-Resolute': {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        baseSpecies: 'Keldeo'
    },
    Klang: {
        types: ['Steel'],
        bs: { hp: 60, at: 80, df: 95, sa: 70, sd: 85, sp: 50 },
        weightkg: 51,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klink: {
        types: ['Steel'],
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        weightkg: 21,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klinklang: {
        types: ['Steel'],
        bs: { hp: 60, at: 100, df: 115, sa: 70, sd: 85, sp: 90 },
        weightkg: 81,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Krokorok: {
        types: ['Ground', 'Dark'],
        bs: { hp: 60, at: 82, df: 45, sa: 45, sd: 45, sp: 74 },
        weightkg: 33.4,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Krookodile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 95, at: 117, df: 70, sa: 65, sd: 70, sp: 92 },
        weightkg: 96.3,
        abilities: { 0: 'Intimidate' }
    },
    Kyurem: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Kyurem-Black', 'Kyurem-White']
    },
    'Kyurem-Black': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 170, df: 100, sa: 120, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Teravolt' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    'Kyurem-White': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 120, df: 90, sa: 170, sd: 100, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Turboblaze' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    Lampent: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Landorus: {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        weightkg: 68,
        abilities: { 0: 'Sand Force' },
        otherFormes: ['Landorus-Therian']
    },
    'Landorus-Therian': {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        weightkg: 68,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Landorus'
    },
    Larvesta: {
        types: ['Bug', 'Fire'],
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        weightkg: 28.8,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Leavanny: {
        types: ['Bug', 'Grass'],
        bs: { hp: 75, at: 103, df: 80, sa: 70, sd: 70, sp: 92 },
        weightkg: 20.5,
        abilities: { 0: 'Swarm' }
    },
    Liepard: {
        types: ['Dark'],
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        weightkg: 37.5,
        abilities: { 0: 'Limber' }
    },
    Lilligant: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        weightkg: 16.3,
        abilities: { 0: 'Chlorophyll' }
    },
    Lillipup: {
        types: ['Normal'],
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Vital Spirit' }
    },
    Litwick: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        weightkg: 3.1,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Malaconda: {
        types: ['Dark', 'Grass'],
        bs: { hp: 115, at: 100, df: 60, sa: 40, sd: 130, sp: 55 },
        weightkg: 108.8,
        abilities: { 0: 'Harvest' }
    },
    Mandibuzz: {
        types: ['Dark', 'Flying'],
        bs: { hp: 110, at: 65, df: 105, sa: 55, sd: 95, sp: 80 },
        weightkg: 39.5,
        abilities: { 0: 'Big Pecks' }
    },
    Maractus: {
        types: ['Grass'],
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        weightkg: 28,
        abilities: { 0: 'Water Absorb' }
    },
    Meloetta: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Meloetta-Pirouette'],
        gender: 'N'
    },
    'Meloetta-Pirouette': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Meloetta',
        gender: 'N'
    },
    Mienfoo: {
        types: ['Fighting'],
        bs: { hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Mienshao: {
        types: ['Fighting'],
        bs: { hp: 65, at: 125, df: 60, sa: 95, sd: 60, sp: 105 },
        weightkg: 35.5,
        abilities: { 0: 'Inner Focus' }
    },
    Minccino: {
        types: ['Normal'],
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Mollux: {
        types: ['Fire', 'Poison'],
        bs: { hp: 95, at: 45, df: 83, sa: 131, sd: 105, sp: 76 },
        weightkg: 41,
        abilities: { 0: 'Dry Skin' }
    },
    Munna: {
        types: ['Psychic'],
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24 },
        weightkg: 23.3,
        nfe: true,
        abilities: { 0: 'Forewarn' }
    },
    Musharna: {
        types: ['Psychic'],
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 95, sp: 29 },
        weightkg: 60.5,
        abilities: { 0: 'Forewarn' }
    },
    Necturine: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 49, at: 55, df: 60, sa: 50, sd: 75, sp: 51 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Necturna: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 64, at: 120, df: 100, sa: 85, sd: 120, sp: 81 },
        weightkg: 49.6,
        abilities: { 0: 'Forewarn' }
    },
    Oshawott: {
        types: ['Water'],
        bs: { hp: 55, at: 55, df: 45, sa: 63, sd: 45, sp: 45 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Palpitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 75, at: 65, df: 55, sa: 65, sd: 55, sp: 69 },
        weightkg: 17,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Panpour: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansage: {
        types: ['Grass'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansear: {
        types: ['Fire'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Patrat: {
        types: ['Normal'],
        bs: { hp: 45, at: 55, df: 39, sa: 35, sd: 39, sp: 42 },
        weightkg: 11.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Pawniard: {
        types: ['Dark', 'Steel'],
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Defiant' }
    },
    Petilil: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pidove: {
        types: ['Normal', 'Flying'],
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Pignite: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 90, at: 93, df: 55, sa: 70, sd: 55, sp: 55 },
        weightkg: 55.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Purrloin: {
        types: ['Dark'],
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        weightkg: 10.1,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Reshiram: {
        types: ['Dragon', 'Fire'],
        bs: { hp: 100, at: 120, df: 100, sa: 150, sd: 120, sp: 90 },
        weightkg: 330,
        abilities: { 0: 'Turboblaze' },
        gender: 'N'
    },
    Reuniclus: {
        types: ['Psychic'],
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        weightkg: 20.1,
        abilities: { 0: 'Overcoat' }
    },
    Roggenrola: {
        types: ['Rock'],
        bs: { hp: 55, at: 75, df: 85, sa: 25, sd: 25, sp: 15 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Rufflet: {
        types: ['Normal', 'Flying'],
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Samurott: {
        types: ['Water'],
        bs: { hp: 95, at: 100, df: 85, sa: 108, sd: 70, sp: 70 },
        weightkg: 94.6,
        abilities: { 0: 'Torrent' }
    },
    Sandile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 50, at: 72, df: 35, sa: 35, sd: 35, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Sawk: {
        types: ['Fighting'],
        bs: { hp: 75, at: 125, df: 75, sa: 30, sd: 75, sp: 85 },
        weightkg: 51,
        abilities: { 0: 'Sturdy' }
    },
    Sawsbuck: {
        types: ['Normal', 'Grass'],
        bs: { hp: 80, at: 100, df: 70, sa: 60, sd: 70, sp: 95 },
        weightkg: 92.5,
        abilities: { 0: 'Chlorophyll' }
    },
    Scolipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        weightkg: 200.5,
        abilities: { 0: 'Poison Point' }
    },
    Scrafty: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        weightkg: 30,
        abilities: { 0: 'Shed Skin' }
    },
    Scraggy: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Scratchet: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 55, at: 85, df: 80, sa: 20, sd: 70, sp: 40 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Scrappy' }
    },
    Seismitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 105, at: 85, df: 75, sa: 85, sd: 75, sp: 74 },
        weightkg: 62,
        abilities: { 0: 'Swift Swim' }
    },
    Serperior: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        weightkg: 63,
        abilities: { 0: 'Overgrow' }
    },
    Servine: {
        types: ['Grass'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Sewaddle: {
        types: ['Bug', 'Grass'],
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Shelmet: {
        types: ['Bug'],
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        weightkg: 7.7,
        nfe: true,
        abilities: { 0: 'Hydration' }
    },
    Sigilyph: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 72, at: 58, df: 80, sa: 103, sd: 80, sp: 97 },
        weightkg: 14,
        abilities: { 0: 'Wonder Skin' }
    },
    Simipour: {
        types: ['Water'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 29,
        abilities: { 0: 'Gluttony' }
    },
    Simisage: {
        types: ['Grass'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 30.5,
        abilities: { 0: 'Gluttony' }
    },
    Simisear: {
        types: ['Fire'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 28,
        abilities: { 0: 'Gluttony' }
    },
    Snivy: {
        types: ['Grass'],
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        weightkg: 8.1,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Solosis: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Stoutland: {
        types: ['Normal'],
        bs: { hp: 85, at: 100, df: 90, sa: 45, sd: 90, sp: 80 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Stunfisk: {
        types: ['Ground', 'Electric'],
        bs: { hp: 109, at: 66, df: 84, sa: 81, sd: 99, sp: 32 },
        weightkg: 11,
        abilities: { 0: 'Static' }
    },
    Swadloon: {
        types: ['Bug', 'Grass'],
        bs: { hp: 55, at: 63, df: 90, sa: 50, sd: 80, sp: 42 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Swanna: {
        types: ['Water', 'Flying'],
        bs: { hp: 75, at: 87, df: 63, sa: 87, sd: 63, sp: 98 },
        weightkg: 24.2,
        abilities: { 0: 'Keen Eye' }
    },
    Swoobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 67, at: 57, df: 55, sa: 77, sd: 55, sp: 114 },
        weightkg: 10.5,
        abilities: { 0: 'Unaware' }
    },
    Tepig: {
        types: ['Fire'],
        bs: { hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45 },
        weightkg: 9.9,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Terrakion: {
        types: ['Rock', 'Fighting'],
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        weightkg: 260,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Throh: {
        types: ['Fighting'],
        bs: { hp: 120, at: 100, df: 85, sa: 30, sd: 85, sp: 45 },
        weightkg: 55.5,
        abilities: { 0: 'Guts' }
    },
    Thundurus: {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Thundurus-Therian']
    },
    'Thundurus-Therian': {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        weightkg: 61,
        abilities: { 0: 'Volt Absorb' },
        baseSpecies: 'Thundurus'
    },
    Timburr: {
        types: ['Fighting'],
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Tirtouga: {
        types: ['Water', 'Rock'],
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        weightkg: 16.5,
        nfe: true,
        abilities: { 0: 'Solid Rock' }
    },
    Tomohawk: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 105, at: 60, df: 90, sa: 115, sd: 80, sp: 85 },
        weightkg: 37.2,
        abilities: { 0: 'Intimidate' }
    },
    Tornadus: {
        types: ['Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 63,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Tornadus-Therian']
    },
    'Tornadus-Therian': {
        types: ['Flying'],
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Regenerator' },
        baseSpecies: 'Tornadus'
    },
    Tranquill: {
        types: ['Normal', 'Flying'],
        bs: { hp: 62, at: 77, df: 62, sa: 50, sd: 42, sp: 65 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Trubbish: {
        types: ['Poison'],
        bs: { hp: 50, at: 50, df: 62, sa: 40, sd: 62, sp: 65 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Tympole: {
        types: ['Water'],
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Tynamo: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 45, sd: 40, sp: 60 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Unfezant: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 105, df: 80, sa: 65, sd: 55, sp: 93 },
        weightkg: 29,
        abilities: { 0: 'Big Pecks' }
    },
    Vanillish: {
        types: ['Ice'],
        bs: { hp: 51, at: 65, df: 65, sa: 80, sd: 75, sp: 59 },
        weightkg: 41,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanillite: {
        types: ['Ice'],
        bs: { hp: 36, at: 50, df: 50, sa: 65, sd: 60, sp: 44 },
        weightkg: 5.7,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanilluxe: {
        types: ['Ice'],
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 79 },
        weightkg: 57.5,
        abilities: { 0: 'Ice Body' }
    },
    Venipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        weightkg: 5.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Victini: {
        types: ['Psychic', 'Fire'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 4,
        abilities: { 0: 'Victory Star' },
        gender: 'N'
    },
    Virizion: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        weightkg: 200,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Volcarona: {
        types: ['Bug', 'Fire'],
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        weightkg: 46,
        abilities: { 0: 'Flame Body' }
    },
    Vullaby: {
        types: ['Dark', 'Flying'],
        bs: { hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Watchog: {
        types: ['Normal'],
        bs: { hp: 60, at: 85, df: 69, sa: 60, sd: 69, sp: 77 },
        weightkg: 27,
        abilities: { 0: 'Illuminate' }
    },
    Whimsicott: {
        types: ['Grass'],
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 116 },
        weightkg: 6.6,
        abilities: { 0: 'Prankster' }
    },
    Whirlipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        weightkg: 58.5,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Woobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 55, at: 45, df: 43, sa: 55, sd: 43, sp: 72 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Yamask: {
        types: ['Ghost'],
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Mummy' },
        nfe: true
    },
    Zebstrika: {
        types: ['Electric'],
        bs: { hp: 75, at: 100, df: 63, sa: 80, sd: 63, sp: 116 },
        weightkg: 79.5,
        abilities: { 0: 'Lightning Rod' }
    },
    Zekrom: {
        types: ['Dragon', 'Electric'],
        bs: { hp: 100, at: 150, df: 120, sa: 120, sd: 100, sp: 90 },
        weightkg: 345,
        abilities: { 0: 'Teravolt' },
        gender: 'N'
    },
    Zoroark: {
        types: ['Dark'],
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        weightkg: 81.1,
        abilities: { 0: 'Illusion' }
    },
    Zorua: {
        types: ['Dark'],
        bs: { hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        nfe: true
    },
    Zweilous: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        weightkg: 50,
        abilities: { 0: 'Hustle' },
        nfe: true
    }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Pichu'].otherFormes;
delete BW['Pichu-Spiky-eared'];
var XY_PATCH = {
    Alakazam: { bs: { sd: 95 } },
    Ampharos: { bs: { df: 85 } },
    Azumarill: { bs: { sa: 60 } },
    Beautifly: { bs: { sa: 100 } },
    Beedrill: { bs: { at: 90 } },
    Bellossom: { bs: { df: 95 } },
    Butterfree: { bs: { sa: 90 } },
    Clefable: { bs: { sa: 95 } },
    Exploud: { bs: { sd: 73 } },
    Gigalith: { bs: { sd: 80 } },
    Golem: { bs: { at: 120 } },
    Jumpluff: { bs: { sd: 95 } },
    Krookodile: { bs: { df: 80 } },
    Leavanny: { bs: { sd: 80 } },
    Nidoking: { bs: { at: 102 } },
    Nidoqueen: { bs: { at: 92 } },
    Pidgeot: { bs: { sp: 101 } },
    Pikachu: {
        bs: { df: 40, sd: 50 }
    },
    Poliwrath: { bs: { at: 95 } },
    Raichu: { bs: { sp: 110 } },
    Roserade: { bs: { df: 65 } },
    Scolipede: { bs: { at: 100 } },
    Seismitoad: { bs: { at: 95 } },
    Staraptor: { bs: { sd: 60 } },
    Stoutland: { bs: { at: 110 } },
    Unfezant: { bs: { at: 115 } },
    Victreebel: { bs: { sd: 70 } },
    Vileplume: { bs: { sa: 110 } },
    Wigglytuff: { bs: { sa: 85 } }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
XY['Arceus'].otherFormes.push('Arceus-Fairy');
XY['Arceus'].otherFormes.sort();
var SM_PATCH = {
    Arbok: { bs: { at: 95 } },
    Ariados: { bs: { sd: 70 } },
    Beartic: { bs: { at: 130 } },
    Chimecho: { bs: { hp: 75, df: 80, sd: 90 } },
    Corsola: { bs: { hp: 65, df: 95, sd: 95 } },
    Crustle: { bs: { at: 105 } },
    Cryogonal: { bs: { hp: 80, df: 50 } },
    Delcatty: { bs: { sp: 90 } },
    Dodrio: { bs: { sp: 110 } },
    Dugtrio: { bs: { at: 100 } },
    Electrode: { bs: { sp: 150 } },
    Exeggutor: { bs: { sd: 75 } },
    'Farfetch\u2019d': { bs: { at: 90 } },
    Gengar: { abilities: { 0: 'Cursed Body' } },
    Illumise: { bs: { df: 75, sd: 85 } },
    Lunatone: { bs: { hp: 90 } },
    Magcargo: { bs: { hp: 60, sa: 90 } },
    Mantine: { bs: { hp: 85 } },
    Masquerain: { bs: { sa: 100, sp: 80 } },
    Noctowl: { bs: { sa: 86 } },
    Pelipper: { bs: { sa: 95 } },
    Qwilfish: { bs: { df: 85 } },
    Solrock: { bs: { hp: 90 } },
    Swellow: { bs: { sa: 75 } },
    Volbeat: { bs: { df: 75, sd: 85 } },
    Woobat: { bs: { hp: 65 } }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
delete SM['Pikachu-Cosplay'];
delete SM['Pikachu-Rock-Star'];
delete SM['Pikachu-Belle'];
delete SM['Pikachu-PhD'];
delete SM['Pikachu-Pop-Star'];
delete SM['Pikachu-Libre'];
var SS_PATCH = {};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var PLA_PATCH = {};
var SV_PATCH = {};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map