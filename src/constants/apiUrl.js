const baseUrl = "https://bcomissi.shouz.network/api";
const base_url_asset = 'https://bcomissi.shouz.network/images'; // process.env.NODE_ENV === 'development' ? 'https://comici.loca.lt/images':'api_prod/admin';

export const apiUrl =  {
    // gestion candidate
    addcandidate: `${baseUrl}/addcandidate`,
    // gestion competition
    allCompetition: `${baseUrl}/allcompetition`,

    detailsCompetition: `${baseUrl}/detailscompetition`,
}

export const apiUrlAsset =  {
    candidate: `${base_url_asset}/candidates`,
    competitions: `${base_url_asset}/competitions`,
}