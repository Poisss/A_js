let app =Vue.createApp({
   data(){
        return{
            name: "Артём",
            last_name: "Аверин",
            O_name: "Александрович",
            grua: "Испв-20-1",
            x: 24.5,
            y: 16,
            arr:[1,2,3,4],
            url:"http://google.com",
            src:"https://chakiris.club/uploads/posts/2022-11/1669092201_chakiris-club-p-krasivaya-temnaya-kartinka-pinterest-1.jpg",
            alt:"нету",
            title1:"картинка",
            counter1:0,
            counter2:0,
            counter:0,
            title:'Счетчик',
            login: null,
            text:null,
            cost:150,
            amount:1,
            order:null,
            dynamicIMG:['https://www.belpressa.ru/media/filer_public_thumbnails/filer_public/58/4f/584f45f5-ea60-4dbb-ac65-4b422679f49e/hamster-690108_960_720.jpg__750x415_q75_crop-True_subsampling-2_upscale.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg','https://gomeovet.ru/images/articles/homyak1.jpg'],
            user:null
        }
    },
    beforeCreate(){
        order=orders;
        user=user;
    },
    created(){
        this.order=order;
        this.user=user;
    },
   methods:{
        sum(x,y){
            return this.x + this.y;
        },
        name1(name,O_name,last_name){
            return name.toUpperCase()+' '+O_name.toUpperCase()+' '+last_name.toUpperCase()
        },
        data_today(){
            x=new Date();
            d=x.getDate();
            m=x.getMonth()+1;
            y=x.getFullYear();
            return d+'.'+m+'.'+y
        },
        data_tomorrow(){
            x=new Date()
            x.setDate(x.getDate()+1);
            d=x.getDate();
            m=x.getMonth()+1;
            y=x.getFullYear();
            return d+'.'+m+'.'+y
        },
        sum_arr(x){
            sum=0;
            for(i=0;i<x.length;i++){
                sum +=x[i];
            }
            return sum
        },
        addCount(){
            this.counter1++
            
        },
        mouseEnter(event){
            event.target.style.color='red'
        },
        addCounter(num,str,event){
            this.counter+=num;
            this.title=str;
            if(num===2){
                event.target.style.color='#007bff'
            }else if(num===5){
                event.target.style.color='tomato'
            }
        },
        showAlert(login){
            return alert(login);
        },
        showDate(){
            return alert(this.data_today())
        },
        addText1(){
            this.text='Кнопка 1';
        },
        addText2(){
            this.text='Кнопка 2';
        },
        addCost(){
            this.cost++
            
        },
        addAmount(){
            this.amount++
            
        }

   } 
}).mount("#app");