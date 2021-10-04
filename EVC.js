
// evc plus

import { maareynta } from "./maareynta.js";
import { SalamService } from "./SalaamBank.js";
import { taaj } from "./TAAJ.js";


let pin=4455;
let balance=300;
let your_number=615178163;

// main 


var Pin=prompt('Fadlan Geli Pin-kaaga');
if (Pin==pin){
    var services=prompt('1. Itus Haraaga\n2.Kaarka Hadalka\n3. Bixi Biil\n4. Uwareeji EVC-PLUS\n5.Warbixin Kooban\n6. Salaam Bank\n7. Mareeynta\n8. TAAJ\n0. Kabax');
    if (services==1){
        alert(`Haraagagu Waa $${balance}`);
       

    }
    // kaarka hadalka
    else if (services==2){
        var kaarka_hadlka=prompt('Kaarka Hadalka\n1. Kushubo Airtime\n2. Ugushub Airtime');
        // validation kaarka hadalka
        if (kaarka_hadlka==1){
            var money=prompt('Geli Lacagta');
            var valid=prompt(`Mahubtaa Inaad $ ${money} Ugu Shubtid undefined\n1. Haa\n2. Maya`);
            if (valid==1){
                if (money<=balance){
                    alert(`[EVC-PLUS] Waxaad Ku Shubatay ${money}sent.\nHaragaga Xisaabta Waa $${balance-money}.`);

                }else{
                    alert('Haraaga Xisaabtadu Kuguma Filna');
                }
            }else if (valid==2){
                alert('Mahadsanid. Macsalaama');
            }else{
                alert('Invalid Number')
            }
            
            }
        else if (kaarka_hadlka==2){
            var mobile=prompt('Geli Mobile Aad Lacagta Ugu Shubaysid');
            // valid tell
            if (mobile>=610000000 && mobile<=619999999){
                var currency=prompt('Geli Lacagta')
                // valid 2
                var $valid=prompt(`Mahubtaa $${currency} Ugu Shubtid Number-ka ${mobile}\n1. Haa\n2. Maya`);
                if ($valid==1){
                    if (currency<=balance){
                        alert(`[EVC-PLUS]- Waxaad $${currency} Ugu Shubtay Mobile ${mobile}\nHaragagu Waa $${balance-currency}`);

                    }else{
                        alert('Haraagagu Xisaabta Kugu Filna.')
                    }
                }else if ($valid==2){
                    alert('Mahadsanid. Macsalama');
                }else{
                    alert('Invalid Number.')
                }
            }else{
                alert('Mobile-ka Aad Gelisay Ma ahan Mid Jira.')
            }

        }
        }// bill service
        else if (services==3){
            var other_service=prompt('1. Post Paid\n2. Bixi Biil')
            if (other_service==1 || other_service==2){
                alert('This is Currently not Working :(')
            }
        }// uwareeji evc
        else if (services==4){
            var $mobile=prompt('Uareeji EVC-PLUS\nFadlan Geli Mobile-ka ')
            if ($mobile>=610000000 && $mobile<=619999999){
                    var $currency=prompt('Fadlan Geli Lacgta');
                    var validation=prompt(`[EVC-PLUS]\nMahubtaa Inaad $${$currency} Uwareejisid ${$mobile}?\n1. Haa\n2. Maya`);
                    if (validation==1){
                        if ($mobile!=your_number){
                            if ($currency<=balance){
                                alert(`[EVC-PLUS]\nWaxaad $${$currency} Uwareejisay ${$mobile}\n Haragagu Waa $${balance-$currency}`);
    
                            }else{
                                alert('Haraagagu Xisaabta Kuguma Filna.')
                            }

                        }else{
                            alert('Diraha Iyo Loo Diraha Iskumid Ma Noqon Karaan.')
                        }
                        
                    }else if(validation==2){
                        alert('Mahadsanid. Macsalama');
                    }else{
                        alert('Invalid Number');
                    }
               
            }

        }
        // warbixin kooban
        else if (services==5){
            var warbixn=prompt('Warbxiin Kooban\n\n1. Last Action\n2. Warejinti Udambeysay\n3. Iibsashadii Udambeysay.\n4. Last 3 Actions\n5. Email Me My Activity');
            if (warbixn==1 || warbixn==2 || warbixn==3 || warbixn==4 || warbixn==5){
                alert('This is not currently working');
            }
        }
        //
        else if (services==6){
            
            SalamService();

        }else if (services==7){
            maareynta();
        }else if (services==8){
            taaj();
        }else if (services==0){
            alert('Macsalaama!');
        }
    }
 
else{
    alert('Number-ka Sirta Waa Khalad.');
}
