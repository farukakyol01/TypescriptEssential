class Araba {
    private brand: string;
    private kasaTipi: string;
  
    constructor(brand: string, kasaTipi: string) {
      this.brand = brand;
      this.kasaTipi = kasaTipi;
    }
  
    get getBrand() {
      return this.brand;
    }
  
    set setBrand(brand: string) {
      this.brand = brand;
    }
  
    get getKasaTipi() {
      return this.kasaTipi;
    }
  
    set setKasaTipi(kasaTipi: string) {
      this.brand = kasaTipi;
    }
  }
  
  class Audi extends Araba {
    private agirlik: number;
    constructor(kasaTipi: string, agirlik: number) {
      super("audi", kasaTipi);
      this.agirlik = agirlik;
    }
  
    get getAgirlik() {
      return this.agirlik;
    }
  }
  class Renoult extends Araba {
    private static instance: Renoult;
    private renk: number;
    private constructor(kasaTipi: string, renk: number) {
      super("reno", kasaTipi);
      this.renk = renk;
    }
  
    get getRenk() {
      return this.renk;
    }
  
    static getInstance() {
      if (Renoult.instance) {
        return this.instance;
      }
      this.instance = new Renoult("SEDAN", 34);
      return this.instance; //
    }
  }
  
  //const renault = new Renoult("HB", 3);
  const renault = Renoult.getInstance();
  console.log(renault.getRenk);
  const renault2 = Renoult.getInstance();
  console.log(renault2.getRenk);