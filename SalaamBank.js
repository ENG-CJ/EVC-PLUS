
// salaam bank module
export function SalamService(){
    let balance=300;
    let just=30050005;
    var service=prompt('Salaam Bank\n1. Kawareeji EVVPlus')
    if (service==1){
            var salam_service=prompt('Fadlan Dooro Xisaabta Banigiga\n1. Salaam SOMALI-BANK\n2. Salaam sch');
            if (salam_service==1){
                var account=prompt('Fadlan Geli Account-ga');
                if (account==just){
                    var description=prompt('Geli Faafahin');
                    var Lacagta=prompt('Fadlan Geli Lacagta');
                    var valid=prompt(`[SALAAM BANK]\nMahubtaa Inaad kudirto $${Lacagta} (JAMHUURIYA UNIVERSITY) ${account}\n1. Haa\n2. Maya`);
                    if (valid==1){
                        if (Lacagta<=balance){
                            alert(`[SALAAM-BANK]\nWaxaad $${Lacagta} Kudirtay Account-ga ${(account)}\nHaragagu Waa $${balance-Lacagta}`)

                        }else{
                            alert('Haragagu Xisaabta Kuguma Filna.')
                        }
                    }else if (valid==2){
                        alert('Mahadsanid. Macslaama')
                    }else{
                        alert('invalid Number')
                    }
                }
                else{
                    var description=prompt('Geli Faafahin');
                    var Lacagta=prompt('Fadlan Geli Lacagta');
                    var valid=prompt(`[SALAAM BANK]\nMahubtaa Inaad kudirto $${Lacagta} (JAMHUURIYA UNIVERSITY) ${account}\n1. Haa\n2. Maya`);
                    if (valid==1){
                        if (Lacagta<=balance){
                            alert(`[SALAAM-BANK]\nWaxaad $${Lacagta} Kudirtay Account-ga ${(account)}\nHaragagu Waa $${balance-Lacagta}`)

                        }else{
                            alert('Haragagu Xisaabta Kuguma Filna.')
                        }
                    }else if (valid==2){
                        alert('Mahadsanid. Macslaama')
                    }else{
                        alert('invalid Number')
                    }
                //elsejj
                }
                /////

                
            }else if (salam_service==2){
                alert('This is Not Currently Working')
            }
    
    }
    else{
        alert('Invalid Number')
    }
   
}