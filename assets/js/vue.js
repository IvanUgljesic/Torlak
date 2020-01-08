var v=new Vue({
  el:"#app", 
  data: function(){
  return{
    Vesti:[],
    toggleClass:'',
    showText: false,
    Vest:{
      Naslov:'',
      vesti_text:'',
      datum:''
    }
  };
},
methods:{
  postVest(){
    axios.post('API/addVest', this.Vest);
    window.location.reload();
    confirm("Uspesna uneta vest!");
    },
  prikaziVesti(){
    axios.get("API/vesti").then((response)=>{
    this.Vesti=response.data.Vesti.reverse();
    });
    window.location.href = '#vesti';
  },
  klubLi(event){
    this.active = !active;
    console.log(event.$ref);
  },
  clearFilter(id){
    console.log(this.Vesti);
    this.showText=true;
  }
},
filters:{
  textReduce(value){
    return value.slice(0,160);
  },
  datumFormat(value){
    return value.slice(8,10)+'.'+value.slice(5,7)+'.'+value.slice(0,4);
  }
},
beforeCreate(){
}
});

var v1=new Vue({
  el:"#login", 
  data: function(){
  return{
    user:'',
    pass:'',
    valid:''
    };
},
methods:{
  loginAut(){
    axios.get("API/pas", {params: {user_name: this.user,pass:this.pass}}).then((response)=>{
    this.valid=response.data.valid;
    if(this.valid){
    $('#modalLoginForm').modal('hide');
    }
    });
  }
}
});