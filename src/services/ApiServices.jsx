import axios from "axios";
import * as constants from "./ApiConstants";
var md5 = require("md5");
const headers = {
  headers: { "Content-Type": "application/json;charset=UTF-8" },
};
const formatDate = (date) => {
  let temp = new Date(date),
    month = "" + (temp.getMonth() + 1),
    day = "" + temp.getDate(),
    year = temp.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};
class ApiService {
  static async signUp(data) {
    let Bebes = data.babies.map((element) => {
      return {
        Nombres: element.name,
        Apellidos: element.lastName,
        Sexo: element.sex,
        FechaNacimiento: formatDate(element.birthday),
        FechaNacimientoAnno: 2018,
        FechaNacimientoMes: 7,
        FechaNacimientoDia: 26,
        SinNacer: element.hasBorn,
        NoTieneNombre: element.isUnknown,
      };
    });
    let payload = {
      ReferenciaActividad: constants.activityReference,
      Bebes,
      ContactoMarca: {
        ContactoMail: data.communication.email,
        ContactoTelefonico: data.communication.phone,
        ContactoSms: data.communication.cell,
        ContactoResidencia: data.communication.address,
      },
      DatosMama: {
        Nombres: data.name,
        Apellidos: data.lastName,
        Identificacion: data.id,
        Sexo: data.sex,
        FechaNacimientoAnno: 1996,
        FechaNacimientoMes: 7,
        FechaNacimientoDia: 26,
        CorreoElectronico: data.email,
        CorfirmacionCorreoElectronico: data.email_verification,
        Contrasenna: data.password,
        ConfirmacionContrasena: data.password_verification,
        Departamento: data.department,
        Direccion: data.address,
        Telefono: data.phone,
        Celular: data.cellPhone,
        FechaNacimiento: formatDate(data.birthday),
        Pais: 1,
        Ciudad: data.city,
      },
    };
    const resp = await axios.post(
      constants.url + "apiPortal/ServicesDatosUsuario/RegistrarMama",
      payload,
      headers
    );
    return resp.data;
  }

  static async login(email, password) {
    let payload = {
      Email: email,
      Password: md5(`pequenin:${password}:services`),
      NombreActividad: "cambiostoallitas2021",
    };
    const resp = await axios.post(
      constants.url + "apiPortal/ServicesDatosUsuario/IniciarSesion",
      payload,
      headers
    );
    return resp.data;
  }

  static async sendEmailActivity(data) {
    console.log('data saga', data)
    const dataEmail = {
      Email: data.email,
      IdActividad: constants.activityId,
      ReferenciaActividad: data.referenciaActividad,
    };
    const resp = await axios.post(
      constants.url + "apiportal/ServiciosActividades/EnviarCorreoActividad",
      dataEmail,
      headers
    );
    return resp.data;
  }

  static async getUserData() {
    const resp = await axios.post(
      constants.url + "/apiPortal/ServiciosGenerales/ObtenerDatosUsuario",
      { token: sessionStorage.getItem("token") },
      headers
    );
    return resp.data;
  }

  static async forgotPassword(Email) {
    let payload = {
      Email,
    };
    const resp = await axios.post(
      constants.url + "apiportal/serviciodatosusuario/recuperarcontrasena",
      payload,
      headers
    );
    return resp.data;
  }

  static async getDepartments() {
    const resp = await axios.post(
      constants.url + "apiportal/serviciosgenerales/obtenerdepartamentospais/",
      { 
        idPais: "1",
        idsdepartamentos: "63,64,65,67,68,69,72,73,78"
      },
      headers
    );
    return resp.data;
  }

  static async getCities(idDepartamento) {
    const resp = await axios.post(
      constants.url +
        "apiportal/serviciosgenerales/obtenerciudadesdepartamento/",
      { idDepartamento },
      headers
    );
    return resp.data;
  }

