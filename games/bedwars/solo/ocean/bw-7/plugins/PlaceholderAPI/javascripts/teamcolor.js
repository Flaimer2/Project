var hex = "%armor_color_hex_helmet%";
 
function check() {
    switch (hex) {
        case "7CFC00":
            return "&a⚑ &f";
        case "FFFF00":
            return "&e⚑ &f";
        case "0000FF":
            return "&9⚑ &f";
        case "00FFFF":
            return "&b⚑ &f";
        case "FF0000":
            return "&c⚑ &f";
        case "FFA500":
            return "&6⚑ &f";
        case "FFFFFF":
            return "&f⚑ &f";
        case "FF00FF":
            return "&d⚑ &f";
        case "808080":
            return "&8⚑ &f";
        default:
            return "%vault_prefix%";
}  
}
check();