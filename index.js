
//Sintaxe da Arrow Function
() => {

}

const test = () => {
    console.log("Arrow function.")
}
test()

//sem arrow function
function myFunc(){
    this.a = 'hello'

    console.log(this.a)

    setInterval(function(){
        console.log(this.a)
    }, 1000)
}

//com arrow function sim
myFunc()
function func(){
    this.a = 'hello'

    console.log(this.a)

    setInterval(() => {
        console.log(this.a)
    }, 1000)
}
func()