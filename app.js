const PersonDetail = [
    {
        name:"Will SMith",
        img:"./assests/will smith.jpg",
        desination: "ACTOR",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe facere blanditiis qui,assumenda at distinctio ipsa commodi vel possimus ea inventore totam maiores nisi ullam obcaecati nostrum et minima eum quam quasi quidem. Hic eos sequi incidunt dolorum quia animi numquam, voluptates autem consectetur veniam deserunt delectus provident nobis!",
    },
    {
        name: "Smith",
        img: "./assests/boy 1.jpg",
        desination: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe facere blanditiis qui,assumenda at distinctio ipsa commodi vel possimus ea inventore totam maiores nisi ullam obcaecati nostrum et minima eum quam quasi quidem. Hic eos sequi incidunt dolorum quia animi numquam, voluptates autem consectetur veniam deserunt delectus provident nobis!",
    },
    {
        name: "John Wick",
        img: "./assests/boy 2.webp",
        desination: "Mafia",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe facere blanditiis qui,assumenda at distinctio ipsa commodi vel possimus ea inventore totam maiores nisi ullam obcaecati nostrum et minima eum quam quasi quidem. Hic eos sequi incidunt dolorum quia animi numquam, voluptates autem consectetur veniam deserunt delectus provident nobis!",
    },
    {
        img: "./assests/boy3.jpg",
        name: "Jorden",
        desination: "Player",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe facere blanditiis qui,assumenda at distinctio ipsa commodi vel possimus ea inventore totam maiores nisi ullam obcaecati nostrum et minima eum quam quasi quidem. Hic eos sequi incidunt dolorum quia animi numquam, voluptates autem consectetur veniam deserunt delectus provident nobis!",
    },
    {
        img: "./assests/boy 4.jpg",
        name: "William",
        desination: "Husband",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe facere blanditiis qui,assumenda at distinctio ipsa commodi vel possimus ea inventore totam maiores nisi ullam obcaecati nostrum et minima eum quam quasi quidem. Hic eos sequi incidunt dolorum quia animi numquam, voluptates autem consectetur veniam deserunt delectus provident nobis!",
    },
];
const UserName = document.getElementById("Name");
const UserImage = document.getElementById("img");
const UserDesinaton = document.getElementById("desination");
const UserReview = document.getElementById("review");
     

 let userCurrentIndex = 0;

 function setup() {
     UserName.textContent = PersonDetail[userCurrentIndex].name;
     UserImage.src = PersonDetail[userCurrentIndex].img;
     UserDesinaton.textContent = PersonDetail[userCurrentIndex].desination;
     UserReview.textContent = PersonDetail [ userCurrentIndex].review;
 }
 setup();

 function next() {
    userCurrentIndex++;
    if(userCurrentIndex >= PersonDetail.length)
{ userCurrentIndex = 0 ;
    }
    setup();

    
 }

 function previous() {
    userCurrentIndex--;
    if(userCurrentIndex < 0){
        userCurrentIndex = PersonDetail.length -1
    }
    setup();
    
 }

