//Constantes
const coloresArray = ['NA', 'BL', 'BR', 'PL', 'PU']

//Imagenes desktop
const imagen = document.getElementById('imagen');
const completeImg1 = document.getElementById('completeImg1');
const completeImg2 = document.getElementById('completeImg2');
const completeImg3 = document.getElementById('completeImg3');
const completeImg4 = document.getElementById('completeImg4');
const completeImg5 = document.getElementById('completeImg5');
const completeImg6 = document.getElementById('completeImg6');
const completeImg7 = document.getElementById('completeImg7');
const grupo1 =  document.getElementById('grupo1');
const ruedos1 = document.getElementById('ruedos1');
const ruedos2 =  document.querySelector('#ruedos2');
const manubrioImg1 = document.querySelector('#manubrioImg1');
const l__img = document.querySelectorAll('.l-img');

//Imagenes Mobile
const imagenMobile = document.getElementById('imagenMobile');
const completeImg1Mobile = document.getElementById('completeImg1Mobile');
const grupoMobile1 =  document.getElementById('grupoMobile1');
const ruedos1Mobile = document.getElementById('ruedos1Mobile');
const ruedos2Mobile =  document.getElementById('ruedos2Mobile');
const manubrioImgMobile1 = document.querySelector('#manubrioImgMobile1');


const webflowSrc = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62';
const gifImgLoading = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62e8909354b3000715341c62_loader.gif';

//variables codigo
const camara = '00';
const bg = 0;
const type = 0;
var seatpost = 0;
var headset = 0;
var stem = 0;


// Variables para seccion de geometria
var geometrias = ['Endurance', 'Allrounder', 'Race']
var elem = document.querySelector('#geometriaBici');
var geometriaFinal; //variable a tomar para el carro

// Variables para seccion de tamano 
var finalSize;

//Variables de inputs radio buttons
var manubrioFinal = 0;
var groupsetFinal = 0;
var rinesFinal = 0;
var baseFinal = 0;
var disenoFinal = 0;
var estiloFinal = 0;
var colorFinal = 'NA';


// CODE BIKE
var CODE = '000000011NA000'

