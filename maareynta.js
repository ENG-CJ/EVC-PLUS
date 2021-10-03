//  maareynta


export function maareynta(){
    let pin=4455;
    var maareyn=prompt('Maareynta\n1. Badel Lambarka Sirt ah\n2. Badel Luuqadda\n3. Wargelin Mobile Lumay')
    if (maareyn==1){
        var newPin=prompt('Fadlan Geli PIN-ka Cusub')
        var confirm=prompt('Fadlan Ku Celi Pin-ka Cusub')
        if (confirm==newPin){
            var prevPin=prompt('Geli Number-kaaga Sirta')
            if (prevPin==pin){
                alert('Waad ku Guuleysatay Inaad Badasho Number-ka Sirt ah')
            }else{
                alert('Number-ka Sirta Waa Khalad');
            }
        }else{
            alert('Invalid Confirmation')
        }
    }else if (maareyn==2){
        var lang=prompt('1. English\n2.Arabic');
        if (lang==1){
            alert('Waad Ku Guuleysaty Inaad Badasho Luuqadda')
        }else if (lang==2){
            alert('Waad Ku Guuleysaty Inaad Badasho Luuqadda')
        }else{
            alert('Invalid Number')
        }
    }else if (maareyn==3){
        var mobile=prompt('Fadlan Geli Mobile-ka Lumay');
        if (mobile>=610000000 && mobile<=619999999){
            var Pin=prompt('Fadlan geli Number-kiisa Sirta ah');
            var valid=prompt(`Mahubtaa Inaad U Diwaan Geliso Lumid Number-kaan ${mobile}?\n1. Haa\n2. Maya`);
            if (valid==1){
                alert(`Waad ku Guuleysatay Inaad Udiwaan Geliso number-kaan ${mobile} inuu Lumay.`)
            }else if (valid==2){
                alert('Mahdsanid. Macsalama')
            }else{
                alert('Invalid Number')
            }
        }else{
            alert('Number-kan Ma Ahan Mid Jira.')
        }
    }
}