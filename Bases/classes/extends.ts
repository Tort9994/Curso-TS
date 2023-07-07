(() => {
    class Avenger {
        constructor(public name: string, public realName: string){
            console.log("Constructor Avenger llamado")
        }
        protected getFullName(): string{
            return `${this.name} ${this.realName}`
        }
    }

    class XmenAvenger extends Avenger {
        constructor(
            name: string, 
            realName: string, 
            villian: boolean
            ) {
            super(name, realName)
        }
        getFullNameFromXmen() {
            super.getFullName()
        }

        
        public get fullName() : string {
            return `${this.name} - ${this.realName}`
        }

        
        public set setFullName(v : string ) {

            if (this.name.length < 3) {
                throw new Error ('El nombre debe de ser mayor a tres letres')
            }
            this.name = v;
        }
        
        
   }


    const Wolverine = new XmenAvenger("", "", false)
  
})();
