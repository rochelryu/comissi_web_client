const baseUrl = process.env.NODE_ENV === 'development' ?"https://bcomissi.shouz.network/api": "https://bcomissi.shouz.network/api" // 'https://comici.loca.lt/api':"https://bcomissi.shouz.network/api";
const base_url_asset =  process.env.NODE_ENV === 'development' ? 'https://bcomissi.shouz.network/images':'https://bcomissi.shouz.network/images'; // 'https://comici.loca.lt/images':'https://bcomissi.shouz.network/images';

export const apiUrl =  {
    // gestion candidate
    addcandidate: `${baseUrl}/addcandidate`,
    // gestion competition
    allCompetition: `${baseUrl}/allcompetition`,

    detailsCompetition: `${baseUrl}/detailscompetition`,
    detailsEvent: `${baseUrl}/detailsevent`,
    allevent: `${baseUrl}/allevent`,
    locality: `${baseUrl}/getlocalisations`,

    allActuality: `${baseUrl}/getallactuality`,
}

export const apiUrlAsset =  {
    candidate: `${base_url_asset}/candidates`,
    competitions: `${base_url_asset}/competitions`,
    avatars: `${base_url_asset}/avatars`,
    events: `${base_url_asset}/events`,
    actualites: `${base_url_asset}/actualites`,
}