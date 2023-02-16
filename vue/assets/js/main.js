const root={
    data(){
        return{
            message:'Hello',
            message1:'<i>Hello</i>',
            message2:'<i>Hello</i>',
            appeal:'vue'
        }
    }
};
let app =Vue.createApp(root).mount("#app");
app.message="Привет";
app.appeal="Вью";
// первая часть
// let app =Vue.createApp({
//     data(){
//         return{
//             book: null,
//             author: null
//         }
//     },
//     beforeCreate(){
//         book=JSON.parse(bookJSON);
//         author=JSON.parse(authorJSON);
//     },
//     created(){
//         this.book=book;
//         this.author=author;
//     }
// }).mount("#app");