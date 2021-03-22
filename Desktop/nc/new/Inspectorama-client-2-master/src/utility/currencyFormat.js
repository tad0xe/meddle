export const formatToCurrency = (amount) => {
    return (amount).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}
export const formatToCurrency2 = (amount) => {
    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}