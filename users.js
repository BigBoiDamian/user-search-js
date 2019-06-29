var users = [
{
  name: "damian",
  joinYear: 2019,
  numVid: 39,

    text: "",
  get bannerText() {
    this.text = "Hello! My name is " + this.name + ". I joined in the year " + this.joinYear + " and I have " + this.numVid + " videos.";
  return this.text;
},
    set bannerText(val) {
    this.text = " ' " + val + " ' "    ;
    return this.text;
    }
},
{
  name: "monika",
  joinYear: 2020,
  numVid: 44,
    text: "",
    get bannerText() {
      this.text = "Hello! My name is " + this.name + ". I joined in the year " + this.joinYear + " and I have " + this.numVid + " videos.";
    return this.text;
  },

    set bannerText(val) {
  this.text = "'" + val + "'"    ;
  }
},
{
  name: "leaf",
  joinYear: 2018,
  numVid: 34,
    text: "",
    get bannerText() {
      this.text = "Hello! My name is " + this.name + ". I joined in the year " + this.joinYear + " and I have " + this.numVid + " videos.";
    return this.text;
  },
    set _bannerText(val) {
  this.text = "'" + val + "'"    ;
  }
},
{
  name: "looksy",
  joinYear: 2018,
  numVid: 12,
    text: "",
    get bannerText() {
      this.text = "Hello! My name is " + this.name + ". I joined in the year " + this.joinYear + " and I have " + this.numVid + " videos.";
    return this.text;
  },
  set _bannerText(val) {
  this.text = "'" + val + "'"    ;
  }
}

];
    // class Users {
    // constructor(name, joinYear, numVid) {
    // this.name = name;
    // this.joinYear = joinYear;
    // this.numVid = numVid;
    //
    // }
    // }
    // new Users("damian", 2019, 39 );
    // new Users( "monika" , 2020 , 44 );
    // new Users( "leaf" , 2018 , 34 );
    // new Users( "looksy" , 2018 , 12 );
