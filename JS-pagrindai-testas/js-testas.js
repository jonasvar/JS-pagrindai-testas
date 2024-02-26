/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log(`Pirma užduotis:`)

function pinigai(euras){
    let dolerisKursas = 1.08
    let doleris = dolerisKursas * euras
    return doleris
}
let eurasSuma = Math.ceil(Math.random() * 1000) 
let doleris = pinigai(eurasSuma)
console.log(`${eurasSuma} eurus pavertus į dolerius gauname: ${doleris.toFixed(2)} $.`)

console.log(``)
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log(`Antra užduotis:`)

function pinigai(doleris){
    let eurasKursas = 0.92
    let euras = eurasKursas * doleris
    return euras
}
let dolerisSuma = Math.ceil(Math.random() * 1000) 
let euras = pinigai(dolerisSuma)
console.log(`${dolerisSuma} dolerius pavertus į eurus gauname: ${euras.toFixed(2)} eur.`)

console.log(``)
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log(`Trečia užduotis:`)

function zmogusBMI(svoris, ugis){
    return svoris / ugis**2
}
   function koksBMI(bmi){
    if (bmi > 25){
        return 'Virssvoris'
    } else if(18.5 <= bmi && bmi <= 25){
        return 'Normalus svoris'
    } else {
        return 'Per mazas svoris'
    }
}

let svoris = 80 //kg.
let ugis = 1.8  //m.
let bmi = zmogusBMI(svoris, ugis)
let jusuBMIrezultatas = koksBMI(bmi)
console.log(`Jūsų BMI ${bmi.toFixed(2)}. BMI rodiklis yra: ${jusuBMIrezultatas}.`)

console.log(``)
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log(`Ketvirta užduotis:`)

function metai(mm){
    let sekundes = mm * 365 * 24 * 60 * 60
    let minutes = mm * 365 * 24 * 60 
    let valandos = mm * 365 * 24
    let dienos = mm * 365 

    return {
        sekundes,
        minutes,
        valandos,
        dienos
    }
}

let amzius = 28
let laikas = metai(amzius)
console.log(`${amzius} metai turi: ${laikas.sekundes} sekundžiu, ${laikas.minutes} minučių, ${laikas.valandos} valandu, ${laikas.dienos} dienu.`)

console.log(``)
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log(`Penkta užduotis:`)

function temp(celcijai){
    let f = 33.8
    let farengeitas = f * celcijai
    return farengeitas                           
}
let laipsnis = 2
let farengeitas = temp(laipsnis)
console.log(`${laipsnis} celcijus pavertus į farengetą gauname ${farengeitas.toFixed(1)} farengeitų.`) 

function temp1(farengeitas1){
    // let c = -17.2
    // let celsijus = c * farengeitas1
    return (farengeitas1 - 32) * 1.8    //celsijus                           
}
let laipsnis1 = 17.8                                                                 //Su farengeitais padaryta ne iki galo. 
let celcijus = temp1(laipsnis1)
console.log(`${laipsnis1} farengeitu pavertus į celcijus gauname ${celcijus.toFixed(1)} celciju.`)

console.log(``)
// console.log(farengeitas)


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log(`Šešta užduotis:`)

let skiaciai = []
for(let i = 1; i <= 10; i++){
    skiaciai.push(i)
}
let sk = skiaciai.join('-')
console.log(sk)

console.log(``)
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log(`Septinta užduotis:`)

let zenklas = ''
for(let i = 1; i <= 5; i++){
    zenklas += '*'
    console.log(zenklas)
} 

console.log(``)
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log(`Aštunta užduotis:`)

let dabartis = new Date()

let kaleduData = new Date(dabartis.getFullYear(), 11, 25)

let skirtumas = kaleduData.getTime() - dabartis.getTime()

console.log(skirtumas)     //Nežinau kaip paversti atsakymą dienomis.

console.log(``)
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log(`Devinta užduotis:`)

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas']
console.log(`${vardai}`)
console.log(`${vardai[0]}+${vardai[1]}+${vardai[2]}+${vardai[3]}`)

console.log(``)
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

