//Constantes
const coloresArray = ['NA', 'BL', 'BR', 'PL', 'PU']

//Imagenes desktop
const imagen = document.getElementById('imagen');
const completeImg1 = document.getElementById('completeImg1');
const completeImg2 = document.getElementById('completeImg2');
const completeImg3 = document.getElementById('completeImg3');
const completeImg4 = document.getElementById('completeImg4');
// const completeImg5 = document.getElementById('completeImg5');
// const completeImg6 = document.getElementById('completeImg6');
// const completeImg7 = document.getElementById('completeImg7');
const grupo1 =  document.getElementById('grupo1');
const grupo2 =  document.getElementById('grupo2');
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
var CODEIMG = '000000011NA000'



/* -------------- CODIGOS BIKES -------------- */  
const BICIS_URLS = {
    // // 1a Seccion 
    '000000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108bc4780e22a780ff003_V1-Road-SB-Sleeve-Carbon.webp',
    '200000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108bd0c5c8eaefa6f6eb3_V2-Road-SB-Sleeve-Carbon.webp',
    '300000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108be62ffe99fdd71b64d_V3-Road-SB-Sleeve-Carbon.webp',
    '400000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108bd54dbb2bbd421c8eb_V4-Road-SB-Sleeve-Carbon.webp',
    '500000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63aa36756059e53df5b66ce5_V5-Road-SB-Sleeve-Carbon.webp',
    '600000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108c2d6b229189d4919a4_V6-Road-SB-Sleeve-Carbon.webp',
    //Llantas 1
    '110001000NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108c26b628056d497c22d_V7-Road-SB-Sleeve-Carbon.webp',
    '120000000NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108be9eeb4ef90b37c706_V7-Road-SB-Sleeve-Aluminio.webp',
    // LLantas 2
    '130000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108be0e2ffa951c6775d5_V8-Road-SB-Sleeve-Carbon.webp',
    '140000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108be09625174527a97c4_V8-Road-SB-Sleeve-Aluminio.webp',
    // Manubrio
    '210000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108bd8f7594b9fb8b35d5_V9-Road-SB-Sleeve-Aluminio.webp',
    '220000100NA000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a108c26b6280503c97c22c_V9-Road-SB-Sleeve-Carbon.webp',


    // 2a Seccion 
    // Camara-(00) background-0 type-0(road) groupset-0(105) Rims-0(105) Base-0(brushed) Estilo-0(clean) Diseño-0(Raw) Anoz(NA) Seatpost-0 Headset-0 Stem-0 
    // 00000000BL0000
    // 00000001BL0000
    // 00000002BL0000
    // 00000010BL0000
    // 00000011BL0000
    // 00000012BL0000
    // 
    
    // '00'      bg     type groupsetFinal rinesFinal baseFinal estiloFinal disenoFinal colorFinal seatpost headset stem;

    // Camara Background Type Groupset Rims Base Estilo Diseño Anoz Seatpost  headset stem
    //   00        0       0      0      0    1     0      3     BL     0         0      0

    // ruedos
// 00 0 0 0 1 0 0 0 NA 0 0 0 
    // manubrio
// 00 0 0 0 0 0 0 0 NA 0 1 0

    // Base: Br=0 sb =1
    // Estilo: clean=0 rombos=1
    // Diseño: Raw = 0, Classic = 1, Sleeve = 2 

    //NA 
    '000000100NA000' : webflowSrc +'cedb42f27d050c6a2d4b75_000000100NA000.png',
    '000000111NA000' : webflowSrc +'cdf4cf6e3bd9a843053906_000000111NA000.png', 
    '000000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b2cbb120b84c6e2c22_000000112NA000.png',
    '000000000NA000' : webflowSrc +'cedb457f810801e92c4cd6_000000000NA000.png',
    '000000011NA000' : webflowSrc +'cdf4d2bdc9adb57733debe_000000011NA000.png', 
    '000000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dac5b01e83e917cccd91a6_000000012NA000.png',


    // Blue
    // 'Blue-raw-sb':
    '000000100BL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f36eb0c12fa8cc42cb_Road-SB-Raw-Blue.webp',
    // 'Blue-classic-sb': 
    '000000111BL000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640ea00086b1f2006bbc1_Road-SB-Classic-Blue.webp',
    // 'Blue-sleeve-sb':
    '000000112BL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f5c7b144335309fa22_Road-SB-Sleeve-Blue.webp',
    // 'Blue-raw-br':
    '000000000BL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e4c629478555b78544_Road-BR-Raw-Blue.webp',
    // 'Blue-classic-br': 
    '000000011BL000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e2a014a53c40eb52b7_Road-BR-Classic-Blue.webp',
    // 'Blue-sleeve-br':
    '000000012BL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e71f4b56ff4bcfdce1_Road-BR-Sleeve-Blue.webp',
    
    // Bronze
    // 'Bronze-raw-sb':
    '000000100BR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f30c7681095c79ad1a_Road-SB-Raw-Bronze.webp',
    // 'Bronze-classic-sb': 
    '000000111BL000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640eaddf227aa811aed06_Road-SB-Classic-Bronze.webp',
    // 'Bronze-sleeve-sb':
    '000000112BR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f52051425b5450f8b0_Road-SB-Sleeve-Bronze.webp',
    // 'Bronze-raw-br':
    '000000000BR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e448fed829c978c1f8_Road-BR-Raw-Bronze.webp',
    // 'Bronze-classic-br':
    '000000011BR000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e122c2415972d61449_Road-BR-Classic-Bronze.webp',
    // 'Bronze-sleeve-br':
    '000000012BR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e89e321863b166aaf2_Road-BR-Sleeve-Bronze.webp',
    
    // Gold
    // 'Gold-raw-sb':
    '000000100GO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f2a014a5190deb5515_Road-SB-Raw-Gold.webp',
    // 'Gold-classic-sb': 
    '000000111GO000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640ea77d07d7ea2d21bfe_Road-SB-Classic-Gold.webp',
    // 'Gold-sleeve-sb':
    '000000112GO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f500086bbd8006bc4b_Road-SB-Sleeve-Gold.webp',
    // 'Gold-raw-br':
    '000000000GO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e7a014a5bd02eb54f1_Road-BR-Raw-Gold.webp',
    // 'Gold-classic-br': 
    '000000011GO000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e16c80ba6efc6bb7df_Road-BR-Classic-Gold.webp',
    // 'Gold-sleeve-br':
    '000000012GO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e8a014a53237eb54f2_Road-BR-Sleeve-Gold.webp',
    
    // Green
    // 'Green-raw-sb':
    '000000100GR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f30aa2440ea86ecaec_Road-SB-Raw-Green.webp',
    // 'Green-classic-sb': 
    '000000111GR000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a64060ddf22776891ae477_Road-SB-Classic-Green.webp',
    // 'Green-sleeve-sb':
    '000000112GR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f51f4b5637aecfdcf7_Road-SB-Sleeve-Green.webp',
    // 'Green-raw-br':
    '000000000GR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e8a2c072aaeaf49c79_Road-BR-Raw-Green.webp',
    // 'Green-classic-br': 
    '000000011GR000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e222c241ddb9d6144a_Road-BR-Classic-Green.webp',
    // 'Green-sleeve-br':
    '000000012GR000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e79e3218a30f66aaed_Road-BR-Sleeve-Green.webp',
    
    // Platinum
    // 'Platinum-raw-sb':'
    '000000100PL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f520514239fd50f89c_Road-SB-Raw-Platinum.webp',
    // 'Platinum-classic-sb': 
    '000000111PL000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640ea6c80bae8a26bb842_Road-SB-Classic-Platinum.webp',
    // 'Platinum-sleeve-sb':
    '000000112PL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f69e3218dfdf66ab45_Road-SB-Sleeve-Platinum.webp',
    // 'Platinum-raw-br':
    '000000000PL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e7c7b14479c709f842_Road-BR-Raw-Platinum.webp',
    // 'Platinum-classic-br': 
    '000000011PL000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e231e606d5e46db3c9_Road-BR-Classic-Platinum.webp',
    // 'Platinum-sleeve-br':
    '000000012PL000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e877d07d5650d21bf3_Road-BR-Sleeve-Platinum.webp',
    
    // Purple
    // 'Purple-raw-sb':
    '000000100PU000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f5a014a55fa9eb5525_Road-SB-Raw-Purple.webp',
    // 'Purple-classic-sb': 
    '000000111PU000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640ed48fed8947478c209_Road-SB-Classic-Purple.webp',
    // 'Purple-sleeve-sb':
    '000000112PU000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f66eb0c16ec6cc42ce_Road-SB-Sleeve-Purple.webp',
    // 'Purple-raw-br':
    '000000000PU000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e71f4b5653a9cfdce0_Road-BR-Raw-Purple.webp',
    // 'Purple-classic-br':
    '000000011PU000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e1472ffc787fd1ccf2_Road-BR-Classic-Purple.webp',
    // 'Purple-sleeve-br':
    '000000012PU000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e96c80bab6d86bb828_Road-BR-Sleeve-Purple.webp',
    
    // Rose
    // 'Rose-raw-sb':
    '000000100RO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f5e473f316f66931b4_Road-SB-Raw-Rose.webp',
    // 'Rose-classic-sb':
    '000000111RO000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f16eb0c14311cc42ca_Road-SB-Classic-Rose.webp',
    // 'Rose-sleeve-sb':
    '000000112RO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f6a014a58e62eb552f_Road-SB-Sleeve-Rose.webp',
    // 'Rose-raw-br':
    '000000000RO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e76c80bab2c26bb808_Road-BR-Raw-Rose.webp',
    // 'Rose-classic-br':
    '000000011RO000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e26c80bad1536bb7e0_Road-BR-Classic-Rose.webp',
    // 'Rose-sleeve-br':
    '000000012RO000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e9860562952302bb2c_Road-BR-Sleeve-Rose.webp',
    
    // Teal
    // 'Teal-raw-sb':
    '000000100TE000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f5a014a58004eb5526_Road-SB-Raw-Teal.webp',
    // 'Teal-classic-sb':
    '000000111TE000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63b4c8d27e2c7031c2f55c9a_Road-SB-Classic-Teal.webp',
    // 'Teal-sleeve-sb':
    '000000112TE000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f69e3218319366ab46_Road-SB-Sleeve-Teal.webp',
    // 'Teal-raw-br':
    '000000000TE000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e7c629475d41b785e3_Road-BR-Raw-Teal.webp',
    // 'Teal-classic-br':
    '000000011TE000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e3c7b144268b09f721_Road-BR-Classic-Teal.webp',
    // 'Teal-sleeve-br':
    '000000012TE000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640ea205142882050f7be_Road-BR-Sleeve-Teal.webp',
    
    // Violet
    // 'Violet-raw-sb':
    '000000100VI000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f58605627fcb02bcdc_Road-SB-Raw-Violet.webp',
    // 'Violet-classic-sb': 
    '000000111VI000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f3e473f303326931af_Road-SB-Classic-Violet.webp',
    // 'Violet-sleeve-sb':
    '000000112VI000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640f6c62947793eb78712_Road-SB-Sleeve-Violet.webp',
    // 'Violet-raw-br':
    '000000000VI000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e731e60627c56db884_Road-BR-Raw-Violet.webp',
    // 'Violet-classic-br':
    '000000011VI000': 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640e3c7b14469f809f722_Road-BR-Classic-Violet.webp',
    // 'Violet-sleeve-br':
    '000000012VI000':'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/63a640eac6294783beb7863f_Road-BR-Sleeve-Violet.webp',

    // 
    }


