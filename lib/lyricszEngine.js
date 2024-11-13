export default class Engine{

    constructor(canvas, width, height){
        this.canvas = canvas || document.createElement("canvas");
        this.width = this.canvas.width = width || 600;
        this.height = this.canvas.height = height || 800;
        this.style = 0x00ff00
        this.gameSettings()
    }

    vec3(x, y, z){
        return new Vec3(x, y, z)
    }

    vec4(x, y, z, a){
        return new Vec4(x, y, z, a)
    }

    randomColor(type){

    }

    gameSettings(){
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = this.style;
        this.screenObjects = [];
        if(!document.getElementById("lyricsEngine")){
            document.body.appendChild(this.canvas);
        }
    }
    fill(fillStyle){
        this.style = fillStyle
        this.ctx.fillStyle = fillStyle;
    }

    addSquare(a){
        this.screenObjects.push(new Square(a));
        const main = this.screenObjects[this.screenObjects.length - 1];
        this.ctx.fillRect(main.x, main.y, main.width, main.height);
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

class Vec3{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.type = "Vec3"
    }
    add(a, x){
        checkElement(a, "Number")
        if(a.type === "Vec3" || typeof a === "object" && a.length == 3){
            console.log(this.x, this.y, this.z, a.x, a.y, a.z)
            this.x += a.x || a[0] || 0;
            this.y += a.y || a[1] || 0;
            this.z += a.z || a[2] || 0;
            if(x !== 0)
                return 
            else 
                return this
        }
        console.error("Lyricsz Engine: Type Error")
        console.warn("Do not try addition of a Vector 3 Object with a non-vector 3 Object.")
    }
    subtract(a, x){
        if(a.type === "Vec3" || typeof a === "object" && a.length == 3){
            this.x -= a.x || a[0] || 0;
            this.y -= a.y || a[1] || 0;
            this.z -= a.z || a[2] || 0;
            if(x !== 0)
                return 
            else 
                return this
        }
        console.error("Lyricsz Engine: Type Error")
        console.warn("Do not try addition of a Vector 3 Object with a non-vector 3 Object.")
    }
}

class Vec4{
    constructor(x, y, z, a){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = a;
        this.type = "Vec4"
    }
    add(a, x){
        if(a.type === "Vec4" || typeof a === "object" && a.length == 4){
            this.x += a.x || a[0];
            this.y += a.y || a[1];
            this.z += a.z || a[2];
            this.a += a.a || a[3];
            if(x !== 0)
                return 
            else 
                return this
        }
        console.error("Lyricsz Engine: Type Error");
        console.warn("Do not try addition of a Vector 4 Object with a non-vector 4 Object.");
    }
}

class Square{
    constructor(a){
        if(!a.type == "Vec4" || !a.type == 'Vec3'){
            return console.error("A Vector 4 or Vector 3 is required!")
        }
        this.a = a;
        this.x = this.a.x;
        this.y = this.a.y;
        this.width = this.a.z;
        this.height = this.a.a || this.a.z;
    }

}

function checkElement(a, type1){
    let type = type1 || "Number";
    a.type ? 
    (a.type == "Vec3" && typeof a.x == "number" && typeof a.y == "number" && typeof a.z == "number")? 
    null:console.error("Type Must be", type + " on", a.type) :
    a.forEach(element => {
        if(typeof element == type.toLowerCase()){

        }
        else {
            console.error("This type is not a type of ", type)
        }
    });
}