/* -------------- CODIGOS BIKES -------------- */  
const BICIS_URLS = {
    //Camata 0
    '000000011BR000' : webflowSrc +'cdf4d096635f3b9ace1875_000000011BR000.png', 
    '000000011BL000' : webflowSrc +'cdf4cecf93ed0cef29ad28_000000011BL000.png', 
    '000000011NA000' : webflowSrc +'cdf4d2bdc9adb57733debe_000000011NA000.png', 
    '000000011PL000' : webflowSrc +'cdf4d0cf93ed5e6929ad60_000000011PL000.png', 
    '000000011PU000' : webflowSrc +'cdf4d071d253283b7a69d4_000000011PU000.png', 
    '000000111BL000' : webflowSrc +'cdf4d171d253fb657a69d5_000000111BL000.png', 
    '000000111BR000' : webflowSrc +'cdf4d1cf93ed80fb29ad65_000000111BR000.png', 
    '000000111NA000' : webflowSrc +'cdf4cf6e3bd9a843053906_000000111NA000.png', 
    '000000111PL000' : webflowSrc +'cdf4d2cf93edf9c529ad66_000000111PL000.png', 
    '000000111PU000' : webflowSrc +'cdf4d4c98653097463d109_000000111PU000.png', 
    '000001011BL000' : webflowSrc +'cdf4d7d6c33ae66a7cddb9_000001011BL000.png', 
    '000001011BR000' : webflowSrc +'cdf4d756b85db7092b55e1_000001011BR000.png', 
    '000001011NA000' : webflowSrc +'cdf4d807de4e5ec9de89ad_000001011NA000.png', 
    '000001011PL000' : webflowSrc +'cdf4d788e7e13351224a8e_000001011PL000.png', 
    '000001011PU000' : webflowSrc +'cdf4d707de4e4ffdde89ab_000001011PU000.png', 
    '000001111BL000' : webflowSrc +'cdf4d796635f7abdce18a5_000001111BL000.png', 
    '000001111BR000' : webflowSrc +'cdf4d8c0b1efa67750b91d_000001111BR000.png', 
    '000001111NA000' : webflowSrc +'cdf4deeb73d1d2beb6aa74_000001111NA000.png', 
    '000001111PL000' : webflowSrc +'cdf4dfc0b1ef0c6650b95e_000001111PL000.png', 
    '000001111PU000' : webflowSrc +'cdf4dfdfb27b7d357057ac_000001111PU000.png',
    '000000100NA000' : webflowSrc +'cedb42f27d050c6a2d4b75_000000100NA000.png',
    '000000000PL000' : webflowSrc +'cedb43ee83f7716dc71c28_000000000PL000.png',
    '000000000PU000' : webflowSrc +'cedb442ab9f20527403935_000000000PU000.png',
    '000000100BR000' : webflowSrc +'cedb44caee4248a8b44fe6_000000100BR000.png',
    '000000100PU000' : webflowSrc +'cedb453075ee1620390489_000000100PU000.png',
    '000000100BL000' : webflowSrc +'cedb442b272f0c8c446d7d_000000100BL000.png',
    '000000000BR000' : webflowSrc +'cedb4509417aeab0379a31_000000000BR000.png',
    '000000000NA000' : webflowSrc +'cedb457f810801e92c4cd6_000000000NA000.png',
    '000001000BL000' : webflowSrc +'cedb462ab9f2611b403959_000001000BL000.png',
    '000001000BR000' : webflowSrc +'cedb46dadba9a05b9015c9_000001000BR000.png',
    '000001000NA000' : webflowSrc +'cedb47155fca9eba1f133e_000001000NA000.png',
    '000001100BR000' : webflowSrc +'cedb48ee83f73ca7c71c46_000001100BR000.png',
    '000001100NA000' : webflowSrc +'cedb48f858d86cf517157b_000001100NA000.png',
    '000001000PL000' : webflowSrc +'cedb49ee83f73cd1c71c47_000001000PL000.png',
    '000001100BL000' : webflowSrc +'cedb4945e2db7e2afdfab3_000001100BL000.png',
    '000001100PU000' : webflowSrc +'cedb4c155fca36361f1353_000001100PU000.png',
    '000000000BL000' : webflowSrc +'cedb4e3075eee44f39052e_000000000BL000.png',
    '000001100PL000' : webflowSrc +'cedb4e1080c206a6f8d23f_000001100PL000.png',
    '000000100PL000' : webflowSrc +'cedb41ee83f762fac71c22_000000100PL000.png',
   
    //Camara1
    // Vista de enfrente
    '010000000BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b3249ba536048d3422b_010000000BR000.png',
    '010001100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b32d51c79146a2a18e3_010001100PU000.png',
    '010000000BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b32d51c797bd32a18e2_010000000BL000.png',
    '010001100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b3219f62c73aad840bc_010001100PL000.png',
    '010001100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b3249ba538024d3422a_010001100NA000.png',
    '010001100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b3234f1822219970da3_010001100BL000.png',
    '010001100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b320e07ab5f26d05a48_010001100BR000.png',
    '010001000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b325d3ddba89c85c442_010001000PL000.png',
    '010001000PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b32cb5c40781a924d95_010001000PU000.png',
    '010001000NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b32360d59242842bae8_010001000NA000.png',
    '010001000BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b32af5e2e2045a8297c_010001000BR000.png',
    '010001000BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2e7556583c4bd9d36f_010001000BL000.png',
    '010000100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2da73d908000934e69_010000100PU000.png',
    '010000100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2da73d908000934e69_010000100PU000.png',
    '010000100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2dfc49d703e4e7d840_010000100BL000.png',
    '010000100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2d34f18210da970d97_010000100BR000.png',
    '010000000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2da73d9043a8934e68_010000000PL000.png',
    '010000100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2d49ba532c10d341b9_010000100NA000.png',
    '010000000PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2dfc49d798f0e7d83f_010000000PU000.png',
    '010000100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2d49432b011c017a21_010000100PL000.png',
    '010001011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b29f9c5ba1534845ce0_010001011PL000.png',
    '010001111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b299c1357ccffac9330_010001111BR000.png',
    '010001111BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b29aa648fc672073957_010001111BL000.png',
    '010001011PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b29683aff60e098578f_010001011PU000.png',
    '010000111PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b29727756bcc5784ddd_010000111PU000.png',
    '010001011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2949ba538e60d3412c_010001011BL000.png',
    '010001011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b24f9c5ba0e13845c2a_010001011NA000.png',
    '010001011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b24f9c5ba3cac845c29_010001011BR000.png',
    '010000111PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b24af5e2e2da3a82927_010000111PL000.png',
    '010000111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b240e07ab6c40d059f2_010000111BR000.png',
    '010000111NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b24ccbacc50d5ed109e_010000111NA000.png',
    '010000011PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2219f62c3097d83ded_010000011PU000.png',
    '010000011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b22d51c79b49f2a182b_010000011BL000.png',
    '010000011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2249ba53d423d340b1_010000011BR000.png',
    '010001111PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2219f62c8068d83dc5_010001111PL000.png',
    '010000111BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b227277564d3e784dc9_010000111BL000.png',
    '010000011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b21f9c5ba2d69845bfa_010000011PL000.png',
    '010001111PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b21727756be6c784dc8_010001111PU000.png',
    '010000011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b2119f62c9dbdd83dc3_010000011NA000.png',
    '010001111NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33b1949432be1200178d4_010001111NA000.png',
        //Camara 02
        //Lanta trasera
    '020000011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de5d51c79e0762a30b5_020000011PL000.png',
    '020000011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de734f1822c01972a0a_020000011BR000.png',
    '020000111BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de77fcc9cc95e8e1dd8_020000111BL000.png',
    '020000011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de7ada60653df82ce49_020000011BL000.png',
    '020001111PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de749ba5313b4d354c7_020001111PL000.png',
    '020001111NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de75d3ddb712c85f52a_020001111NA000.png',
    '020001111PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de704d0a32994567770_020001111PU000.png',
    '020000011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33de8ada6069acf82ce52_020000011NA000.png',
    '020000111PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e1849432b9aa3019a9e_020000111PL000.png',
    '020000111PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18e20c18af12881c39_020000111PU000.png',
    '020000011PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18fc49d75617e7fc5d_020000011PU000.png',
    '020000111NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18a73d9018ac9375a6_020000111NA000.png',
    '020000111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18cb5c405799926fb2_020000111BR000.png',
    '020001011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e187fcc9c03c88e2ed3_020001011BL000.png',
    '020001011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18d51c79b6fb2a3114_020001011NA000.png',
    '020001011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18d51c794ab42a3115_020001011BR000.png',
    '020001111BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18d51c7990532a3116_020001111BL000.png',
    '020001011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18b7f9bc26462809f7_020001011PL000.png',
    '020001011PU000' :'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18ccbacc035fed2f1f_020001011PU000.png',
    '020001111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18af5e2e49cea8544f_020001111BR000.png',
    '020000000PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e18d51c79bc4d2a3117_020000000PU000.png',
    '020000100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e2319f62c0793d8817f_020000100BR000.png',
    '020000100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e2319f62c180bd88180_020000100PU000.png',
    '020000100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e235d3ddb730785f92d_020000100BL000.png',
    '020001000BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e2319f62c5d03d88181_020001000BR000.png',
    '020000100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e23360d59280642d6bd_020000100PL000.png',
    '020001000BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e23cb5c40a6c4927061_020001000BL000.png',
    '020001000NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e23ada606684f82d549_020001000NA000.png',
    '020001000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e23683aff2f62987fa5_020001000PL000.png',
    '020001000PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e24683aff12bb987fb6_020001000PU000.png',
    '020001100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e24aa648fa717076283_020001100BR000.png',
    '020000000BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e24b7f9bc8de9280a15_020000000BR000.png',
    '020000000NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e245d3ddbb1f785f92e_020000000NA000.png', 
    '020001100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e240e07ab332ad07db1_020001100BL000.png', 
    '020001100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e2972775678167873aa_020001100NA000.png', 
    '020000000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e2a5d3ddb147885f935_020000000PL000.png', 
    '020001100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e29aa648f6a5b0762c0_020001100PL000.png', 
    '020000100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33e297fcc9c678b8e3310_020000100NA000.png', 
        // camara 03
    '030000011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee7d51c7923612a3f9e_030000011BR000.png', 
    '030000011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee7727756f8017885bd_030000011BL000.png', 
    '030000011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee77fcc9c4d748e428f_030000011NA000.png', 
    '030000011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee8d51c7915aa2a3f9f_030000011PL000.png', 
    '030000111BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee8fc49d7c0dde80a84_030000111BL000.png', 
    '030000011PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee8cb5c40a87e9282d4_030000011PU000.png', 
    '030000111NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee8683afff37f98936a_030000111NA000.png', 
    '030000111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33ee875565869ccda00a4_030000111BR000.png', 
    '030000111PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eecf9c5ba8d3e84a8db_030000111PU000.png', 
    '030001011PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eed0e07ab36d8d08f88_030001011PL000.png', 
    '030001011BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eedcb5c4032e9928394_030001011BL000.png', 
    '030001111BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eed04d0a314e2567d6b_030001111BR000.png', 
    '030000111PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eeeaf5e2ed832a85a8a_030000111PL000.png', 
    '030001011BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eef683aff7fba989390_030001011BR000.png', 
    '030001011NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33eefada606531282ec2f_030001011NA000.png', 
    '030000000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33efd49ba535e55d36524_030000000PL000.png', 
    '030000100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33efdf9c5ba4f4584aa03_030000100BL000.png', 
    '030000100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33efd04d0a3afef567e00_030000100NA000.png', 
    '030000100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33efdccbacc2e4fed56d6_030000100BR000.png', 
    '030001000PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f02a73d908bcc938d5b_030001000PL000.png', 
    '030000100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f02683aff103298945c_030000100PU000.png', 
    '030001000BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f025bbb7443e05eebfc_030001000BL000.png', 
    '030001100BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f02683affdc59989484_030001100BL000.png', 
    '030000100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f02ada606f6b682ed78_030000100PL000.png', 
    '030001100BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f027277565e147887e8_030001100BR000.png', 
    '030001000BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f0249432b81ce01ad98_030001000BR000.png', 
    '030001000NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f025d3ddbe3b0860a5b_030001000NA000.png', 
    '030001000PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f03ada606bc5282ed88_030001000PU000.png', 
    '030001100NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f03fc49d75b30e80b40_030001100NA000.png', 
    '030001100PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f0349ba535263d3668b_030001100PL000.png', 
    '030001100PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d33f04e20c184cdb882595_030001100PU000.png', 
        //camara 04
    '040000011PL000': webflowSrc +'d0369290100c7a41d649dd_040000011PL000.png',
    '040000011NA000':webflowSrc +'d03693dd830171be3cdcce_040000011NA000.png',
    '040000111BL000':webflowSrc +'d03693c851de0184616d77_040000111BL000.png',
    '040000111BR000':webflowSrc +'d03693cd07e8549799e1d4_040000111BR000.png',
    '040000011PU000':webflowSrc +'d036930a93897c01657d76_040000011PU000.png',
    '040000011BL000':webflowSrc +'d036943536f83a2ca8214c_040000011BL000.png',
    '040000011BR000':webflowSrc +'d0369491c162422e5b7f43_040000011BR000.png',
    '040000111NA000':webflowSrc +'d03695016f1d73ea388d11_040000111NA000.png',
    '040000111PU000':webflowSrc +'d03695dd830179a43cdcd1_040000111PU000.png',
    '040000111PL000':webflowSrc +'d03699c156d87aa9759157_040000111PL000.png',
    '040001011BL000':webflowSrc +'d0369ae3bf263a5f914172_040001011BL000.png',
    '040001011BR000':webflowSrc +'d0369b79897d1a0db2ed24_040001011BR000.png',
    '040001011PL000':webflowSrc +'d0369baecc912b0d2bf56e_040001011PL000.png',
    '040001111BL000':webflowSrc +'d0369c1dbabb3f6b7b872f_040001111BL000.png',
    '040001011PU000':webflowSrc +'d0369dd352666976dd0bab_040001011PU000.png',
    '040001111BR000':webflowSrc +'d0369ef1d266f836dfefc1_040001111BR000.png',
    '040001111NA000':webflowSrc +'d0369f05041a9c562252b0_040001111NA000.png',
    '040001011NA000':webflowSrc +'d036a558162732e28f3366_040001011NA000.png',
    '040001111PU000':webflowSrc +'d036a5687fc574b7e05e59_040001111PU000.png',
    '040001111PL000':webflowSrc +'d036a6d4ca7e65172f9699_040001111PL000.png',
    '040000100NA000':webflowSrc +'d036c91dbabb5a8f7b89b8_040000100NA000.png',
    '040000000PU000':webflowSrc +'d036c93710e4411ec5e28e_040000000PU000.png',
    '040000100BL000':webflowSrc +'d036c9f1d2662e20dff1a1_040000100BL000.png',
    '040000000BL000':webflowSrc +'d036c985a6cb7864800542_040000000BL000.png',
    '040000100BR000':webflowSrc +'d036c9d4ca7ee1cd2f984f_040000100BR000.png',
    '040000000NA000':webflowSrc +'d036cacdb1dee785107f8e_040000000NA000.png',
    '040000000PL000':webflowSrc +'d036ca3ab65f4625bf9e6f_040000000PL000.png',
    '040000000BR000':webflowSrc +'d036cb79897d5f8fb2ee5d_040000000BR000.png',
    '040000100PU000':webflowSrc +'d036cccc3b31adb658ec67_040000100PU000.png',
    '040001000PL000':webflowSrc +'d036cd90100cca2ad64d2c_040001000PL000.png',
    '040001000BR000':webflowSrc +'d036cd58162765b28f3414_040001000BR000.png',
    '040000100PL000':webflowSrc +'d036cd05041a03d522547e_040000100PL000.png',
    '040001100BR000':webflowSrc +'d036ceac0f8ab83f33e03c_040001100BR000.png',
    '040001000PU000':webflowSrc +'d036d24112809f4370e6f7_040001000PU000.png',
    '040001100BL000':webflowSrc +'d036d2cdb1de0729108043_040001100BL000.png',
    '040001000BL000':webflowSrc +'d036d390100c0fa9d64d8b_040001000BL000.png',
    '040001100NA000':webflowSrc +'d036d3aecc91d7522bf7e5_040001100NA000.png',
    '040001100PL000':webflowSrc +'d036d3d3526686f3dd0f88_040001100PL000.png',
    '040001100PU000':webflowSrc +'d036d39d852b23ada98f27_040001100PU000.png',
    '040001000NA000':webflowSrc +'d036d83536f86609a82459_040001000NA000.png',
    
    //Camara 05
    '040000011PL000': webflowSrc +'d0369290100c7a41d649dd_040000011PL000.png',
    '040000011NA000':webflowSrc +'d03693dd830171be3cdcce_040000011NA000.png',
    '040000111BL000':webflowSrc +'d03693c851de0184616d77_040000111BL000.png',
    '040000111BR000':webflowSrc +'d03693cd07e8549799e1d4_040000111BR000.png',
    '040000011PU000':webflowSrc +'d036930a93897c01657d76_040000011PU000.png',
    '040000011BL000':webflowSrc +'d036943536f83a2ca8214c_040000011BL000.png',
    '040000011BR000':webflowSrc +'d0369491c162422e5b7f43_040000011BR000.png',
    '040000111NA000':webflowSrc +'d03695016f1d73ea388d11_040000111NA000.png',
    '040000111PU000':webflowSrc +'d03695dd830179a43cdcd1_040000111PU000.png',
    '040000111PL000':webflowSrc +'d03699c156d87aa9759157_040000111PL000.png',
    '040001011BL000':webflowSrc +'d0369ae3bf263a5f914172_040001011BL000.png',
    '040001011BR000':webflowSrc +'d0369b79897d1a0db2ed24_040001011BR000.png',
    '040001011PL000':webflowSrc +'d0369baecc912b0d2bf56e_040001011PL000.png',
    '040001111BL000':webflowSrc +'d0369c1dbabb3f6b7b872f_040001111BL000.png',
    '040001011PU000':webflowSrc +'d0369dd352666976dd0bab_040001011PU000.png',
    '040001111BR000':webflowSrc +'d0369ef1d266f836dfefc1_040001111BR000.png',
    '040001111NA000':webflowSrc +'d0369f05041a9c562252b0_040001111NA000.png',
    '040001011NA000':webflowSrc +'d036a558162732e28f3366_040001011NA000.png',
    '040001111PU000':webflowSrc +'d036a5687fc574b7e05e59_040001111PU000.png',
    '040001111PL000':webflowSrc +'d036a6d4ca7e65172f9699_040001111PL000.png',
    '040000100NA000':webflowSrc +'d036c91dbabb5a8f7b89b8_040000100NA000.png',
    '040000000PU000':webflowSrc +'d036c93710e4411ec5e28e_040000000PU000.png',
    '040000100BL000':webflowSrc +'d036c9f1d2662e20dff1a1_040000100BL000.png',
    '040000000BL000':webflowSrc +'d036c985a6cb7864800542_040000000BL000.png',
    '040000100BR000':webflowSrc +'d036c9d4ca7ee1cd2f984f_040000100BR000.png',
    '040000000NA000':webflowSrc +'d036cacdb1dee785107f8e_040000000NA000.png',
    '040000000PL000':webflowSrc +'d036ca3ab65f4625bf9e6f_040000000PL000.png',
    '040000000BR000':webflowSrc +'d036cb79897d5f8fb2ee5d_040000000BR000.png',
    '040000100PU000':webflowSrc +'d036cccc3b31adb658ec67_040000100PU000.png',
    '040001000PL000':webflowSrc +'d036cd90100cca2ad64d2c_040001000PL000.png',
    '040001000BR000':webflowSrc +'d036cd58162765b28f3414_040001000BR000.png',
    '040000100PL000':webflowSrc +'d036cd05041a03d522547e_040000100PL000.png',
    '040001100BR000':webflowSrc +'d036ceac0f8ab83f33e03c_040001100BR000.png',
    '040001000PU000':webflowSrc +'d036d24112809f4370e6f7_040001000PU000.png',
    '040001100BL000':webflowSrc +'d036d2cdb1de0729108043_040001100BL000.png',
    '040001000BL000':webflowSrc +'d036d390100c0fa9d64d8b_040001000BL000.png',
    '040001100NA000':webflowSrc +'d036d3aecc91d7522bf7e5_040001100NA000.png',
    '040001100PL000':webflowSrc +'d036d3d3526686f3dd0f88_040001100PL000.png',
    '040001100PU000':webflowSrc +'d036d39d852b23ada98f27_040001100PU000.png',
    '040001000NA000':webflowSrc +'d036d83536f86609a82459_040001000NA000.png',
    //Camara 06
    '060001100PL000':webflowSrc +'d037d232cdff8cdc43401e_060001100PL000.png',
    '060001100BR000':webflowSrc +'d037d2016f1d38b538985b_060001100BR000.png',
    '060001100PU000':webflowSrc +'d037d2647b2cbd435ccb10_060001100PU000.png',
    '060001100NA000':webflowSrc +'d037d12d3baf5f2d9de519_060001100NA000.png',
    '060001100BL000':webflowSrc +'d037cecd07e825d699f824_060001100BL000.png',
    '060001000BR000':webflowSrc +'d037cb3d07ea778696c060_060001000BR000.png',
    '060001000NA000':webflowSrc +'d037cb32cdffff9a433f51_060001000NA000.png',
    '060001000BL000':webflowSrc +'d037ca7c2d09c69bd3741f_060001000BL000.png',
    '060001000PU000':webflowSrc +'d037caaecc9106152c04ed_060001000PU000.png',
    '060001000PL000':webflowSrc +'d037c94112801bf570f30a_060001000PL000.png',
    '060000100PU000':webflowSrc +'d037c9b69bc9c6b71cf786_060000100PU000.png',
    '060001000PL000':webflowSrc +'d037c94112801bf570f30a_060001000PL000.png',
    '060000100PU000':webflowSrc +'d037c9b69bc9c6b71cf786_060000100PU000.png',
    '060000100PL000':webflowSrc +'d037c6016f1d63f93897c3_060000100PL000.png',
    '060000100BL000':webflowSrc +'d037c13536f81108a8284c_060000100BL000.png',
    '060000000NA000':webflowSrc +'d037c0016f1d9e33389776_060000000NA000.png',
    '060000000PU000':webflowSrc +'d037c0c7bb9c6e9cde76b3_060000000PU000.png',
    '060000000BL000':webflowSrc +'d037bf687fc5af5fe068d5_060000000BL000.png',
    '060000000BR000':webflowSrc +'d037bf784283322b3da576_060000000BR000.png',
    '060000100BR000':webflowSrc +'d037bf0a9389ffe765869f_060000100BR000.png',
    '060001111PU000':webflowSrc +'d037baaecc91c2212c03dc_060001111PU000.png',
    '060001111PL000':webflowSrc +'d037b83ab65ffcc7bfa387_060001111PL000.png',
    '060001111NA000':webflowSrc +'d037b790100cbf3ad6653d_060001111NA000.png',
    '060001111BR000':webflowSrc +'d037b36ae936da291991c6_060001111BR000.png',
    '060001111BL000':webflowSrc +'d037b3016f1d08ae389744_060001111BL000.png',
    '060001011NA000':webflowSrc +'d037b308633fbb03c8f855_060001011NA000.png',
    '060001011PU000':webflowSrc +'d037b30a938969f665867a_060001011PU000.png',
    '060001011PL000':webflowSrc +'d037b3b69bc92c881cf714_060001011PL000.png',
    '060001011BR000':webflowSrc +'d037af5816277e228f3c52_060001011BR000.png',
    '060001011BL000':webflowSrc +'d037ac647b2c85b15cc94f_060001011BL000.png',
    '060000111PU000':webflowSrc +'d037ac0bdbd5698a684850_060000111PU000.png',
    '060000111PL000':webflowSrc +'d037a72c7ca63b8fb91183_060000111PL000.png',
    '060000111NA000':webflowSrc +'d037a658162752988f3c3c_060000111NA000.png',
    '060000011PL000':webflowSrc +'d037a52c7ca6ab93b91160_060000011PL000.png',
    '060000011BL000':webflowSrc +'d037a508633fcc25c8f7a7_060000011BL000.png',
    '060000011PU000':webflowSrc +'d037a51dbabb04817b910c_060000011PU000.png',
    '060000111BR000':webflowSrc +'d037a42d3baf6b789de3d0_060000111BR000.png',
    '060000111BL000':webflowSrc +'d037a4cbc6a5993e337e67_060000111BL000.png',
    '060000011BR000':webflowSrc +'d037a33710e47a06c5ea23_060000011BR000.png',
    '060000011NA000':webflowSrc +'d037a27078433b35d735dd_060000011NA000.png',
    '060000100NA000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62d037c4e8bbdf892f1d9b76_060000100NA000.png',
    
    // Bravo logo + asiento + frame
    '000001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5bc3511c664cfdc7884_000001112PL000.png',
    '000001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b980b766f99663681c_000001112NA000.png',
    '000001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b94b3f6d6cc4ceab8c_000001112BL000.png',
    '000001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b5931ea67105ea8c18_000001112PU000.png',
    '000001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b51e83e98725cd91cd_000001012NA000.png',
    '000001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b523365904a2c51bed_000001112BR000.png',
    '000001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b53641f0e3f4f8bccf_000001012PU000.png',
    '000001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b53233dc8a037d9b5c_000001012BR000.png',
    '000001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b5f073c23ee43a211f_000001012PL000.png',
    '000001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b25cfeb40fa01378b8_000001012BL000.png',
    '000000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b2379f3038ca75a955_000000012PU000.png',
    '000000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b2cbb120b84c6e2c22_000000112NA000.png',
    '000000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b2546f282258b06c5f_000000112PU000.png',
    '000000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b12336590d69c51bdf_000000112BL000.png',
    '000000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b1cf7baf327b6dd4b4_000000012BL000.png',
    '000000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b133d6b3638ed20d02_000000012BR000.png',
    '000000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b1cf7bafc31d6dd4af_000000012PL000.png',
    '000000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b0bcc3eb113e618d1c_000000112BR000.png',
    '000000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b01e83e917cccd91a6_000000012NA000.png',
    '000000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac56a3641f0218ef8b8aa_000000112PL000.png',
    
    '010001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac693119c1bef092703e3_010001112PL000.png',
    '010001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6933641f027f3f8cd4e_010001112PU000.png',
    '010001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac69306f3ce677ae9ed22_010001112NA000.png',
    '010001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac693119c1b79262703e2_010001112BR000.png',
    '010001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac667bcc3eb1459619337_010001012BR000.png',
    '010001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6678b601ac9cc7670f0_010001112BL000.png',
    '010001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6672336598c81c522cd_010001012BL000.png',
    '010000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6679b934313ec972d45_010000112PL000.png',
    '010001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac666bd1771286d5ee1ca_010001012PU000.png',
    '010001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6661a5f7b6e2fd1957f_010001012NA000.png',
    '010001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac66630e8f06fa19ad037_010001012PL000.png',
    '010000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac666e465da548012e2e6_010000112PU000.png',
    '010000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac66433d6b337e2d213e7_010000112NA000.png',
    '010000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6646802b64986885cfb_010000012NA000.png',
    '010000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac66418f2a31841c34396_010000112BR000.png',
    '010000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac6645cfeb448591382fd_010000012BL000.png',
    '010000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac664f073c20a283a2d86_010000112BL000.png',
    '010000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac664bd177157ae5ee169_010000012BR000.png',
    '010000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac664390939117f8f5d84_010000012PL000.png',
    '010000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac662c729b294abb208a9_010000012PU000.png',
    
    '020001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ad4b3f6dc5feceb915_020001112PL000.png',
    '020001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac4b3f6daa61ceb914_020001012BL000.png',
    '020001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac3511c6318fdc9318_020001112PU000.png',
    '020001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac06f3cec588ea007e_020001112NA000.png',
    '020001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac9b9343847b973d4e_020001112BR000.png',
    '020001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac804d22ceba8d632b_020001112BL000.png',
    '020001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac84a645fd0b31d58f_020001012PU000.png',
    '020001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac1f0174e4fd043f85_020001012NA000.png',
    '020001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac3e713ad9f3e2e9ab_020001012BR000.png',
    '020001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac6d17026bb049c4ff_020001012PL000.png',
    '020000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac7ac18f2a333a6c35372_020000112PL000.png',
    '020000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac78c3511c69261dc90ef_020000112PU000.png',
    '020000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac78b3e713a21f8e2e87b_020000012PL000.png',
    '020000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73f7cc974a240c5d80a_020000012BL000.png',
    '020000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73f23365985a5c52bb7_020000112BL000.png',
    '020000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73ec266a377694d7569_020000012NA000.png',
    '020000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73e804d2276f28d5fbc_020000012BR000.png',
    '020000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73e567f9d2720d0922c_020000112NA000.png',
    '020000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73e4b3f6d748cceb584_020000112BR000.png',
    '020000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac73d546f2835eeb0856d_020000012PU000.png',
    
    '030001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac887804d22468f8d6bc4_030001112BR000.png',
    '030001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac8871f01747f99044a18_030001112PL000.png',
    '030001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac88706f3ce9c90ea074b_030001112NA000.png',
    '030001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac887cbb120a1806e58ef_030001112PU000.png',
    '030001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac88739093962808f7929_030001112BL000.png',
    '030001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac8873233dcc4d37dc217_030001012PU000.png',
    '030001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac88537779376fb572920_030001012PL000.png',
    '030001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac882f073c207fa3a536c_030001012NA000.png',
    '030001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac8813233dc26497dc1ff_030001012BL000.png',
    '030001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac8814b3f6dd4e9cec14d_030001012BR000.png',
    '030000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac881e6ded81fa78a9205_030000112PU000.png',
    '030000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac881e121403179212db8_030000112PL000.png',
    '030000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87fe6ded800a18a9201_030000112BR000.png',
    '030000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87f3641f02dcef8e713_030000112BL000.png',
    '030000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87e18f2a37f16c360ad_030000112NA000.png',
    '030000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87dc729b21e1bb22eba_030000012PU000.png',
    '030000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87ccf7bafa6386dedf0_030000012PL000.png',
    '030000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87c6802b65470887634_030000012BL000.png',
    '030000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87c6802b6785a88762b_030000012BR000.png',
    '030000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac87ba8593430e82145dd_030000012NA000.png',
    
    '040001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b78b601a460a76ab18_040001112PL000.png',
    '040001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b7f073c21c0b3a60be_040001112PU000.png',
    '040001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b5c729b2d339b28fd0_040001112BR000.png',
    '040001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b5390939fa298f8ab8_040001112BL000.png',
    '040001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b51e83e95264cdc60c_040001012NA000.png',
    '040001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b42336597bc2c54380_040001112NA000.png',
    '040001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b4a859346626215211_040001012BR000.png',
    '040001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b4bcc3eb9d0361d7f5_040001012PU000.png',
    '040001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b49b93431096976c40_040001012PL000.png',
    '040001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9b44b3f6d7a91cec9ee_040001012BL000.png',
    '040000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af1a5f7b2f71d1bbc4_040000012BL000.png',
    '040000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9afbcc3eb3fb261d7e9_040000112PU000.png',
    '040000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af84a64550d43201a7_040000112PL000.png',
    '040000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af10bbd19a50efaa34_040000112NA000.png',
    '040000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af3e713acddfe2fd6e_040000012PU000.png',
    '040000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af74db6df3677aa50e_040000012PL000.png',
    '040000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9af379f30498775d441_040000012BR000.png',
    '040000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9aeff3bb4f3527d1aa7_040000112BL000.png',
    '040000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9ad84a6452d0e320199_040000012NA000.png',
    '040000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac9ad9b93439521976c1c_040000112BR000.png',
    
    '050001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb3f1a5f7b7621d1cce5_050001112BR000.png',
    '050001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb3fa859349b21216ac0_050001112PL000.png',
    '050001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb3f1e83e96a74cdd27a_050001112NA000.png',
    '050001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb3f3e713a94d3e3181c_050001112PU000.png',
    '050001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb1306f3ceaa21ea3965_050001012PL000.png',
    '050001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb136d1702359e4a0ba0_050001112BL000.png',
    '050001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb1310bbd1c7a0efbad1_050001012NA000.png',
    '050001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb121e83e90b09cdd1f9_050001012BL000.png',
    '050000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb12e465dab42c133a1e_050000112PU000.png',
    '050001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb12bd1771e7525f2b2d_050001012PU000.png',
    '050001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb121e83e95152cdd1f8_050001012BR000.png',
    '050000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb11379f30740575e5e2_050000112NA000.png',
    '050000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0f8b601aa75a76c79e_050000012PU000.png',
    '050000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0f84a64585c8321409_050000112PL000.png',
    '050000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0e9b934358a6977dc8_050000012PL000.png',
    '050000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0edccf0ec083c4604b_050000012BR000.png',
    '050000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0e5cfeb458fd13b016_050000012BL000.png',
    '050000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0ecbb12013656e91b5_050000112BR000.png',
    '050000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0eff3bb4d6f47d2e68_050000012NA000.png',
    '050000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacb0e3641f00506f90cd7_050000112BL000.png',
    
    '060001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86752f3e2f3815ed38_060001112PL000.png',
    '060001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86cc9b0a4ef034e4c3_060001112PU000.png',
    '060001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86d9540d65bd0d9c91_060001112BR000.png',
    '060001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace866ace2c6ce90ca058_060001112NA000.png',
    '060001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6546f28af04b0bbf6_060001012BL000.png',
    '060001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd69276a8fbb3081595_060001012NA000.png',
    '060001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6bcc3eb6def61f828_060001012PU000.png',
    '060000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6377793aea75758a7_060000112PU000.png',
    '060001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6379f30411a75f627_060001012BR000.png',
    '060001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd66802b6f9b28898b0_060001112BL000.png',
    '060001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd56d17023de64a1704_060001012PL000.png',
    '060000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd5bcc3eb0c9b61f7ed_060000112PL000.png',
    '060000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2c266a352944daa9e_060000112NA000.png',
    '060000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2a8593413e9217513_060000112BL000.png',
    '060000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd230e8f0ca999b2045_060000012BL000.png',
    '060000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2cf7baf869f6e0f85_060000012BR000.png',
    '060000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd1dccf0eca0fc46979_060000012PU000.png',
    '060000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd19b93434adb978cb1_060000112BR000.png',
    '060000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd130e8f09d289b203b_060000012PL000.png',
    '060000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd0c266a3a5f54daa98_060000012NA000.png',
    }


