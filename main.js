var name1=["Cover page", "My Father" , "My Mother" , "Myself" , "My Brother" , "My Sister" , "My Whole Family"];
var images=["familybook.png" , "https://static.wikia.nocookie.net/every-universe/images/e/e0/Minato_Namikaze_hokage.png/revision/latest?cb=20170421042308" , https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/ddqencd-bf3fb532-d692-4166-b3a7-aa112b00e4dc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzM2YjFkYmYtNGRiYi00NmQxLThhYzctNzkzMTNjZmNlYjI0XC9kZHFlbmNkLWJmM2ZiNTMyLWQ2OTItNDE2Ni1iM2E3LWFhMTEyYjAwZTRkYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ex9XB-td-MhMYkHKQBt7PeVke2OKmAA_ZpZdoRC9HDQ" , "https://www.seekpng.com/png/detail/18-182774_sasuke-uchiha-shippuden-naruto-sasuke-uchiha-cosplay-costume.png" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYixJWyiV32RaKaM5d_XmrZ9-Lep2j1BG-Q&usqp=CAU" , "https://i.pinimg.com/originals/27/72/ed/2772edd652c534c175f3386e30034a62.jpg"];
var i=0;
function nextslide() {
document.getElementById("next_name").innerHTML=name1[i];
document.getElementById("image1").src=images[i];
i++;
}