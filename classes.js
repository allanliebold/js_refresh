// Classes and Inheritance
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }  
  // static methods can be called on the class itself, not on instances of the class
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}  

class Janitor extends HospitalEmployee {
  constructor(name, equipment) {
    
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    // super takes the name property from the inherited HospitalEmployee class
    super(name);
    this._certifications = certifications;
  }   
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
