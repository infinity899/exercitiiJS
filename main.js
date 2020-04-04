var prieteniiLuiZTK = ['Andrei', 'Sorin', 'Vlad', 'Bebe', 'Mita', 'Ion'];
var prieteniiLuiAndrei = ['Andrei', 'Sorin', 'Vlad', 'Bebe', 'Mita', 'Ion', 'asdadsa', 'bbbb'];
var prieteniiLuiSorin = ['Sorin', 'Bebe', 'Mita', 'Ion', 'asdadsa', 'bbbb', 'Marko', 'Zvlatana'];
var unPrieten = 'Andrei';
var altPrieten = 'Sorin';
var celalaltPrieten = 'Vlad';

afiseazaPrieteni();

function stergePrieten(prieteni, prieten) {
    prieteni.forEach(function(x, index) {
        if(x.toLowerCase() === prieten.toLowerCase()) {
            prieteni.splice(index, 1);
        }
    });
}

function afiseazaPrieteni() {
    document.getElementById('friends').innerHTML = '';

    prieteniiLuiZTK.forEach(function(prieten) {
        let element = '<p>' + prieten + '</p>';
        let buton = "<button class='sterge-prieten'>" + 'Sterge' + '</button>';
        document.getElementById('friends').innerHTML += '<div>' + element + buton + '</div>';
    });

    var butoane = document.getElementsByClassName('sterge-prieten');

    for(let i=0; i < butoane.length;i++) {
        butoane[i].addEventListener('click', function(event) {
            let prietenDeSters = event.target.parentNode.firstChild.innerHTML;
            stergePrieten(prieteniiLuiZTK, prietenDeSters);
            afiseazaPrieteni();
        })
    }
}
