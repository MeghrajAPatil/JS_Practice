    const a = {
        name : "Mac",
        div : "D",
        SRN : "027",
        Place : "Belgaum"
    }
    console.log(a["name"]);
    a.div = "A"
    console.log(a)
    a.greeting = function(){
        return `Hello JS user ${this.name}`
    }
    console.log(a.greeting())