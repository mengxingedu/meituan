

const city = {
    cities : '北京',
    recentVisit : []
}

try{
    if(localStorage && localStorage.getItem && localStorage.getItem('cities')){
        city.cities = localStorage.getItem('cities');
    }
    if(localStorage && localStorage.getItem && localStorage.getItem('historyList')){
        city.recentVisit = JSON.parse(localStorage.getItem('historyList'));
    }
} catch (err) {
    console.log(err)
}

export default {
    cities : city.cities,
    recentVisit : city.recentVisit
}