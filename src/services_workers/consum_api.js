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


  // Gestion Competitions

  static async getAllCompetitions(items) {
    try {
        const query = Object.entries(items).map(item => `${item[0]}=${item[1]}`).join('&');
        const response = await this.api.get(`${apiUrl.allCompetition}?${query}`);
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

  static async getAllActualities() {
    try {
        const response = await this.api.get(apiUrl.allActuality);
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

  static async getAllLocality() {
    try {
        const response = await this.api.get(apiUrl.locality);
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

  // Edition
  static async getAllEventByAttribut(items) {
    try {
        const query = Object.entries(items).map(item => `${item[0]}=${item[1]}`).join('&');
        const response = await this.api.get(`${apiUrl.allevent}?${query}`);
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

  static async getDetailEventBySlug({slug}) {
    try {
        const response = await this.api.get(`${apiUrl.detailsEvent}/${slug}`);
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