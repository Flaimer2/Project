var hex = "%armor_color_hex_helmet%";

function team() {
    switch (hex) {
        case "FF0000":
            return "1";
        case "0000FF":
            return "2";            
        case "7CFC00":
            return "3";
        case "FFFF00":
            return "4";
        case "00FFFF":
            return "5";
        case "FFFFFF":
            return "6";
        case "FF00FF":
            return "7";
        case "808080":
            return "8";
        default:
            return "9";
      }
    }
 team();