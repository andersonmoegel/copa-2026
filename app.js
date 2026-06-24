const API_KEY = 'zwc_free_a6e7a110921e7fc156194666';
const BASE_URL = 'https://api.zafronix.com/fifa/worldcup/v1';

const groups = {
  A:['Mexico','South Africa','Korea Republic','Czechia'],
  B:['Canada','Bosnia and Herzegovina','Qatar','Switzerland'],
  C:['Brazil','Morocco','Haiti','Scotland'],
  D:['USA','Paraguay','Australia','Türkiye'],
  E:["Côte d'Ivoire",'Ecuador','Germany','Curaçao'],
  F:['Netherlands','Japan','Sweden','Tunisia'],
  G:['IR Iran','New Zealand','Belgium','Egypt'],
  H:['Saudi Arabia','Uruguay','Spain','Cabo Verde'],
  I:['France','Senegal','Iraq','Norway'],
  J:['Argentina','Algeria','Austria','Jordan'],
  K:['Portugal','Congo DR','Uzbekistan','Colombia'],
  L:['England','Croatia','Ghana','Panama']
};

const teamMeta = {
  'Algeria':{pt:'Argélia',fifa:'ALG',iso:'dz',conf:'CAF'},
  'Argentina':{pt:'Argentina',fifa:'ARG',iso:'ar',conf:'CONMEBOL'},
  'Australia':{pt:'Austrália',fifa:'AUS',iso:'au',conf:'AFC'},
  'Austria':{pt:'Áustria',fifa:'AUT',iso:'at',conf:'UEFA'},
  'Belgium':{pt:'Bélgica',fifa:'BEL',iso:'be',conf:'UEFA'},
  'Bosnia and Herzegovina':{pt:'Bósnia e Herzegovina',fifa:'BIH',iso:'ba',conf:'UEFA'},
  'Brazil':{pt:'Brasil',fifa:'BRA',iso:'br',conf:'CONMEBOL'},
  'Cabo Verde':{pt:'Cabo Verde',fifa:'CPV',iso:'cv',conf:'CAF'},
  'Cape Verde':{pt:'Cabo Verde',fifa:'CPV',iso:'cv',conf:'CAF'},
  'Canada':{pt:'Canadá',fifa:'CAN',iso:'ca',conf:'CONCACAF'},
  'Colombia':{pt:'Colômbia',fifa:'COL',iso:'co',conf:'CONMEBOL'},
  'Congo DR':{pt:'RD Congo',fifa:'COD',iso:'cd',conf:'CAF'},
  'DR Congo':{pt:'RD Congo',fifa:'COD',iso:'cd',conf:'CAF'},
  'Croatia':{pt:'Croácia',fifa:'CRO',iso:'hr',conf:'UEFA'},
  'Curaçao':{pt:'Curaçao',fifa:'CUW',iso:'cw',conf:'CONCACAF'},
  'Curacao':{pt:'Curaçao',fifa:'CUW',iso:'cw',conf:'CONCACAF'},
  'Czechia':{pt:'Tchéquia',fifa:'CZE',iso:'cz',conf:'UEFA'},
  "Côte d'Ivoire":{pt:'Costa do Marfim',fifa:'CIV',iso:'ci',conf:'CAF'},
  'Cote d Ivoire':{pt:'Costa do Marfim',fifa:'CIV',iso:'ci',conf:'CAF'},
  'Ivory Coast':{pt:'Costa do Marfim',fifa:'CIV',iso:'ci',conf:'CAF'},
  'Ecuador':{pt:'Equador',fifa:'ECU',iso:'ec',conf:'CONMEBOL'},
  'Egypt':{pt:'Egito',fifa:'EGY',iso:'eg',conf:'CAF'},
  'England':{pt:'Inglaterra',fifa:'ENG',iso:'gb-eng',conf:'UEFA'},
  'France':{pt:'França',fifa:'FRA',iso:'fr',conf:'UEFA'},
  'Germany':{pt:'Alemanha',fifa:'GER',iso:'de',conf:'UEFA'},
  'Ghana':{pt:'Gana',fifa:'GHA',iso:'gh',conf:'CAF'},
  'Haiti':{pt:'Haiti',fifa:'HAI',iso:'ht',conf:'CONCACAF'},
  'IR Iran':{pt:'Irã',fifa:'IRN',iso:'ir',conf:'AFC'},
  'Iran':{pt:'Irã',fifa:'IRN',iso:'ir',conf:'AFC'},
  'Iraq':{pt:'Iraque',fifa:'IRQ',iso:'iq',conf:'AFC'},
  'Japan':{pt:'Japão',fifa:'JPN',iso:'jp',conf:'AFC'},
  'Jordan':{pt:'Jordânia',fifa:'JOR',iso:'jo',conf:'AFC'},
  'Korea Republic':{pt:'Coreia do Sul',fifa:'KOR',iso:'kr',conf:'AFC'},
  'South Korea':{pt:'Coreia do Sul',fifa:'KOR',iso:'kr',conf:'AFC'},
  'Mexico':{pt:'México',fifa:'MEX',iso:'mx',conf:'CONCACAF'},
  'Morocco':{pt:'Marrocos',fifa:'MAR',iso:'ma',conf:'CAF'},
  'Netherlands':{pt:'Países Baixos',fifa:'NED',iso:'nl',conf:'UEFA'},
  'New Zealand':{pt:'Nova Zelândia',fifa:'NZL',iso:'nz',conf:'OFC'},
  'Norway':{pt:'Noruega',fifa:'NOR',iso:'no',conf:'UEFA'},
  'Panama':{pt:'Panamá',fifa:'PAN',iso:'pa',conf:'CONCACAF'},
  'Paraguay':{pt:'Paraguai',fifa:'PAR',iso:'py',conf:'CONMEBOL'},
  'Portugal':{pt:'Portugal',fifa:'POR',iso:'pt',conf:'UEFA'},
  'Qatar':{pt:'Catar',fifa:'QAT',iso:'qa',conf:'AFC'},
  'Saudi Arabia':{pt:'Arábia Saudita',fifa:'KSA',iso:'sa',conf:'AFC'},
  'Scotland':{pt:'Escócia',fifa:'SCO',iso:'gb-sct',conf:'UEFA'},
  'Senegal':{pt:'Senegal',fifa:'SEN',iso:'sn',conf:'CAF'},
  'South Africa':{pt:'África do Sul',fifa:'RSA',iso:'za',conf:'CAF'},
  'Spain':{pt:'Espanha',fifa:'ESP',iso:'es',conf:'UEFA'},
  'Sweden':{pt:'Suécia',fifa:'SWE',iso:'se',conf:'UEFA'},
  'Switzerland':{pt:'Suíça',fifa:'SUI',iso:'ch',conf:'UEFA'},
  'Tunisia':{pt:'Tunísia',fifa:'TUN',iso:'tn',conf:'CAF'},
  'Türkiye':{pt:'Turquia',fifa:'TUR',iso:'tr',conf:'UEFA'},
  'Turkey':{pt:'Turquia',fifa:'TUR',iso:'tr',conf:'UEFA'},
  'Uruguay':{pt:'Uruguai',fifa:'URU',iso:'uy',conf:'CONMEBOL'},
  'USA':{pt:'Estados Unidos',fifa:'USA',iso:'us',conf:'CONCACAF'},
  'United States':{pt:'Estados Unidos',fifa:'USA',iso:'us',conf:'CONCACAF'},
  'Uzbekistan':{pt:'Uzbequistão',fifa:'UZB',iso:'uz',conf:'AFC'}
};

