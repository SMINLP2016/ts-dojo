function taille(chaine: string) : number{
  return chaine.length;
}

let chaine : string = "Bonjour";
console.log(taille(chaine));

function hello(prenom:string,nom:string,age:number):string{
  /*if(age>=18){
    return "Bonjour " + prenom + " " + nom + " tu as " + age + " et tu es majeur"
  }else{
    return "Bonjour " + prenom + " " + nom + " tu as " + age + " et tu es mineur"
  }*/
  return "Bonjour " + prenom + " " + nom + " tu as " + age + " et tu es " + (age >= 18 ? "majeur" : "mineur");
}

console.log(hello('john','doe',14));
console.log(hello('Paul','Bismuth',18));
console.log(hello('justin','bieber',18));

function superior(val: number) : boolean
{
  return val > 10;
    /*if(val > 10)
    {
      return true;
    }
    else {
      return false;
    }*/
}

console.log(superior(8))
console.log(superior(10))
console.log(superior(100))

function returnValue(array: Array<string>) : void
{
  for (let i in array) console.log(i + " : " + array[i]);
}

returnValue(['Vercors', 'Chartreuse', 'Belledone']);

abstract class Vehicule {
  public constructor(public nbRoues:number,
                      public vitesseMax:number,
                      public marque:string){}

  public TempsPourParcourir10km():number{
    return (Math.round(10/this.vitesseMax*60)*100) /100;
  }
}

  class Velo extends Vehicule {
    public constructor(vitesseMax:number,
                        marque:string){
                          super(2, vitesseMax, marque);
                        }

  }

  class Voiture extends Vehicule {
    public constructor(vitesseMax:number,
                        marque:string){
                          super(4, vitesseMax, marque);
                        }

  }

let voiture2 = new Voiture(120, 'Peugeot');
console.log(voiture2.TempsPourParcourir10km());

let velo = new Velo(60, 'Lapierre');
console.log(velo.TempsPourParcourir10km());

let voiture = new Voiture(180, 'Toyota');
console.log(voiture.TempsPourParcourir10km());

class collectionneur  {

    collection:Array<Voiture>;
    nom : string;

  public constructor( Voitures:Array<Voiture>, name:string) {
      this.collection = Voitures;
      this.nom = name;
  }

  listCollection() {
    for (let voiture of this.collection) {
      console.log(voiture.marque + " : " + voiture.vitesseMax)
    }
  }

  sortBySpeed() {
    this.collection.sort(function (a, b) {
      if (a.vitesseMax > b.vitesseMax )
        return 1;
      if (a.vitesseMax < b.vitesseMax)
        return -1;
      // a doit être égale à b
      return 0;
    });
  }

}

let jean:collectionneur = new collectionneur([voiture, voiture2], "jean");
console.log(jean.nom);


jean.listCollection();
jean.sortBySpeed();
jean.listCollection();