/* -------------- Radio Buttons Inputs -------------- */  

// Manubrios

$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;
    MIN_IMAGE();    
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();    
});


//Grupo
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();
});   

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();
});   

//Base
$('input[name="base"]').click( function(){
    baseFinal = this.value;
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();
});

//Diseno
$('input[name="diseno"]').click( function(){
    var v = this.value;
    if(v == 2   ){
        console.log("Mostaza")
        disenoFinal = 0;
        estiloFinal = 0; 
    }else if(v == 0){
        console.log("Plata")
        disenoFinal = 1;
        estiloFinal = 1; 
    }else if(v == 1){
        console.log("Turquesa")
        disenoFinal = 2;
        estiloFinal = 1; 
    } else if(v == 3){
    console.log("Celeste")
    disenoFinal = 2;
    estiloFinal = 1; 
    } else if(v == 4){
    console.log("Morado")
    disenoFinal = 2;
    estiloFinal = 1; 
    }
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();

});

//Color
$('input[name="color"]').click( function(){
    colorFinal = this.value;
    console.log(colorFinal)
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    CambiarImagen();
    MAX_IMAGE();
});



//Se asigna el tamano
$('input[name="sizeBike"]').click(function(){
    finalSize = this.value;
});
//Se asigna el valor de la geometria
var rangeValue = function(){
    geometriaFinal = elem.value;    
}


