(() => {
    interface Xmen{
        name: string,
        realName: string,
        mutantPower(id:string): string
    }

    interface Human{
        age: number
    }

    class Mutant implements Xmen, Human {
        public name: string;
        public realName: string;
        mutantPower(id: string): string {
            return this.name + " " + this.realName
        }
        age: number;

        constructor(n: string,r:string,a: number ){
            this.name = n,
            this.realName = r,
            this.age = a
        }

    }
})();
