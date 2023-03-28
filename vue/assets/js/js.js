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
            user:null,
            number: 1,
            isActive: false,
            img:['https://chakiris.club/uploads/posts/2022-11/1669092201_chakiris-club-p-krasivaya-temnaya-kartinka-pinterest-1.jpg','https://gomeovet.ru/images/articles/homyak1.jpg'],
            displayOne:true,
            displayTwo:false,
            formName:'',
            formLastName:'',
            formEmail:'',
            formAge:'',
            blockImg:'',
            element:'',
            isEmpty: false,
            list:['Первый','Второй','Третий'],
            elementMin:'',
            elementMax:'',
            isEmpty2: false,
            list2:['Первый','Второй','Третий'],
            listImg:[
                        {title:1,path:"https://chakiris.club/uploads/posts/2022-11/1669092201_chakiris-club-p-krasivaya-temnaya-kartinka-pinterest-1.jpg"},
                        {title:2,path:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg"},
                        {title:3,path:"https://gomeovet.ru/images/articles/homyak1.jpg"}
                    ],
            listColor1:[
                {color1:"red",img:"https://chakiris.club/uploads/posts/2022-11/1669092201_chakiris-club-p-krasivaya-temnaya-kartinka-pinterest-1.jpg"},
                {color1:"green",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg"},
                {color1:"orange",img:"https://gomeovet.ru/images/articles/homyak1.jpg"}
            ],
            blockImg21:'',
            listCar:[
                {name:'Трава',img:'https://chakiris.club/uploads/posts/2022-11/1669092201_chakiris-club-p-krasivaya-temnaya-kartinka-pinterest-1.jpg',description:'черная трава'},
                {name:'Хомяк 1',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg',description:'Хомяк отдыхает'},
                {name:'Хомяк 2',img:'https://gomeovet.ru/images/articles/homyak1.jpg',description:'Хомяк кушает'}
            ],
            listCarName: '',
            listCarImg:'',
            listCarDescription:''               
        }
    },
    beforeCreate(){
        order=JSON.parse(orders);
        user=JSON.parse(user);
    },
    created(){
        this.order=order;
        this.user=user;  
        this.listCarName=this.listCar[0].name;
        this.listCarImg=this.listCar[0].img;
        this.listCarDescription=this.listCar[0].description;
    },
    mounted(){
        this.$refs.result.style.color="#1dff36";
        this.$refs.result.innerText=`У нас: ${this.number}`;
        this.$refs.displayOne.style.cssText=`
            border: 2px solid black;
            width: 200px;
            padding:10px;
            box-shadow:
                inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(255,255,255),
                0.3em 0.3em 1em rgba(0,0,0,0.3);
        `;
        this.$refs.displayTwo.style.cssText=`
            display:grid;
            grid-template-columns:1fr 1fr;
            border: 2px solid black;
            width: 400px;
            padding:10px;
            box-shadow:
                inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(255,255,255),
                0.3em 0.3em 1em rgba(0,0,0,0.3);
        `;
        this.$refs.showMenu.style.cssText=`
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap:10px;
            
        `;
        this.$refs.showMenu1.style.cssText=`
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap:10px;
            
        `;
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
            
        },
        userOrder(x){
            str='';    
            for(i=0;i<x.length;i++){
                str+=x[i]+'; ';
            }
            return str
        },
        productIf(x,y){   
            str=0;
            for(i=0;i<x.length;i++){
               if(x[i]==y){
                str=1;
               }
            }
            return (str==1)? true:false; 
        },
        productPayment(x,y){
            sum=0;
            for(i=0;i<x.length;i++){
                for(j=0;j<y.length;j++){
                    if(x[i].id==y[j]){
                        sum+=(x[i].price/100)*(100-x[i].discount);
                    }
                }
            }
            return sum
        },
        mouseColor(){
            this.$refs.textback.innerText=`некоторый текст`;
            this.$refs.textback.style.color="#1dff36";
        },
        mouseBack(){
            this.$refs.textback.innerText=`Текст`;
            this.$refs.textback.style.color="black";
        },
        mouseImg(){
            this.$refs.img.src=this.img[1];
        },
        mouseBackImg(){
            this.$refs.img.src=this.img[0];
        },
        listImg1(x){
            this.blockImg=x;
        },
        addElement(){
            
            if(this.element !==''){
                this.list.push(this.element);
                this.element='';
                this.isEmpty=false;
                this.$refs.www.style.border="1px solid black";
            }else{
                this.$refs.www.style.border="4px solid red";
                this.isEmpty=true;
            }
        },
        addElement2(){
            if(this.elementMin !==''&& this.elementMax !==''){
                x=Math.floor(Math.random()*(this.elementMax-this.elementMin)+this.elementMin);
                this.list2.push(x);
                this.isEmpty2=false;
                
            }else{
                this.isEmpty2=true;
                
            }
        },
        dnmImg1(x,y){
            this.blockImg21=y;
            this.$refs.fImg.style.border="5px solid "+x;
        },
        dnmImg211(x,y,z){
            this.listCarName=x;
            this.listCarDescription=y;
            this.listCarImg=z;
        }
   } 
}).mount("#app");
