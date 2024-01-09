import axios from 'axios';

import {apiUrl} from '../constants/apiUrl';
import {SysStorage} from '../storages/sysStorage';

export default class ConsumApi {
  static api = axios.create();

  static async createCandidate({firstName, lastName, size, yearBirth, contact, studyLevel, cityResidence, name_file, base64, countryResidence}) {
    try {
      const body = {base64: base64.split(',')[1], firstName, lastName, size, yearBirth, contact, studyLevel, cityResidence, name_file, countryResidence};
      const response = await this.api.post(apiUrl.addcandidate, body);
      if (response.status === 200) {
        const { data , success, message = ''} = response.data;
          if(success) {
            SysStorage.saveKeyIdCandidature(data.id);
            return { data , success}
          }
          
          return { message , success};
      }
      return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
    } catch (error) {
      return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
    }
  }

  static async createEvent({base64, name_file, beginDate, endDate, price, devise, location, typeTicket}) {
    try {
      const token = AdminStorage.getTokenAdmin();
      const {admin_id} = AdminStorage.getInfoAdmin();
      const { id } = AdminStorage.getInfoCompetition();
      const body = {base64: base64.split(',')[1], name_file, beginDate, competition_id:id, endDate, price, devise, location, typeTicket, admin_id};
      console.log(body);
      const response = await this.api.post(apiUrl.createEvent, body, {headers: {'Authorization': `Bearer ${token}`}});
      if (response.status === 200) {
        const { data , success, message = ''} = response.data;
          if(success) {
            AdminStorage.saveInfoEdition(data);
            return { data , success}
          }
          if(!success && message.indexOf('token') !== -1) {
            console.log({ data , success, message});
            AdminStorage.clearStokage();
            return { message: "Session Expiré veuillez vous réconnecter" , success};
          } 
          return { message , success};
      }
      return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
    } catch (error) {
      return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
    }
  }

  static async login({email, password}) {
      try {
          const response = await this.api.post(apiUrl.authentication, {email, password});
          if (response.status === 200) {
            const { data , success, message = ''} = response.data;
            if(success) {
              const {name, email:emailData, access_token, gravatars, role, admin_id } = data;
              AdminStorage.saveInfoAdmin({name, email:emailData, gravatars, role, admin_id });
              AdminStorage.saveTokenAdmin(access_token);
              return { data , success};
            }
            return { message , success};
            
            
          }
          return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
      } catch (error) {
        return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
      }
  }

  // Gestion Competitions

  static async getAllCompetitions() {
    try {
        const response = await this.api.get(apiUrl.allCompetition);
        if (response.status === 200) {
          const { data , success, message = ''} = response.data;
          if(success) return { data , success}
          if(!success && message.indexOf('token') !== -1) {
            AdminStorage.clearStokage();
            return { message: "Session Expiré veuillez vous réconnecter" , success};
          } 
          return { message , success};
        }
        return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
    } catch (error) {
      return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
    }
  }

  static async getAllEventByCompetitionSlug({slug}) {
    try {
        const response = await this.api.get(`${apiUrl.detailsCompetition}/${slug}`);
        if (response.status === 200) {
          const { data , success, message = ''} = response.data;
          if(success) return { data , success}
          if(!success && message.indexOf('token') !== -1) {
            AdminStorage.clearStokage();
            return { message: "Session Expiré veuillez vous réconnecter" , success};
          } 
          return { message , success};
        }
        return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
    } catch (error) {
      return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
    }
  }

  static async createDepartement({nom_departement}) {
    try {
      const token = AdminStorage.getTokenAdmin();
        const response = await this.api.post(apiUrl.createDepartement, {nom_departement}, {headers: {'Authorization': `Bearer ${token}`}});
        if (response.status === 200) {
          const { data , success, message = ''} = response.data;
          if(success) return { data , success}
          if(!success && message.indexOf('token') !== -1) {
            AdminStorage.clearStokage();
            return { message: "Session Expiré veuillez vous réconnecter" , success};
          } 
          return { message , success};
        }
        return {etat: false, error: Error("Un problème avec le serveur. Veuillez réssayer ultérieurement")}
    } catch (error) {
      return {etat: false, error: Error("Un problème lors de l'envoie. Veuillez vérifier votre connexion internet")}
    }
}

}