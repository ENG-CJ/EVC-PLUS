// taaj


export function taaj(){
    let balance=300;
    let pin=4455;
    var taaj=prompt('TAAJ\n1. Dibadda\n2. Ogoow Khidmada\n3. Maclumadka Xawalada')
    if (taaj==1){
        var owner=prompt('Fadlan Geli Telefanka Qaataha');
        var owner_name=prompt('Fadlan Geli Magaca Qaataha');
        var city=prompt('Fadlan Geli Magaalada Qaataha Uu Joogo');
        var currency=prompt('Fadlan Geli Lacagta');
        var desc=prompt('Fadlan Geli Maclummad');
        var valid = prompt('Khidmada ma xisaabtada ayaa laga jaraya?\n1. Haa\n2. Maya');
        if (valid==1){
            var valid2=prompt(`Mahubtaa Inaad $${currency} U dirtid ${owner_name} Oo Wata Telefanka ${owner}?\n1. Haa\n2. Maya`);
            if (valid2==1){
                if (currency<=balance){
                    alert(`[TAAJ]\nWaxaad ${currency} Udirtay ${owner_name} Oo Wata ${owner}\nHaragagu Waa $${balance-currency}`);

                }else{
                    alert('Haragagu Xisaabta Kuguma Filna');
                }
            }else if(valid2==2){
                alert('Mahdsanid. macsalama');
            }else{
                alert('invalid number')
            }
        }else if(valid==2){
            alert('Program Terminated');
        }else{
            alert('Invalid Number')
        }
    }else if(taaj==2 || taaj==3){
        alert('This is Not currently Working')
    }
}