function MIN_IMAGE(){
    l__img.forEach(elem=>{
        elem.style.width = '150px'
        console.log('Minimizar', elem)
        }
       )

}

function MAX_IMAGE(){
    setTimeout(()=>{
        l__img.forEach(elem=>{
            elem.style.width = '100%'
            console.log('MAXIMIZE', elem)
            }
        )
    },1000)
        

}


function CAMBIAR_A_GIF(){
    //IMAGENES DESKTOP
    imagen.src = gifImgLoading;
    completeImg1.src =gifImgLoading;
    completeImg2.src = gifImgLoading;
    completeImg3.src = gifImgLoading;
    completeImg4.src = gifImgLoading;
    completeImg5.src = gifImgLoading;
    completeImg6.src = gifImgLoading;
    completeImg7.src = gifImgLoading;
    grupo1.src = gifImgLoading;
    ruedos1.src = gifImgLoading;
    ruedos2.src = gifImgLoading;
    manubrioImg1.src = gifImgLoading;

    //IMAGENES MOBILE
    imagenMobile.src = gifImgLoading;
    completeImg1Mobile.src = gifImgLoading;
    grupoMobile1.src = gifImgLoading;
    ruedos1Mobile.src =gifImgLoading;
    ruedos2Mobile.src = gifImgLoading;
    manubrioImgMobile1.src = gifImgLoading;
    
}


