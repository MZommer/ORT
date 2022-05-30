const table = document.getElementById('table');
const alert = document.getElementById("alert");
const search = document.getElementById("search");
const year = document.getElementById("year");
const filter = document.getElementsByName("filter");
const modal = document.getElementById("modal");
var s, y, type, pages, page;

const showMovies = arr => {
    arr.forEach(element => {
        table.innerHTML += `
            <tr class="movie" onclick="mostrarModal('${element.imdbID}')" data-bs-toggle="modal" data-bs-target="#modal">
                <td>${element.Title}</td>
                <td>${element.Year}</td>
                <td>${element.Type}</td>
                <td>
                    <img class="poster" src='${element.Poster == "N/A"? "/generic_cover.png" : element.Poster}'/>
                </td>
            </tr>`
       
    })
}
document.getElementById("btn").onclick = e => {
    e.preventDefault();
    table.innerHTML = "";
    alert.classList.add("d-none");
    s = search.value;
    if (s ===  "") {
        alert.classList.remove("d-none");
        alert.innerHTML = `El campo de Titulo no puede estar vacio`;
        return;
    }
    type = Array.from(filter).find(radio => radio.checked).value;
    y = year.value;
    
    axios({
        method: "GET",
        url: "https://www.omdbapi.com", 
        params: {
            apikey: "3913463a",
            s,
            type,
            y,
        },
    }).then(res => {
        if (res.data.Response == "False"){
            alert.classList.remove("d-none");
            alert.innerHTML = `No se encontraron resultados con la busqueda ${s}`;
            return;
        }
        showMovies(res.data.Search);
        pages = Math.ceil(res.data.totalResults/10);
        page = 0;
    })
};
window.onscroll = () => {
    if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && page < pages) {
        page++;
        axios({
            method: "GET",
            url: "https://www.omdbapi.com", 
            params: {
                apikey: "3913463a",
                s,
                type,
                y,
                page,
            },
        }).then(res => {
            showMovies(res.data.Search);
        })
    }
}
function mostrarModal(i) {
    axios({
        method: "GET",
        url: "https://www.omdbapi.com", 
        params: {
            apikey: "3913463a",
            i,
            plot: "full",
        },
    }).then(res => {
        $("#modal").modal("show");
        modal.innerHTML += `
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${res.data.Title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <img src="${res.data.Poster}" class="img-fluid"></img>
                    </div>
                    <div class="col">
                        <p>
                            <b>Rating:</b> ${res.data.imdbRating}</br>
                            <b>Idioma:</b> ${res.data.Language}</br>
                            <b>Actores:</b> ${res.data.Actors}</br>
                            <b>Director:</b> ${res.data.Director}</br>
                            <b>Premios:</b> ${res.data.Awards}</br>
                            <b>Fecha de lanzamiento:</b> ${res.data.Year}</br>
                            <b>Duracion:</b> ${res.data.Runtime}</br>
                            <b>Resumen:</b> ${res.data.Plot}</br>                            
                        </p>
                    </div>
                </div>
              </div>
            </div>`
    })
}