/* -------------- Radio Buttons Inputs -------------- */  

// Manubrios

$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;
    // MIN_IMAGE();    
    // CAMBIAR_A_GIF();
    // CambiarImagen();
    // CambiarImagenManubrio()
    if (manubrioFinal == 1){
        manubrioImg1.src =BICIS_URLS[('220000100NA000')]

        manubrioImgMobile1.src =BICIS_URLS[('220000100NA000')]
    } else if (manubrioFinal == 0){
        manubrioImg1.src =BICIS_URLS[('210000100NA000')]

        manubrioImgMobile1.src =BICIS_URLS[('210000100NA000')]
    }
    // MAX_IMAGE();    
});


//Grupo
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;
    // MIN_IMAGE();
    // console.log("min image")
    // CAMBIAR_A_GIF();
    // console.log("cambiar gif")
    // CambiarImagen();
    // console.log("cambiar imagen")
    // MAX_IMAGE();
    // console.log("max image")
});   

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    // MIN_IMAGE();
    // CAMBIAR_A_GIF();
    // CambiarImagen();
    // CambiarImagenRuedos()
    if (rinesFinal == 1){
        ruedos1.src =BICIS_URLS[('110001000NA000')]
        ruedos2.src = BICIS_URLS[('130000100NA000')]

        ruedos1Mobile.src =BICIS_URLS[('110001000NA000')]
        ruedos2Mobile.src = BICIS_URLS[('130000100NA000')]
    } else if (rinesFinal == 0){
        ruedos1.src =BICIS_URLS[('120000000NA000')]
        ruedos2.src = BICIS_URLS[('140000100NA000')]

        ruedos1Mobile.src =BICIS_URLS[('120000000NA000')]
        ruedos2Mobile.src = BICIS_URLS[('140000100NA000')]
    }
    // MAX_IMAGE();
});   