function CambiarImagen(){
    CODE = ''+ bg + type + groupsetFinal + rinesFinal + baseFinal + estiloFinal + disenoFinal + colorFinal + seatpost + headset + stem;
    console.log(CODE)
    console.log( '00' , bg , type , groupsetFinal , rinesFinal , baseFinal , estiloFinal , disenoFinal , colorFinal , seatpost , headset ,   stem)    

    imagen.src = BICIS_URLS[("00" + CODE)]
    completeImg1.src = BICIS_URLS[("06" + CODE)]
    completeImg2.src = BICIS_URLS[("01" + CODE)]
    completeImg3.src = BICIS_URLS[("06" + CODE)]
    completeImg4.src = BICIS_URLS[("00" + CODE)]
    completeImg5.src = BICIS_URLS[("02" + CODE)]
    completeImg6.src = BICIS_URLS[("03" + CODE)]
    completeImg7.src = BICIS_URLS[("04" + CODE)]
    grupo1.src = BICIS_URLS[("02" + CODE)]
    ruedos1.src =BICIS_URLS[("06" + CODE)]
    ruedos2.src = BICIS_URLS[("03" + CODE)]
    manubrioImg1.src = BICIS_URLS[("06" + CODE)]
     
    imagenMobile.src = BICIS_URLS[("00" + CODE)]
    completeImg1Mobile.src = BICIS_URLS[("06" + CODE)]
    grupoMobile1.src = BICIS_URLS[("02" + CODE)]
    ruedos1Mobile.src =BICIS_URLS[("06" + CODE)]
    ruedos2Mobile.src = BICIS_URLS[('03'+ CODE)]
    manubrioImgMobile1.src = BICIS_URLS[("06" + CODE)];

};
