module.exports = {
    logName(){
        return 'Name'
    },
    fib(n){
        let n1 = 0, n2 = 1, nextTerm;

        console.log('Fibonacci Series:');

        for (let i = 1; i <= n; i++) {
            console.log(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return Math.floor(n1)
    },
    async countTo10(){
        let arr = []

        for (let i = 1; i <=10 ; i++) {
           await  new Promise(resolve => setTimeout(()=> {
                arr.push(i)
                resolve()
            }), 2000)

        }

        return arr
    }
}