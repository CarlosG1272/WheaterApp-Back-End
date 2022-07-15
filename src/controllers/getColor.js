const getCorrectColor = (information)=> {
    let value = Number(information.main.temp); 
    if (value > -60 && value < -50) return "#0072d6"
    else if(value > -50 && value < -40) return "#1e97ff"
    else if(value > -40 && value < -30) return "#66b8ff"
    else if(value > -30 && value < -20) return "#18bbbd"
    else if(value > -20 && value < -10) return "#38e3e5"
    else if(value > -10 && value < 0) return "#77ebed"
    else if(value > 0 && value < 10) return "#00d673"
    else if(value > 10 && value < 20) return "#1eff97"
    else if(value > 20 && value < 30) return "#66ffb8"
    else if(value > 30 && value < 40) return "#c6ff89"
    else if(value > 40 && value < 50) return "#a3ff42"
    else if(value > 50 && value < 60) return "#81f900"
    else if(value > 60 && value < 70) return "#ffe866"
    else if(value > 70 && value < 80) return "#ffa866"
    else if(value > 80 && value < 90) return "#ff7f1e"
    else if(value > 90 && value < 100)return "#f96c00"
    else if(value > 100 && value < 110)return "#f54339"
    else if(value > 110 && value < 120)return "#fd4d44"
    else if(value > 120 && value < 130)return "#f70e02"
    else    return "black"
    
}

module.exports = getCorrectColor; 