const stadiums = [
  {name:'Mexico City Stadium', original:'Estadio Azteca', city:'Cidade do México', country:'México', capacity:80824, matches:5, roof:'Aberto'},
  {name:'New York New Jersey Stadium', original:'MetLife Stadium', city:'East Rutherford', country:'EUA', capacity:80663, matches:8, roof:'Aberto', highlight:'Final'},
  {name:'Dallas Stadium', original:'AT&T Stadium', city:'Arlington', country:'EUA', capacity:70649, matches:9, roof:'Retrátil'},
  {name:'Los Angeles Stadium', original:'SoFi Stadium', city:'Inglewood', country:'EUA', capacity:70492, matches:8, roof:'Coberto'},
  {name:'Kansas City Stadium', original:'Arrowhead Stadium', city:'Kansas City', country:'EUA', capacity:69045, matches:6, roof:'Aberto'},
  {name:'San Francisco Bay Area Stadium', original:"Levi's Stadium", city:'Santa Clara', country:'EUA', capacity:68827, matches:6, roof:'Aberto'},
  {name:'Houston Stadium', original:'NRG Stadium', city:'Houston', country:'EUA', capacity:68777, matches:7, roof:'Retrátil'},
  {name:'Philadelphia Stadium', original:'Lincoln Financial Field', city:'Filadélfia', country:'EUA', capacity:68324, matches:6, roof:'Aberto'},
  {name:'Atlanta Stadium', original:'Mercedes-Benz Stadium', city:'Atlanta', country:'EUA', capacity:68239, matches:8, roof:'Retrátil'},
  {name:'Seattle Stadium', original:'Lumen Field', city:'Seattle', country:'EUA', capacity:66925, matches:6, roof:'Aberto'},
  {name:'Miami Stadium', original:'Hard Rock Stadium', city:'Miami Gardens', country:'EUA', capacity:64478, matches:7, roof:'Aberto', highlight:'3º lugar'},
  {name:'Boston Stadium', original:'Gillette Stadium', city:'Foxborough', country:'EUA', capacity:64146, matches:7, roof:'Aberto'},
  {name:'BC Place Vancouver', original:'BC Place', city:'Vancouver', country:'Canadá', capacity:52497, matches:7, roof:'Retrátil'},
  {name:'Estadio Monterrey', original:'Estadio BBVA', city:'Guadalupe', country:'México', capacity:51243, matches:4, roof:'Aberto'},
  {name:'Estadio Guadalajara', original:'Estadio Akron', city:'Zapopan', country:'México', capacity:45664, matches:4, roof:'Aberto'},
  {name:'Toronto Stadium', original:'BMO Field', city:'Toronto', country:'Canadá', capacity:43036, matches:6, roof:'Aberto'}
];

const stageNames = {
  group_a:'Grupo A',group_b:'Grupo B',group_c:'Grupo C',group_d:'Grupo D',group_e:'Grupo E',group_f:'Grupo F',
  group_g:'Grupo G',group_h:'Grupo H',group_i:'Grupo I',group_j:'Grupo J',group_k:'Grupo K',group_l:'Grupo L',
  'group-stage':'Fase de grupos',r32:'Fase de 32',round_of_32:'Fase de 32',r16:'Oitavas',round_of_16:'Oitavas',
  qf:'Quartas',quarter_final:'Quartas',sf:'Semifinal',semi_final:'Semifinal',thirdPlace:'3º lugar',third_place:'3º lugar',final:'Final'
};

const news = [
  {title:'Colômbia e RD Congo mantêm escalações em jogo do Grupo K', source:'Reuters', date:'24/06/2026', text:'Atualização pré-jogo com prováveis titulares e contexto do Grupo K.'},
  {title:'Croácia vence Panamá por 1–0 e mantém chances no Grupo L', source:'Reuters / Guardian', date:'24/06/2026', text:'Gol de Ante Budimir no segundo tempo decidiu o jogo em Toronto.'},
  {title:'Panamá iniciou com Fajardo; Croácia fez três mudanças', source:'Reuters', date:'23/06/2026', text:'Notícia usada como complemento editorial para a área de atualizações.'}
];