//Base
$('input[name="base"]').click( function(){
    baseFinal = this.value;
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    // CambiarImagen();
    CambiarImagenColor()
    MAX_IMAGE();
});

//Diseno
$('input[name="diseno"]').click( function(){
    var v = this.value;
    if(v == 2   ){
        console.log("Invertido")
        disenoFinal = 0;
        estiloFinal = 0; 
    }else if(v == 0){
        console.log("Clean")
        disenoFinal = 1;
        estiloFinal = 1; 
    }else if(v == 1){
        console.log("Regular")
        disenoFinal = 2;
        estiloFinal = 1; 
    }
    MIN_IMAGE();
    CAMBIAR_A_GIF();
    // CambiarImagen();
    CambiarImagenColor()
    MAX_IMAGE();

});

//Color
$('input[name="color"]').click( function(){
    colorFinal = this.value;
    console.log(colorFinal)
    // MIN_IMAGE();
    // CAMBIAR_A_GIF();
    // CambiarImagen();
    CambiarImagenColor();
    // MAX_IMAGE();
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
        // console.log('Minimizar', elem)
        }
       )

}

function MAX_IMAGE(){
    setTimeout(()=>{
        l__img.forEach(elem=>{
            elem.style.width = '100%'
            // console.log('MAXIMIZE', elem)
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
    // completeImg5.src = gifImgLoading;
    // completeImg6.src = gifImgLoading;
    // completeImg7.src = gifImgLoading;
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

    grupo1.src = BICIS_URLS[("02" + CODE)]
    grupo2.src = BICIS_URLS[("02" + CODE)]
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

function CambiarImagenColor(){
    CODEIMG = '000000' + baseFinal + estiloFinal + disenoFinal + colorFinal + '000'
    console.log(CODEIMG)
    imagen.src = BICIS_URLS[(CODEIMG)]
    imagenMobile.src = BICIS_URLS[(CODEIMG)]
};

function CambiarImagenRuedos(){
    CODE_R = '000000' + baseFinal + estiloFinal + disenoFinal + colorFinal + '000'

    console.log(CODER)
    ruedos1.src =BICIS_URLS[(CODE_R)]
    ruedos2.src = BICIS_URLS[(CODE_R)]

 
    imagenMobile.src = BICIS_URLS[(CODER)]

};

function CambiarImagenManubrio(){

    CODE_M = '000000' + baseFinal + estiloFinal + disenoFinal + colorFinal + '000'

    console.log(CODE_M)
  
    manubrioImg1.src = BICIS_URLS[(CODE_M)]
 
    manubrioImgMobile1.src = BICIS_URLS[(CODE_M)]

};