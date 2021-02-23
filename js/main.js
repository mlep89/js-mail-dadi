var utenti = ["niccoloarcioni@gmail.com" , "r.attanasio90@gmail.com" , "caldaronello.l@gmail.com" , "f.cerofolini96@gmail.com", "emilio.994@gmail.com" , "federico1993.d.alessio.1993@gmail.com" , "omar.damico.asti@gmail.com" , "dandreaayuri@gmail.com" , "michele99cl@gmail.com" , "laura.dionisi91@gmail.com" , "leonardofabbri125@gmail.com" , "festagiuseppe89@gmail.com" , "trendjazzer@gmail.com" , "maurizio.grasso@gmail.com" , "angelo.lamacchia006@gmail.com" , "leporemarco89@gmail.com" , "andrea85kro@gmail.com" , "giorgiofabrilopez@gmail.com" , "tiuccidoio@gmail.com" , "federica.manograssi@gmail.com" , "matteomigliori280489@gmail.com" , "marcosinisa.mihajlovic@gmail.com" , "seba.minotti@gmail.com" , "enrich.91@gmail.com" , "pasca.sebastiano5@gmail.com" , "piras.michela86@gmail.com" , "giovannipor23@gmail.com" , "ale79631@gmail.com" , "martaprudentino@gmail.com" , "noemi.rea1717@gmail.com" , "yumishika17@gmail.com" , "dario.tedeschi86@gmail.com" , "salvatoret6@gmail.com" , "stefanotosatto.work@gmail.com" , "salvo.trimarchi@gmail.com" , "cogitoergosumpoco@gmail"];
console.log(utenti);


var RichiestaInvio = document.getElementById("invia");
RichiestaInvio.addEventListener("click" ,
function () {
    //Prendi i valori inseriti dagli utenti all'interno dell'input
   var ControlloEmail = document.getElementById("MailAddress").value;
   console.log(ControlloEmail);

   for ( var i = 0; i < utenti.length; i++) {
       if ( ControlloEmail == utenti[i] ) {
        alert("Il tuo indirizzo mail è già registrato");
       }
    }
} )
