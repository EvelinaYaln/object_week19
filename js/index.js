function bike() {
    console.log(this.name);
}

let name = 'ninja';
let obj1 = {
    name = 'pomidor',
    bike = 'bike'
}
let obj2 = {
    name = 'site',
    bike = 'bike'
}

bike();
obj1.bike();
obj2.bike();