const squads = {
  'Mexico': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Raul Rangel, Guillermo Ochoa, Carlos Acevedo',
    df:'Jorge Sanchez, Israel Reyes, Cesar Montes, Johan Vasquez, Jesus Gallardo, Mateo Chavez',
    mf:'Erik Lira, Orbelin Pineda, Alvaro Fidalgo, Brian Gutierrez, Luis Romo, Edson Alvarez, Obed Vargas, Gilberto Mora, Luis Chavez',
    fw:'Roberto Alvarado, Cesar Huerta, Alexis Vega, Julian Quinones, Guillermo Martinez, Armando Gonzalez, Santiago Gimenez, Raul Jimenez'
  },
  'South Africa': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Ronwen Williams, Ricardo Goss, Sipho Chaine',
    df:'Khuliso Mudau, Aubrey Modiba, Khulumani Ndamane, Olwethu Makhanya, Bradley Cross, Thabang Matuludi, Nkosinathi Sibisi, Kamogelo Sebelebele, Ime Okon, Samukele Kabini, Mbekezeli Mbokazi',
    mf:'Teboho Mokoena, Jayden Adams, Thalente Mbatha, Sphephelo Sithole',
    fw:'Oswin Appollis, Tshepang Moremi, Evidence Makgopa, Relebohile Mofokeng, Lyle Foster, Iqraam Rayners, Themba Zwane, Thapelo Maseko'
  },
  'Korea Republic': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Kim Seung-gyu, Song Bum-keun, Jo Hyeon-woo',
    df:'Kim Moon-hwan, Kim Min-jae, Kim Tae-hyeon, Park Jin-seop, Seol Young-woo, Jens Castrop, Lee Ki-hyeok, Lee Tae-seok, Lee Han-beom, Cho Yu-min',
    mf:'Kim Jin-gyu, Bae Jun-ho, Paik Seung-ho, Yang Hyun-jun, Eom Ji-sung, Lee Kang-in, Lee Dong-gyeong, Lee Jae-sung, Hwang In-beom, Hwang Hee-chan',
    fw:'Son Heung-min, Oh Hyeon-gyu, Cho Gue-sung'
  },
  'Czechia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Lukas Hornicek, Matej Kovar, Jindrich Stanek',
    df:'Vladimir Coufal, David Doudera, Tomas Holes, Robin Hranac, Stepan Chaloupek, David Jurasek, Ladislav Krejci, Jaroslav Zeleny, David Zima',
    mf:'Lukas Cerv, Vladimir Darida, Lukas Provod, Michal Sadilek, Hugo Sochurek, Alexandr Sojka, Tomas Soucek, Pavel Sulc, Denis Visinsky',
    fw:'Adam Hlozek, Tomas Chory, Mojmir Chytil, Jan Kuchta, Patrik Schick'
  },
  'Canada': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Maxime Crepeau, Owen Goodman, Dayne St Clair',
    df:'Moise Bombito, Derek Cornelius, Alphonso Davies, Luc de Fougerolles, Alistair Johnston, Alfie Jones, Richie Laryea, Niko Sigur, Joel Waterman',
    mf:'Ali Ahmed, Tajon Buchanan, Mathieu Choiniere, Stephen Eustaquio, Marcelo Flores, Ismael Kone, Liam Millar, Jonathan Osorio, Nathan Saliba, Jacob Shaffelburg',
    fw:'Jonathan David, Promise David, Cyle Larin, Tani Oluwaseyi'
  },
  'Bosnia and Herzegovina': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Nikola Vasilj, Martin Zlomislic, Osman Hadzikic',
    df:'Sead Kolasinac, Amar Dedic, Nihad Mujakic, Nikola Katic, Tarik Muharemovic, Stjepan Radeljic, Dennis Hadzikadunic, Nidal Celik',
    mf:'Amir Hadziahmetovic, Ivan Sunjic, Ivan Basic, Dzenis Burnic, Ermin Mahmic, Benjamin Tahirovic, Amar Memic, Armin Gigovic, Kerim Alajbegovic, Esmir Bajraktarevic',
    fw:'Ermedin Demirovic, Jovo Lukic, Samed Bazdar, Haris Tabakovic, Edin Dzeko'
  },
  'Qatar': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Salah Zakaria, Mahmoud Abunada, Meshaal Barsham',
    df:'Hashmi Hussein, Ayoub Alawi, Boualem Khoukhi, Pedro Miguel, Issa Laaye, Lucas Mendes, Sultan Al-Brake, Homam Al-Amin',
    mf:'Mohammed Al-Manai, Jassem Jaber, Karim Boudiaf, Ahmed Fathi, Abdulaziz Hatem, Assim Madibo',
    fw:'Tahseen Mohammed, Edmilson Junior, Almoez Ali, Akram Afif, Mohammed Muntari, Youssef Abdulrazzaq, Ahmed Alaa, Hassan Al-Haydos, Ahmed Al-Janahi'
  },
  'Switzerland': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Marvin Keller, Gregor Kobel, Yvon Mvogo',
    df:'Manuel Akanji, Aurele Amenda, Eray Comert, Nico Elvedi, Luca Jaquez, Miro Muheim, Ricardo Rodriguez, Silvan Widmer',
    mf:'Michel Aebischer, Christian Fassnacht, Remo Freuler, Ardon Jashari, Johan Manzambi, Fabian Rieder, Djibril Sow, Ruben Vargas, Granit Xhaka, Denis Zakaria',
    fw:'Zeki Amdouni, Breel Embolo, Cedric Itten, Dan Ndoye, Noah Okafor'
  },
  'Brazil': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Alisson, Ederson, Weverton',
    df:'Alex Sandro, Bremer, Danilo, Douglas Santos, Gabriel Magalhaes, Ibanez, Leo Pereira, Marquinhos, Wesley',
    mf:'Bruno Guimaraes, Casemiro, Danilo Santos, Fabinho, Lucas Paqueta',
    fw:'Endrick, Gabriel Martinelli, Igor Thiago, Luiz Henrique, Matheus Cunha, Neymar, Raphinha, Rayan, Vinicius Jr'
  },
  'Morocco': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Yassine Bounou, Munir Mohamedi, Ahmed Tagnaouti',
    df:'Noussair Mazraoui, Anass Salah-Eddine, Youssef Belammari, Nayef Aguerd, Chadi Riad, Issa Diop, Redouane Halhal, Achraf Hakimi, Zakaria El Ouahdi',
    mf:'Samir El Mourabet, Ayyoub Bouaddi, Neil El Aynaoui, Sofyan Amrabat, Azzedine Ounahi, Bilal El Khannouss, Ismael Saibari',
    fw:'Abdessamad Ezzalzouli, Chemsdine Talbi, Soufiane Rahimi, Ayoub El Kaabi, Brahim Diaz, Yassine Gessime, Ayoub Amaimouni-Echghouyabe'
  },
  'Haiti': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Johny Placide, Alexandre Pierre, Josue Duverger',
    df:'Carlens Arcus, Wilguens Paugain, Duke Lacroix, Martin Experience, JK Duverne, Ricardo Ade, Hannes Delcroix, Keeto Thermoncy',
    mf:'Leverton Pierre, Carl-Fred Sainte, Danley Jean-Jacques, Jean-Ricner Bellegarde, Woodensky Pierre, Simon Dominique',
    fw:'Louicius Deedson, Ruben Providence, Josue Casimir, Derrick Etienne, Wilson Isidor, Duckens Nazon, Frantzdy Pierrot, Yassin Fortune, Lenny Joseph'
  },
  'Scotland': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Craig Gordon, Angus Gunn, Liam Kelly',
    df:'Grant Hanley, Jack Hendry, Aaron Hickey, Dom Hyam, Scott McKenna, Nathan Patterson, Anthony Ralston, Andy Robertson, John Souttar, Kieran Tierney',
    mf:'Ryan Christie, Finlay Curtis, Lewis Ferguson, Ben Gannon-Doak, Tyler Fletcher, John McGinn, Kenny McLean, Scott McTominay',
    fw:'Che Adams, Lyndon Dykes, George Hirst, Lawrence Shankland, Ross Stewart'
  },
  'USA': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Chris Brady, Matt Freese, Matt Turner',
    df:'Max Arfsten, Sergiño Dest, Alex Freeman, Mark McKenzie, Tim Ream, Chris Richards, Antonee Robinson, Miles Robinson, Joe Scally, Auston Trusty',
    mf:'Tyler Adams, Sebastian Berhalter, Weston McKennie, Gio Reyna, Cristian Roldan, Malik Tillman',
    fw:'Brenden Aaronson, Folarin Balogun, Ricardo Pepi, Christian Pulisic, Tim Weah, Haji Wright, Alejandro Zendejas'
  },
  'United States': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Chris Brady, Matt Freese, Matt Turner',
    df:'Max Arfsten, Sergiño Dest, Alex Freeman, Mark McKenzie, Tim Ream, Chris Richards, Antonee Robinson, Miles Robinson, Joe Scally, Auston Trusty',
    mf:'Tyler Adams, Sebastian Berhalter, Weston McKennie, Gio Reyna, Cristian Roldan, Malik Tillman',
    fw:'Brenden Aaronson, Folarin Balogun, Ricardo Pepi, Christian Pulisic, Tim Weah, Haji Wright, Alejandro Zendejas'
  },
  'Paraguay': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Orlando Gill, Roberto Junior Fernandez, Gaston Olveira',
    df:'Juan Caceres, Gustavo Velazquez, Gustavo Gomez, Junior Alonso, Jose Canale, Omar Alderete, Alexandro Maidana, Fabian Balbuena',
    mf:'Diego Gomez, Mauricio Magalhaes, Damian Bobadilla, Braian Ojeda, Andres Cubas, Matias Galarza, Alejandro Romero Gamarra',
    fw:'Gustavo Caballero, Ramon Sosa, Alex Arce, Gabriel Avalos, Isidro Pitta, Miguel Almiron, Julio Enciso, Antonio Sanabria'
  },
  'Australia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Mathew Ryan, Paul Izzo, Patrick Beach',
    df:'Aziz Behich, Jordan Bos, Cameron Burgess, Alessandro Circati, Milos Degenek, Jason Geria, Lucas Herrington, Jacob Italiano, Harry Souttar, Kai Trewin',
    mf:'Cameron Devlin, Ajdin Hrustic, Jackson Irvine, Connor Metcalfe, Aiden O’Neill, Paul Okon-Engstler',
    fw:'Nestory Irankunda, Mathew Leckie, Awer Mabil, Mohamed Toure, Nishan Velupillary, Cristian Volpato, Tete Yengi'
  },
  'Türkiye': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Altay Bayindir, Mert Gunok, Ugurcan Cakir',
    df:'Abdulkerim Bardakci, Caglar Soyuncu, Eren Elmali, Ferdi Kadioglu, Merih Demiral, Mert Muldur, Ozan Kabak, Samet Akaydin, Zeki Celik',
    mf:'Hakan Calhanoglu, Ismail Yuksek, Kaan Ayhan, Orkun Kokcu, Salih Ozcan',
    fw:'Arda Guler, Baris Alper Yilmaz, Can Uzun, Deniz Gul, Irfan Can Kahveci, Kenan Yildiz, Kerem Akturkoglu, Oguz Aydin, Yunus Akgun'
  },
  'Germany': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Manuel Neuer, Oliver Baumann, Alexander Nubel',
    df:'Antonio Rudiger, Jonathan Tah, David Raum, Nico Schlotterbeck, Waldemar Anton, Malick Thiaw, Nathaniel Brown, Felix Nmecha',
    mf:'Joshua Kimmich, Leroy Sane, Leon Goretzka, Jamal Musiala, Florian Wirtz, Pascal Gross, Nadiem Amiri, Aleksandar Pavlovic, Angelo Stiller, Lennart Karl',
    fw:'Kai Havertz, Jamie Leweling, Nick Woltemade, Deniz Undav, Maximilian Beier'
  },
  'Curaçao': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Tyrick Bodak, Trevor Doornbusch, Eloy Room',
    df:'Riechedly Bazoer, Joshua Brenet, Sherel Floranus, Deveron Fonville, Juriën Gaari, Armando Obispo, Shurandy Sambo, Roshon van Eijma',
    mf:'Juninho Bacuna, Leandro Bacuna, Livano Comenencia, Kevin Felida, Arjany Martha, Tyrese Noslin, Godfried Roemeratoe',
    fw:'Jeremy Antonisse, Tahith Chong, Kenji Gorre, Sontje Hansen, Gervane Kastaneer, Brandley Kuwas, Jürgen Locadia, Jearl Margaritha'
  },
  'Ecuador': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Hernan Galindez, Moises Ramirez, Gonzalo Valle',
    df:'Piero Hincapie, Willian Pacho, Pervis Estupinan, Felix Torres, Joel Ordonez, Jackson Porozo, Angelo Preciado',
    mf:'Moises Caicedo, Alan Franco, Kendry Paez, Pedro Vite, Jordy Alcivar, Denil Castillo, Yaimar Medina',
    fw:'Enner Valencia, Gonzalo Plata, Alan Minda, John Yeboah, Kevin Rodriguez, Jordy Caicedo, Nilson Angulo, Anthony Valencia, Jeremy Arevalo'
  },
  "Côte d'Ivoire": {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Yahia Fofana, Mohamed Kone, Alban Lafont',
    df:'Emmanuel Agbadou, Clement Akpa, Ousmane Diomande, Guela Doue, Ghislain Konan, Odilon Kossonou, Evan Ndicka, Wilfried Singo',
    mf:'Seko Fofana, Parfait Guiagon, Franck Kessie, Christ Oulai, Ibrahim Sangare, Jean-Michael Seri',
    fw:'Simon Adingra, Ange-Yoan Bonny, Amad Diallo, Oumar Diakite, Yan Diomande, Evann Guessand, Nicolas Pepe, Bazoumana Toure, Elye Wahi'
  },
  'Netherlands': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Mark Flekken, Robin Roefs, Bart Verbruggen',
    df:'Nathan Ake, Denzel Dumfries, Jorrel Hato, Jurrien Timber, Micky van de Ven, Virgil van Dijk, Jan Paul van Hecke',
    mf:'Frenkie de Jong, Marten de Roon, Ryan Gravenberch, Justin Kluivert, Teun Koopmeiners, Tijjani Reijnders, Guus Til, Quinten Timber, Mats Wieffer',
    fw:'Brian Brobbey, Memphis Depay, Cody Gakpo, Noa Lang, Donyell Malen, Crysencio Summerville, Wout Weghorst'
  },
  'Japan': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Zion Suzuki, Tomoki Hayakawa, Keisuke Osako',
    df:'Yuto Nagatomo, Shogo Taniguchi, Ko Itakura, Tsuyoshi Watanabe, Takehiro Tomiyasu, Hiroki Ito, Ayumu Seko, Yukinari Sugawara, Junnoske Suzuki',
    mf:'Wataru Endo, Junya Ito, Daichi Kamada, Koki Ogawa, Daizen Maeda, Ritsu Doan, Ayase Ueda, Ao Tanaka, Keito Nakamura, Kaishu Sano, Takefusa Kubo, Yuito Suzuki, Kento Shoigai, Keisuke Goto',
    fw:''
  },
  'Sweden': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Kristoffer Nordfeldt, Viktor Johansson, Jacob Widell Zetterström',
    df:'Daniel Svensson, Victor Lindelof, Isak Hien, Carl Starfelt, Elliot Stroud, Gustaf Lagerbielke, Gabriel Gudmundsson, Herman Johansson, Hjalmar Ekdal, Erik Smith',
    mf:'Taha Ali, Yasin Ayari, Lucas Bergvall, Anthony Elanga, Viktor Gyokeres, Jesper Karlstrom, Gustaf Nilsson, Benjamin Nygren, Mattias Svanberg, Besfort Zeneli, Alexander Isak, Alexander Bernhardsson, Ken Sema',
    fw:''
  },
  'Tunisia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Sabri Ben Hessen, Abdelmouhib Chamakh, Aymen Dahman',
    df:'Ali Abdi, Adem Arous, Mohamed Amine Ben Hamida, Dylan Bronn, Raed Chikhaoui, Moutaz Neffati, Omar Rekik, Montassar Talbi, Yan Valery',
    mf:'Mortadha Ben Ouanes, Anis Ben Slimane, Ismael Gharbi, Rani Khedira, Mohamed Hadj Mahmoud, Hannibal Mejbri, Ellyes Skhiri',
    fw:'Elias Achouri, Khalil Ayari, Firas Chaouat, Rayan Elloumi, Hazem Mastouri, Elias Saad, Sebastian Tounekti'
  },
  'Belgium': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Thibaut Courtois, Senne Lammens, Mike Penders',
    df:'Timothy Castagne, Zeno Debast, Maxim De Cuyper, Koni De Winter, Brandon Mechele, Thomas Meunier, Nathan Ngoy, Joaquin Seys, Arthur Theate',
    mf:'Kevin De Bruyne, Amadou Onana, Nicolas Raskin, Youri Tielemans, Hans Vanaken, Axel Witsel',
    fw:'Charles De Ketelaere, Jeremy Doku, Matias Fernandez-Pardo, Romelu Lukaku, Dodi Lukebakio, Diego Moreira, Alexis Saelemaekers, Leandro Trossard'
  },
  'Egypt': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Mohamed El-Shenawy, Mostafa Shobeir, El-Mahdi Soliman, Mohamed Alaa',
    df:'Mohamed Abdelmonem, Mohamed Hany, Yasser Ibrahim, Hossam Abdelmaguid, Ahmed Fattouh, Tarek Alaa, Rami Rabia, Hamdi Fathi, Karim Hafez',
    mf:'Mohamed Salah, Marwan Attia, Ahmed Mostafa Zizo, Mahmoud Hassan Trezeguet, Emam Ashour, Mostafa Abdel Raouf, Mohannad Lasheen, Haitham Hassan, Mahmoud Saber, Ibrahim Adel, Nabil Emad',
    fw:'Omar Marmoush, Hamza Abdel Karim'
  },
  'IR Iran': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Alireza Beiranvand, Seyed Hossein Hosseini, Payam Niazmand',
    df:'Danial Eiri, Ehsan Hajsafi, Saleh Hardani, Hossein Kanaani, Shoja Khalilzadeh, Milad Mohammadi, Ali Nemati, Ramin Rezaeian',
    mf:'Rouzbeh Cheshmi, Saeid Ezatolahi, Mehdi Ghaedi, Saman Ghoddos, Mohammad Ghorbani, Alireza Jahanbakhsh, Mohammad Mohebi, Amir Mohammad Razzaghinia, Mehdi Torabi, Aria Yousefi',
    fw:'Ali Alipour, Dennis Dargahi, Amirhossein Hosseinzadeh, Mehdi Taremi, Shahriar Moghanlou'
  },
  'New Zealand': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Max Crocombe, Alex Paulsen, Michael Woud',
    df:'Tim Payne, Francis De Vries, Tyler Bindon, Michael Boxall, Liberato Cacace, Nando Pijnaker, Finn Surman, Callan Elliot, Tommy Smith',
    mf:'Lachlan Bayliss, Joe Bell, Matt Garbett, Eli Just, Ben Old, Alex Rufer, Sarpreet Singh, Marko Stamenic, Ryan Thomas',
    fw:'Kosta Barbarouses, Callum McCowatt, Jesse Randall, Ben Waine, Chris Wood'
  },
  'Spain': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Unai Simon, David Raya, Joan Garcia',
    df:'Pedro Porro, Marcos Llorente, Pau Cubarsi, Marc Pubill, Aymeric Laporte, Eric Garcia, Alex Grimaldo, Marc Cucurella',
    mf:'Rodri, Martin Zubimendi, Gavi, Pedri, Fabian Ruiz, Mikel Merino, Alex Baena',
    fw:'Dani Olmo, Lamine Yamal, Ferran Torres, Yeremy Pino, Nico Williams, Victor Munoz, Mikel Oyarzabal, Borja Iglesias'
  },
  'Cabo Verde': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Carlos dos Santos, Marcio Rosa, Vozinha',
    df:'Sidny Cabral, Diney Borges, Logan Costa, Roberto Lopes, Steven Moreira, Wagner Pina, Kelvin Pires, Stopira',
    mf:'Telmo Arcanjo, Deroy Duarte, Laros Duarte, Joao Paulo Fernandes, Jamiro Monteiro, Kevin Pina, Yannick Semedo',
    fw:'Gilson Benchimol, Jovane Cabral, Dailon Livramento, Ryan Mendes, Nuno da Costa, Garry Rodrigues, Willy Semedo, Helio Varela'
  },
  'Saudi Arabia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Nawaf Al Aqidi, Mohamed Al Owais, Ahmed Alkassar',
    df:'Saud Abdulhamid, Jehad Thakri, Abdulelah Al Amri, Hassan Tambakti, Ali Lajami, Hassan Kadesh, Moteb Al Harbi, Nawaf Boushal, Ali Majrashi, Mohammed Abu Alshamat',
    mf:'Ziyad Al Johani, Nasser Al Dawsari, Mohamed Kanno, Abdullah Al Khaibari, Alaa Al Hejji, Musab Al Juwayr, Sultan Mandash, Ayman Yahya, Khalid Al Ghannam',
    fw:'Salem Al Dawsari, Abdullah Al Hamdan, Feras Al Brikan, Saleh Al Shehri'
  },
  'Uruguay': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Sergio Rochet, Fernando Muslera, Santiago Mele',
    df:'Guillermo Varela, Ronald Araujo, Jose Maria Gimenez, Santiago Bueno, Sebastian Caceres, Mathias Olivera, Joaquin Piquerez, Matias Vina',
    mf:'Manuel Ugarte, Emiliano Martínez, Rodrigo Bentancur, Federico Valverde, Agustin Canobbio, Juan Manuel Sanabria, Giorgian De Arrascaeta, Nicolas De La Cruz, Rodrigo Zalazar, Facundo Pellistri, Maximiliano Araujo, Brian Rodriguez',
    fw:'Rodrigo Aguirre, Federico Vinas, Darwin Nunez'
  },
  'France': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Mike Maignan, Robin Risser, Brice Samba',
    df:'Lucas Digne, Malo Gusto, Lucas Hernandez, Theo Hernandez, Ibrahima Konate, Jules Kounde, Maxence Lacroix, William Saliba, Dayot Upamecano',
    mf:"N'Golo Kante, Manu Kone, Adrien Rabiot, Aurelien Tchouameni, Warren Zaire-Emery",
    fw:'Maghnes Akliouche, Bradley Barcola, Rayan Cherki, Ousmane Dembele, Desire Doue, Jean-Philippe Mateta, Kylian Mbappe, Michael Olise, Marcus Thuram'
  },
  'Senegal': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Edouard Mendy, Mory Diaw, Yehvann Diouf',
    df:'Krepin Diatta, Antoine Mendy, Kalidou Koulibaly, El Hadji Malick Diouf, Mamadou Sarr, Moussa Niakhate, Abdoulaye Seck, Ismail Jakobs',
    mf:'Idrissa Gana Gueye, Pape Gueye, Lamine Camara, Habib Diarra, Pathe Ciss, Pape Matar Sarr, Bara Sapoko Ndiaye',
    fw:'Sadio Mane, Ismaila Sarr, Iliman Ndiaye, Assane Diao, Ibrahim Mbaye, Nicolas Jackson, Bamba Dieng, Cherif Ndiaye'
  },
  'Iraq': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Fahad Talib, Jalal Hassan, Ahmed Basil',
    df:'Hussein Ali, Manaf Younis, Zaid Tahseen, Rebin Sulaka, Akam Hashem, Merchas Doski, Ahmed Yahya, Zaid Ismail, Frans Putros, Mustafa Saadoon',
    mf:'Amir Al Ammari, Kevin Yakob, Zidane Iqbal, Aimar Sher, Ibrahim Bayesh, Ahmed Qasim, Youssef Amyn, Marko Farji',
    fw:'Ali Jassim, Ali Al Hamadi, Ali Yousef, Aymen Hussein, Mohanad Ali'
  },
  'Norway': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Orjan Haskjold Nyland, Egil Selvik, Sander Tangvik',
    df:'Julian Ryerson, Marcus Holmgren Pedersen, David Moller Wolfe, Fredrik Bjorkan, Kristoffer Ajer, Torbjorn Heggem, Leo Skiri Ostigard, Sondre Langas, Henrik Falchener',
    mf:'Martin Odegaard, Sander Berge, Fredrik Aursnes, Patrick Berg, Kristian Thorstvedt, Morten Thorsby, Thelo Aasgaard',
    fw:'Erling Haaland, Alexander Sorloth, Jorgen Strand Larsen, Antonio Nusa, Oscar Bobb, Andreas Schjelderup, Jens Petter Hauge'
  },
  'Argentina': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Emiliano Martinez, Geronimo Rulli, Juan Musso',
    df:'Leonardo Balerdi, Gonzalo Montiel, Nicolas Tagliafico, Lisandro Martinez, Cristian Romero, Nicolas Otamendi, Facundo Medina, Nahuel Molina',
    mf:'Leandro Paredes, Rodrigo De Paul, Valentin Barco, Giovani Lo Celso, Exequiel Palacios, Alexis Mac Allister, Enzo Fernandez',
    fw:'Julian Alvarez, Lionel Messi, Nicolas Gonzalez, Thiago Almada, Giuliano Simeone, Nicolas Paz, Jose Manuel Lopez, Lautaro Martinez'
  },
  'Algeria': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Oussama Benbot, Melvin Masstil, Luca Zidane',
    df:'Achraf Abada, Rayan Ait Nouri, Zinedine Belaid, Rafik Belghali, Ramy Bensebaini, Samir Chergui, Jaouen Hadjam, Aissa Mandi, Mohamed Amine Tougai',
    mf:'Houssem Aouar, Nabil Bentaleb, Hicham Boudaoui, Fares Chaibi, Ibrahim Maza, Yassine Titraoui, Ramiz Zerrouki',
    fw:'Mohamed Amine Amoura, Nadir Benbouali, Adil Boulbina, Fares Ghedjemis, Amine Gouiri, Riyad Mahrez, Anis Hadj Moussa'
  },
  'Austria': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Patrick Pentz, Alexander Schlager, Florian Wiegele',
    df:'David Affengruber, David Alaba, Kevin Danso, Marco Friedl, Philipp Lienhart, Phillipp Mwene, Stefan Posch, Alexander Prass, Michael Svoboda',
    mf:'Carney Chukwuemeka, Florian Grillitsch, Konrad Laimer, Marcel Sabitzer, Xaver Schlager, Romano Schmid, Alessandro Schopf, Nicolas Seiwald, Paul Wanner, Patrick Wimmer',
    fw:'Marko Arnautovic, Michael Gregoritsch, Sasa Kalajdzic'
  },
  'Jordan': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Yazeed Abu Laila, Abdullah Al‑Fakhouri, Noor Bani Attieh',
    df:'Abdullah Nasib, Saad Al‑Rosan, Yazan Al‑Arab, Saleem Obeid, Mohammad Abu Al‑Nadi, Hossam Abu Al‑Dahab, Ehsan Haddad, Anas Bani, Muhannad Abu Taha, Mohammad Abu Hasheesh',
    mf:'Noor Al‑Rawabdeh, Nizar Al‑Rashdan, Ibrahim Saadeh, Rajaei Ayed, Amer Jamous, Mohammad Al‑Daoud, Mahmoud Al‑Mardi',
    fw:'Mousa Al‑Tamari, Ouda Al‑Fakhouri, Mohammad Abu Zraiq, Ali Azaizeh, Ibrahim Sabra, Ali Olwan'
  },
  'Portugal': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Diogo Costa, Jose Sa, Rui Silva',
    df:'Diogo Dalot, Matheus Nunes, Nelson Semedo, Joao Cancelo, Nuno Mendes, Goncalo Inacio, Renato Veiga, Ruben Dias, Tomas Araujo',
    mf:'Ruben Neves, Samuel Costa, Joao Neves, Vitinha, Bruno Fernandes, Bernardo Silva',
    fw:'Joao Felix, Francisco Trincao, Francisco Conceicao, Pedro Neto, Rafael Leao, Goncalo Guedes, Goncalo Ramos, Cristiano Ronaldo'
  },
  'Congo DR': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Matthieu Epolo, Timothy Fayulu, Lionel Mpasi',
    df:'Dylan Batubinsika, Rocky Bushiri, Gedoon Kalulu, Steve Kapuadi, Joris Kayembe, Arthur Masuaku, Chancel Mbemba, Axel Tuanzebe, Aaron Wan-Bissaka',
    mf:"Theo Bongonda, Brian Cipenga, Meshack Elia, Gael Kakuta, Edo Kayembe, Nathanael Mbuku, Samuel Moutoussamy, Ngal'ayel Mukau, Charles Pickel, Noah Sadiki",
    fw:'Cedric Bakambu, Simon Banza, Fiston Mayele, Yoane Wissa'
  },
  'Uzbekistan': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Utkir Yusupov, Abduvohid Nematov, Botirali Ergashev',
    df:'Rustam Ashurmatov, Farrukh Sayfiev, Khojiakbar Alijonov, Sherzod Nasrullaev, Umar Eshmurodov, Abdukodir Khusanov, Abdulla Abdullaev, Bekhruz Karimov, Jakhongir Urozov, Avazbek Ulmasaliev',
    mf:'Otabek Shukurov, Jaloliddin Masharipov, Odiljon Hamrobekov, Oston Urunov, Jamshid Iskanderov, Dostonbek Khamdamov, Abbosbek Fayzullaev, Akmal Mozgovoy, Azizjon Ganiev, Sherzod Esanov',
    fw:'Eldor Shomurodov, Igor Sergeev, Azizbek Amonov'
  },
  'Colombia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Camilo Vargas, Alvaro Montero, David Ospina',
    df:'Davinson Sanchez, Jhon Lucumi, Yerry Mina, Willer Ditta, Daniel Munoz, Santiago Arias, Johan Mojica, Deiver Machado',
    mf:'Richard Rios, Jefferson Lerma, Kevin Castano, Juan Camilo Portilla, Gustavo Puerta, Jhon Arias, Jorge Carrascal, Juan Fernando Quintero, James Rodriguez, Jaminton Campaz',
    fw:'Juan Camilo Hernandez, Luis Diaz, Luis Suarez, Carlos Andres Gomez, Jhon Cordoba'
  },
  'England': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Jordan Pickford, Dean Henderson, James Trafford',
    df:'Reece James, Ezri Konsa, Jarell Quansah, John Stones, Marc Guehi, Dan Burn, Nico O’Reilly, Djed Spence, Tino Livramento',
    mf:'Declan Rice, Elliot Anderson, Kobbie Mainoo, Jordan Henderson, Morgan Rogers, Jude Bellingham, Eberechi Eze',
    fw:'Harry Kane, Ivan Toney, Ollie Watkins, Bukayo Saka, Marcus Rashford, Anthony Gordon, Noni Madueke'
  },
  'Croatia': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Dominik Livakovic, Dominik Kotarski, Ivor Pandur',
    df:'Josko Gvardiol, Duje Caleta-Car, Josip Sutalo, Josip Stanisic, Marin Pongracic, Kristijan Jakic, Martin Erlic, Luka Vuskovic',
    mf:'Luka Modric, Mateo Kovacic, Mario Pasalic, Nikola Vlasic, Luka Sucic, Martin Baturina, Petar Sucic, Nikola Moro, Toni Fruk',
    fw:'Ivan Perisic, Andrej Kramaric, Ante Budimir, Marco Pasalic, Petar Musa, Igor Matanovic'
  },
  'Ghana': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Joseph Anang, Benjamin Asare, Lawrence Ati-Zigi',
    df:'Jonas Adjetey, Derrick Luckassen, Gideon Mensah, Abdul Mumin, Jerome Opoku, Kojo Oppong Preprah, Baba Abdul Rahman, Alidu Seidu, Marvin Senaya',
    mf:'Augustine Boakye, Abdul Fatawu Issahaku, Elisha Owusu, Thomas Partey, Kwasi Sibo, Kamal Deen Sulemana, Caleb Yirenkyi',
    fw:'Prince Kwabena Adu, Jordan Ayew, Christopher Bonsu Baah, Ernest Nuamah, Antoine Semenyo, Brandon Thomas-Asante, Inaki Williams'
  },
  'Panama': {
    fonte:'Reuters, lista de elencos de 02/06/2026',
    gk:'Orlando Mosquera, Luis Mejia, Cesar Samudio',
    df:'Cesar Blackman, Jorge Gutierrez, Amir Murillo, Fidel Escobar, Andres Andrade, Edgardo Farina, Jose Cordoba, Eric Davis, Jiovany Ramos, Roderick Miller',
    mf:'Anibal Godoy, Adalberto Carrasquilla, Carlos Harvey, Cristian Martinez, Jose Luis Rodriguez, Cesar Yanis, Yoel Barcenas, Alberto Quintero, Azarias Londono',
    fw:'Ismael Diaz, Cecilio Waterman, Jose Fajardo, Tomas Rodriguez'
  }
};

