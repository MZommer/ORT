function inputChange(){
    let completos = true;
    let suma = 0;
    let count = 0;
    let mayorNota = 0;
    let materias = [];
    let value;
    let input;
    for (let tree of document.getElementsByClassName("inputMateria")){
        input = tree;
        value = input.value;
        if (value === ""){
            completos = false;
            input.style["filter"] = "";
            input.classList.remove("is-valid");
            input.classList.remove("is-invalid"); 
        }
        else {
            input.style["filter"] = `drop-shadow(0 0 1rem ${(value >= 6) ? "green" : "red"})`;
            input.classList.add((value >= 6) ? "is-valid" : "is-invalid");
            value = parseInt(value);
            if (value > mayorNota) {
                mayorNota = value;
                materias = [input.id.substring(4)];
            }
            else if (value == mayorNota)
                materias.push(input.id.substring(4))
            suma += value;
            count++;
        }
    }
    document.getElementById("resultado").innerHTML = completos ? `<h2>Promedio</h2> <p>${suma/count}</p><h2>Mayor nota fue</h2> <p>${materias.join(", ")} con ${mayorNota}</p>` : "";
  }
    function getMaterias(){
        let materias = document.getElementById("materias");
        materias.innerHTML = "Cargando... Por favor espere";
        let cursoHome = document.getElementById("cursoHome").value;
        document.getElementById("formCurso").innerHTML = "";
        fetch('/getMaterias', {
            method: "POST",
            headers:{
                cursohome: cursoHome
            }
        })
        .then(response => {
            if (!response.ok) {
                materias.innerHTML = `Link Invalido! <a href="/">Intentalo de nuevo</a>`;
                document.getElementById("formCurso").innerHTML = `<div class="form-group"><label for="cursoHome">Link de la home</label><input type="url" class="form-control" id="cursoHome" placeholder="https://campus.ort.edu.ar/" required></div><button class="btn btn-primary mb-2" onclick="getMaterias();">Conseguir Cursos</button>`
            }
            else {
                materias.innerHTML = "";
                response.json().then(data => {
                    data.materias.forEach(materia => {
                        materias.innerHTML += `
                            <div class="form-group">
                                <label for="nota${materia}">Nota ${materia}</label>
                                <input type="number" min="0" max="10" class="form-control inputMateria" id="nota${materia}" required onchange="inputChange()">
                            </div>`;
                    })
                });
                
            }
        })
  }