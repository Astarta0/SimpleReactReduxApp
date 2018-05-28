export function sortSocials(socialArr) {
    const indexWeb = socialArr.findIndex(value => value.label==='web');
    let [ web ] = socialArr.splice(indexWeb);
    socialArr.unshift(web);
    return socialArr;
}