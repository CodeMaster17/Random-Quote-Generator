const quotes=[
    {
        quote:"What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though",
        author:"― J.D. Salinger, The Catcher in the Rye",
    },
    {
        quote:"A writer is someone for whom writing is more difficult than it is for other people.",
        author:"― Thomas Mann, Essays of Three Decades",
    },
    {
        quote:"“All good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.”",
        author:"― Ernest Hemingway",
    },
    {
        quote:"“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”",
        author:"― G.K. Chesterton, Heretics",

    },
    {
        quote:"“I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.”",
        author:"― Louisa May Alcott, Little Women",
    },
    {
        quote:"“If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.”",
        author:"― Dr Roopleen",
    },
    {
        quote:"“Anybody who has survived his childhood has enough information about life to last him the rest of his days.”",
        author:"― Flannery O'Connor, Mystery and Manners: Occasional Prose",
    }
];

var btn=document.getElementById('btn-add');
var quote=document.getElementById('quoteLine');
var author=document.getElementById('author');
btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*quotes.length);
    genrateQuotes=quotes[random];
    quote.innerHTML=genrateQuotes.quote;
    author.innerHTML=genrateQuotes.author;
    
})