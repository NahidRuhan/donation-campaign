const getDonation = () => {

    const donations = localStorage.getItem('donations');
    if(donations) return JSON.parse(donations)
    else return [];

}

const setDonation = (id) => {

    const donations = getDonation();
    const doesExist = donations.find(donation=> donation === id);
    if(!doesExist){
        donations.push(id)
        localStorage.setItem('donations',JSON.stringify(donations));
    }

}

export { getDonation, setDonation }