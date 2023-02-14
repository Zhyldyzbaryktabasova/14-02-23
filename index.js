let example1 = { };
let joldosh = { 
  name : "Joldosh" ,
   age : 22,
   isEmployed : false,
   sayHello : function( ){
     console.log("Hello, I'm " + this.name);
   },
   sayBye : function( ) {
    console.log("Bye");
   },
   myAge : function( ) {
    console.log("I'm " + this.age + "years old");
   }
  };

  let example2 = { };
  let jyldyz = {
    name : "Jyldyz",
    surname : "Baryktabasova",
    firstname : "Hanna",
    lastname : "Julili",
    IsEmployed : true,
    sayHello : function ( ) {
      console.log("Hello, I'm " + this.name);
    },
    sayBye : function( ) {
      console.log("Bye");
    }

  };

  // View, edit, add
  console.log(joldosh.name);
  joldosh.age = 23;
  joldosh.favouriteBooks = ["Harry Potter", "Harry Potter 2"];


  //View, edit, add4
  console.log(jyldyz.firstname);
  jyldyz.firstname = "Heli";
  console.log(jyldyz.firstname);


  // delete
  delete joldosh.favouriteBooks;

  // delete 
  delete jyldyz.favouriteBooks;

joldosh.sayHello( );
joldosh.name = "Jol";
joldosh.sayHello( );
joldosh.myAge ( );


jyldyz.sayHello( );
jyldyz.sayBye( );


let example = {
   number : 0,
   inc : function() {
    this.number = this.number + 1;
   },
   dcr :function ( ) {
    this.number = this.number -1;
   },
   add : function(num) {
     this.number = this.number + num;
   },
   subtract : function (num) {
    this.number = this.number - num;
   },
   print : function ( ) {
     console.log (this.number);
   }

}


example.print( );
example.inc( );
example.inc( );
example.print( );
example.add(5);
example.subtract (4);
example.print( );

