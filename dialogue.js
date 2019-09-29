function seeTitle() {
	document.getElementById('Title').style.display = 'inline';
	document.getElementById('LaunchSim').style.display = 'inline';
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

var instance = new TypeIt('#dialogue', {
  speed: 50,
  waitUntilVisible: true,
  afterComplete: (instance) => {
  	seeTitle();
  	launch_toast();
  }
})
.type('Oh.')
.options({speed: 120})
.pause(1200)
.break()
.type('Tu es enfin debout.')
.pause(500)
.type('.')
.pause(500)
.type('.')
.pause(500)
.delete()
.type('Bienvenue à Epidemik.')
.break()
.pause(500)
.options({speed: 70})
.type('Je vois que tu sais déjà où se trouve les dortoirs.')
.pause(900)
.break()
.type('Ton travail ici est simple, tu vas disposer d\'un monde simulé et ton but est de tout simplement.')
.pause(500)
.type('.')
.pause(500)
.type('.')
.pause(700)
.options({speed: 15})
.break()
.type('<strong style="color: #c23616;">TUER TOUT LE MONDE !!</strong>')
.pause(1700)
.delete()
.options({speed: 70})
.type('Non, plus sérieusement. On étudie ici les conséquences d\'épidémies assez dangereuses et virales.')
.break()
.type('Tu vas commencer avec un virus ridiculement inoffensif, ')
.type('puis tu feras en sorte de le muter jusqu\'à le rendre un poil plus dangereux >:)')
.pause(1700)
.options({speed: 15})
.delete()
.options({speed: 70})
.type('Bien.')
.pause(600)
.break()
.type('Je vais te laisser. Ton simulateur est juste là.')
.pause(600)
.break()
.type('Hésite pas à te faire un café. ')
.pause(600)
.break()
.type('Oh, j\'ai oublié. Moi c\'est <strong style="color: yellow;">n1ce</strong>. On se voit plus tard!')
.pause(600)
.delete()
.go();
instance.destroy();
