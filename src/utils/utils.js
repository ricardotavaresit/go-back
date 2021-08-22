class Utils {
  getDescById(regionId) {
 
    switch (regionId) {
      case 1010500:
        return "Aveiro";
      case 1020500:
        return "Beja";
      case 1030300:
        return "Braga";
      case 1040200:
        return "Bragança";
      case 1050200:
        return "Castelo Branco";
      case 1060300:
        return "Coimbra";
      case 1070500:
        return "Évora";
      case 1080500:
        return "Faro";
      case 1090700:
        return "Guarda";
      case 1100900:
        return "Leiria";
      case 1110600:
        return "Lisboa";
      case 1121400:
        return "Portalegre";
      case 1131200:
        return "Porto";
      case 1141600:
        return "Santarém";
      case 1151200:
        return "Setúbal";
      case 1160900:
        return "Viana do Castelo";
      case 1171400:
        return "Vila Real";
      case 1182300:
        return "Viseu";
      default:
        return "Erro";
    }
  }
}

module.exports = new Utils();
