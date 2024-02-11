
export const getFirstItineranceOnTitle = (title) => {

    const titleArray = title.split(' ');
    return titleArray.slice(0,titleArray.length -2).join(' ');;
};
export const getLastItineranceOnTitle = (title) => title.split(' ').splice(-2).join(' ');