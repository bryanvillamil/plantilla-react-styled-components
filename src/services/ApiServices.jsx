import axios from "axios";
import * as constants from "./ApiConstants";
const headers = {
  headers: { "Content-Type": "application/json;charset=UTF-8" },
};
class ApiService {

  static async sendDataUser(otherData) {
    let data = {
      IdActividad: constants.activityId,
      Nombre: otherData.name,
      Email: otherData.email,
      Celular: otherData.celular,
    };

    const resp = await axios.post(
      constants.url +
        "apiportal/serviciosactividades/guardarpreregistro",
      data,
      headers
    );
    return resp.data;
  }
}
export default ApiService;
