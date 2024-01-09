import {localStorageKey} from 'src/constants/localStorageKey';

export class SysStorage {
    static saveKeyIdCandidature(id) {
        localStorage.setItem(localStorageKey.keyIdCandidature, id.toString());
    }

    static getKeyIdCandidature() {
        return localStorage.getItem(localStorageKey.competitionComici) ?? '';
    }

    static clearStokage() {
        localStorage.clear();
    }
}