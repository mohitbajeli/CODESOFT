var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Audi"><img class="cr" src="data/audi.avif" alt="audi"><div class="tover"><br>AUDI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Lexus"><img class="cr" src="data/lexus.jpg" alt="lexus"><div class="tover"><br>Lexus</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Ferrari"><img class="cr" src="data/ferrari.avif" alt="ferrari"><div class="tover"><br>ferrari</div></a></div>';
        l+=1;
    }
   
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}