function squadFor(team){
  return squads[rawTeam(team)] || squads[teamPT(team)] || squads[meta(team).pt] || null;
}
function squadCount(s){
  if(!s) return 0;
  return ['gk','df','mf','fw'].reduce((acc,k) => acc + (s[k] ? s[k].split(',').filter(Boolean).length : 0), 0);
}
function renderPlayerChips(text, pos){
  if(!text) return '<p class="empty-inline">Sem jogadores nesta categoria.</p>';
  return text.split(',').map(p => `<span class="player-chip"><b>${esc(pos)}</b>${esc(p.trim())}</span>`).join('');
}



const state = {
  matches: [],
  standings: null,
  bracket: null,
  health: [],
  search: '',
  group: '',
  stage: ''
};

const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rawTeam = t => typeof t === 'object' ? (t.label || t.name || t.team || t.slug || '') : (t || '');
const normalize = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();

function meta(team){
  const n = rawTeam(team);
  return teamMeta[n] || Object.entries(teamMeta).find(([k]) => normalize(k) === normalize(n))?.[1] || {pt:n,fifa:'---',iso:null,conf:'--'};
}
function teamPT(team){ return meta(team).pt || rawTeam(team); }
function flag(team){
  const iso = meta(team).iso;
  if(!iso) return `<span class="flag" style="display:grid;place-items:center;background:rgba(255,255,255,.08)">🏳️</span>`;
  const src = iso.startsWith('gb-') ? `https://flagcdn.com/${iso}.svg` : `https://flagcdn.com/w80/${iso}.png`;
  return `<img class="flag" src="${src}" alt="${esc(teamPT(team))}" loading="lazy">`;
}
function getHome(m){ return rawTeam(m.homeTeam || m.home || m.homeRef); }
function getAway(m){ return rawTeam(m.awayTeam || m.away || m.awayRef); }
function matchId(m){ return m.id || m.matchId || `2026-${String(m.matchNo || m.matchNumber || '').padStart(3,'0')}`; }
function matchNo(m){ return m.matchNo || m.matchNumber || m.match_number || ''; }
function kickoff(m){ return m.kickoffUtc || m.kickoffUTC || m.kickoff || m.date || ''; }
function dateObj(m){ const d = new Date(kickoff(m)); return isNaN(d) ? null : d; }
function dateLabel(d){ return d ? d.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'}) : 'Data indefinida'; }
function timeLabel(m){ const d = dateObj(m); return d ? d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}) : '--:--'; }
function fullDate(m){ const d = dateObj(m); return d ? d.toLocaleString('pt-BR',{dateStyle:'medium', timeStyle:'short'}) : kickoff(m); }
function stageOf(m){ return m.stageNormalized || m.stage || m.stageRaw || ''; }
function niceStage(s){ return stageNames[s] || String(s || '').replaceAll('_',' '); }
function groupOf(m){
  if(m.group) return String(m.group).replace('Group ','').toUpperCase();
  const s = stageOf(m);
  const g = String(s).match(/group[_-]?([a-l])/i);
  return g ? g[1].toUpperCase() : '';
}
function statusOf(m){
  const s = String(m.status || 'scheduled').toLowerCase();
  if(['live','halftime','in_progress'].includes(s)) return 'Ao vivo';
  if(['finished','final'].includes(s)) return 'Encerrado';
  if(s === 'postponed') return 'Adiado';
  return 'Pré-jogo';
}
function statusClass(m){
  const s = String(m.status || '').toLowerCase();
  if(['live','halftime','in_progress'].includes(s)) return 'live';
  if(['finished','final'].includes(s)) return 'done';
  return 'next';
}
function score(m){ return (m.homeScore != null && m.awayScore != null) ? `${m.homeScore} - ${m.awayScore}` : 'VS'; }
function isToday(m){ const d = dateObj(m), now = new Date(); return d && d.toDateString() === now.toDateString(); }
function stadiumInfo(name){
  const n = normalize(name);
  return stadiums.find(s => normalize(s.name) === n || normalize(s.original) === n || n.includes(normalize(s.original)) || n.includes(normalize(s.name)));
}
async function fetchAPI(endpoint){
  const res = await fetch(`${BASE_URL}${endpoint}`, {headers:{'X-API-Key':API_KEY}});
  if(!res.ok) throw new Error(`${res.status} ${endpoint}`);
  return res.json();
}

