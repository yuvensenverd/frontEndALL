class MahlukHidup {
    constructor(a,b){
        this.nama = a;
        this.umur = b;
    }
}

class Manusia extends MahlukHidup{
    constructor(a,b,c){
        super(a,b)
        this.pekerjaan = c
    }
}

class Tumbuhan extends MahlukHidup{
    constructor(a,c){
        super(a,c)
        this.akar = c
    }
}

var a = new Tumbuhan ("petal", 2, "asd")
console.log(a)