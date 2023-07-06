(() => {
    class Avenger {
        // private name: string = "Scott no se que"
        // public  team: string
        // public  realName?: string
        static avgAge: number 
        static getAveage(){
            return this.name
        }

        constructor(
            private name: string, 
            private team: string,  
            public r?: string,  
            ...rest: (number | string)[]
            ){
        }
        public bio(){
            return`${this.name } ${ this.team}`
        }
    }

    const antman: Avenger = new Avenger("takemichi", " tokio manji","scott", 123)
})();