  static async addToCart(IdProducto) {
    let payload = {
      token: sessionStorage.getItem("token"),
      IdActividad: constants.activityId,
      IdProducto,
    };
    const resp = await axios.post(
      constants.url +
        "apiportal/ServiciosSolicitudMuestra/AgregarPremioCarritoMuestra",
      payload,
      headers
    );
    return resp.data;
  }

  static async otherDiapers(otherData) {
    let data = {
      token: sessionStorage.getItem("token"),
      IdActividad: constants.activityId,
      NombreUsuario: otherData.NombreUsuario,
      NombreMascota: otherData.NombreMascota,
      Descripcion: otherData.Descripcion
    };

    const resp = await axios.post(
      constants.url +
        "apiportal/ServiciosActividades/InscripcionUsuarioActividad",
      data,
      headers
    );
    return resp.data;
  }

  static async endParticipationActivity() {
    let data = {
      token: sessionStorage.getItem("token"),
      IdActividad: constants.activityId,
    };
    const resp = await axios.post(
      constants.url +
        "apiportal/ServiciosActividades/FinalizarParticipacionActividad",
      data,
      headers
    );
    return resp.data;
  }

  static async endParticipationActivityComments() {
    let data = {
      token: sessionStorage.getItem("token"),
      IdActividad: constants.activityIdComments,
    };
    const resp = await axios.post(
      constants.url +
        "apiportal/ServiciosActividades/FinalizarParticipacionActividad",
      data,
      headers
    );
    return resp.data;
  }

  static async checkStock() {
    let payload = {
      IdActividad: constants.activityId,
      IdProductos: constants.productsId,
    };
    const resp = await axios.post(
      constants.url + "apiportal/ServicesBancoDePuntos/RedimirPremioFisco",
      payload,
      headers
    );
    return resp.data;
  }

  static async postComments(data) {
    let dataComments = {
      token: sessionStorage.getItem("token"),
      IdActividad: constants.activityIdComments,
      Descripcion: data.descripcion,
      CalificarParticipacion: data.calificarParticipacion
    };
    const resp = await axios.post(
      constants.url + "apiportal/ServiciosActividades/InscripcionUsuarioActividadCalificacion",
      dataComments,
      headers
    );
    return resp.data;
  }

  static async samplePetition(IdProducto, userInfo, TipoPago) {
    let payload = {
      token: sessionStorage.getItem("token"),
      IdProducto,
      IdActividad: constants.activityId,
      NombreQuienRecibe: userInfo.PrimerNombre + " " + userInfo.SegundoNombre + " " + userInfo.PrimerApellido + " " + userInfo.SegundoApellido,
      IdCiudad: userInfo.IdCiudad,
      telefono: userInfo.Telefono,
      celular: userInfo.Celular,
      DireccionResidencial: userInfo.Direccion,
      // DireccionComplementaria: userInfo.addressInfo,
      TipoPago,
      Valor: 6000,
    };
    const resp = await axios.post(
      constants.url +
        (TipoPago === undefined
          ? "apiportal/ServiciosSolicitudMuestra/SolicitarPedidoMuestra"
          : "apiportal/ServiciosSolicitudMuestra/SolicitarPedidoMuestraPagoEnLinea"),
      payload,
      headers
    );
    return resp.data;
  }


  static async getPoints() {
    let dataPoints = {
      IdActividad: constants.activityId,
      ReferenciaActividad: constants.activityReference,
      Pais: 'Ecuador'
    };
    const resp = await axios.post(
      constants.url + "/apiportal/servicesbancodepuntos/ObtenerCantidadPuntosIngresadosXProducto",
      dataPoints,
      headers
    );
    return resp.data;
  }

  static async sendKeys(dataKey) {
    let dataKeys = {
      token: sessionStorage.getItem("token"),
      Clave: dataKey,
      ReferenciaActividad: constants.activityReference,
    };
    const resp = await axios.post(
      constants.url + "apiPortal/ServicesBancoDePuntos/IngresarClaveProducto",
      dataKeys,
      headers
    );
    console.log(resp);
    return resp.data;
  }
}
export default ApiService;