document.addEventListener('click', e => {
  const nav = e.target.closest('[data-section]');
  if(nav){
    showSection(nav.dataset.section);
  }
  const card = e.target.closest('[data-match-id]');
  if(card){
    showDetails(card.dataset.matchId);
  }
});
$('refreshBtn').addEventListener('click', init);
$('globalSearch').addEventListener('input', e => { state.search = e.target.value; renderAll(); });
$('groupFilter').addEventListener('change', e => { state.group = e.target.value; renderAll(); });
$('stageFilter').addEventListener('change', e => { state.stage = e.target.value; renderCalendar(); });

function showSection(id){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav').forEach(n => n.classList.toggle('active', n.dataset.section === id));
  const sec = $(id);
  if(sec) sec.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

async function init(){
  state.health = [];
  setLoading();
  try{
    const matchesData = await fetchAPI('/matches?year=2026&limit=200');
    state.matches = matchesData.data || matchesData.matches || [];
    state.health.push({name:'Calendário/resultados', status:'ok', info:`${state.matches.length} jogos carregados da API`});
  }catch(err){
    state.health.push({name:'Calendário/resultados', status:'err', info:'API não retornou calendário'});
    state.matches = [];
  }

  try{
    const standingsData = await fetchAPI('/standings?year=2026');
    state.standings = standingsData.groups || standingsData;
    state.health.push({name:'Classificação', status:'ok', info:'Endpoint de classificação disponível'});
  }catch(err){
    state.standings = computeStandings(state.matches);
    state.health.push({name:'Classificação', status:'warn', info:'Calculada localmente a partir dos placares'});
  }

  try{
    const bracketData = await fetchAPI('/bracket?year=2026');
    state.bracket = bracketData.stages || bracketData;
    state.health.push({name:'Chaveamento', status:'ok', info:'Endpoint de chaveamento disponível'});
  }catch(err){
    state.bracket = buildBracketFallback(state.matches);
    state.health.push({name:'Chaveamento', status:'warn', info:'Montado localmente por fase'});
  }

  state.health.push({name:'Dados complementares', status:'ok', info:'Grupos, países, bandeiras, estádios e notícias locais'});
  $('lastUpdated').textContent = new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
  $('statMatches').textContent = state.matches.length || 104;
  renderAll();
}

function setLoading(){
  ['featuredMatches','calendarList','groupsGrid','standingsGrid','bracketGrid','teamsGrid','stadiumsGrid','newsList'].forEach(id => {
    $(id).innerHTML = '<div class="loading">Carregando dados...</div>';
  });
}

function renderAll(){
  renderFilters();
  renderOverview();
  renderCalendar();
  renderGroups();
  renderStandings();
  renderBracket();
  renderTeams();
  renderStadiums();
  renderNews();
}

function filteredMatches(){
  let list = [...state.matches];
  const q = normalize(state.search);
  if(state.group) list = list.filter(m => groupOf(m) === state.group);
  if(state.stage) list = list.filter(m => stageOf(m) === state.stage);
  if(q){
    list = list.filter(m => normalize(`${getHome(m)} ${teamPT(getHome(m))} ${getAway(m)} ${teamPT(getAway(m))} ${m.stadium} ${m.city} ${niceStage(stageOf(m))}`).includes(q));
  }
  return list.sort((a,b) => (dateObj(a)?.getTime() || 0) - (dateObj(b)?.getTime() || 0) || Number(matchNo(a))-Number(matchNo(b)));
}

function renderFilters(){
  const groupsKeys = Object.keys(groups);
  $('groupFilter').innerHTML = '<option value="">Todos os grupos</option>' + groupsKeys.map(g => `<option value="${g}" ${state.group===g?'selected':''}>Grupo ${g}</option>`).join('');
  const stages = [...new Set(state.matches.map(stageOf).filter(Boolean))];
  $('stageFilter').innerHTML = '<option value="">Todas as fases</option>' + stages.map(s => `<option value="${esc(s)}" ${state.stage===s?'selected':''}>${esc(niceStage(s))}</option>`).join('');
}

function renderOverview(){
  const today = state.matches.filter(isToday);
  const live = state.matches.filter(m => statusClass(m) === 'live');
  const next = state.matches.filter(m => (dateObj(m)?.getTime() || 0) >= Date.now()).slice(0,4);
  const featured = live.length ? live : (today.length ? today : next.length ? next : state.matches.slice(0,4));
  $('todayLabel').textContent = live.length ? `${live.length} ao vivo` : today.length ? `${today.length} hoje` : 'Próximos jogos';
  $('featuredMatches').innerHTML = featured.map(matchCard).join('') || '<div class="empty"><strong>Sem partidas carregadas.</strong><br>Verifique a chave/API.</div>';
  $('groupsPreview').innerHTML = Object.entries(groups).slice(0,6).map(groupCard).join('');
  $('newsPreview').innerHTML = news.slice(0,3).map(newsItem).join('');
  $('quickStats').innerHTML = renderQuickStats();
}

function matchCard(m){
  const home = getHome(m), away = getAway(m);
  const st = stadiumInfo(m.stadium);
  const meta = [niceStage(stageOf(m)), groupOf(m) ? `Grupo ${groupOf(m)}` : '', m.stadium || st?.name || '', fullDate(m)].filter(Boolean);
  return `<article class="match-card ${statusClass(m)} ${isToday(m)?'today':''}" data-match-id="${esc(matchId(m))}">
    <div class="match-top">
      <span class="badge ${statusClass(m)}">${esc(statusOf(m))}</span>
      <span class="match-stage">Jogo ${esc(matchNo(m))}</span>
    </div>
    <div class="scoreboard">
      <div class="team">${flag(home)}<span title="${esc(teamPT(home))}">${esc(teamPT(home))}</span></div>
      <div class="score">${esc(score(m))}</div>
      <div class="team away"><span title="${esc(teamPT(away))}">${esc(teamPT(away))}</span>${flag(away)}</div>
    </div>
    <div class="match-meta">${meta.map(x => `<span>${esc(x)}</span>`).join('')}</div>
  </article>`;
}


function renderQuickStats(){
  const played = state.matches.filter(m => m.homeScore != null && m.awayScore != null).length;
  const goals = state.matches.reduce((acc,m) => acc + (Number(m.homeScore) || 0) + (Number(m.awayScore) || 0), 0);
  const avg = played ? (goals / played).toFixed(2).replace('.', ',') : '0,00';
  const confs = [...new Set(Object.values(teamMeta).map(t => t.conf).filter(Boolean))].length;

  return `
    <div class="quick-stat-card">
      <strong>${played}</strong>
      <span>Jogos disputados</span>
    </div>
    <div class="quick-stat-card">
      <strong>${goals}</strong>
      <span>Gols marcados</span>
    </div>
    <div class="quick-stat-card">
      <strong>${avg}</strong>
      <span>Média de gols</span>
    </div>
    <div class="quick-stat-card">
      <strong>48</strong>
      <span>Seleções</span>
    </div>
    <div class="quick-stat-card">
      <strong>${confs}</strong>
      <span>Confederações</span>
    </div>
    <div class="quick-stat-card">
      <strong>16</strong>
      <span>Estádios</span>
    </div>
  `;
}

function renderCalendar(){
  const list = filteredMatches();
  const grouped = {};
  for(const m of list){
    const d = dateObj(m);
    const key = d ? d.toISOString().slice(0,10) : 'sem-data';
    (grouped[key] ||= []).push(m);
  }
  $('calendarList').innerHTML = Object.entries(grouped).map(([day,ms]) => {
    const d = day === 'sem-data' ? null : new Date(day + 'T12:00:00');
    return `<div class="day-block">
      <div class="day-head"><div><small>${esc(dateLabel(d))}</small><h3>${day === 'sem-data' ? 'Data indefinida' : esc(day.split('-').reverse().join('/'))}</h3></div><b>${ms.length} jogos</b></div>
      <div class="day-games">${ms.map(matchCard).join('')}</div>
    </div>`;
  }).join('') || '<div class="empty"><strong>Nenhum jogo encontrado.</strong></div>';
}

function groupCard([g,teams]){
  return `<div class="group-card">
    <h3>Grupo ${esc(g)}</h3>
    <ol>${teams.map(t => `<li>${flag(t)}<b>${esc(teamPT(t))}</b><small>${esc(meta(t).fifa)}</small></li>`).join('')}</ol>
  </div>`;
}
function renderGroups(){ $('groupsGrid').innerHTML = Object.entries(groups).map(groupCard).join(''); }

function computeStandings(matches){
  const table = {};
  for(const [g,teams] of Object.entries(groups)){
    table[g] = teams.map(t => ({team:t, played:0, won:0, drawn:0, lost:0, goalsFor:0, goalsAgainst:0, goalDifference:0, points:0, position:null}));
  }
  for(const m of matches){
    const g = groupOf(m);
    if(!table[g] || m.homeScore == null || m.awayScore == null) continue;
    const home = table[g].find(r => normalize(r.team) === normalize(getHome(m)));
    const away = table[g].find(r => normalize(r.team) === normalize(getAway(m)));
    if(!home || !away) continue;
    home.played++; away.played++;
    home.goalsFor += Number(m.homeScore); home.goalsAgainst += Number(m.awayScore);
    away.goalsFor += Number(m.awayScore); away.goalsAgainst += Number(m.homeScore);
    if(m.homeScore > m.awayScore){ home.won++; home.points += 3; away.lost++; }
    else if(m.homeScore < m.awayScore){ away.won++; away.points += 3; home.lost++; }
    else { home.drawn++; away.drawn++; home.points++; away.points++; }
  }
  for(const rows of Object.values(table)){
    rows.forEach(r => r.goalDifference = r.goalsFor - r.goalsAgainst);
    rows.sort((a,b) => b.points-a.points || b.goalDifference-a.goalDifference || b.goalsFor-a.goalsFor || a.team.localeCompare(b.team));
    rows.forEach((r,i) => r.position = i+1);
  }
  return table;
}

function renderStandings(){
  const data = state.standings || computeStandings(state.matches);
  $('standingsGrid').innerHTML = Object.entries(data).map(([g,rows]) => `<div class="group-card">
    <h3>Grupo ${esc(g)}</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>PTS</th></tr></thead>
      <tbody>${rows.map((r,i) => `<tr>
        <td><div class="team-cell"><span class="rank">${r.position || i+1}</span>${flag(r.team)}<b>${esc(teamPT(r.team))}</b></div></td>
        <td>${r.played ?? 0}</td><td>${r.won ?? 0}</td><td>${r.drawn ?? 0}</td><td>${r.lost ?? 0}</td>
        <td>${r.goalsFor ?? 0}</td><td>${r.goalsAgainst ?? 0}</td><td>${r.goalDifference ?? 0}</td><td><b>${r.points ?? 0}</b></td>
      </tr>`).join('')}</tbody>
    </table></div>
  </div>`).join('');
}

function buildBracketFallback(matches){
  const out = {};
  for(const m of matches.filter(m => !groupOf(m))){
    const stage = stageOf(m) || 'mata_mata';
    (out[stage] ||= []).push(m);
  }
  return out;
}
function renderBracket(){
  const data = state.bracket || {};
  const entries = Object.entries(data);
  $('bracketGrid').innerHTML = entries.length ? entries.map(([stage,ms]) => `<div class="round">
    <h3>${esc(niceStage(stage))}</h3>
    ${(ms||[]).map(m => {
      const home = rawTeam(m.home || m.homeTeam || m.homeRef || getHome(m));
      const away = rawTeam(m.away || m.awayTeam || m.awayRef || getAway(m));
      return `<div class="fixture">
        <div class="fixture-row">${flag(home)}<b>${esc(teamPT(home))}</b><span>${m.homeScore ?? ''}</span></div>
        <div class="fixture-row">${flag(away)}<b>${esc(teamPT(away))}</b><span>${m.awayScore ?? ''}</span></div>
        <small>${esc(fullDate(m))}</small>
      </div>`;
    }).join('')}
  </div>`).join('') : '<div class="empty"><strong>Chaveamento ainda não disponível.</strong><br>Quando a API resolver os confrontos, esta área será preenchida.</div>';
}

function renderTeams(){
  const list = Object.entries(groups).flatMap(([group,teams]) => teams.map(team => ({group,team})));
  const q = normalize(state.search);
  const filtered = q ? list.filter(x => normalize(`${x.team} ${teamPT(x.team)} ${meta(x.team).fifa} ${meta(x.team).conf}`).includes(q)) : list;
  $('teamsGrid').innerHTML = filtered.map(({group,team}) => `<article class="team-card" data-team="${esc(team)}">
    <div class="team-card-head">${flag(team)}<h3>${esc(teamPT(team))}</h3></div>
    <div class="meta-list">
      <span><b>Grupo:</b> ${esc(group)}</span>
      <span><b>Código FIFA:</b> ${esc(meta(team).fifa)}</span>
      <span><b>Confederação:</b> ${esc(meta(team).conf)}</span>
      <span><b>Elenco:</b> ${squadCount(squadFor(team)) || 'Não carregado'} jogadores</span>
    </div>
    <button class="ghost" onclick="loadRoster('${esc(team)}')">Ver elenco completo</button>
  </article>`).join('');
}

function renderStadiums(){
  $('stadiumsGrid').innerHTML = stadiums.map(s => `<article class="stadium-card">
    <h3>${esc(s.name)}</h3>
    <div class="meta-list">
      <span><b>Nome original:</b> ${esc(s.original)}</span>
      <span><b>Cidade:</b> ${esc(s.city)} • ${esc(s.country)}</span>
      <span><b>Capacidade:</b> ${s.capacity.toLocaleString('pt-BR')}</span>
      <span><b>Jogos previstos:</b> ${s.matches}</span>
      <span><b>Cobertura:</b> ${esc(s.roof)}</span>
      ${s.highlight ? `<span><b>Destaque:</b> ${esc(s.highlight)}</span>` : ''}
    </div>
  </article>`).join('');
}

function newsItem(n){
  return `<article class="news-item"><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p><small>${esc(n.source)} • ${esc(n.date)}</small></article>`;
}
function renderNews(){
  $('newsList').innerHTML = news.map(newsItem).join('');
}

window.showDetails = function(id){
  const m = state.matches.find(x => matchId(x) === id);
  if(!m) return;
  showSection('details');
  const home = getHome(m), away = getAway(m);
  const st = stadiumInfo(m.stadium);
  $('detailsPanel').innerHTML = `<div class="details-grid">
    <div>
      <div class="scoreboard">
        <div class="team">${flag(home)}<span>${esc(teamPT(home))}</span></div>
        <div class="detail-score">${esc(score(m))}</div>
        <div class="team away"><span>${esc(teamPT(away))}</span>${flag(away)}</div>
      </div>
      <div class="match-meta" style="margin-top:20px">
        <span>${esc(statusOf(m))}</span><span>${esc(fullDate(m))}</span><span>${esc(niceStage(stageOf(m)))}</span>${groupOf(m)?`<span>Grupo ${esc(groupOf(m))}</span>`:''}
      </div>
      <h3>Eventos</h3>
      ${(m.events||[]).length ? `<div class="news-list">${m.events.map(ev => `<div class="news-item"><b>${esc(ev.minute ?? '')}' ${esc(ev.type || 'Evento')}</b><p>${esc(ev.player || ev.team || '')}</p></div>`).join('')}</div>` : '<div class="empty"><strong>Sem eventos detalhados.</strong><br>A API não retornou gols/cartões para este jogo.</div>'}
    </div>
    <div>
      <h3>Local</h3>
      <div class="meta-list">
        <span><b>Estádio:</b> ${esc(m.stadium || st?.name || 'Não informado')}</span>
        <span><b>Cidade:</b> ${esc(m.city || st?.city || 'Não informado')}</span>
        ${st ? `<span><b>Capacidade:</b> ${st.capacity.toLocaleString('pt-BR')}</span><span><b>Nome original:</b> ${esc(st.original)}</span>` : ''}
      </div>
    </div>
  </div>`;
};

window.loadRoster = async function(team){
  showSection('details');
  const local = squadFor(team);

  if(local){
    $('detailsPanel').innerHTML = `<h2>${flag(team)} ${esc(teamPT(team))}</h2>
      <p style="color:var(--muted)">Elenco complementar carregado localmente. Fonte: ${esc(local.fonte)}.</p>
      <div class="roster-sections">
        <section><h3>Goleiros</h3><div class="chip-grid">${renderPlayerChips(local.gk,'GK')}</div></section>
        <section><h3>Defensores</h3><div class="chip-grid">${renderPlayerChips(local.df,'DF')}</div></section>
        <section><h3>Meio-campistas</h3><div class="chip-grid">${renderPlayerChips(local.mf,'MF')}</div></section>
        <section><h3>Atacantes</h3><div class="chip-grid">${renderPlayerChips(local.fw,'FW')}</div></section>
      </div>`;
    return;
  }

  $('detailsPanel').innerHTML = `<div class="loading">Buscando elenco de ${esc(teamPT(team))} pela API...</div>`;
  try{
    const data = await fetchAPI(`/teams/${encodeURIComponent(team)}/roster?year=2026`);
    const players = data.players || data.data || [];
    $('detailsPanel').innerHTML = `<h2>${flag(team)} ${esc(teamPT(team))}</h2>
      <p style="color:var(--muted)">Elenco retornado pela API.</p>
      ${players.length ? `<div class="roster-grid">${players.map(p => `<div class="player-card"><b>${esc(p.name || p.playerName || '')}</b><span>${esc(p.position || '')} • ${esc(p.club || '')}</span></div>`).join('')}</div>` : '<div class="empty"><strong>A API não retornou jogadores para esta seleção.</strong></div>'}`;
  }catch(err){
    $('detailsPanel').innerHTML = `<h2>${flag(team)} ${esc(teamPT(team))}</h2>
      <div class="empty"><strong>Elenco ainda não disponível.</strong><br>Adicione esta seleção no objeto <code>squads</code> do app.js ou rode um scraper complementar.</div>`;
  }
};

init();
