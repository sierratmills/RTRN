export class User{
      protected firstname: String;
      protected lastname: String;
      protected name: String;
      protected username: String;
      protected email: String;
      protected image: String;
    protected payment: String;
  
      constructor(n:String, un:String, em: String, im:String){
          this.name = n;
          this.username = un;
          this.email = em;
          this.image = im;
      }
  
      getName():String{
          return this.name;
      }
  
      getUsername():String{
          return this.username;
      }
  
      getEmail():String{
          return this.email;
      }
  
      getImage():String{
          return this.image;
      }
  
  }
