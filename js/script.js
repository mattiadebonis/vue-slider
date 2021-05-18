var app = new Vue(
    {
        el: "#root",
        data:{
            images:[
                "https://www.avvenire.it/c/2020/PublishingImages/dcdd13fb72db4abd9962b774d2a08baa/SF99000000_69089206.jpg?width=1024",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgitAWx88ki8gXz-tJztEvuiWmSuFjMfydCwuLE0ed8TQGjMwdEF2TYPo1ZpxdsxcfJc0&usqp=CAU"
            ],
            imageIndex: 0
        },
        methods: {
            nextImage: function(){
                this.imageIndex++;
                if(this.imageIndex == this.images.length){
                    this.imageIndex = 0;
                }
            },
            prevImage: function(){
                this.imageIndex--;
                if(this.imageIndex == -1){
                    this.imageIndex = this.images.length -1;
                }
            }
        }

    }
);