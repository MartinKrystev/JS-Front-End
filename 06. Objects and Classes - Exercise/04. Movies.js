function moviesInfo(moviesArray) {
    
    let movies = {};

    for (const line of moviesArray) {
        if(line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            movies[movieName] = {};
            movies[movieName].name = movieName;
        } else if(line.includes('directedBy')) {
            let [movieName, movieDirector] = line.split(' directedBy ');
            if(movieName in movies) {
                movies[movieName].director = movieDirector;
            }
        } else if(line.includes('onDate')) {
            let [movieName, movieDate] = line.split(' onDate ');
            if(movieName in movies) {
                movies[movieName].date = movieDate;
            }
        }
      
    }

    let entries = Object.entries(movies);
    for (const [key, value] of entries) {
        if(movies[key].hasOwnProperty('name')
        && movies[key].hasOwnProperty('director')
        && movies[key].hasOwnProperty('date')) {

            let toJSON = JSON.stringify(value);
            console.log(toJSON);
        }
    }

}

moviesInfo(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]     
)